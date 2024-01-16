import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {expenseSchema} from "../expenseSchema";
import {months} from "moment";

// GET ALL EXPENSES
const getAllExpenses = async (query: any) => {
  return await prisma.expense.findMany({
    ...query,
    orderBy: {
      date: "desc",
    },
  });
};

export const GET = async (req: NextRequest) => {
  try {
    const year = req.nextUrl.searchParams.get("year");
    const where: {
      date?: {
        gte?: Date;
        lte?: Date;
      };
    } = {};
    if (year) {
      const startDate = new Date(Number(year), 0, 1); // first day of the year
      const endDate = new Date(Number(year) + 1, 0, 0); // last day of the year

      where.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    const expenses = await getAllExpenses({
      where: where,
    });
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const groupExpense: {[key: string]: number} = months.reduce((acc, month) => {
      acc[month] = 0;
      return acc;
    }, {} as {[key: string]: number});

    expenses.forEach((expense) => {
      const month: string = months[expense.date.getMonth()];
      groupExpense[month] += expense.amount;
    });

    const sortedArray = Object.entries(groupExpense).sort((a: [string, number], b: [string, number]) => months.indexOf(a[0]) - months.indexOf(b[0]));

    const sortedExpenses: {name: string; amount: number}[] = sortedArray.map(([key, value]) => ({
      name: key,
      amount: value,
    }));

    return NextResponse.json(sortedExpenses, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {message: "Server error"},
      {
        status: 500,
      }
    );
  }
};

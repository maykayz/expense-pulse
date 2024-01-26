import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

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

    const expensesByCategory = expenses.reduce((acc,expense) => {
      let key = expense.category
      if(!acc[key]){
          acc[key] = 0
      }
      acc[key] += expense.amount;
      return acc;
    },{} as {[key: string]: number})

    return NextResponse.json(expensesByCategory, {
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

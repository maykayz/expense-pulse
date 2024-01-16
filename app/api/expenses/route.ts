import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {expenseSchema} from "../expenseSchema";

// CREATE EXPENSE

const createExpense = async (data: any) => {
  return await prisma.expense.create({
    data: {
      date: data.date || new Date(),
      amount: data.amount,
      currency: data.currency,
      platform: data.platform,
      category: data.category,
    },
  });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validation = expenseSchema.safeParse(body);
  if (!validation.success) {
    const errorMessage = validation.error.errors.map((err) => err.path + " is " + err.message).join(", ");
    return NextResponse.json(
      {message: errorMessage},
      {
        status: 400,
      }
    );
  }
  try {
    const createdExpense = await createExpense(validation.data);
    return NextResponse.json(createdExpense, {
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
    const category = req.nextUrl.searchParams.get("category");
    const platform = req.nextUrl.searchParams.get("platform");
    const from = req.nextUrl.searchParams.get("from");
    const to = req.nextUrl.searchParams.get("to");
    const where: {
      category?: string;
      platform?: string;
      date?: {
        gte?: Date;
        lte?: Date;
      };
    } = {};
    if (category) where.category = category;
    if (platform) where.platform = platform;
    if (from) where.date = {...where.date, gte: new Date(from)};
    if (to) where.date = {...where.date, lte: new Date(to)};

    const expenses = await getAllExpenses({
      where: where,
    });

    return NextResponse.json(expenses, {
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

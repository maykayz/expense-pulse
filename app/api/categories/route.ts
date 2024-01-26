import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

// GET ALL CATEGORIES
const getAllCategories = async () => {
  return await prisma.expense.groupBy({
    by: ["category"],
  });
};

export const GET = async (req: NextRequest) => {
  try {

    const categories = await getAllCategories();

    return NextResponse.json(categories, {
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

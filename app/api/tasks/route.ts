import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prismaClient = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const subjects = await prismaClient.task.findMany({
    where: Object.fromEntries(searchParams),
  });

  return NextResponse.json(subjects);
}

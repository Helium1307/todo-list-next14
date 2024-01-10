import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  const subject = await prismaClient.subject.create({
    data: body,
  });

  return NextResponse.json(subject);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const subjects = await prismaClient.subject.findMany({});

  return NextResponse.json(subjects);
}

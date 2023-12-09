import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const events = await prisma.event.findMany();

    return NextResponse.json(events, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

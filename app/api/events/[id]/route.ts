import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request, params: { params: { id: string } }) => {
  try {
    const { id: eventId } = params.params;

    const event = await prisma.event.findFirst({
      where: {
        id: eventId,
      },
    });

    return NextResponse.json(event, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

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

export const PATCH = async (
  req: Request,
  params: { params: { id: string } }
) => {
  try {
    const { title, content, thumbnail, paid, price, location, date, upcoming } =
      await req.json();
    const { id: eventId } = params.params;

    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        title,
        content,
        thumbnail,
        paid,
        price,
        location,
        date,
        upcoming
      },
    });

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  params: { params: { id: string } }
) => {
  try {
    const { id: eventId } = params.params;

    const deletedEvent = await prisma.member.delete({
      where: {
        id: eventId,
      },
    });

    return NextResponse.json(deletedEvent, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

import { prisma } from "@/prisma/prisma";
import slugify from "@/scripts/slugify";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const events = await prisma.event.findMany();

    // Sorting regarding their dates
    events.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return NextResponse.json(events, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, content, thumbnail, paid, price, location, date, upcoming } =
      await req.json();

    const eventSlug = slugify(`${title} ${new Date(date).getFullYear()}`);

    const createdEvent = await prisma.event.create({
      data: {
        id: eventSlug,
        title,
        content,
        thumbnail,
        paid,
        price,
        location,
        date,
        upcoming,
      },
    });

    return NextResponse.json(createdEvent, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

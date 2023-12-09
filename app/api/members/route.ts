import { prisma } from "@/prisma/prisma";
import slugify from "@/scripts/slugify";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const members = await prisma.member.findMany();

    return NextResponse.json(members, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { name, surname, about, picture, position, joined } = await req.json();

    const memberSlug = slugify(`${name} ${surname}`);

    const createdMember = await prisma.member.create({
      data: {
        id: memberSlug,
        name,
        about,
        surname,
        picture,
        position,
        joined,
      },
    });

    return NextResponse.json(createdMember, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};
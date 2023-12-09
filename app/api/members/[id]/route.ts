import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request, params: { params: { id: string } }) => {
  try {
    const { id: memberId } = params.params;

    const member = await prisma.member.findFirst({
      where: {
        id: memberId,
      },
    });

    return NextResponse.json(member, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  params: { params: { id: string } }
) => {
  try {
    const { about, picture, position, joined } = await req.json();
    const { id: memberId } = params.params;

    const updatedMember = await prisma.member.update({
      where: { id: memberId },
      data: {
        about,
        picture,
        position,
        joined,
      },
    });

    return NextResponse.json(updatedMember, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  params: { params: { id: string } }
) => {
  try {
    const { id: memberId } = params.params;

    const deletedMember = await prisma.member.delete({
      where: {
        id: memberId,
      },
    });

    return NextResponse.json(deletedMember, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

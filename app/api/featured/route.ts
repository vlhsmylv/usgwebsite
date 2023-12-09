import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const featured = await prisma.featured.findFirst({
      where: {
        id: "init",
      },
    });

    return NextResponse.json(featured, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const PATCH = async (req: Request) => {
  try {
    const { title, subtitle,mediaType, video, image } =
      await req.json();

    const updatedFeatured = await prisma.featured.update({
      where: {
        id: "init",
      },
      data: {
        title,
        subtitle,
        mediaType,
        video,
        image,
      },
    });

    return NextResponse.json(updatedFeatured, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

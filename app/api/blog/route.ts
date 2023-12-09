import { prisma } from "@/prisma/prisma";
import slugify from "@/scripts/slugify";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, content, thumbnail, tags } = await req.json();

    const postSlug = slugify(title);

    const createdPost = await prisma.post.create({
      data: {
        id: postSlug,
        title,
        content,
        thumbnail,
        tags,
      },
    });

    return NextResponse.json(createdPost, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

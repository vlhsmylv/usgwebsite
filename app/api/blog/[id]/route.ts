import { prisma } from "@/prisma/prisma";
import slugify from "@/scripts/slugify";
import { NextResponse } from "next/server";

export const GET = async (req: Request, params: { params: { id: string } }) => {
  try {
    const { id: postId } = params.params;

    const post = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  params: { params: { id: string } }
) => {
  try {
    const { title, content, thumbnail, tags } = await req.json();
    const { id: postId } = params.params;

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        content,
        thumbnail,
        tags
      },
    });

    return NextResponse.json(updatedPost, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  params: { params: { id: string } }
) => {
  try {
    const { id: postId } = params.params;

    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json(deletedPost, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

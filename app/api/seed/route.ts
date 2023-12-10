import { prisma } from "@/prisma/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const GET = async () => {
  const hashedPass = await hash("v123", 12);

  await prisma.user.create({
    data: {
      username: "valeh",
      password: hashedPass,
    },
  });

  return NextResponse.json({});
};

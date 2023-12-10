import axios from "axios";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    { message: "Method is now allowed" },
    { status: 405 }
  );
};

export const POST = async (req: Request) => {
  try {
    const { blob } = await req.json();

    if (!blob)
      return NextResponse.json({ message: "Send content", status: 204 });

    return NextResponse.json({ blob }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

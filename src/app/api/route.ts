import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      message: "Alive - 200",
    },
    {
      status: 200,
    }
  );
}

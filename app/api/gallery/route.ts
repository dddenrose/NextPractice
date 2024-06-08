export const dynamic = "force-dynamic"; // defaults to auto
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": "",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

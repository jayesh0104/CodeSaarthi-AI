import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const backendUrl = process.env.BACKEND_BASE_URL;
  console.log("ENV BACKEND_BASE_URL:", process.env.BACKEND_BASE_URL);
  if (!backendUrl) {
    console.error("BACKEND_BASE_URL is undefined");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  const response = await fetch(`${backendUrl}/create-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data);
}

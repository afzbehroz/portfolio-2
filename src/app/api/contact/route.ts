import { NextResponse } from "next/server";

// Expected structure of the request body
interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Parse JSON body
    (await request.json()) as ContactRequestBody;

    // Return success response
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Handle error and return failure response
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

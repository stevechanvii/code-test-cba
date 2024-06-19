import { NextRequest, NextResponse } from "next/server";

let dataBuffer: string | null = null;

export async function GET() {
  // Keep the connection open by not timing out the request
  const checkForData = async (): Promise<NextResponse> => {
    if (dataBuffer) {
      console.log("Data sent:", dataBuffer);
      const response = NextResponse.json({ data: dataBuffer });
      dataBuffer = null; // Clear buffer after sending
      return response;
    } else {
      // Recursively check for data in 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return checkForData();
    }
  };

  return checkForData();
}

export async function POST(req: NextRequest) {
  const { data } = (await req.json()) as { data: string };
  dataBuffer = data;
  return NextResponse.json({ message: "Data received" });
}

import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest, { params }: any) {
  const id = params.id;
}

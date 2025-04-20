import { NextResponse } from "next/server";

export async function GET() {
  const mockUser = {
    id: 'user-123',
    name: '山田太郎',
    role: 'admin',
  }

  return NextResponse.json(mockUser);
}
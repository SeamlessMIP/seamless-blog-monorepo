import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  return NextResponse.json({ ok: true, received: true });
}

export async function GET() {
  return NextResponse.json({ ok: true, method: 'GET' });
}

import { NextResponse } from 'next/server';

// GET Request
export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' });
}

// // POST Request
// export async function POST(request: Request) {
//   const data = await request.json();
//   return NextResponse.json({ message: 'Data received', data });
// }

// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const catFactResponse = await fetch('https://cat-fact.herokuapp.com/facts');
    const catFactData = await catFactResponse.json();
    return NextResponse.json(catFactData);
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' });
  }
}
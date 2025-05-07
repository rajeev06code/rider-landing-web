
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In a real application, you would save this data to a database
    console.log('Driver Interest Received:', body); 
    
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // You can add validation here if needed (though Zod handles client-side)
    if (!body.name || !body.phone || !body.city || !body.vehicleType) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Driver interest successfully recorded. We will be in touch!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing driver interest:', error);
    let errorMessage = 'Error processing your request.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error processing your request.', error: errorMessage }, { status: 500 });
  }
}

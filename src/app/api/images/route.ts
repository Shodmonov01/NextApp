import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Image from '@/models/image';

export async function GET() {
  await connectToDatabase();

  try {
    const images = await Image.find({});
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.error(new Error('Error fetching images'));
  }
}

export async function POST(request: Request) {
  await connectToDatabase();

  const { url, description } = await request.json();

  try {
    const newImage = new Image({ url, description });
    await newImage.save();
    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.error(new Error('Error adding image'));
  }
}

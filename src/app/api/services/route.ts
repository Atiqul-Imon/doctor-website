import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Service from '@/models/Service';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');

    const query: Record<string, unknown> = {};
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (category) {
      query.category = category;
    }

    const services = await Service.find(query)
      .sort({ featured: -1, name: 1 })
      .select('name description icon price duration category featured');

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

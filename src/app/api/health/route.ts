import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    // Check database connection
    await connectDB();
    
    const healthCheck = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: 'connected',
        api: 'operational'
      }
    };

    return NextResponse.json(healthCheck, { status: 200 });
  } catch (error) {
    const healthCheck = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: 'disconnected',
        api: 'operational'
      },
      error: error instanceof Error ? error.message : 'Unknown error'
    };

    return NextResponse.json(healthCheck, { status: 503 });
  }
}

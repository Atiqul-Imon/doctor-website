import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { patientName, patientEmail, patientPhone, appointmentDate, appointmentTime, service, message } = body;

    // Validate required fields
    if (!patientName || !patientEmail || !patientPhone || !appointmentDate || !appointmentTime || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new appointment
    const appointment = new Appointment({
      patientName,
      patientEmail,
      patientPhone,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      service,
      message: message || '',
      status: 'pending'
    });

    await appointment.save();

    return NextResponse.json(
      { 
        message: 'Appointment booked successfully',
        appointment: {
          id: appointment._id,
          patientName: appointment.patientName,
          appointmentDate: appointment.appointmentDate,
          appointmentTime: appointment.appointmentTime,
          service: appointment.service,
          status: appointment.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const appointments = await Appointment.find({ patientEmail: email })
      .sort({ appointmentDate: -1 })
      .select('patientName appointmentDate appointmentTime service status createdAt');

    return NextResponse.json({ appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  appointmentDate: Date;
  appointmentTime: string;
  service: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  patientName: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true,
  },
  patientEmail: {
    type: String,
    required: [true, 'Patient email is required'],
    trim: true,
    lowercase: true,
  },
  patientPhone: {
    type: String,
    required: [true, 'Patient phone is required'],
    trim: true,
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required'],
  },
  appointmentTime: {
    type: String,
    required: [true, 'Appointment time is required'],
  },
  service: {
    type: String,
    required: [true, 'Service is required'],
  },
  message: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);

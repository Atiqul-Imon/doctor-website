import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  name: string;
  description: string;
  icon: string;
  price?: number;
  duration: string;
  category: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
  },
  icon: {
    type: String,
    required: [true, 'Service icon is required'],
  },
  price: {
    type: Number,
  },
  duration: {
    type: String,
    required: [true, 'Service duration is required'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Service category is required'],
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

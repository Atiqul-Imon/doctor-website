import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Blog slug is required'],
    unique: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: [true, 'Blog excerpt is required'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Blog content is required'],
  },
  featuredImage: {
    type: String,
    required: [true, 'Featured image is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  published: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

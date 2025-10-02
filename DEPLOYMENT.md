# 🚀 Vercel Deployment Guide

This guide will help you deploy the Dr. Sarah Johnson doctor website to Vercel.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **MongoDB Atlas**: Database should be set up and accessible

## 🔧 Environment Variables Setup

Before deploying, you need to set up the following environment variables in Vercel:

### Required Environment Variables

```bash
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME="Dr. Sarah Johnson - Family Medicine"

# Contact Information
NEXT_PUBLIC_PHONE_NUMBER="+1 (555) 123-4567"
NEXT_PUBLIC_EMAIL="info@drsarahjohnson.com"
NEXT_PUBLIC_ADDRESS="123 Medical Center Drive, Suite 200, Health City, HC 12345"

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER="+15551234567"
NEXT_PUBLIC_WHATSAPP_MESSAGE="Hi! I would like to book an appointment with Dr. Sarah Johnson."
```

### Optional Environment Variables

```bash
# Social Media Links
NEXT_PUBLIC_FACEBOOK_URL=""
NEXT_PUBLIC_TWITTER_URL=""
NEXT_PUBLIC_LINKEDIN_URL=""
NEXT_PUBLIC_INSTAGRAM_URL=""

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=""
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=""
```

## 🚀 Deployment Steps

### Method 1: Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import from GitHub**
   - Select "Import Git Repository"
   - Choose your `doctor-website` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Set Environment Variables**
   - Go to "Environment Variables" tab
   - Add all the required variables listed above
   - Make sure to use your actual MongoDB Atlas connection string

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd doctor-website
   vercel
   ```

4. **Follow the Prompts**
   - Link to existing project or create new
   - Set up environment variables
   - Deploy

## 🔧 Post-Deployment Setup

### 1. Database Seeding
After deployment, you may want to seed your database with sample data:

```bash
# Run the seed script locally (it will connect to your production database)
npm run seed
```

### 2. Custom Domain (Optional)
1. Go to your project in Vercel dashboard
2. Click "Domains" tab
3. Add your custom domain
4. Configure DNS settings as instructed

### 3. Environment Variables Verification
1. Go to "Settings" → "Environment Variables"
2. Verify all variables are set correctly
3. Redeploy if you made changes

## 📊 Performance Optimizations

The project is already optimized for Vercel with:

- ✅ **Next.js 15** with App Router
- ✅ **Image Optimization** with WebP/AVIF support
- ✅ **Static Generation** where possible
- ✅ **Edge Functions** for API routes
- ✅ **Compression** enabled
- ✅ **Security Headers** configured
- ✅ **SWC Minification** enabled

## 🔍 Monitoring & Analytics

### Built-in Vercel Analytics
- Automatic performance monitoring
- Real-time analytics
- Core Web Vitals tracking

### Custom Analytics (Optional)
Add Google Analytics by setting:
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   - Check environment variables
   - Verify MongoDB connection string
   - Check build logs in Vercel dashboard

2. **Database Connection Issues**
   - Ensure MongoDB Atlas allows connections from Vercel IPs
   - Check if your MongoDB user has proper permissions
   - Verify the connection string format

3. **Image Loading Issues**
   - Check if external image domains are configured
   - Verify image URLs are accessible

### Debug Commands

```bash
# Check build locally
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Test production build
npm run build && npm run start
```

## 📱 Features Included

- ✅ **Responsive Design** (Mobile, Tablet, Desktop)
- ✅ **WhatsApp Chat Widget**
- ✅ **Contact Forms** with validation
- ✅ **Appointment Booking System**
- ✅ **Blog System** with dynamic content
- ✅ **Services Management** with database
- ✅ **SEO Optimization**
- ✅ **Performance Optimization**
- ✅ **Security Headers**

## 🔄 Updates & Maintenance

### Updating the Site
1. Make changes to your code
2. Push to GitHub
3. Vercel automatically redeploys

### Database Management
- Use MongoDB Atlas dashboard for data management
- Run seed scripts for initial data
- Monitor database usage and performance

## 📞 Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally with `npm run build`
4. Check MongoDB Atlas connection

---

**🎉 Your doctor website is now ready for production deployment on Vercel!**

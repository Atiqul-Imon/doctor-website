# Dr. Sarah Johnson - Family Medicine Website

A modern, responsive doctor website built with Next.js 15 and Tailwind CSS v3. This is a portfolio project showcasing a professional medical practice website with all essential features.

## 🏥 Features

### Core Pages
- **Homepage** - Hero section, services overview, testimonials, and why choose us
- **About** - Doctor profile, credentials, experience, and philosophy
- **Services** - Detailed medical services with pricing and descriptions
- **Appointment Booking** - Online appointment scheduling system
- **Contact** - Contact information, office hours, and contact form
- **Blog** - Health articles and wellness tips

### Key Features
- ✅ Responsive design (mobile-first approach)
- ✅ Modern UI with medical-themed color palette
- ✅ MongoDB Atlas integration for data storage
- ✅ Appointment booking system with API
- ✅ Blog system with sample articles
- ✅ Contact forms with validation
- ✅ SEO optimized with proper meta tags
- ✅ Accessible design with proper ARIA labels
- ✅ Professional medical color scheme (sky blue, clean whites)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS v3
- **Database**: MongoDB Atlas with Mongoose
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd doctor-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/doctor-website?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
doctor-website/
├── src/
│   ├── app/                 # Next.js 15 App Router
│   │   ├── api/            # API routes
│   │   ├── about/          # About page
│   │   ├── appointment/    # Appointment booking
│   │   ├── blog/           # Blog pages
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services page
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   ├── lib/               # Utility functions
│   │   └── mongodb.ts     # Database connection
│   ├── models/            # MongoDB models
│   │   ├── Appointment.ts
│   │   ├── Blog.ts
│   │   └── Service.ts
│   └── types/             # TypeScript types
│       └── global.d.ts
├── public/                # Static assets
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Emerald Green (#10b981)
- **Accent**: Amber (#f59e0b)
- **Background**: White (#ffffff)
- **Text**: Gray (#1f2937)
- **Muted**: Gray (#6b7280)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Small text**: Medium weight (500)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 API Endpoints

### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments?email=...` - Get appointments by email

### Blog
- `GET /api/blogs` - Get all published blog posts
- `GET /api/blogs?page=1&limit=6` - Paginated blog posts

## 🗄️ Database Models

### Appointment
- Patient information (name, email, phone)
- Appointment details (date, time, service)
- Status tracking (pending, confirmed, cancelled, completed)

### Blog
- Article content (title, slug, content, excerpt)
- Metadata (author, published date, tags)
- Publishing status

### Service
- Service details (name, description, price)
- Categorization and featured status

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance Features

- Server-side rendering (SSR)
- Static generation where possible
- Image optimization
- Code splitting
- Lazy loading
- SEO optimization

## 🔒 Security Features

- Input validation
- XSS protection
- CSRF protection
- Environment variable security
- Database connection security

## 📞 Support

For questions or support regarding this project, please contact:
- Email: info@pixelforge.agency
- Website: [Pixel Forge Agency](https://pixelforge.agency)

## 📄 License

This project is created for portfolio purposes by Pixel Forge Agency. All rights reserved.

---

**Built with ❤️ by Pixel Forge Agency**
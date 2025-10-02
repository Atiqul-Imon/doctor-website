const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Import models
const Appointment = require('../src/models/Appointment.ts');
const Blog = require('../src/models/Blog.ts');
const Service = require('../src/models/Service.ts');

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Sample services data
const servicesData = [
  {
    name: 'Preventive Care',
    description: 'Regular checkups and screenings to maintain your health and catch potential issues early.',
    icon: 'HeartIcon',
    price: 150,
    duration: '30-60 minutes',
    category: 'General Health',
    featured: true
  },
  {
    name: 'Family Medicine',
    description: 'Comprehensive healthcare for all ages, from infants to seniors in your family.',
    icon: 'UserGroupIcon',
    price: 120,
    duration: '30-45 minutes',
    category: 'General Health',
    featured: true
  },
  {
    name: 'Chronic Disease Management',
    description: 'Expert care and management for chronic health conditions to improve quality of life.',
    icon: 'ShieldCheckIcon',
    price: 180,
    duration: '45-60 minutes',
    category: 'Specialized Care',
    featured: true
  },
  {
    name: 'Urgent Care',
    description: 'Same-day appointments for acute illnesses and minor injuries that need immediate attention.',
    icon: 'ClockIcon',
    price: 100,
    duration: '15-30 minutes',
    category: 'Emergency',
    featured: false
  },
  {
    name: 'Diagnostic Services',
    description: 'On-site laboratory tests and diagnostic procedures for accurate and timely diagnosis.',
    icon: 'BeakerIcon',
    price: 80,
    duration: '20-40 minutes',
    category: 'Diagnostics',
    featured: false
  },
  {
    name: 'Health Monitoring',
    description: 'Continuous monitoring and tracking of your health metrics and treatment progress.',
    icon: 'ChartBarIcon',
    price: 90,
    duration: '20-30 minutes',
    category: 'Monitoring',
    featured: false
  }
];

// Sample blog posts data
const blogsData = [
  {
    title: 'The Importance of Regular Health Checkups',
    slug: 'importance-regular-health-checkups',
    excerpt: 'Regular health checkups are essential for maintaining good health and preventing serious medical conditions. Learn why annual visits matter.',
    content: `
      <p>Regular health checkups are one of the most important aspects of maintaining good health and preventing serious medical conditions. Many people only visit their doctor when they're feeling unwell, but preventive care is equally crucial for long-term wellness.</p>
      
      <h2>Why Regular Checkups Matter</h2>
      <p>Annual health checkups serve several important purposes:</p>
      <ul>
        <li><strong>Early Detection:</strong> Many serious conditions, including cancer, diabetes, and heart disease, can be detected early through routine screenings when they're most treatable.</li>
        <li><strong>Prevention:</strong> Your doctor can identify risk factors and help you make lifestyle changes to prevent future health problems.</li>
        <li><strong>Monitoring:</strong> If you have existing health conditions, regular checkups help monitor your progress and adjust treatments as needed.</li>
        <li><strong>Vaccinations:</strong> Stay up-to-date with recommended vaccinations for your age and health status.</li>
        <li><strong>Health Education:</strong> Learn about healthy lifestyle choices and get personalized advice from your healthcare provider.</li>
      </ul>

      <h2>What to Expect During Your Checkup</h2>
      <p>A comprehensive health checkup typically includes:</p>
      <ul>
        <li>Review of your medical history and current medications</li>
        <li>Physical examination</li>
        <li>Vital signs measurement (blood pressure, heart rate, temperature)</li>
        <li>Laboratory tests as appropriate for your age and risk factors</li>
        <li>Discussion of any health concerns or symptoms</li>
        <li>Health counseling and recommendations</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Regular health checkups are an investment in your long-term health and well-being. They provide an opportunity to catch potential health problems early, maintain optimal health, and build a strong relationship with your healthcare provider.</p>
    `,
    featuredImage: '/images/blog/health-checkups.jpg',
    author: 'Dr. Sarah Johnson',
    tags: ['Preventive Care', 'Health Tips', 'Wellness'],
    published: true,
    publishedAt: new Date('2024-01-15T10:00:00Z')
  },
  {
    title: 'Managing Diabetes: A Complete Guide',
    slug: 'managing-diabetes-complete-guide',
    excerpt: 'Living with diabetes doesn\'t have to be overwhelming. Discover practical tips and strategies for managing your condition effectively.',
    content: `
      <p>Diabetes management is a lifelong journey that requires commitment, education, and support. With the right approach, you can live a healthy, active life while managing your blood sugar levels effectively.</p>
      
      <h2>Understanding Diabetes</h2>
      <p>Diabetes occurs when your body either doesn't produce enough insulin or can't use insulin effectively. This leads to high blood sugar levels that can cause serious health complications if not managed properly.</p>
      
      <h2>Key Management Strategies</h2>
      <ul>
        <li><strong>Blood Sugar Monitoring:</strong> Regular testing helps you understand how different foods and activities affect your levels.</li>
        <li><strong>Healthy Eating:</strong> Focus on balanced meals with appropriate portions of carbohydrates, proteins, and fats.</li>
        <li><strong>Regular Exercise:</strong> Physical activity helps your body use insulin more effectively and can lower blood sugar levels.</li>
        <li><strong>Medication Adherence:</strong> Take prescribed medications as directed by your healthcare provider.</li>
        <li><strong>Stress Management:</strong> High stress can affect blood sugar levels, so finding healthy coping strategies is important.</li>
      </ul>

      <h2>Working with Your Healthcare Team</h2>
      <p>Regular appointments with your doctor, diabetes educator, and other healthcare providers are essential for successful diabetes management. They can help you adjust your treatment plan as needed and provide ongoing support.</p>
    `,
    featuredImage: '/images/blog/diabetes-management.jpg',
    author: 'Dr. Sarah Johnson',
    tags: ['Diabetes', 'Chronic Disease', 'Management'],
    published: true,
    publishedAt: new Date('2024-01-10T14:30:00Z')
  },
  {
    title: 'Heart Health: What You Need to Know',
    slug: 'heart-health-what-you-need-know',
    excerpt: 'Your heart is your most important muscle. Learn about heart disease prevention, symptoms to watch for, and lifestyle changes that matter.',
    content: `
      <p>Heart disease remains the leading cause of death worldwide, but the good news is that many cases are preventable through lifestyle changes and early detection.</p>
      
      <h2>Understanding Heart Disease</h2>
      <p>Heart disease refers to several conditions that affect the heart, including coronary artery disease, heart failure, and arrhythmias. The most common type is coronary artery disease, which occurs when the arteries that supply blood to the heart become narrowed or blocked.</p>
      
      <h2>Risk Factors</h2>
      <ul>
        <li>High blood pressure</li>
        <li>High cholesterol</li>
        <li>Smoking</li>
        <li>Diabetes</li>
        <li>Obesity</li>
        <li>Physical inactivity</li>
        <li>Family history of heart disease</li>
        <li>Age (risk increases with age)</li>
      </ul>

      <h2>Prevention Strategies</h2>
      <p>Many heart disease risk factors can be controlled through lifestyle changes:</p>
      <ul>
        <li>Maintain a healthy weight</li>
        <li>Eat a heart-healthy diet</li>
        <li>Exercise regularly</li>
        <li>Don't smoke</li>
        <li>Manage stress</li>
        <li>Get regular checkups</li>
      </ul>
    `,
    featuredImage: '/images/blog/heart-health.jpg',
    author: 'Dr. Sarah Johnson',
    tags: ['Heart Health', 'Prevention', 'Cardiovascular'],
    published: true,
    publishedAt: new Date('2024-01-05T09:15:00Z')
  },
  {
    title: 'Mental Health and Physical Wellness',
    slug: 'mental-health-physical-wellness',
    excerpt: 'The connection between mental and physical health is stronger than you might think. Explore how they work together for overall wellness.',
    content: `
      <p>The mind and body are deeply interconnected, and taking care of your mental health is just as important as maintaining your physical health.</p>
      
      <h2>The Mind-Body Connection</h2>
      <p>Research shows that mental health conditions can increase the risk of physical health problems, and vice versa. Stress, anxiety, and depression can weaken your immune system and increase your risk of developing chronic conditions.</p>
      
      <h2>Signs to Watch For</h2>
      <ul>
        <li>Persistent feelings of sadness or anxiety</li>
        <li>Changes in sleep patterns</li>
        <li>Loss of interest in activities you once enjoyed</li>
        <li>Difficulty concentrating</li>
        <li>Changes in appetite</li>
        <li>Physical symptoms without clear medical cause</li>
      </ul>

      <h2>Taking Care of Your Mental Health</h2>
      <ul>
        <li>Stay connected with friends and family</li>
        <li>Maintain a regular sleep schedule</li>
        <li>Exercise regularly</li>
        <li>Practice stress management techniques</li>
        <li>Seek professional help when needed</li>
      </ul>
    `,
    featuredImage: '/images/blog/mental-health.jpg',
    author: 'Dr. Sarah Johnson',
    tags: ['Mental Health', 'Wellness', 'Holistic Care'],
    published: true,
    publishedAt: new Date('2023-12-28T16:45:00Z')
  },
  {
    title: 'Vaccination Schedule for All Ages',
    slug: 'vaccination-schedule-all-ages',
    excerpt: 'Stay up-to-date with recommended vaccinations for every stage of life. Protect yourself and your family from preventable diseases.',
    content: `
      <p>Vaccinations are one of the most effective ways to prevent serious diseases and protect public health. Staying current with recommended vaccines is important at every age.</p>
      
      <h2>Childhood Vaccinations</h2>
      <p>Children need a series of vaccinations to protect against diseases like measles, mumps, rubella, polio, and whooping cough. These vaccines are typically given according to a schedule recommended by the CDC.</p>
      
      <h2>Adult Vaccinations</h2>
      <p>Adults need regular booster shots and new vaccinations as they age. Important adult vaccines include:</p>
      <ul>
        <li>Annual flu vaccine</li>
        <li>Tetanus, diphtheria, and pertussis (Tdap) every 10 years</li>
        <li>Shingles vaccine (age 50+)</li>
        <li>Pneumococcal vaccine (age 65+)</li>
        <li>COVID-19 vaccine and boosters</li>
      </ul>

      <h2>Special Considerations</h2>
      <p>Some people may need additional vaccines based on their health conditions, travel plans, or occupation. Talk to your healthcare provider about which vaccines are right for you.</p>
    `,
    featuredImage: '/images/blog/vaccinations.jpg',
    author: 'Dr. Sarah Johnson',
    tags: ['Vaccinations', 'Prevention', 'Family Health'],
    published: true,
    publishedAt: new Date('2023-12-20T11:20:00Z')
  },
  {
    title: 'Healthy Eating for Busy Families',
    slug: 'healthy-eating-busy-families',
    excerpt: 'Maintaining a healthy diet can be challenging with a busy schedule. Discover practical meal planning and preparation strategies.',
    content: `
      <p>Eating healthy doesn't have to be complicated or time-consuming. With some planning and simple strategies, busy families can enjoy nutritious meals together.</p>
      
      <h2>Meal Planning Tips</h2>
      <ul>
        <li>Plan meals for the week ahead</li>
        <li>Make a shopping list and stick to it</li>
        <li>Prep ingredients in advance</li>
        <li>Cook in batches and freeze portions</li>
        <li>Keep healthy snacks readily available</li>
      </ul>

      <h2>Quick and Healthy Meal Ideas</h2>
      <ul>
        <li>Sheet pan dinners with vegetables and lean protein</li>
        <li>One-pot meals like soups and stews</li>
        <li>Salads with pre-washed greens and canned beans</li>
        <li>Smoothies with fruits and vegetables</li>
        <li>Whole grain wraps with lean meats and vegetables</li>
      </ul>

      <h2>Getting Kids Involved</h2>
      <p>Involve children in meal planning and preparation. This can help them develop healthy eating habits and make them more likely to try new foods.</p>
    `,
    featuredImage: '/images/blog/healthy-eating.jpg',
    author: 'Dr. Sarah Johnson',
    tags: ['Nutrition', 'Family Health', 'Lifestyle'],
    published: true,
    publishedAt: new Date('2023-12-15T13:10:00Z')
  }
];

// Sample appointments data
const appointmentsData = [
  {
    patientName: 'John Smith',
    patientEmail: 'john.smith@email.com',
    patientPhone: '+1-555-0101',
    appointmentDate: new Date('2024-01-20T10:00:00Z'),
    appointmentTime: '10:00 AM',
    service: 'General Checkup',
    message: 'Annual physical examination',
    status: 'confirmed'
  },
  {
    patientName: 'Sarah Wilson',
    patientEmail: 'sarah.wilson@email.com',
    patientPhone: '+1-555-0102',
    appointmentDate: new Date('2024-01-22T14:30:00Z'),
    appointmentTime: '2:30 PM',
    service: 'Chronic Disease Management',
    message: 'Diabetes follow-up appointment',
    status: 'pending'
  },
  {
    patientName: 'Michael Brown',
    patientEmail: 'michael.brown@email.com',
    patientPhone: '+1-555-0103',
    appointmentDate: new Date('2024-01-25T09:15:00Z'),
    appointmentTime: '9:15 AM',
    service: 'Preventive Care',
    message: 'Routine health screening',
    status: 'confirmed'
  },
  {
    patientName: 'Emily Davis',
    patientEmail: 'emily.davis@email.com',
    patientPhone: '+1-555-0104',
    appointmentDate: new Date('2024-01-18T16:00:00Z'),
    appointmentTime: '4:00 PM',
    service: 'Family Medicine',
    message: 'Child wellness check',
    status: 'completed'
  },
  {
    patientName: 'Robert Johnson',
    patientEmail: 'robert.johnson@email.com',
    patientPhone: '+1-555-0105',
    appointmentDate: new Date('2024-01-30T11:30:00Z'),
    appointmentTime: '11:30 AM',
    service: 'Urgent Care',
    message: 'Cold symptoms and fever',
    status: 'pending'
  }
];

// Seed the database
async function seedDatabase() {
  try {
    await connectDB();

    // Clear existing data
    await Appointment.deleteMany({});
    await Blog.deleteMany({});
    await Service.deleteMany({});

    console.log('Cleared existing data');

    // Insert services
    const services = await Service.insertMany(servicesData);
    console.log(`Inserted ${services.length} services`);

    // Insert blog posts
    const blogs = await Blog.insertMany(blogsData);
    console.log(`Inserted ${blogs.length} blog posts`);

    // Insert appointments
    const appointments = await Appointment.insertMany(appointmentsData);
    console.log(`Inserted ${appointments.length} appointments`);

    console.log('Database seeded successfully!');
    console.log('\nSummary:');
    console.log(`- Services: ${services.length}`);
    console.log(`- Blog Posts: ${blogs.length}`);
    console.log(`- Appointments: ${appointments.length}`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seed function
seedDatabase();

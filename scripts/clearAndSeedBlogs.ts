import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from '../src/models/Blog';

dotenv.config({ path: '.env.local' });

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

// Lorem ipsum blog posts data for demo purposes
const loremBlogsData = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    slug: 'lorem-ipsum-dolor-sit-amet',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Duis Aute Irure Dolor</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Sed Ut Perspiciatis</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <h2>Nemo Enim Ipsam</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
    author: 'Dr. Lorem Ipsum',
    tags: ['lorem', 'ipsum', 'demo', 'placeholder'],
    published: true,
    publishedAt: new Date('2024-01-15')
  },
  {
    title: 'Consectetur Adipiscing Elit',
    slug: 'consectetur-adipiscing-elit',
    excerpt: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    content: `
      <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Duis Aute Irure Dolor</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Sed Ut Perspiciatis</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
    author: 'Dr. Lorem Ipsum',
    tags: ['lorem', 'ipsum', 'demo', 'placeholder'],
    published: true,
    publishedAt: new Date('2024-01-20')
  },
  {
    title: 'Sed Do Eiusmod Tempor',
    slug: 'sed-do-eiusmod-tempor',
    excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    content: `
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Duis Aute Irure Dolor</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Sed Ut Perspiciatis</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <h2>Nemo Enim Ipsam</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
    author: 'Dr. Lorem Ipsum',
    tags: ['lorem', 'ipsum', 'demo', 'placeholder'],
    published: true,
    publishedAt: new Date('2024-01-25')
  },
  {
    title: 'Ut Labore Et Dolore Magna',
    slug: 'ut-labore-et-dolore-magna',
    excerpt: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    content: `
      <p>Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Duis Aute Irure Dolor</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Sed Ut Perspiciatis</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center',
    author: 'Dr. Lorem Ipsum',
    tags: ['lorem', 'ipsum', 'demo', 'placeholder'],
    published: true,
    publishedAt: new Date('2024-02-01')
  },
  {
    title: 'Aliqua Ut Enim Ad Minim',
    slug: 'aliqua-ut-enim-ad-minim',
    excerpt: 'Aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: `
      <p>Aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <h2>Duis Aute Irure Dolor</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Sed Ut Perspiciatis</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <h2>Nemo Enim Ipsam</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba0ef8d?w=800&h=600&fit=crop&crop=center',
    author: 'Dr. Lorem Ipsum',
    tags: ['lorem', 'ipsum', 'demo', 'placeholder'],
    published: true,
    publishedAt: new Date('2024-02-05')
  },
  {
    title: 'Veniam Quis Nostrud Exercitation',
    slug: 'veniam-quis-nostrud-exercitation',
    excerpt: 'Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    content: `
      <p>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <h2>Duis Aute Irure Dolor</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Sed Ut Perspiciatis</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center',
    author: 'Dr. Lorem Ipsum',
    tags: ['lorem', 'ipsum', 'demo', 'placeholder'],
    published: true,
    publishedAt: new Date('2024-02-10')
  }
];

// Clear all blogs and seed with Lorem ipsum data
async function clearAndSeedBlogs() {
  try {
    console.log('🗑️  Clearing all existing blogs...');
    
    // Delete all existing blogs
    const deleteResult = await Blog.deleteMany({});
    console.log(`✅ Deleted ${deleteResult.deletedCount} existing blogs`);
    
    console.log('🌱 Seeding database with Lorem ipsum blogs...');
    
    // Insert Lorem ipsum blogs
    const insertResult = await Blog.insertMany(loremBlogsData);
    console.log(`✅ Inserted ${insertResult.length} Lorem ipsum blogs`);
    
    console.log('📊 Database Summary:');
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ published: true });
    console.log(`   Total blogs: ${totalBlogs}`);
    console.log(`   Published blogs: ${publishedBlogs}`);
    
    console.log('🎉 Blog database successfully cleared and populated with Lorem ipsum content!');
    
  } catch (error) {
    console.error('❌ Error during blog seeding:', error);
    throw error;
  }
}

// Main execution
async function main() {
  try {
    await connectDB();
    await clearAndSeedBlogs();
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run the script
main();

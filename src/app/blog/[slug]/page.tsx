import { notFound } from 'next/navigation';
import { CalendarIcon, UserIcon, TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

// Sample blog post data
const sampleBlogPost: BlogPost = {
  _id: '1',
  title: 'The Importance of Regular Health Checkups',
  slug: 'importance-regular-health-checkups',
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

    <h2>Age-Appropriate Screenings</h2>
    <p>The specific tests and screenings you need depend on your age, gender, family history, and risk factors. Common screenings include:</p>
    <ul>
      <li><strong>Blood pressure:</strong> Every visit, regardless of age</li>
      <li><strong>Cholesterol:</strong> Starting at age 20, then every 4-6 years</li>
      <li><strong>Diabetes:</strong> Starting at age 45, or earlier if you have risk factors</li>
      <li><strong>Cancer screenings:</strong> Various types based on age and gender</li>
      <li><strong>Bone density:</strong> For women 65+ and men 70+</li>
    </ul>

    <h2>Making the Most of Your Visit</h2>
    <p>To get the most out of your health checkup:</p>
    <ul>
      <li>Prepare a list of questions and concerns beforehand</li>
      <li>Bring a list of all medications and supplements you're taking</li>
      <li>Be honest about your lifestyle habits (diet, exercise, smoking, alcohol)</li>
      <li>Ask about any symptoms you've been experiencing</li>
      <li>Discuss your family medical history</li>
      <li>Take notes during your visit</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Regular health checkups are an investment in your long-term health and well-being. They provide an opportunity to catch potential health problems early, maintain optimal health, and build a strong relationship with your healthcare provider. Don't wait until you're sick to see your doctor – schedule your annual checkup today.</p>
  `,
  excerpt: 'Regular health checkups are essential for maintaining good health and preventing serious medical conditions. Learn why annual visits matter.',
  featuredImage: '/api/placeholder/800/400',
  author: 'Dr. Sarah Johnson',
  publishedAt: '2024-01-15T10:00:00Z',
  tags: ['Preventive Care', 'Health Tips', 'Wellness']
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  // In a real app, you would fetch the blog post from your database using the slug
  // For now, we'll use the sample data
  const blogPost = sampleBlogPost;
  
  // TODO: Implement actual blog post fetching based on slug
  console.log('Blog slug:', slug);

  if (!blogPost) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">H</span>
              </div>
              <p className="text-sky-600 font-medium text-lg">Health Article</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800"
                >
                  <TagIcon className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center space-x-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{formatDate(blogPost.publishedAt)}</span>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">Dr. SJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600 mb-4">
                    Board-certified family medicine physician with over 15 years of experience 
                    providing comprehensive healthcare to patients of all ages.
                  </p>
                  <Link
                    href="/about"
                    className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Learn more about Dr. Johnson →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Managing Diabetes: A Complete Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Living with diabetes doesn&apos;t have to be overwhelming. Discover practical tips and strategies.
              </p>
              <Link
                href="/blog/managing-diabetes-complete-guide"
                className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Heart Health: What You Need to Know
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Your heart is your most important muscle. Learn about prevention and lifestyle changes.
              </p>
              <Link
                href="/blog/heart-health-what-you-need-know"
                className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

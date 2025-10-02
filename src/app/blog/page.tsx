'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CalendarIcon, UserIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data.blogs);
    } catch {
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const displayBlogs = blogs;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative hero-bg py-16 sm:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="hero-glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-4 sm:mb-6">
                Health & Wellness Blog
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-md mb-8 sm:mb-10">
                Stay informed about the latest health topics, medical advice, and wellness tips 
                from Dr. Sarah Johnson and our medical team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a
                  href="/appointment"
                  className="glass-hover inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 group gentle-pulse text-sm sm:text-base"
                >
                  Book Appointment
                </a>
                <a
                  href="/contact"
                  className="glass-hover inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 group text-sm sm:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayBlogs.length > 0 ? displayBlogs.map((blog) => (
              <article key={blog._id} className="glass-card rounded-2xl glass-hover overflow-hidden">
                {/* Featured Image */}
                <div className="aspect-video gradient-bg-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center border border-white/30 shadow-lg">
                      <span className="text-white text-2xl font-bold drop-shadow-lg">H</span>
                    </div>
                    <p className="text-white/90 font-medium drop-shadow-md">Health Article</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800"
                      >
                        <TagIcon className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{formatDate(blog.publishedAt)}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
              </div>
            </article>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No blog posts available at the moment.</p>
            </div>
          )}
        </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter and receive the latest health articles, 
            medical advice, and wellness tips directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              <button className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

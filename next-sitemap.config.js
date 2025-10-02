/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://doctor-website.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL || 'https://doctor-website.vercel.app'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'daily';
    }

    // Important pages get higher priority
    if (['/about', '/services', '/contact', '/appointment'].includes(path)) {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'weekly';
    }

    // Blog pages get medium priority
    if (path.startsWith('/blog/')) {
      customConfig.priority = 0.6;
      customConfig.changefreq = 'monthly';
    }

    return customConfig;
  },
};

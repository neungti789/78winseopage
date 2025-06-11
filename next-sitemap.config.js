/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://781248555.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Manually add important pages if needed
  additionalPaths: async (config) => {
    return [
      {
        loc: "/privacy-policy",
        changefreq: "yearly",
        priority: 0.5,
      },
      {
        loc: "/contact-us",
        changefreq: "yearly",
        priority: 0.6,
      },
      {
        loc: "/blog",
        changefreq: "weekly",
        priority: 0.7,
      },
    ];
  },
};

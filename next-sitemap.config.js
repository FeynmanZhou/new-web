/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://feynmanzhou.com",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://feynmanzhou.com"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://feynmanzhou.com"}/server-sitemap.xml`,
    ],
  },
};

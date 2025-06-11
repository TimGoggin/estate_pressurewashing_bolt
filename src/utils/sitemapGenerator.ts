
import { cities } from "../config/cityConfig";

export function generateSitemap(): string {
  const baseUrl = "https://www.estatespresswash.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages
  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/about-us", priority: "0.8", changefreq: "monthly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/gallery", priority: "0.7", changefreq: "weekly" },
    { path: "/contact-us", priority: "0.8", changefreq: "monthly" },
    { path: "/accessibility", priority: "0.3", changefreq: "yearly" },
    { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
    { path: "/terms", priority: "0.3", changefreq: "yearly" },
  ];

  // City pages
  const cityPages = cities.map(city => ({
    path: `/cities/${city.slug}`,
    priority: "0.8",
    changefreq: "monthly"
  }));

  const allPages = [...staticPages, ...cityPages];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapContent;
}

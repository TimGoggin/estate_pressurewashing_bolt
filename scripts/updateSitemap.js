import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import city data (you might need to adjust this path based on your build setup)
const cityConfigPath = path.join(__dirname, "../src/config/cityConfig.ts");

// Read the city config file and extract city data
function extractCitiesFromConfig() {
  try {
    const configContent = fs.readFileSync(cityConfigPath, "utf8");

    // Simple regex to extract city slugs (this could be more robust)
    const slugMatches = configContent.match(/slug:\s*["']([^"']+)["']/g);

    if (!slugMatches) {
      console.log("No city slugs found in config");
      return [];
    }

    return slugMatches.map((match) => {
      const slug = match.match(/["']([^"']+)["']/)[1];
      return slug;
    });
  } catch (error) {
    console.error("Error reading city config:", error);
    return [];
  }
}

function generateSitemap() {
  const baseUrl = "https://www.estatespresswash.com";
  const currentDate = new Date().toISOString().split("T")[0];

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

  // Get city pages
  const citySlugs = extractCitiesFromConfig();
  const cityPages = citySlugs.map((slug) => ({
    path: `/cities/${slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...cityPages];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return sitemapContent;
}

// Write the sitemap to the public directory
function updateSitemap() {
  try {
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(__dirname, "../dist/sitemap.xml");

    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log("Sitemap updated successfully!");
    console.log(`Updated: ${sitemapPath}`);
  } catch (error) {
    console.error("Error updating sitemap:", error);
  }
}

// Run the update
updateSitemap();

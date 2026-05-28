export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://www.synvestify.in/</loc>
    <video:video>
      <video:thumbnail_loc>https://www.synvestify.in/images/synvestify-model-thumbnail.png</video:thumbnail_loc>
      <video:title>The Synvestify Model — How We Synchronize Your Investments</video:title>
      <video:description>Watch how Synvestify synchronizes your investments across different asset classes, tax strategies, and life goals — a holistic approach to wealth management.</video:description>
      <video:content_loc>https://www.synvestify.in/videos/synvestify-model.mp4</video:content_loc>
      <video:duration>360</video:duration>
      <video:publication_date>2026-04-04T00:00:00+05:30</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
    </video:video>
  </url>
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}

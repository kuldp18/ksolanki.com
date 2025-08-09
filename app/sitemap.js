export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://ksolanki.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

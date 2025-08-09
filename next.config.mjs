/** @type {import('next').NextConfig} */
const nextConfig = {
  // static export
  output: "export",

  // Enable strict mode for better performance and SEO
  reactStrictMode: true,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Generate sitemap and robots.txt
  trailingSlash: false,

  // Image optimization for better SEO and performance
  images: {
    formats: ["image/webp", "image/avif"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable compression
  compress: true,

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

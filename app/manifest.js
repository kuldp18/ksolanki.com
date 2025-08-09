export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Kuldeep Solanki - Full Stack Developer Portfolio",
    short_name: "Kuldeep Solanki",
    description:
      "Professional portfolio of Kuldeep Solanki, Full Stack Web Developer from Gujarat, India",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/portrait.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/portrait.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    categories: ["developer-tools", "portfolio", "professional"],
    lang: "en",
    scope: "/",
  };
}

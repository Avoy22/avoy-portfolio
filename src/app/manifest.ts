import type { MetadataRoute } from "next";

const portfolioBackground = "#07080b";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aboy Systems Portfolio",
    short_name: "Aboy",
    description:
      "Portfolio of Aboy Chandra Das — AI Automation and Full-Stack Web Developer",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: portfolioBackground,
    theme_color: portfolioBackground,
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

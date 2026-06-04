import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "ISSTUDIO",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    lang: "pt-BR",
    icons: [
      {
        src: siteConfig.favicon,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

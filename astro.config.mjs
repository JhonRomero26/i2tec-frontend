import { defineConfig } from "astro/config"
import { seoConfig } from "./src/utils/seoConfig"

import tailwindcss from "@tailwindcss/vite"

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    compressHTML: true,
    vite: {
        build: {
            cssMinify: "lightningcss",
        },
        plugins: [tailwindcss()],
    },
    site: seoConfig.site,
})

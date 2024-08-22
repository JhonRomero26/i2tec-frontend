import node from "@astrojs/node"
import { defineConfig } from "astro/config"
import { seoConfig } from "./src/utils/seoConfig"

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	compressHTML: true,
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
	},
	site: seoConfig.site,
})

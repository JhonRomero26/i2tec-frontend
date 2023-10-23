import { defineConfig, passthroughImageService } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  image: {
    service: passthroughImageService(),
  },
  output: "hybrid",
});

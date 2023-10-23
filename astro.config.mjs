import { defineConfig, passthroughImageService } from "astro/config";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: nodejs({
    mode: "standalone",
  }),
  image: {
    service: passthroughImageService(),
  },
  output: "hybrid",
});

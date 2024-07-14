export default {
  plugins: {
    "tailwindcss/nesting": "postcss-nested",
    tailwindcss: {},
    "@csstools/postcss-sass": {},
    "postcss-lightningcss": {
      browser: ">= .25%",
      lightningcssOptions: {
        minify: true,
      },
    },
  },
};

export default {
  // syntax: "postcss-lit",
  plugins: {
    "@tailwindcss/postcss": {
      config: "./tailwind.config.ts",
    },
    autoprefixer: {},
  },
}

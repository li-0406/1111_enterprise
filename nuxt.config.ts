// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@nuxtjs/google-fonts", "nuxt-swiper"],
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      // 指定您想要的字體
      Roboto: true,
      "Open+Sans": true,
    },
  },
  // swiper: {
  //   modules: ["navigation", "pagination", "effect-creative"],
  // },
});

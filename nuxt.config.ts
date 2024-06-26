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
      Roboto: true,
      "Open+Sans": true,
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/1111_enterprise/" : "/",
    buildAssetsDir: "/static/",
    head: {
      title: "2024 幸福企業",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});

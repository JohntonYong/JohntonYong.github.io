import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://cplusplus.icu",
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  iconAssets: "fontawesome-with-brands",

  author: {
    name: "JohntonYong",
    url: "https://cplusplus.icu",
  },
  repo: "JohntonYong/JohntonYong.github.io",
  docsRepo: "JohntonYong.github.io/docs",
  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "MIT Licensed",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "JohntonYong.github.io/docs",
      repoId: "R_kgDOKboWmQ",
      category: "Announcements",
      categoryId: "DIC_kwDOKboWmc4CZ_77",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      figure: true,
      imgLazyload: true,
      imgSize: true,
      mermaid: true,
      tabs: true,
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-touch-icon-152x152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "C++工程化实践指南 Docs",
            short_name: "C++工程化实践指南",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});

import { viteBundler } from "@vuepress/bundler-vite";
import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "C++工程化实践指南",
      description: "C++工程化实践指南 官方文档",
    }
  },

  bundler: viteBundler({
    viteOptions: {
      build: {
        cssCodeSplit: false,
      }, 
    resolve: {
      alias: {
        "cytoscape/dist/cytoscape.umd.js": "cytoscape"
      },
    },
    },
  }),

  theme,

  shouldPrefetch: false,
});

import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/guide/",
  "/tutorial/",
  {
    text: "参考",
    icon: "lightbulb",
    prefix: "reference/",
    children: ["resources","tools","projects","school"],
  },
  {
    text: "了解更多",
    icon: "laptop-code",
    prefix: "more/",
    children: [
      "contact",
      "future-2026"
    ],
  },
]);

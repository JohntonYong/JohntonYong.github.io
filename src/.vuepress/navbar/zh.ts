import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/guide/",
  "/tutorial/",
  {
    text: "免费专区",
    icon: "lightbulb",
    prefix: "reference/",
    children: ["aiproject","tools","codec","school","gnuproject","opensource"],
  },
  {
    text: "了解更多",
    icon: "laptop-code",
    prefix: "more/",
    children: [
      "contact",
      "av-history",
      "future-2026"
    ],
  },
]);

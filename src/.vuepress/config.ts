import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "我的博客",
  description: "前端博客,node博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BlackDeer Docs",
  description: "/逆风奔跑/人间清醒/工具控/道法自然/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    logo: "/avatar.jpg", // 表示docs/public/avartar.jpg

    sidebar: sidebar,

    // socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  base: "/BlackDeer-Docs/",
});

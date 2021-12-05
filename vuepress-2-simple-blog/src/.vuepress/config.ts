import { defineUserConfig, DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
    title: "VuePress blog",
    description: "A simple blog built with VuePress",
    bundler: "@vuepress/bundler-vite",
    themeConfig: {
        sidebar: false,
        navbar: [
            { text: "Home", link: "/" },
            { text: "Blog", link: "/posts/" },
        ],
    },
});

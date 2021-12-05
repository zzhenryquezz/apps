import { defineClientAppEnhance } from "@vuepress/client";
import Archive from "./components/Archive.vue";

export default defineClientAppEnhance(({ app }) => {
    app.component("archive", Archive);
});

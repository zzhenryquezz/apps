<template>
    <p-contructor :schema="schema" />
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import schema from "@/schema.json";

export default defineComponent({
    name: "App",
    components: {
        PContructor: defineAsyncComponent(() =>
            import("@/components/PContructor.vue")
        ),
    },
    setup() {
        return {
            schema,
        };
    },
});
</script>

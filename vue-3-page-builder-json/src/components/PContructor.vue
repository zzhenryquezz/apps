<template>
    <div class="flex flex-wrap w-full h-screen">
        <div
            v-for="(block, index) in schema"
            :key="index"
            v-bind="getBind(block)"
        >
            <template v-if="block.content">
                <component
                    :is="options.component"
                    v-bind="options.props"
                    v-for="(options, ic) in block.content"
                    :key="ic"
                />
            </template>
        </div>
    </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
    props: {
        schema: {
            type: Array,
        },
    },
    components: {
        PButton: defineAsyncComponent(() => import("./PButton.vue")),
        PText: defineAsyncComponent(() => import("./PText.vue")),
    },
    setup() {
        function getBind(block) {
            const { style } = block;

            const classes = [
                block.cols === 12 ? "w-full" : `w-${block.cols}/12`,
            ];

            return {
                class: classes.concat(block.class),
                style,
            };
        }
        return {
            getBind,
        };
    },
});
</script>

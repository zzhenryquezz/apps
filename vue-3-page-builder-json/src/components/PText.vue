<template>
    <div v-bind="$attrs">
        {{ content }}
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        content: {
            type: String,
            default: "",
        },
    },
});
</script>

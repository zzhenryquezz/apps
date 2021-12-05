<template>
    <button class="border py-2 px-4 rounded">
        {{ label }}
    </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        label: {
            type: String,
            default: "",
        },
    },
});
</script>

<script setup lang="ts">
import { usePagesData } from "@vuepress/client";
import { ref, onBeforeMount, onServerPrefetch } from "vue";

const pagesRef = usePagesData();

const posts = ref([]);

async function setPosts() {
    const allPages = await Promise.all(
        Object.values(pagesRef.value).map((p) => p())
    );

    posts.value = allPages
        .filter((p) => p.path.includes("/posts/"))
        .filter((p) => p.path !== "/posts/");

    posts.value.sort((a, b) => (a.title < b.title ? -1 : 1));
}

onServerPrefetch(setPosts);

onBeforeMount(async () => {
    if (posts.value.length === 0) {
        await setPosts();
    }
});
</script>

<template>
    <div class="post-container">
        <div v-for="(post, index) in posts" :key="index" class="post">
            <a :href="post.path">
                <img
                    v-if="post.frontmatter.thumbnail"
                    :src="post.frontmatter.thumbnail"
                />
            </a>
            <a :href="post.path">
                <h2>{{ post.title }}</h2>
            </a>
            <p>{{ post.frontmatter.excerpt }}</p>
        </div>
    </div>
</template>

<style>
.post-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.post {
    margin-bottom: 1rem;
    width: 100%;
    border: 1px solid #eee;
    padding: 15px;
}

.post img {
    margin-bottom: 10px;
}

.post h2 {
    border: none;
    margin: 0;
}
</style>

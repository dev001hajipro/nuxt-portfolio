<template>
    <div class="wrapper">
        <div class="container">
            <h1>Blog</h1>
            <p>エンジニアの日常生活をお届けします。</p>
        </div>
        <div v-for="singleData in data" :key="singleData.id">
            <div class="textsContainer">
                <h3>{{ singleData.title }}</h3>
                <p>{{ singleData.excerpt }}</p>
                <p>{{ singleData.date }}</p>
                <NuxtLink :to="`${singleData._path}`">Read more</NuxtLink>
            </div>
            <div class="blogImg">
                <NuxtImg :src="singleData.image" alt="blog-image" format="webp" />
            </div>
        </div>
    </div>
</template>

<script setup lang="tsx">
const { data } = await useAsyncData('blogQuery', () => queryContent('/blog').sort({ id: -1 }).find())
</script>

<style scoped></style>
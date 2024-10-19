<template>
    <div>
        <div class="hero">
            <NuxtImg :src="data.image" alt="blog-image" format="webp" />
        </div>
        <div class="wrapper">
            <div class="container">
                <h1>{{ data.title }}</h1>
                <p>{{ data.date }}</p>
                <ContentDoc :path="data._path" />
            </div>
            <PrevNext :prev="prev" :next="next" />
        </div>
    </div>
</template>

<script setup lang="tsx">
const { data } = await useAsyncData(useRoute().path, () =>
    queryContent(useRoute().path).findOne())

const [prev, next] = await queryContent('/blog')
    .sort({ id: 1 })
    .findSurround(useRoute().path)
</script>

<style scoped></style>
<template>
    <div>
        <div class="hero">
            <NuxtImg :src="data.image" alt="blog-image" format="webp" />
        </div>
        <div class="wrapper">
            <div class="container">
                <h1>{{ data.title }}</h1>
                <p>{{  data.date }}</p>
                <ContentDoc :path="data._path" />
            </div>
        </div>
    </div>
</template>

<script setup lang="tsx">
const { data } = await useAsyncData(useRoute().path, () =>
    queryContent(useRoute().path).findOne())
</script>

<style scoped></style>
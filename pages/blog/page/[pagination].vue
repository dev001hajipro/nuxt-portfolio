<script setup lang="tsx">
useHead({
    title: 'Blog',
    meta: [
        { name: 'description', content: 'Blog' }
    ]
})
const ITEM_PER_PAGE = 5
const currentPage = useRoute().params.pagination
const { data } = await useAsyncData('blogQuery', () =>
    queryContent('/blog')
        .sort({ id: -1 })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (currentPage - 1))
        .find())
const allBlogs = await queryContent('/blog').find()
const pageCount = Math.ceil(allBlogs.length / ITEM_PER_PAGE)
</script>
<template>
    <div class="wrapper">
        <div class="container">
            <h1>Blog</h1>
            <p>エンジニアの日常生活をお届けします。</p>
            <div v-for="singleData in data" :key="singleData.id" class="blogCard">
                <div class="textsContainer">
                    <h3>{{ singleData.title }}</h3>
                    <p>{{ singleData.excerpt }}</p>
                    <p>{{ singleData.date }}</p>
                    <NuxtLink :to="singleData._path" class="linkButton">Read more</NuxtLink>
                </div>
                <div class="blogImg">
                    <NuxtImg :src="singleData.image" alt="blog-image" format="webp" />
                </div>
            </div>
        </div>
        <Pagination :pageCount="pageCount" />
    </div>
</template>
<style scoped></style>
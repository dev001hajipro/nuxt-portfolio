<script setup lang="tsx">
const props = defineProps({
    pageCount: Number
})
const paginationLinks = Array.from({ length: props.pageCount }).map((_, i) => i === 0 ? '/blog' : `/blog/page/${i + 1}`)
</script>
<template>
    <h2 class="paginationWrapper">
        <NuxtLink v-for="(to, i) in paginationLinks" :key="i" :to="to">
            {{ i + 1 }}
        </NuxtLink>
    </h2>
</template>

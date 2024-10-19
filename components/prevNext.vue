<script setup lang="tsx">
const props = defineProps({
    prev: {
        type: Object,
        required: true
    },
    next: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="pnWrapper">
        <NuxtLink :to="prev._path" v-if="prev">
            <NuxtImg src="/images/arrow-left.svg" alt="arow-left" width="30" height="30"/>
            <h3>{{ prev.title }}</h3>
        </NuxtLink>
        <NuxtLink :to="next._path" v-if="next">
            <h3>{{ next.title }}</h3>
            <NuxtImg src="/images/arrow-right.svg" alt="arow-right" width="30" height="30"/>
        </NuxtLink>
    </div>
</template>
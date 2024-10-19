<template>
    <div class="error container">
        <h1>404: Not Found</h1>
        <p>ページが見つかりません。</p>
    </div>
</template>

<script setup lang="tsx">
useHead({
    title: '404: Not Found',
    meta: [
        { name: 'description', content: '404: Not Found' }
    ]
})
</script>
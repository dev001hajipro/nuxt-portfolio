<template>
    <div class="wrapper">
        <div class="container">
            <h1>Contact</h1>
            <p>お気軽にご連絡ください。</p>
            <form method="POST">
                <label htmlFor="name">お名前</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="email">メールアドレス</label>
                <input type="text" id="email" name="email" required/>
                <label htmlFor="message">メッセージ</label>
                <textarea id="message" name="message" rows="10" cols="30" required></textarea>
                <input type="submit" value="送信" />
            </form>
        </div>
    </div>
</template>

<script setup lang="tsx">
useHead({
    title: 'コンタクト',
    meta: [
        { name: 'description', content: 'コンタクトページ' }
    ]
})
</script>

<style scoped>
</style>
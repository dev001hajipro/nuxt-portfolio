<template>
    <div>
        <div class="hero">
            <NuxtImg src="/images/index-hero.jpg" alt="hero-image" format="webp" />
            <div class="textContainer">
                <h1>I'm Abe Hiroki!</h1>
                <h3>TypeScript Developer</h3>
            </div>
        </div>
        <div class="container">
            <div class="profile">
                <div>
                    <h2>JavaScript Nerd</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <NuxtImg src="/images/profile.jpg" alt="profile-image" format="webp" />
            </div>
            <div class="skills">
                <h2>Skills</h2>
                <div class="skillsContainer">
                    <div><img src="/images/javascript.svg" alt="javascript-icon"/><span>JavaScript / 10 years</span></div>
                    <div><img src="/images/react.svg" alt="react-icon"/><span>React / 5 years</span> </div>
                    <div><img src="/images/vue.svg" alt="vue-icon"/><span>Gatsby / 3 years</span></div>
                    <div><img src="/images/nuxt.svg" alt="nuxt-icon"/><span>Next.js / 2 years</span></div>
                </div>
            </div>
            <div class="ctaButton">
                <NuxtLink to="/contact">Make It Happen!😄</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="tsx">
useHead({
    title: 'Nuxt Portfolio',
    meta: [
        { name: 'description', content: 'Nuxt Portfolio' }
    ]
})
</script>

<style scoped>
</style>
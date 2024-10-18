<template>
    <footer>
        <div class="insideContainer">
            <a href="https://github.com/" target="_blank"><img src="/images/github.svg" alt="github-icon"/></a>
            <a href="https://twitter.com/" target="_blank"><img src="/images/twitter.svg" alt="twitter-icon"/></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src="/images/linkedin.svg" alt="linkedin-icon"/></a>
            <a href="https://facebook.com/" target="_blank"><img src="/images/facebook.svg" alt="facebook-icon"/></a>
            <hr />
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <p>© {{ new Date().getFullYear() }} Nuxt 3 Minimal Starter</p>
        </div>
    </footer>
</template>

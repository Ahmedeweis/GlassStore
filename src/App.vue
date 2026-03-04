<template>
    <!-- <div class="app-wrapper relative"> -->
    <!-- Full-page loader -->
    <div class="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center transition-opacity duration-300"
        :class="isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
        <div class="w-16 h-16 border-4 border-white/20 border-t-brand-primary rounded-full animate-spin"></div>
    </div>

    <div class="app-content min-h-screen flex flex-col lang-en">
        <main class="flex-grow flex flex-col">
            <router-view />
        </main>

    </div>
    <!-- </div> -->
    <ScrollToTop />
    <ShoppingCart />
</template>

<script setup>
import { ref } from 'vue'
import ScrollToTop from './components/ScrollToTop.vue'
import ShoppingCart from './components/ShoppingCart.vue'
const isLoading = ref(false)


</script>

<style>
@import url(assets/css/normalize.css);
</style>

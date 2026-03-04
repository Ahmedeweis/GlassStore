<template>
    <header class="absolute top-6 left-0 right-0 z-50">
        <div class="container mx-auto px-6 lg:px-12 flex items-center justify-between">

            <!-- Left: Logo -->
            <router-link to="/" class="flex items-center gap-2 group">
                <div class="text-black">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 10.5C2.5 8.567 4.067 7 6 7H9.5C10.8807 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 18.1193 7 19.5 7H21C22.1046 7 23 7.89543 23 9V14C23 15.6569 21.6569 17 20 17H15.5C13.567 17 12 15.433 12 13.5C12 11.567 10.433 10 8.5 10H6C4.067 10 2.5 11.567 2.5 13.5V10.5Z" />
                    </svg>
                </div>
                <span class="text-xl font-[900] tracking-widest text-black">VISIORA</span>
            </router-link>

            <!-- Middle: Navigation -->
            <nav
                class="hidden md:flex items-center bg-white/70 backdrop-blur-md rounded-full p-1.5 shadow-sm border border-white/40">
                <ul class="flex items-center gap-1">
                    <li>
                        <a href="#"
                            class="block px-6 py-2.5 rounded-full bg-white shadow-sm text-sm font-bold text-black transition-all">
                            MEN
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-6 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-all">
                            WOMEN
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-6 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-all">
                            KIDS
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-6 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-all">
                            SALE
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-6 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:text-black transition-all">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- Right: Actions -->
            <div class="flex items-center gap-3">
                <!-- Search -->
                <button
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white shadow-sm text-gray-700 hover:text-black hover:shadow-md transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
                <!-- Heart (Wishlist) -->
                <button
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white shadow-sm text-gray-700 hover:text-black hover:shadow-md transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </button>
                <!-- Cart -->
                <button @click="cartStore.openCart"
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white shadow-sm text-gray-700 hover:text-black hover:shadow-md transition-all relative">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <!-- Badge active indicator -->
                    <span class="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-black"></span>
                </button>
                <!-- User -->
                <button
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white shadow-sm text-gray-700 hover:text-black hover:shadow-md transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>

        </div>
    </header>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<style scoped>
/* Scoped styles if needed */
</style>

<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-6 lg:px-12">
            <!-- Header -->
            <div class="mb-10 flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 class="text-2xl font-bold text-gray-900 border-l-[3px] border-black pl-3 leading-none">Shop By
                    Category</h2>
                <div class="flex items-center gap-2">
                    <!-- Sort/Filter button if needed, omit based on design -->
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar -->
                <aside class="w-full lg:w-[250px] shrink-0">
                    <ul class="flex flex-col gap-2">
                        <!-- Active Node -->
                        <li>
                            <button
                                class="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 font-semibold text-gray-900">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 bg-white rounded-lg shadow-sm text-purple-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                        </svg>
                                    </div>
                                    All Products
                                </div>
                                <!-- chevron down -->
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="text-gray-400">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <!-- Submenu tree -->
                            <ul class="mt-2 ml-[22px] border-l-2 border-gray-100 pl-4 py-2 flex flex-col gap-3">
                                <li class="relative">
                                    <!-- tree connector -->
                                    <div class="absolute -left-[18px] top-1/2 w-4 border-t-2 border-gray-100"></div>
                                    <a href="#"
                                        class="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        For Men
                                    </a>
                                </li>
                                <li class="relative">
                                    <div class="absolute -left-[18px] top-1/2 w-4 border-t-2 border-gray-100"></div>
                                    <a href="#"
                                        class="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        For Women
                                    </a>
                                </li>
                                <li class="relative">
                                    <div class="absolute -left-[18px] top-1/2 w-4 border-t-2 border-gray-100"></div>
                                    <a href="#"
                                        class="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                        </svg>
                                        For Childern
                                    </a>
                                </li>
                                <li class="relative">
                                    <div class="absolute -left-[18px] top-1/2 w-4 border-t-2 border-gray-100"></div>
                                    <a href="#"
                                        class="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path
                                                d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z">
                                            </path>
                                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                        </svg>
                                        For Sports
                                    </a>
                                </li>
                                <li class="relative">
                                    <div class="absolute -left-[18px] top-1/2 w-4 border-t-2 border-gray-100"></div>
                                    <a href="#" class="flex items-center gap-2 text-sm text-black font-semibold">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="text-yellow-500">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                        Popular Goggles
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <!-- Other Nodes -->
                        <li>
                            <button
                                class="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 opacity-60">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                            </path>
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                        </svg>
                                    </div>
                                    New Arrival
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="text-gray-400">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                class="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 opacity-60">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
                                            </path>
                                        </svg>
                                    </div>
                                    Best Selling
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="text-gray-400">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                class="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 opacity-60">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    Our Brands
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="text-gray-400">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </aside>

                <!-- Product Grid -->
                <div class="flex-1">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
                            :price="product.price" :reviews="product.reviews" :image="product.image" />
                    </div>

                    <!-- Pagination -->
                    <div class="mt-12 flex items-center justify-center gap-2">
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 shadow-sm">&larr;</button>
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 shadow-sm">&larr;
                            Prev.</button>
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white font-semibold">1</button>
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700 font-semibold">2</button>
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700 font-semibold">3</button>
                        <span class="text-gray-400">...</span>
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700 font-semibold">10</button>
                        <button
                            class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 shadow-sm">Next
                            &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../ProductCard.vue'

const products = ref([
    { id: 5, title: 'Lumi Style', price: 40.00, reviews: '15.5k', image: '/images/product.png' },
    { id: 6, title: 'Swift Rider', price: 25.00, reviews: '10.2k', image: '/images/product.png' },
    { id: 7, title: 'Lumi Style', price: 40.00, reviews: '15.5k', image: '/images/product.png' },
    { id: 8, title: 'HyperLens', price: 30.00, reviews: '12.0k', image: '/images/product.png' },
    { id: 9, title: 'Lumi Style', price: 40.00, reviews: '15.5k', image: '/images/product.png' },
    { id: 10, title: 'NeoVision', price: 35.00, reviews: '8.4k', image: '/images/product.png' },
    { id: 11, title: 'Meteo Edge', price: 40.00, reviews: '11.1k', image: '/images/product.png' },
    { id: 12, title: 'NeoVision', price: 35.00, reviews: '8.4k', image: '/images/product.png' },
    { id: 13, title: 'Edge Sport', price: 40.00, reviews: '15.5k', image: '/images/product.png' }
])
</script>

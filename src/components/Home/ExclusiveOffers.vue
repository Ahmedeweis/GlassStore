<template>
    <section class="py-16 bg-white border-t border-gray-100">
        <div class="container mx-auto px-6 lg:px-12">
            <!-- Header -->
            <div class="mb-10 border-b border-gray-100 pb-4">
                <h2 class="text-2xl font-bold text-gray-900 border-l-[3px] border-black pl-3 leading-none">Exclusive
                    Offers – Limited Time Only!</h2>
            </div>

            <!-- Horizontal Scroll / Grid for 5 items -->
            <div
                class="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 no-scrollbar custom-scroll">
                <div v-for="(product, index) in products" :key="index" class="min-w-[260px] sm:min-w-0">
                    <ProductCard :title="product.title" :price="product.price" :reviews="product.reviews"
                        :image="product.image" :discount="'-20%'" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../ProductCard.vue'

const products = ref([
    { title: 'Lumi Style', price: 55.00, reviews: '15.5k', image: '/images/product.png' },
    { title: 'Shield Pro', price: 55.00, reviews: '10.2k', image: '/images/product.png' },
    { title: 'Swift Rider', price: 55.00, reviews: '15.5k', image: '/images/product.png' },
    { title: 'Lumi Style', price: 55.00, reviews: '15.5k', image: '/images/product.png' },
    { title: 'Shield Pro', price: 55.00, reviews: '15.5k', image: '/images/product.png' }
])
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

@media (min-width: 640px) {
    /* restore some styles if needed, though grid doesn't scroll */
}
</style>

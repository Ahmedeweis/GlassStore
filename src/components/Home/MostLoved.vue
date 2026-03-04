<template>
    <section class="py-16 bg-white border-t border-gray-100">
        <div class="container mx-auto px-6 lg:px-12">
            <!-- Header -->
            <div class="mb-10 border-b border-gray-100 pb-4">
                <h2 class="text-2xl font-bold text-gray-900 border-l-[3px] border-black pl-3 leading-none">Most Loved By
                    Visiora Customers</h2>
            </div>

            <!-- Product Grid (4 items) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
                    :price="product.price" :reviews="product.reviews" :image="product.image" :trending="true" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../ProductCard.vue'

const products = ref([
    { id: 1, title: 'NeoVision', price: 50.00, reviews: '15.5k', image: '/images/product.png' },
    { id: 2, title: 'Shield Pro', price: 50.00, reviews: '10.2k', image: '/images/product.png' },
    { id: 3, title: 'Shield Pro', price: 35.00, reviews: '15.5k', image: '/images/product.png' },
    { id: 4, title: 'Shield Pro', price: 35.00, reviews: '15.5k', image: '/images/product.png' }
])
</script>

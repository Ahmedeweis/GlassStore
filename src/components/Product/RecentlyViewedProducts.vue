<template>
    <div class="recently-viewed-products">
        <h3 class="text-xl font-bold text-gray-900 mb-6 font-outfit">Your Recently Viewed Products</h3>

        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div v-for="product in products" :key="product.id"
                class="product-card bg-[#F5F8FF] rounded-2xl p-4 flex flex-col transition-transform hover:-translate-y-1 group">
                <!-- Image Placeholder -->
                <div
                    class="aspect-[4/3] w-full bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden shrink-0">
                    <svg class="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                    </svg>
                </div>

                <div class="flex-grow flex flex-col justify-end">
                    <h4 class="font-semibold text-gray-900 text-sm mb-1 truncate">{{ product.name }}</h4>

                    <div class="flex items-center gap-1 mb-2">
                        <div class="flex text-amber-400">
                            <svg v-for="i in 5" :key="i" class="w-3 h-3 fill-current" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                        </div>
                        <span class="text-xs text-gray-400">81 Reviews</span>
                    </div>

                    <div class="flex items-end gap-2 shrink-0">
                        <span class="font-semibold text-gray-900">${{ product.price }}</span>
                        <span class="text-xs text-gray-400 line-through mb-0.5">${{ product.oldPrice }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
    { id: 1, name: 'Luxe Style', price: '59.90', oldPrice: '79.90' },
    { id: 2, name: 'Shield Pro', price: '59.90', oldPrice: '79.90' },
    { id: 3, name: 'Swift Rider', price: '59.90', oldPrice: '79.90' },
    { id: 4, name: 'Luxe Style', price: '59.90', oldPrice: '79.90' },
    { id: 5, name: 'Shield Pro', price: '59.90', oldPrice: '79.90' }
])
</script>

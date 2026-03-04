<template>
    <div class="product-info-sidebar flex flex-col justify-center">
        <!-- Title and Rating -->
        <div class="mb-4">
            <h1 class="text-[32px] md:text-[40px] font-bold font-outfit text-gray-900 leading-tight mb-2">NeoVision</h1>
            <div class="flex items-center gap-2">
                <div class="flex text-amber-400">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i === 5 ? 'text-gray-300' : 'fill-current'"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                        </path>
                    </svg>
                </div>
                <span class="text-xs text-gray-500 underline cursor-pointer">81 Reviews</span>
            </div>
        </div>

        <!-- Pricing -->
        <div class="flex items-end gap-3 mb-6">
            <span class="text-[28px] font-semibold text-gray-900">$59.90</span>
            <span class="text-sm text-gray-400 line-through mb-1.5">$79.90</span>
        </div>

        <!-- Description Snippet -->
        <p class="text-gray-500 text-sm leading-relaxed mb-8">
            Sleek helmet-visor fits perfectly with the survey helmet and comes with all the mounting components you
            need. Easy to install, reliable on the driving seat and feeling a premium visual clarity you experience.
        </p>

        <!-- Quantity Selector and Total -->
        <div class="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-6">
            <div class="flex items-center gap-4">
                <span class="text-sm font-medium text-gray-700">Quantity:</span>
                <div class="flex items-center border border-gray-200 rounded-full bg-gray-50 overflow-hidden">
                    <button @click="decrement"
                        class="px-3 py-1 text-gray-500 hover:text-gray-900 transition-colors">-</button>
                    <span class="w-8 text-center text-sm font-medium">{{ quantity }}</span>
                    <button @click="increment"
                        class="px-3 py-1 text-gray-500 hover:text-gray-900 transition-colors">+</button>
                </div>
            </div>
            <div class="text-lg font-semibold text-gray-900">${{ totalPrice }}</div>
        </div>

        <!-- Size Selection -->
        <div class="mb-8 flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700">Size :</span>
            <div class="flex gap-2">
                <button v-for="size in sizes" :key="size" @click="selectedSize = size"
                    class="px-5 py-2 text-xs font-medium rounded-full transition-all"
                    :class="selectedSize === size ? 'bg-[#A8A1FF] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                    {{ size }}
                </button>
            </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-4">
            <button @click="addToCart"
                class="flex-1 border-2 border-brand-primary text-brand-primary font-medium rounded-full py-3 hover:bg-brand-primary hover:text-white transition-all text-sm">
                Add To Cart
            </button>
            <button
                class="flex-1 bg-gray-900 text-white font-medium rounded-full py-3 hover:bg-black transition-all text-sm">
                Add To Wishlist
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const quantity = ref(1)
const basePrice = 59.90
const totalPrice = computed(() => (quantity.value * basePrice).toFixed(2))

const sizes = ['Small', 'Medium', 'Large']
const selectedSize = ref('Small')

const increment = () => quantity.value++
const decrement = () => {
    if (quantity.value > 1) quantity.value--
}

import { useCartStore } from '../../stores/cart'
const cartStore = useCartStore()

const addToCart = () => {
    cartStore.openCart()
}
</script>

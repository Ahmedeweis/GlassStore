<template>
    <div class="product-card cursor-pointer group/card" @click="goToProduct">
        <div
            class="relative w-full aspect-square rounded-[32px] overflow-hidden mb-4 group border border-gray-100/50 bg-gradient-to-b from-[#f8f6fb] to-white flex items-center justify-center p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">

            <!-- Badges -->
            <div v-if="trending"
                class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-sm text-xs font-bold text-gray-800 z-10 border border-white">
                Trending <span>🔥</span>
            </div>
            <div v-if="discount"
                class="absolute top-4 left-4 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-[10px] font-bold text-purple-600 z-10">
                {{ discount }}
            </div>

            <!-- Image -->
            <img :src="image" :alt="title"
                class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" />
        </div>

        <div class="flex flex-col gap-1 px-1">
            <div class="flex items-center justify-between">
                <h3 class="font-bold text-gray-900 text-lg">{{ title }}</h3>
                <span class="font-bold text-gray-900 text-lg">${{ price.toFixed(2) }}</span>
            </div>

            <div class="flex items-center gap-1 mb-3">
                <div class="flex items-center text-yellow-400">
                    <svg v-for="i in 5" :key="i" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                </div>
                <span class="text-xs text-gray-400 font-medium ml-1">{{ reviews }} Reviews</span>
            </div>

            <div class="flex items-center gap-2">
                <button @click="handleAddToCart"
                    class="flex-1 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                    Add To Cart
                </button>
                <button @click="handleBuyNow"
                    class="flex-1 py-2.5 rounded-full bg-[#2a2b36] text-white text-sm font-semibold hover:bg-black transition-colors">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    id: {
        type: [String, Number],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: {
        type: String,
        default: '15.5k'
    },
    image: {
        type: String,
        required: true
    },
    trending: {
        type: Boolean,
        default: false
    },
    discount: {
        type: String,
        default: ''
    }
})

const goToProduct = () => {
    router.push(`/product/${props.id}`)
}
const handleAddToCart = (e) => {
    e.stopPropagation()
    // Trigger cart open event or state here
}
const handleBuyNow = (e) => {
    e.stopPropagation()
    router.push('/checkout/buyer-info')
}
</script>

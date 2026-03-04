<template>
    <div class="product-reviews">
        <h3 class="text-xl font-bold text-gray-900 mb-6 font-outfit">Reviews</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="review in reviews" :key="review.id"
                class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <!-- Reviewer Header -->
                <div class="flex items-start gap-4 mb-4">
                    <!-- Avatar Placeholder -->
                    <div
                        class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center relative">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <!-- Verified Badge Positioned on Avatar -->
                        <div v-if="review.verified" class="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5"
                            title="Verified Buyer">
                            <svg class="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold text-sm text-gray-900 flex items-center gap-1">{{ review.name }}</h4>
                        <span class="text-xs text-brand-primary">{{ review.role }}</span>
                    </div>
                </div>

                <!-- Rating -->
                <div class="flex text-amber-400 mb-3">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4"
                        :class="i <= review.rating ? 'fill-current' : 'text-gray-300'" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                        </path>
                    </svg>
                </div>

                <!-- Review Text -->
                <p class="text-sm text-gray-600 italic">"{{ review.text }}"</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const reviews = ref([
    {
        id: 1,
        name: 'Hamida Jaman',
        role: 'General Watch',
        rating: 5,
        verified: true,
        text: 'The best goggles I\'ve ever owned. Everything is clear confidently and they fit perfectly over my glasses.'
    },
    {
        id: 2,
        name: 'Hamida Jaman',
        role: 'Manager Of Soundmibe',
        rating: 5,
        verified: true,
        text: 'Extremely comfy and super cool to look. I\'ve a firm way on the loops for races.'
    },
    {
        id: 3,
        name: 'Hamida Jaman',
        role: 'UI/UX Designer',
        rating: 5,
        verified: true,
        text: 'The best goggles I\'ve ever owned. Everything is clear confidently and they fit perfectly over my glasses.'
    }
])
</script>

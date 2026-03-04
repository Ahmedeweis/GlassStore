<template>
    <div class="shipping-method-options w-full max-w-sm space-y-6">

        <!-- Shipping Option -->
        <button @click="selectedMethod = 'shipping'"
            class="w-full relative rounded-2xl overflow-hidden text-center p-8 transition-all hover:shadow-md cursor-pointer border-2"
            :class="selectedMethod === 'shipping' ? 'border-brand-primary/30 shadow-sm' : 'border-gray-100 hover:border-gray-200'">
            <!-- Background Graphic (Placeholder for the abstract waves in design) -->
            <div class="absolute inset-0 opacity-80"
                style="background: linear-gradient(135deg, rgba(230,230,250,0.6) 0%, rgba(240,248,255,0.6) 50%, rgba(253,245,230,0.6) 100%);">
            </div>

            <!-- Content -->
            <div class="relative z-10">
                <h3 class="text-gray-900 font-medium text-lg mb-1">Shipping</h3>
                <span class="text-brand-primary text-xs opacity-80 select-none">Optimized</span>
            </div>
        </button>

        <!-- Pick up at shop Option -->
        <button @click="selectedMethod = 'pickup'"
            class="w-full relative rounded-2xl text-center p-8 transition-all hover:shadow-md cursor-pointer border-2 bg-white"
            :class="selectedMethod === 'pickup' ? 'border-brand-primary/30 shadow-sm' : 'border-gray-100 hover:border-gray-200'">
            <div class="relative z-10">
                <h3 class="text-gray-900 font-medium text-lg mb-1">Pick up at the shop</h3>
                <!-- Abstract matching styling from design "Optimized" text even if it looks lightly colored in the second box -->
                <span class="text-[#A8A1FF] text-xs opacity-60 select-none">Optimized</span>
            </div>
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedMethod = ref('shipping') // Default selection based on design
</script>

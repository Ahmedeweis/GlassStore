<template>
    <div class="product-description-tabs border border-gray-200 rounded-2xl overflow-hidden">
        <!-- Tab Headers -->
        <div class="flex border-b border-gray-200 bg-gray-50/50">
            <button @click="activeTab = 'info'"
                class="flex-1 py-4 text-sm font-medium text-center border-b-2 transition-colors flex items-center justify-center gap-2"
                :class="activeTab === 'info' ? 'border-brand-primary text-gray-900 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Product Info
            </button>
            <button @click="activeTab = 'delivery'"
                class="flex-1 py-4 text-sm font-medium text-center border-b-2 transition-colors flex items-center justify-center gap-2"
                :class="activeTab === 'delivery' ? 'border-brand-primary text-gray-900 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                    </path>
                </svg>
                Delivery & Returns
            </button>
        </div>

        <!-- Tab Content -->
        <div class="p-6 md:p-8 bg-white min-h-[250px]">
            <transition mode="out-in" name="fade">
                <div v-if="activeTab === 'info'" key="info" class="text-sm text-gray-600 space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul class="space-y-2 list-disc pl-5">
                            <li>Anti-glare layer, polycarbonate UV-400 lenses.</li>
                            <li>Internal dual anti-reflective coating.</li>
                            <li>Ultra-adjustable, set-it-and-forget head strap.</li>
                            <li>Super soft dirt and sweat wiping microfleece comfort.</li>
                        </ul>
                        <ul class="space-y-2 list-disc pl-5">
                            <li>100% UVA/UVB protection and bright clarity capability.</li>
                            <li>Extra-large field of view, while taking total form and minimalism.</li>
                            <li>Lightweight plasma construction.</li>
                            <li>Universal prescription system.</li>
                        </ul>
                    </div>
                    <p class="leading-relaxed">
                        Experience the mountains like never before with Universal HD graphic. Built on our tactical
                        frame, and lighter yet more robustly optimized, as well as a new breather designed to shed extra
                        fog faster and triple-layer foam, these goggles offer a universal pressure-free fit for all-day
                        comfort. The anti-slip strap keeps them securely in place, even during the most intense runs.
                        With an easy to use interchangeable lens system, you can easily adapt to changing light
                        conditions. The Visionary goggles are definitely your trusted companion at whatever level you
                        perform.
                    </p>
                </div>

                <div v-else key="delivery" class="text-sm text-gray-600 space-y-4">
                    <h4 class="font-medium text-gray-900">Delivery Information</h4>
                    <p>Standard delivery takes 3-5 business days. Expedited shipping options are available at checkout.
                        All orders are processed within 24 hours.</p>

                    <h4 class="font-medium text-gray-900 mt-6">Return Policy</h4>
                    <p>We accept returns within 30 days of purchase. Items must be in their original condition with all
                        tags attached. Please use the return portal in your account to generate a prepaid label.</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('info')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

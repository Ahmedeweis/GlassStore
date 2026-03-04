<template>
    <div class="shipping-options-list w-full space-y-4">
        <div class="mb-6">
            <h2 class="text-2xl font-bold font-outfit text-gray-900 mb-1">Shipping</h2>
            <p class="text-sm text-gray-500">Please choose a shipping company</p>
        </div>

        <!-- DHL Option -->
        <label class="flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all"
            :class="selectedShipping === 'dhl' ? 'border-[#3B5998]/30 bg-[#F5F8FF]' : 'border-gray-100 hover:border-gray-200 bg-white'">
            <div class="flex items-start gap-4">
                <div class="mt-1">
                    <input type="radio" v-model="selectedShipping" value="dhl"
                        class="w-4 h-4 text-brand-primary accent-brand-focus focus:ring-brand-focus rounded-full" />
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-1">DHL</h4>
                    <p class="text-xs text-gray-500 mb-1">Estimated Delivery Time: Oct 31 - Nov 10</p>
                    <p class="text-xs text-gray-700 font-medium">Shipping Cost: <span
                            class="line-through text-gray-400 mr-1">$15</span> <span class="font-bold">Free
                            Shipping</span></p>
                </div>
            </div>
            <!-- Placeholder Logo -->
            <div class="text-red-600 font-bold italic tracking-tighter text-xl">DHL</div>
        </label>

        <!-- FedEx Option -->
        <label class="flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all"
            :class="selectedShipping === 'fedex' ? 'border-[#3B5998]/30 bg-[#F5F8FF]' : 'border-gray-100 hover:border-gray-200 bg-white'">
            <div class="flex items-start gap-4">
                <div class="mt-1">
                    <input type="radio" v-model="selectedShipping" value="fedex"
                        class="w-4 h-4 text-brand-primary accent-brand-primary focus:ring-brand-primary rounded-full" />
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-1">FedEx</h4>
                    <p class="text-xs text-gray-500 mb-1">Estimated Delivery Time: Oct 31 - Nov 10</p>
                    <p class="text-xs text-gray-700 font-medium">Shipping Cost: <span
                            class="line-through text-gray-400 mr-1">$15</span> <span class="font-bold">$75</span></p>
                </div>
            </div>
            <!-- Placeholder Logo -->
            <div class="font-bold flex text-xl tracking-tight"><span class="text-[#4D148C]">Fed</span><span
                    class="text-[#FF6600]">Ex</span></div>
        </label>

        <!-- Palletways Option -->
        <label class="flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all"
            :class="selectedShipping === 'palletways' ? 'border-[#3B5998]/30 bg-[#F5F8FF]' : 'border-gray-100 hover:border-gray-200 bg-white'">
            <div class="flex items-start gap-4">
                <div class="mt-1">
                    <input type="radio" v-model="selectedShipping" value="palletways"
                        class="w-4 h-4 text-brand-primary accent-brand-primary focus:ring-brand-primary rounded-full" />
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-1">Palletways</h4>
                    <p class="text-xs text-gray-500 mb-1">Estimated Delivery Time: Oct 31 - Nov 10</p>
                    <p class="text-xs text-gray-700 font-medium">Shipping Cost: <span class="font-bold">$75</span></p>
                </div>
            </div>
            <!-- Placeholder Logo -->
            <div class="font-bold italic text-[#00A1E0] text-lg">Palletways</div>
        </label>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedShipping = ref('dhl')
</script>

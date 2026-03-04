<template>
    <div class="final-order-summary bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 class="text-xl font-bold font-outfit text-gray-900 mb-8">Order Summary</h3>

        <div class="space-y-4 mb-8">
            <div class="flex justify-between text-sm">
                <span class="text-gray-500">Product Subtotal</span>
                <span class="text-gray-900 font-medium">$59.90</span>
            </div>
            <div class="flex justify-between text-sm">
                <span class="text-gray-500">Shipping</span>
                <span class="text-gray-900 font-medium">Free</span>
            </div>
            <div class="flex justify-between text-sm pb-4 border-b border-gray-100">
                <span class="text-gray-500">Tax</span>
                <span class="text-gray-900 font-medium">$12.90</span>
            </div>
        </div>

        <!-- Promocode Applied State -->
        <div class="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-6">
            <span class="text-sm font-medium text-gray-700">Promocode Applied</span>
            <!-- Checkmark SVG Box -->
            <div class="w-6 h-6 rounded bg-[#E5E5FF] flex items-center justify-center">
                <svg class="w-4 h-4 text-[#A8A1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
        </div>

        <div class="mb-8">
            <p class="text-sm font-bold text-gray-900">Existing Customer Discount</p>
        </div>

        <!-- Total -->
        <div class="flex justify-between items-center mb-8 border-t border-gray-100 pt-6">
            <span class="font-bold text-gray-900 font-outfit">Order Total</span>
            <span class="font-bold text-gray-900 text-xl">$100.84</span>
        </div>

        <!-- Confirm Button -->
        <button type="button"
            class="w-full px-8 py-4 rounded-full text-white text-sm font-semibold tracking-wide transition-all shadow-lg hover:opacity-90 active:scale-95"
            style="background: linear-gradient(90deg, #A8B8EC 0%, #D4A9E0 100%);">
            Confirm
        </button>

    </div>
</template>

<script setup>
</script>

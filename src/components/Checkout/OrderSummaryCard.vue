<template>
    <div class="order-summary-card">

        <!-- Product Info Header -->
        <div class="flex gap-6 mb-10 items-center">
            <!-- Product Image Placeholder -->
            <div
                class="w-32 h-32 rounded-2xl bg-[#F5F8FF] flex items-center justify-center shrink-0 border border-gray-100 p-4">
                <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                </svg>
            </div>

            <div class="flex-grow">
                <h3 class="text-2xl font-bold font-outfit text-gray-900 mb-1">NeoVision</h3>
                <p class="text-xs text-gray-500 mb-3 leading-tight max-w-[180px]">Color: Lavender + ChromaPop™
                    Photochromic Red Mirror Lens</p>

                <div class="flex items-center gap-4">
                    <span class="text-sm font-medium text-gray-900">Quantity: 01</span>
                    <div class="flex items-center border border-gray-200 rounded-full bg-white overflow-hidden h-8">
                        <button
                            class="px-2 text-gray-500 hover:text-gray-900 transition-colors bg-gray-50 h-full border-r border-gray-200">-</button>
                        <button class="px-2 text-gray-500 hover:text-gray-900 transition-colors h-full">+</button>
                    </div>
                </div>

                <div class="mt-4 text-xl font-bold text-gray-900">$59.90</div>
            </div>
        </div>

        <!-- Order Details Box -->
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 class="font-bold text-gray-900 mb-4 font-outfit">Order Summary</h4>

            <div class="space-y-3 mb-6">
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Product Subtotal</span>
                    <span class="text-gray-900 font-medium">$59.90</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Shipping</span>
                    <span class="text-gray-900 font-medium">Free</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Tax</span>
                    <span class="text-gray-900 font-medium">$12.90</span>
                </div>
            </div>

            <!-- Promo Code -->
            <div class="flex items-center gap-2 mb-4">
                <div class="relative flex-grow">
                    <input type="text"
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primary text-sm"
                        placeholder="Apply Promocode">
                    <button
                        class="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E5E5FF] text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                        +
                    </button>
                </div>
            </div>

            <div class="mb-6">
                <a href="#"
                    class="text-sm font-semibold text-gray-900 border-b border-gray-900 pb-0.5 inline-block">Existing
                    Customer Discount</a>
            </div>

            <!-- Total -->
            <div class="flex justify-between items-center mb-6 pt-4 border-t border-gray-200">
                <span class="font-bold text-gray-900 font-outfit">Order Total</span>
                <span class="font-bold text-gray-900 text-lg">$128.84</span>
            </div>

            <button type="button"
                class="w-full px-8 py-3.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors text-center shadow-lg shadow-gray-900/20">
                Checkout
            </button>

        </div>
    </div>
</template>

<script setup>
</script>

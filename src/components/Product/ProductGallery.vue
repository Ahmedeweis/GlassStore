<template>
    <div class="product-gallery">
        <!-- Main Image -->
        <div
            class="main-image relative bg-[#F5F8FF] rounded-3xl p-12 mb-4 flex items-center justify-center min-h-[500px]">
            <!-- Placeholder Badge -->
            <div
                class="absolute top-6 right-6 bg-white px-3 py-1 rounded-full shadow-sm text-xs font-semibold flex items-center gap-1">
                <span>Best Seller</span>
                <span class="text-orange-500">🔥</span>
            </div>

            <!-- Placeholder Image -->
            <div class="w-full h-full flex items-center justify-center text-gray-400">
                <svg class="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                </svg>
                <p>Main Product Image (Requires Asset)</p>
            </div>
        </div>

        <!-- Thumbnails Container -->
        <div class="flex items-center justify-between gap-4">
            <!-- Left Arrow Placeholder -->
            <button
                class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0 hover:bg-black transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            <!-- Thumbnails -->
            <div class="flex gap-4 overflow-x-auto snap-x hide-scrollbar py-2 px-1">
                <div v-for="(n, i) in 5" :key="n"
                    class="thumbnail snap-center w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 cursor-pointer border-2"
                    :class="i === 0 ? 'border-brand-primary' : 'border-transparent hover:border-gray-300'">
                    <!-- Placeholder thumbnail -->
                    <span class="text-xs text-gray-400">Color {{ i + 1 }}</span>
                </div>
            </div>

            <!-- Right Arrow Placeholder -->
            <button
                class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0 hover:bg-black transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
// State for active image can go here
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>

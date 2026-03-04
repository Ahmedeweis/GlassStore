<template>
    <form class="space-y-6 max-w-lg" @submit.prevent>
        <!-- Email -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
            <input type="email"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary placeholder-gray-400 text-sm transition-colors"
                placeholder="your@email.com">
        </div>

        <!-- Name Row -->
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary placeholder-gray-400 text-sm transition-colors">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary placeholder-gray-400 text-sm transition-colors">
            </div>
        </div>

        <!-- Shipping Address Section -->
        <div class="pt-6">
            <h3 class="text-lg font-bold font-outfit text-gray-900 mb-6">Shipping Address</h3>

            <div class="space-y-6">
                <!-- Country -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <!-- Simple US Flag Placeholder -->
                            <span class="text-base">🇺🇸</span>
                        </div>
                        <select
                            class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primary appearance-none text-sm text-gray-700">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- City -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input type="text"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary text-sm transition-colors">
                </div>

                <!-- Address -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input type="text"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary text-sm transition-colors">
                </div>

                <!-- State/Zip Row -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">State/Region</label>
                        <div class="relative">
                            <select
                                class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primary appearance-none text-sm text-gray-700">
                                <option>New York</option>
                                <option>California</option>
                                <option>Texas</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Zip/Postal</label>
                        <input type="text"
                            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary text-sm transition-colors">
                    </div>
                </div>

                <!-- Phone Number -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary text-sm transition-colors">
                </div>
            </div>
        </div>

        <!-- Actions -->
        <div class="pt-8 flex items-center gap-4">
            <button type="button"
                class="px-8 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-1/3 text-center">
                Back To Cart
            </button>
            <button type="button"
                class="px-8 py-3 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition-colors flex-grow text-center">
                Submit & Next
            </button>
        </div>

    </form>
</template>

<script setup>
</script>

<template>
    <div class="credit-card-form w-full border-t border-gray-100 pt-8 mt-4">
        <h3 class="text-xl font-bold font-outfit text-gray-900 mb-6">Credit Card Information</h3>

        <form class="space-y-6 max-w-lg" @submit.prevent>

            <!-- Card Number -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Credit Card Number</label>
                <div class="relative">
                    <input type="text"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary placeholder-gray-400 text-sm transition-colors text-gray-900 font-medium"
                        placeholder="0000 0000 0000 0000" value="4542 5687 6548 2340">
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <!-- Checkmark Icon -->
                        <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Expiry and CVV Row -->
            <div class="grid grid-cols-3 gap-4">
                <!-- Month -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Month</label>
                    <div class="relative">
                        <select
                            class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primary appearance-none text-sm text-gray-700">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
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

                <!-- Year -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <div class="relative">
                        <select
                            class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-brand-primary appearance-none text-sm text-gray-700">
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
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

                <!-- CVV -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">CVV Code</label>
                    <input type="text"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary placeholder-gray-400 text-sm transition-colors text-center"
                        placeholder="123" maxlength="4">
                </div>
            </div>

            <!-- Actions -->
            <div class="pt-8">
                <button type="button"
                    class="px-8 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-1/3 text-center block">
                    Back To Cart
                </button>
            </div>

        </form>
    </div>
</template>

<script setup>
</script>

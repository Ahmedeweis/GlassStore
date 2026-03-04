<template>
    <footer class="bg-white pt-20 pb-8 border-t border-gray-100">
        <div class="container mx-auto px-6 lg:px-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                <!-- Logo & Contact -->
                <div class="col-span-1 md:col-span-1 flex flex-col items-start gap-4">
                    <router-link to="/" class="flex items-center gap-2 group mb-4">
                        <div class="text-black">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M2.5 10.5C2.5 8.567 4.067 7 6 7H9.5C10.8807 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 18.1193 7 19.5 7H21C22.1046 7 23 7.89543 23 9V14C23 15.6569 21.6569 17 20 17H15.5C13.567 17 12 15.433 12 13.5C12 11.567 10.433 10 8.5 10H6C4.067 10 2.5 11.567 2.5 13.5V10.5Z" />
                            </svg>
                        </div>
                        <span
                            class="text-2xl font-[900] tracking-widest text-[#ed4f9a] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">VISIORA</span>
                    </router-link>

                    <div class="text-sm text-gray-600 font-medium">Customer Hours</div>
                    <div class="text-sm font-bold text-gray-900">Monday - Saturday</div>
                    <div class="text-sm font-bold text-gray-900 mb-2">10:00 AM - 7:00 PM</div>

                    <div class="flex flex-col gap-1 text-sm text-gray-500 font-medium">
                        <span>📞 1-800-VISIORA</span>
                        <span>✉️ support@visiora.com</span>
                    </div>

                    <!-- Socials -->
                    <div class="flex items-center gap-4 mt-2">
                        <a href="#" class="text-gray-600 hover:text-black">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-600 hover:text-black">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Links 1 -->
                <div class="col-span-1">
                    <h4 class="font-bold text-gray-900 mb-4">Shop</h4>
                    <ul class="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                        <li><a href="#" class="hover:text-black transition-colors">Men's Goggles</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Women's Goggles</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Kids' Goggles</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Snow Goggles</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Sport Goggles</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Sale section</a></li>
                    </ul>
                </div>

                <!-- Links 2 -->
                <div class="col-span-1">
                    <h4 class="font-bold text-gray-900 mb-4">Support</h4>
                    <ul class="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                        <li><a href="#" class="hover:text-black transition-colors">Contact Us</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">FAQ &amp; Advice</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Shipping Info</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Returns Policy</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Warranty Info</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Track Order</a></li>
                    </ul>
                </div>

                <!-- Links 3 -->
                <div class="col-span-1">
                    <h4 class="font-bold text-gray-900 mb-4">Our Stores</h4>
                    <ul class="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                        <li><a href="#" class="hover:text-black transition-colors">New York</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">London</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Paris</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Dubai</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Tokyo</a></li>
                        <li><a href="#" class="hover:text-black transition-colors">Find a Store</a></li>
                    </ul>
                </div>

            </div>

            <!-- Bottom Bar -->
            <div
                class="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
                <p>&copy; 2026 Developed By Hunter Jones. All Rights Reserved.</p>
                <div class="flex items-center gap-6">
                    <a href="#" class="hover:text-black transition-colors">Privacy</a>
                    <a href="#" class="hover:text-black transition-colors">Terms</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

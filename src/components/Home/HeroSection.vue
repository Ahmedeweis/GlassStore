<template>
    <section class="relative pt-32 pb-16 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-gray-50/50">
        <!-- Abstract gradient background blobs -->
        <div
            class="absolute top-0 left-0 right-0 h-[800px] w-full bg-gradient-to-b from-[#f2f4fc] via-[#f7f0fe] to-white -z-10">
        </div>
        <div
            class="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px] -z-10">
        </div>
        <div class="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] -z-10">
        </div>

        <div class="container mx-auto px-6 lg:px-12 relative h-full flex flex-col">
            <div class="flex-1 w-full relative">
                <!-- HUGE Background text -->
                <div class="absolute inset-0 flex items-center justify-between pointer-events-none z-0">
                    <span
                        class="text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none font-thin text-black tracking-[-0.05em] -ml-4 lg:-ml-12 select-none">Easy</span>
                    <span
                        class="text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none font-thin text-black tracking-[-0.05em] -mr-4 lg:-mr-12 select-none">Shop</span>
                </div>

                <!-- Center Image container -->
                <div class="relative z-10 w-full max-w-[500px] mx-auto h-[600px] drop-shadow-2xl">
                    <div
                        class="w-full h-full rounded-b-[200px] rounded-t-[50px] overflow-hidden  relative border border-white/50 bg-white shadow-2xl">
                        <!-- Image loaded from public -->
                        <img src="/images/hero.png" alt="Futuristic model with goggles"
                            class="w-full h-full object-cover object-center scale-[1.05]" />
                    </div>
                </div>

                <!-- Left Text Description -->
                <div class="absolute left-0 bottom-[20%] max-w-[280px] z-20">
                    <p class="text-sm text-gray-700 font-medium mb-4 leading-relaxed">
                        Pioneering augmented reality vision.
                        Enhance your winter sports experience
                        with seamless integration, real-time metrics,
                        and an ultra-wide field of view.
                    </p>
                    <button
                        class="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-full text-black text-sm font-semibold hover:bg-black hover:text-white transition-all shadow-sm">
                        SHOP <span class="text-lg leading-none">&rarr;</span>
                    </button>
                </div>

                <!-- Right AI Widget -->
                <div
                    class="absolute right-[5%] top-[10%] bg-white/60 backdrop-blur-md border border-white p-3 rounded-2xl shadow-xl z-20 flex flex-col items-center">
                    <span class="text-xs font-semibold text-gray-800 mb-2">AI Augmented Reality</span>
                    <div
                        class="w-[80px] h-[80px] rounded-full overflow-hidden bg-gradient-to-tr from-purple-400 to-blue-300 p-[2px]">
                        <div
                            class="bg-white rounded-full w-full h-full p-1 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 bg-blue-100/50 mix-blend-overlay"></div>
                            <img src="/images/product.png" class="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Search Pill -->
            <div class="mt-12 max-w-4xl mx-auto w-full">
                <div
                    class="bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white p-2 pl-8 flex items-center justify-between relative z-20">
                    <span class="text-gray-600 font-medium">Search your Perfect Goggles</span>
                    <div class="flex items-center gap-2">
                        <div class="relative hidden sm:block">
                            <input type="text" placeholder="I want smart goggles..."
                                class="bg-gray-100/50 rounded-full px-6 py-3 w-[250px] border border-gray-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder:text-gray-400">
                        </div>
                        <button
                            class="bg-gradient-to-r from-blue-300 to-purple-300 text-white font-semibold rounded-full px-8 py-3 hover:opacity-90 transition-opacity shadow-md">
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
/* Any required scoped typography */
</style>

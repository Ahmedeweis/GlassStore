<template>
    <div class="product-details-page bg-[#F8F9FA] min-h-screen">
        <Header />
        <div class="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
            <ProductBreadcrumb />

            <div class="bg-white rounded-[24px] p-6 md:p-10 mb-12 shadow-sm">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <ProductGallery />
                    <ProductInfoSidebar />
                </div>

                <div class="mt-16">
                    <ProductDescriptionTabs />
                </div>
            </div>

            <div class="mb-16">
                <ProductReviews />
            </div>

            <div class="mb-16">
                <RecentlyViewedProducts />
            </div>

            <Newsletter class="!bg-white rounded-[24px] mb-12" />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Newsletter from '../components/Home/Newsletter.vue'
import ProductBreadcrumb from '../components/Product/ProductBreadcrumb.vue'
import ProductGallery from '../components/Product/ProductGallery.vue'
import ProductInfoSidebar from '../components/Product/ProductInfoSidebar.vue'
import ProductDescriptionTabs from '../components/Product/ProductDescriptionTabs.vue'
import ProductReviews from '../components/Product/ProductReviews.vue'
import RecentlyViewedProducts from '../components/Product/RecentlyViewedProducts.vue'
</script>

<style scoped>
/* Scoped styles if needed, mostly relying on Tailwind */
</style>

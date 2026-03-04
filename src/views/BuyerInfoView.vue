<template>
    <div class="buyer-info-page bg-[#F8F9FA] min-h-screen">
        <Header />

        <!-- Top Ad Banner specific to checkout if needed (Upto 40% Off...) -->
        <div class="w-full bg-gradient-to-r from-[#E5E5FF] to-[#F1EEFB] py-3 text-center">
            <p class="text-[13px] text-gray-700 font-medium">Upto 40% Of In Shield Pro | <a href="#"
                    class="border-b border-gray-600 pb-[1px] font-semibold text-gray-900">Shop Now</a></p>
        </div>

        <div class="max-w-[1440px] mx-auto px-4 md:px-8 py-8 lg:py-12">
            <!-- Breadcrumb -->
            <CheckoutBreadcrumb />

            <!-- Main Content Area -->
            <div
                class="bg-white rounded-[24px] p-6 md:p-10 lg:p-14 mb-12 shadow-sm min-h-[600px] flex flex-col items-center">

                <div class="w-full max-w-5xl">
                    <!-- Stepper -->
                    <CheckoutStepper currentStep="Customer Information" class="mb-14" />

                    <!-- Layout: Form Left, Options Right -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        <!-- Left: Form -->
                        <div>
                            <h2 class="text-2xl font-bold font-outfit text-gray-900 mb-8">Customer Information</h2>
                            <CustomerInfoForm />
                        </div>

                        <!-- Right: Shipping Options -->
                        <div class="lg:pt-[60px]"> <!-- Align visually with form content -->
                            <ShippingMethodOptions />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CheckoutBreadcrumb from '../components/Checkout/CheckoutBreadcrumb.vue'
import CheckoutStepper from '../components/Checkout/CheckoutStepper.vue'
import CustomerInfoForm from '../components/Checkout/CustomerInfoForm.vue'
import ShippingMethodOptions from '../components/Checkout/ShippingMethodOptions.vue'
</script>

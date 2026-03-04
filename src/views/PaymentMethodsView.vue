<template>
    <div class="payment-methods-page bg-[#F8F9FA] min-h-screen">
        <Header />

        <!-- Top Ad Banner specific to checkout if needed -->
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
                    <CheckoutStepper currentStep="Payment Methods" class="mb-14" />

                    <!-- Layout: Options/Form Left, Order Summary Right -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                        <!-- Left: Shipping, Payment, Card Form (Takes up 7 cols) -->
                        <div class="lg:col-span-7 flex flex-col gap-10">
                            <ShippingOptionsList />
                            <PaymentOptionsList v-model="selectedPayment" />
                            <CreditCardForm v-if="selectedPayment === 'credit-card'" />
                            <div v-else class="pt-8">
                                <button type="button"
                                    class="px-8 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-1/3 text-center">
                                    Back To Cart
                                </button>
                                <!-- We could add a Proceed to PayPal button here if needed instead of form -->
                            </div>
                        </div>

                        <!-- Right: Order Summary (Takes up 5 cols) -->
                        <div class="lg:col-span-5">
                            <OrderSummaryCard />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CheckoutBreadcrumb from '../components/Checkout/CheckoutBreadcrumb.vue'
import CheckoutStepper from '../components/Checkout/CheckoutStepper.vue'
import ShippingOptionsList from '../components/Checkout/ShippingOptionsList.vue'
import PaymentOptionsList from '../components/Checkout/PaymentOptionsList.vue'
import CreditCardForm from '../components/Checkout/CreditCardForm.vue'
import OrderSummaryCard from '../components/Checkout/OrderSummaryCard.vue'

const selectedPayment = ref('credit-card')
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-end bg-black/20 p-4 font-sans sm:p-6" v-if="cartStore.isCartOpen">
    <!-- Modal body -->
    <div class="relative w-full max-w-[460px] h-full bg-white rounded-[24px] shadow-2xl p-6 md:p-8 overflow-y-auto flex flex-col">
      
      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-100">
        <h2 class="text-lg font-bold text-gray-900">Your cart | 1 Item</h2>
        <button @click="cartStore.closeCart" class="text-[#5546ff] hover:text-[#4536df] transition-colors p-1" aria-label="Close cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Banner -->
      <div class="mt-5 bg-[#fef5db] rounded-xl px-4 py-3 z-10">
        <p class="text-[13px] leading-snug text-gray-800 text-center">
          Personalized items will require an additional <span class="font-bold">3-4</span> business days beyond the processing and shipping option.
        </p>
      </div>

      <!-- Item Section -->
      <div class="mt-6 flex gap-4">
        <!-- Image -->
        <div class="w-[100px] shrink-0 bg-white rounded-lg flex items-start justify-center pt-2">
          <img src="/images/jersey.png" alt="Womens Away Jersey" class="w-full h-auto object-contain" />
        </div>

        <!-- Details -->
        <div class="flex-1 flex flex-col">
          <h3 class="font-bold text-[15px] text-gray-900 leading-tight">Womens Away Jersey 25/26 Navy</h3>
          
          <div class="mt-1 flex flex-col text-[13px] text-gray-500">
            <span>Quantity: 1</span>
            <span>Size: 2XS</span>
          </div>

          <div class="mt-3">
            <h4 class="font-bold text-[14px] text-gray-900 leading-tight">Name & Number</h4>
            <p class="text-[13px] text-gray-500 mt-0.5">Player's name: Däbritz, 8</p>
          </div>

          <div class="mt-3 mb-2 border-b border-gray-100 pb-2"></div>
          
          <div class="text-[15px] font-bold text-[#14234b]">
            $160.00
          </div>
        </div>
      </div>

      <!-- Item Actions -->
      <div class="mt-4 flex items-center justify-between z-10">
        <div class="flex items-center gap-4">
          <button class="w-7 h-7 flex flex-col items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
            </svg>
          </button>
          <span class="text-[14px] font-medium text-gray-800 w-2 text-center">1</span>
          <button class="w-7 h-7 flex flex-col items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>
        </div>
        
        <button class="flex items-center gap-1.5 text-[14px] font-medium text-[#5546ff] hover:text-[#4536df] transition-colors">
          <span>Remove</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-[18px] h-[18px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>

      <!-- Spacer -->
      <div class="mt-8 mb-4 lg:mb-8 md:mb-12 h-10 w-full flex-grow cursor-default pointer-events-none">
          <div class="pointer-events-none opacity-0">...</div>
      </div>
      
      <!-- Summary -->
      <div class="mt-auto">
        <div class="flex flex-col gap-2.5 text-[14px] text-gray-700">
          <div class="flex justify-between items-center">
            <span>Subtotal</span>
            <span>$160.00</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Taxes</span>
            <span>Calculated at next step</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </div>
        </div>
        
        <div class="mt-4 flex justify-between items-end">
          <span class="text-xl font-bold text-black">Total</span>
          <span class="text-xl font-bold text-black">$160.00</span>
        </div>

        <!-- Bottom Buttons -->
        <div class="mt-6 flex items-center justify-between gap-4">
          <button @click="cartStore.closeCart" class="text-[#5546ff] hover:text-[#4536df] font-medium text-[15px] transition-colors py-2">
            Continue shopping
          </button>
          <button @click="proceedToCheckout" class="bg-[#5546ff] hover:bg-[#4536df] text-white font-medium text-[15px] rounded-xl px-10 py-3.5 transition-colors shadow-md hover:shadow-lg">
            Checkout
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const proceedToCheckout = () => {
  cartStore.closeCart()
  router.push('/checkout/buyer-info')
}
</script>

<style scoped>
/* Optional overlay transition classes */
</style>

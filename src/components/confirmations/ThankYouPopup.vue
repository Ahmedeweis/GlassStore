<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#7a889b]/80 backdrop-blur-sm transition-opacity duration-300">
    
    <!-- Modal Container -->
    <div 
      class="relative bg-white rounded-[20px] w-full max-w-[640px] shadow-2xl overflow-hidden animate-fade-in-up"
      style="font-family: 'nano banan pro', 'Outfit', sans-serif;"
    >
      
      <!-- Logo Top Left -->
      <div class="absolute top-6 left-6 flex items-center gap-2">
        <!-- SVG Placeholder for Logo (or simple text for now) -->
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0H20C22.2091 0 24 1.79086 24 4V14C24 16.2091 22.2091 18 20 18H4C1.79086 18 0 16.2091 0 14V4C0 1.79086 1.79086 0 4 0Z" fill="#111111"/>
          <!-- Two holes in the mask -->
          <circle cx="8" cy="9" r="2.5" fill="white"/>
          <circle cx="16" cy="9" r="2.5" fill="white"/>
        </svg>
        <span class="font-bold text-[#4B70F5] tracking-wider text-[15px]">VISIORA</span>
      </div>

      <!-- Close Button (Optional, but good UX) -->
      <button @click="closePopup" class="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Center Elements -->
      <div class="pt-[70px] pb-[50px] px-8 flex flex-col items-center text-center">
        
        <!-- Graphic Container with Confetti -->
        <div class="relative w-[300px] h-[300px] mb-8 flex justify-center items-center">
            
          <!-- Confetti Elements (SVG Placeholders) -->
          <svg class="absolute top-4 right-10 w-4 h-4 text-yellow-400 rotate-45" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v14a1 1 0 11-2 0V3a1 1 0 011-1z"/></svg>
          <svg class="absolute top-8 left-16 w-3 h-3 text-[#FF9ECA] -rotate-12" fill="currentColor" viewBox="0 0 20 20"><rect width="20" height="20" rx="4"/></svg>
          <svg class="absolute top-1/2 left-4 w-4 h-4 text-[#4B70F5] -rotate-45" fill="currentColor" viewBox="0 0 20 20"><rect width="20" height="6" rx="2"/></svg>
          <svg class="absolute bottom-1/4 right-8 w-5 h-5 text-[#FFB648] rotate-12" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          <svg class="absolute top-1/3 right-4 w-3 h-3 text-[#40E0D0] rotate-45" fill="currentColor" viewBox="0 0 20 20"><rect width="20" height="20" rx="10"/></svg>
          <svg class="absolute bottom-10 left-10 w-4 h-4 text-[#FF9ECA] -rotate-45" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"/></svg>

          <!-- Large Circle Background -->
          <div class="w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#EBEBFF] to-[#FAF8FF] shadow-[inset_0_4px_20px_rgba(0,0,0,0.05)] border-[8px] border-white flex items-center justify-center relative z-10">
              
             <!-- Placeholder for Open Box & Goggles (requested 'iphone SVG' or 'SVG icon placeholder') -->
             <!-- We will create a representative SVG of a box and goggles -->
             <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-8">
                <!-- Back flap -->
                <path d="M50 80 L170 80 L150 40 L70 40 Z" fill="#E2E8F0" />
                
                <!-- Goggles Placeholder (Floating) -->
                <g transform="translate(60, 10)">
                    <path d="M10 40 C10 10, 90 10, 90 40 C90 70, 70 80, 50 80 C30 80, 10 70, 10 40 Z" fill="url(#lensGradient)" stroke="#333" stroke-width="4"/>
                    <path d="M10 40 L0 30 L5 20 L15 30 Z" fill="#333" />
                    <path d="M90 40 L100 30 L95 20 L85 30 Z" fill="#333" />
                    <!-- Highlight -->
                    <path d="M20 35 C20 25, 45 20, 60 25 M30 45 C30 35, 45 30, 55 35" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" fill="none"/>
                </g>

                <!-- Box Body -->
                <rect x="40" y="90" width="140" height="90" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
                <path d="M40 90 L180 90 L160 110 L60 110 Z" fill="#F1F5F9" />
                
                <!-- Front Flap -->
                <path d="M40 90 L180 90 L195 160 L25 160 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>

                <!-- Left Flap -->
                <path d="M40 90 L10 20 L25 20 L60 90 Z" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
                
                <!-- Right Flap -->
                <path d="M180 90 L210 20 L195 20 L160 90 Z" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
                
                <defs>
                    <linearGradient id="lensGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#A5B4FC" />
                        <stop offset="50%" stop-color="#F472B6" />
                        <stop offset="100%" stop-color="#4F46E5" />
                    </linearGradient>
                </defs>
             </svg>
          </div>
        </div>

        <!-- Typography -->
        <h2 class="text-[32px] font-bold text-[#1a1a1a] mb-2 leading-tight">
          Thank You For Your 
          <!-- The gradient text for 'Order!' -->
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#94A3FF] via-[#D1A3FF] to-[#FF9ECA]">
            Order!
          </span>
        </h2>
        
        <p class="text-[15px] text-[#4A4A4A] font-medium mb-6">
          Your Order Number Is: <span class="font-bold text-[#111] tracking-wide">#V1S10RA-23</span>
        </p>

        <p class="text-[13px] text-[#71717A] max-w-[480px] leading-relaxed mb-6 font-normal">
          thank you for your purchase from visiora. we're excited for you to receive your new<br />
          neovision goggles. you'll receive an email with your order details and a tracking link<br />
          within 24 hours.
        </p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

// We can map the open state to the prop, but for self-contained toggling too
const isOpen = ref(props.modelValue)

// Watch for prop changes if v-model is used
import { watch } from 'vue'
watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal
})

const closePopup = () => {
  isOpen.value = false
  emit('update:modelValue', false)
  emit('close')
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>

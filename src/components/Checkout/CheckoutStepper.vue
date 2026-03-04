<template>
    <div class="checkout-stepper w-full flex items-center justify-between border-b border-gray-100 pb-10">
        <div v-for="(step, index) in steps" :key="index" class="flex items-center gap-4 relative">

            <!-- Icon/Number Circle -->
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors duration-300"
                :class="[
                    isCompleted(step) ? 'bg-[#E5E5FF] text-brand-primary' : '',
                    isActive(step) ? 'bg-[#E5E5FF] text-brand-primary ring-2 ring-brand-primary/20 ring-offset-2' : '',
                    !isCompleted(step) && !isActive(step) ? 'bg-gray-100 text-gray-400' : ''
                ]">
                <!-- Checkmark for completed -->
                <svg v-if="isCompleted(step)" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>

                <!-- Document Icon for Payment (Placeholder based on design) -->
                <svg v-else-if="step.name === 'Payment Methods' && !isCompleted(step)" class="w-5 h-5" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                    </path>
                </svg>

                <!-- Check Icon for Confirmation (Placeholder) -->
                <svg v-else-if="step.name === 'Confirmation' && !isCompleted(step)" class="w-5 h-5" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <!-- No icon for Active/Current specific state in design, just the colored circle, but let's use a generic one if needed or leave blank based on visual -->
                <svg v-else-if="isActive(step) && step.name === 'Customer Information'" class="w-5 h-5" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>

            <!-- Connecting Line -->
            <div v-if="index < steps.length - 1"
                class="absolute top-1/2 left-10 w-[calc(100%+3rem)] h-[2px] -translate-y-1/2 -z-0"
                :class="isCompleted(step) ? 'bg-gray-200' : 'bg-gray-100'" style="width: 100px;">
                <!-- Fixed width for connector to match design spacing roughly -->
            </div>

            <!-- Text -->
            <div class="flex flex-col ml-2">
                <span class="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-0.5">{{ step.subtitle
                    }}</span>
                <span class="text-xs font-semibold"
                    :class="isActive(step) || isCompleted(step) ? 'text-gray-900' : 'text-gray-400'">
                    {{ step.name }}
                </span>
            </div>

        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    currentStep: {
        type: String,
        required: true
    }
})

const steps = [
    { name: 'Shopping Cart', subtitle: '1st Step' },
    { name: 'Customer Information', subtitle: '2nd Step' },
    { name: 'Payment Methods', subtitle: '3rd Step' },
    { name: 'Confirmation', subtitle: '4th Step' }
]

const currentIndex = computed(() => steps.findIndex(s => s.name === props.currentStep))

const isCompleted = (step) => {
    const stepIndex = steps.findIndex(s => s.name === step.name)
    return stepIndex < currentIndex.value
}

const isActive = (step) => {
    return step.name === props.currentStep
}
</script>

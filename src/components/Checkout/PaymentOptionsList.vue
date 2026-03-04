<template>
    <div class="payment-options-list w-full space-y-4">
        <div class="mb-6">
            <h2 class="text-2xl font-bold font-outfit text-gray-900 mb-1">Payment</h2>
            <p class="text-sm text-gray-500">Please choose a payment method</p>
        </div>

        <!-- Credit Card Option -->
        <label class="flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all"
            :class="modelValue === 'credit-card' ? 'border-[#3B5998]/30 bg-[#F5F8FF]' : 'border-gray-100 hover:border-gray-200 bg-white'">
            <div class="flex items-start gap-4">
                <div class="mt-1">
                    <input type="radio" :value="'credit-card'" :checked="modelValue === 'credit-card'"
                        @change="$emit('update:modelValue', 'credit-card')"
                        class="w-4 h-4 text-brand-primary accent-brand-primary focus:ring-brand-primary rounded-full" />
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-1">Credit Card</h4>
                    <p class="text-xs text-gray-500 mt-2 max-w-sm leading-relaxed">
                        Safe money transfer using your bank account. Safe payment method. Visa, MasterCard, Maestro,
                        Discover, American Express.
                    </p>
                </div>
            </div>
            <!-- Placeholder Logos -->
            <div class="flex gap-2">
                <div class="font-bold italic text-[#1A1F71] text-lg">VISA</div>
                <div class="flex">
                    <div class="w-4 h-4 rounded-full bg-[#EB001B] opacity-80 mix-blend-multiply"></div>
                    <div class="w-4 h-4 rounded-full bg-[#F79E1B] opacity-80 mix-blend-multiply -ml-2"></div>
                </div>
            </div>
        </label>

        <!-- PayPal Option -->
        <label class="flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all"
            :class="modelValue === 'paypal' ? 'border-[#3B5998]/30 bg-[#F5F8FF]' : 'border-gray-100 hover:border-gray-200 bg-white'">
            <div class="flex items-start gap-4">
                <div class="mt-1">
                    <input type="radio" :value="'paypal'" :checked="modelValue === 'paypal'"
                        @change="$emit('update:modelValue', 'paypal')"
                        class="w-4 h-4 text-brand-primary accent-brand-primary focus:ring-brand-primary rounded-full" />
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-1">PayPal</h4>
                    <p class="text-xs text-gray-500 mt-2 max-w-sm leading-relaxed">
                        Safe payment online. Credit card needed. PayPal account is not necessary.
                    </p>
                </div>
            </div>
            <!-- Placeholder Logo -->
            <div class="font-bold italic text-[#003087] text-lg">PayPal</div>
        </label>

    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true
    }
})
defineEmits(['update:modelValue'])
</script>

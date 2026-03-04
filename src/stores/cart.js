import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const isCartOpen = ref(false)

    const openCart = () => {
        isCartOpen.value = true
    }

    const closeCart = () => {
        isCartOpen.value = false
    }

    const toggleCart = () => {
        isCartOpen.value = !isCartOpen.value
    }

    return {
        isCartOpen,
        openCart,
        closeCart,
        toggleCart
    }
})

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: () => import('../views/ProductDetailsView.vue')
  },
  {
    path: '/checkout/buyer-info',
    name: 'buyer-info',
    component: () => import('../views/BuyerInfoView.vue')
  },
  {
    path: '/checkout/payment-methods',
    name: 'payment-methods',
    component: () => import('../views/PaymentMethodsView.vue')
  },
  {
    path: '/checkout/confirmation',
    name: 'confirmation',
    component: () => import('../views/ConfirmationView.vue')
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})
export default router

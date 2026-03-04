<template>
  <div class="relative min-h-screen">
    <Header />

    <main class="flex flex-col flex-grow">
      <HeroSection />
      <ShopByCategory />
      <MostLoved />
      <AdBanner />
      <ExclusiveOffers />
      <Newsletter />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroSection from '../components/Home/HeroSection.vue'
import ShopByCategory from '../components/Home/ShopByCategory.vue'
import MostLoved from '../components/Home/MostLoved.vue'
import AdBanner from '../components/Home/AdBanner.vue'
import ExclusiveOffers from '../components/Home/ExclusiveOffers.vue'
import Newsletter from '../components/Home/Newsletter.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped></style>
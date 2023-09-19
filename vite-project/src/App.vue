<template>
  <div class="overflow-hidden">
    <Navbar />
    <RouterView style="margin-top: 72px;" />
    <!-- <Footer></Footer> -->
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components: { Navbar, Footer, RouterView }
}
</script>
<style scoped></style>
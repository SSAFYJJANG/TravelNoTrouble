<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import router from "@/router"

// 매 라우터 이동마다 새로고침
router.afterEach((to, from) => {
  if (from.name && to.name && from.name !== to.name) {
    router.go(0);
  }
});

onMounted(() => {
  loadScripts(); // .js load
});

async function loadScripts() {
  await import(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
  await import("/src/assets/js/embla/embla.min.js");
  await import("/src/assets/js/embla/script.js");
  await import("/src/assets/js/web/assets/jquery/jquery.min.js");
  await import("/src/assets/js/dropdown/js/navbar-dropdown.js");
  await import("/src/assets/js/smoothscroll/smooth-scroll.js");
  await import("/src/assets/js/parallax/jarallax.js");
  await import("/src/assets/js/theme/js/script.js");
}
</script>

<template>
  <header>
    <Header />
  </header>

  <RouterView />

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 3rem);
}
</style>

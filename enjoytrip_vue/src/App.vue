<script setup>
import { ref , onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import router from "@/router"

const path = ref("");

// 매 라우터 이동마다 새로고침
router.afterEach((to, from) => {
  if (from.name && to.name && from.name !== to.name) {
    router.go(0);
  }
    path.value = to.name;
    console.log(to.name);
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
  <header :class="path">
    <Header />
  </header>

  <RouterView />

  <footer :class="path">
    <Footer />
  </footer>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 3rem);
}
.auth-login, .auth-signup, .auth-pwd {
  display: none;
}
footer.place {
  display: none;
}
</style>

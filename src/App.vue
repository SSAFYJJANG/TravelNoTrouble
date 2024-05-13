<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import Header from "@/components/header/Header.vue";
import Footer from "./components/Footer.vue";
import BoardList from "./components/board/BoardList.vue";
import Login from "@/components/user/Login.vue";
import Signup from "@/components/user/Signup.vue";

// 매 라우터 이동마다 새로고침
const router = useRouter();
router.afterEach((to, from) => {
  if (from.name && to.name && from.name !== to.name) {
    router.go(0);
  }
});

onMounted(() => {
  loadScripts(); // 초기 로드
});

async function loadScripts() {
  await import(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
  await import("/src/assets/js/embla/embla.min.js");
  await import("/src/assets/js/embla/script.js");
  await import("/src/assets/js/countdown/countdown.js");
  await import("/src/assets/js/web/assets/jquery/jquery.min.js");
  await import("/src/assets/js/dropdown/js/navbar-dropdown.js");
  await import("/src/assets/js/smoothscroll/smooth-scroll.js");
  await import("/src/assets/js/parallax/jarallax.js");
  await import("/src/assets/js/theme/js/script.js");
}

const loginModalCheck = ref(false);
const signupModalCheck = ref(false);
const emit = defineEmits(["toggleLoginModal", "toggleSignupModal"]);
const toggleLoginModal = () => {
  loginModalCheck.value = !loginModalCheck.value;
};
const toggleSignupModal = () => {
  signupModalCheck.value = !signupModalCheck.value;
};
</script>

<template>
  <header>
    <Header
      :loginModalCheck="loginModalCheck"
      :signupModalCheck="signupModalCheck"
      @toggleLoginModal="toggleLoginModal"
      @toggleSignupModal="toggleSignupModal"
    />
  </header>

  <RouterView />

  <footer>
    <Footer />
  </footer>

  <!-- Modal -->
  <Login
    :loginModalCheck="loginModalCheck"
    @toggleLoginModal="toggleLoginModal"
  />
  <Signup
    :signupModalCheck="signupModalCheck"
    @toggleSignupModal="toggleSignupModal"
  />
</template>

<style scoped></style>

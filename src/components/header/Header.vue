<script setup>
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderMenu from "@/components/header/HeaderMenu.vue";

const props = defineProps(["loginModalCheck", "signupModalCheck"]);
const emit = defineEmits(["toggleLoginModal", "toggleSignupModal"]);
const toggleLoginModal = () => {
  emit("toggleLoginModal");
};
const toggleSignupModal = () => {
  emit("toggleSignupModal");
};
</script>

<template>
  <section
    data-bs-version="5.1"
    class="menu menu6 cid-uc9QV2Aj9f"
    once="menu"
    id="menu06-38"
  >
    <nav
      class="navbar navbar-dropdown opacityScroll navbar-fixed-top navbar-expand-lg"
    >
      <div class="container">
        <!-- Logo -->
        <HeaderLogo />
        <!-- menu -->
        <HeaderMenu
          :loginModalCheck="loginModalCheck"
          :signupModalCheck="signupModalCheck"
          @toggleLoginModal="toggleLoginModal"
          @toggleSignupModal="toggleSignupModal"
        />
      </div>
    </nav>
  </section>
</template>

<style scoped></style>

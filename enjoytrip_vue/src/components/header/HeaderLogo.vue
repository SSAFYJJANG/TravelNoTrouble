<script setup>
import { ref } from "vue";
const logoImage = ref("/src/assets/images/logo-h_lvvzt8wf.png");
</script>

<template>
  <div class="navbar-brand">
    <span class="navbar-logo">
      <router-link :to="{ name: 'home' }">
        <img :src="logoImage" alt="Travel No Trouble" style="height: 2.2rem" />
      </router-link>
    </span>
    <span class="navbar-caption-wrap">
      <router-link
        class="navbar-caption text-black display-4"
        :to="{ name: 'home' }"
      >
        Travel No Trouble
      </router-link>
    </span>
  </div>
</template>

<style scoped></style>

<script setup>
import MenuPadding from "@/components/common/MenuPadding.vue";
</script>

<template>
  <div class="page">
    <MenuPadding />
    <RouterView />
    <!-- <RouterView style="min-height: calc(100vh - 40px)" /> -->
  </div>
</template>

<style scoped></style>

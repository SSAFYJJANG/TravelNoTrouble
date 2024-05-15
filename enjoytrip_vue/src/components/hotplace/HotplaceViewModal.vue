<script setup>
import { defineProps } from "vue";

const props = defineProps(["card"]);
</script>

<template>
  <div>
    <p>ID: {{ props.card.id }}</p>
    <p>title: {{ props.card.title }}</p>
    <!-- <div :style="{ backgroundImage: `url(${props.card.cardImg})` }"></div> -->
    <img class="hotplace-img" :src="`${props.card.cardImg}`" />
  </div>
</template>

<style scoped>
.hotplace-img {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>

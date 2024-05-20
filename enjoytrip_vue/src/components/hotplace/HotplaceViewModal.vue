<script setup>
import { defineProps, onMounted } from "vue";

const props = defineProps(["card"]);


console.log(props.card);

// feed_info.userid 로 username 들고오기
const writer_info = {
  username: "홍길동",
};
</script>

<template>
  <div>
    <div class="d-flex justify-content-center">
      <!-- <img class="hotplace_img border" :src="`${props.card.image}`" /> -->
    </div>
    <!-- <p>ID: {{ props.hotplace_id }}</p> -->
    <!-- <h5>{{ props.card.title }}</h5> -->
    <!-- <p>{{ writer_info.username }}</p> -->
    <!-- <p>{{ feed_info.overview }}</p> -->
  </div>
</template>

<style scoped>
.hotplace_img {
  height: 250px;
  width: 400px;
  object-fit: cover;
}
</style>

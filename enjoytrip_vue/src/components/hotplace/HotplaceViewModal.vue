<script setup>
import { defineProps } from "vue";

const props = defineProps(["hotplace_id"]);

// props.hotplace_id 로 DB hotplace 테이블에서 들고오기
const feed_info = {
  id: props.hotplace_id,
  title: "제목0",
  userid: "ssafy",
  overview:
    "테스트 123456 ㅁㄴㅇㄹ ㅂㅈㄷㄱㅂㅈㄺ 테스트 ㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄱqwer",
  image: "/src/assets/images/shop7.jpg",
};

// feed_info.userid 로 username 들고오기
const writer_info = {
  username: "홍길동",
};
</script>

<template>
  <div>
    <div class="d-flex justify-content-center">
      <img class="hotplace_img border" :src="`${feed_info.image}`" />
    </div>
    <!-- <p>ID: {{ props.hotplace_id }}</p> -->
    <h5>{{ feed_info.title }}</h5>
    <p>{{ writer_info.username }}</p>
    <p>{{ feed_info.overview }}</p>
  </div>
</template>

<style scoped>
.hotplace_img {
  height: 250px;
  width: 400px;
  object-fit: cover;
}
</style>

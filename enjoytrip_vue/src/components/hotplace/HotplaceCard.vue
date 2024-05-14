<script setup>
import { defineProps } from "vue";
const props = defineProps(["cardImg"]);
console.log(props.cardImg);
const hotplace_card = document.querySelector("#hotplace-card");
</script>

<template>
  <div class="col-sm-6 card col-md-4 col-lg-3">
    <div
      id="hoptplace-card"
      :style="{ backgroundImage: `url(${props.cardImg})` }"
      class="card-wrap"
    >
      <div class="content-wrap">
        <div class="mbr-section-btn card-btn align-center">
          <a class="btn btn-white display-7" href="https://mobiri.se">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#hoptplace-card {
  /* background-image: url(props.cardImg); */
  /* background-image: url("/src/assets/images/shop7.jpg"); */
  background-size: cover;
  background-position: center center;
}
#hotplace-card:before {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

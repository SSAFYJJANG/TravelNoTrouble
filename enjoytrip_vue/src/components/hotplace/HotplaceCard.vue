<script setup>
import { ref, defineProps } from "vue";
import HotplaceView from "@/components/hotplace/HotplaceView.vue";

const props = defineProps(["cardImg"]);
// console.log(props.cardImg);

const hotplace_card = document.querySelector("#hotplace-card");

const viewModalCheck = ref(false);
const toggleViewModal = () => {
  console.log(viewModalCheck.value);
  viewModalCheck.value = !viewModalCheck.value;
  console.log(viewModalCheck.value);
};
</script>

<template>
  <div class="col-sm-6 card col-md-4 col-lg-3">
    <div
      :style="{ backgroundImage: `url(${props.cardImg})` }"
      class="card-wrap hoptplace-card"
    >
      <div class="content-wrap card">
        <div id="card-behind" class="content-wrap">
          <div class="mbr-section-btn card-btn align-center">
            <a class="btn btn-white display-7" @click="toggleViewModal">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <HotplaceView :viewModalCheck="viewModalCheck" />
</template>

<style scoped>
.hoptplace-card {
  background-size: cover;
  background-position: center center;
}
.hotplace-card::before {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

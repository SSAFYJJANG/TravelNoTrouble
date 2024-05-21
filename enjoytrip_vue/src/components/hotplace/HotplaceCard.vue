<script setup>
import { ref, defineProps } from "vue";
import HotplaceViewModal from "@/components/hotplace/HotplaceViewModal.vue";

const props = defineProps(["card"]);
const { VITE_VUE_API_URL } = import.meta.env;
const viewModalCheck = ref(false);

const toggleViewModal = () => {
  viewModalCheck.value = !viewModalCheck.value;
};
</script>

<template>
  <div class="col-sm-6 card col-md-4 col-lg-3">
    <div
      :style="{
        backgroundImage: `url(${VITE_VUE_API_URL}/img/${props.card.image})`,
      }"
      class="card-wrap hoptplace-card rounded-4 shadow-sm"
    >
      <div class="content-wrap card">
        <div id="card-behind" class="content-wrap">
          <div class="mbr-section-btn card-btn align-center">
            <div class="btn text-white fw-light fs-5">
              <p>{{ props.card.title }}</p>
            </div>
            <a
              class="btn btn-white px-4 py-3 display-7"
              @click="toggleViewModal"
            >
              자세히 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-wrap z-3" v-show="viewModalCheck">
    <div class="modal-container">
      <div class="modal-btn d-flex justify-content-end">
        <button @click="toggleViewModal" class="display-4">✖</button>
      </div>
      <HotplaceViewModal :card="props.card" class="mt-2" />
    </div>
  </div>
</template>

<style scoped>
.hoptplace-card {
  background-size: cover;
  background-position: center center;
}
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>

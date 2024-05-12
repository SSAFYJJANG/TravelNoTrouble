<script setup>
import { defineProps } from "vue";
import LoginModal from "@/components/user/LoginModal.vue";

const props = defineProps(["loginModalCheck"]);
const emit = defineEmits(["toggleLoginModal"]);
const toggleLoginModal = () => {
  emit("toggleLoginModal");
};
</script>

<template>
  <!-- <button @click="toggleLoginModal">Login</button> -->
  <div class="modal-wrap" v-show="loginModalCheck">
    <div class="modal-container">
      <div class="modal-btn d-flex justify-content-end">
        <button
          @click="toggleLoginModal"
          class="btn btn-primary-emphasis display-4"
        >
          ✖
        </button>
      </div>
      <LoginModal />
    </div>
  </div>
</template>

<style scoped>
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
  max-width: 1100px;
  background: #edefeb;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
@media (max-width: 1100px) {
  .modal-container {
    max-width: 90%;
  }
}
</style>

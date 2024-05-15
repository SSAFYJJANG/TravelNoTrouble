<script setup>
import { defineProps } from "vue";
import SignupModal from "@/components/user/SignupModal.vue";

const props = defineProps(["signupModalCheck"]);
const emit = defineEmits(["toggleSignupModal"]);
const toggleSignupModal = () => {
  console.log("클릭");
  emit("toggleSignupModal");
};
</script>

<template>
  <!-- <button @click="toggleSignupModal">Signup</button> -->
  <div class="modal-wrap z-3" v-show="signupModalCheck">
    <div class="modal-container">
      <div class="modal-btn d-flex justify-content-end">
        <button @click="toggleSignupModal" class="display-4">✖</button>
      </div>
      <SignupModal />
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

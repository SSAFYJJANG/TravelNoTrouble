<script setup>
const props = defineProps(["viewModalCheck"]);
const emit = defineEmits(["toggleViewModal"]);
const toggleViewModal = () => {
  emit("toggleViewModal");
};
</script>

<template>
  <div class="modal-wrap z-3" v-show="viewModalCheck">
    <div class="modal-container">
      <!-- -->
      <div>HELLO</div>
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

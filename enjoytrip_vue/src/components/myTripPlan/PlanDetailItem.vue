<script setup>
import { defineProps } from "vue";

const props = defineProps(["detail", "day", "first_day"]);
</script>

<template>
  <div
    v-if="props.detail.plan_days_id - props.first_day + 1 == day"
    class="row border rounded my-2 mx-4 py-2 align-items-center"
    style="font-size: 14px"
  >
    <div class="col-4">
      <!-- 이미지 -->
      <img
        :src="`/src/assets/images/${props.detail.first_image}`"
        style="width: 150px; height: 100px; object-fit: cover"
        class="rounded-2"
      />
    </div>

    <div class="col-8">
      <div class="d-flex mb-2">
        <p class="fs-6 fw-bold m-0">{{ props.detail.title }}</p>
        <p class="ps-2 m-0">({{ props.detail.content_name }})</p>
      </div>

      <p class="m-0">{{ props.detail.addr1 }} {{ props.detail.aaddr1 }}</p>
      <div class="position-relative d-flex pt-2 pe-4">
        <p class="m-0 px-2 py-2 rounded-1" style="background-color: #ebebeb">
          {{ props.detail.overview }}
        </p>
        <i class="position-absolute bottom-0 end-0 bi bi-pencil-square"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

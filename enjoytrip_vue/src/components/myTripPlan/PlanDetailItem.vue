<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { modifyDetail } from "@/api/plan";
import { httpStatusCode } from "@/util/http-status";

const props = defineProps([
  "detail",
  "day",
  "first_day",
  "isModifyMode",
  "modifyDetailId",
  "index",
]);
const emit = defineEmits(["goModifyMode"]);

const clickModify = () => {
  console.log("수정할 플랜 디테일 아이디", props.detail.plan_detail_id);
  emit("goModifyMode", props.detail.plan_detail_id, true);
};

const completeModify = () => {
  console.log("수정후", props.detail.overview);
  modifyDetail(
    {
      plan_detail_id: props.detail.plan_detail_id,
      overview: props.detail.overview,
    },
    (response) => {
      if (response.status === httpStatusCode.OK) {
        console.log("수정 성공");
        emit("goModifyMode", props.detail.plan_detail_id, false);
      }
    },
    async (error) => {
      console.log(error);
    }
  );
};
</script>

<template>
  <!-- <div class="bg-primary fs-6">{{ props.detail }}</div> -->
  <div
    v-if="props.detail.plan_days_id - props.first_day + 1 == day"
    class="row border rounded my-2 mx-4 py-2 align-items-center"
    style="font-size: 14px"
  >
    <div class="col-4">
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
        <textarea
          v-if="modifyDetailId == props.detail.plan_detail_id && isModifyMode"
          class="m-0 px-2 py-2 rounded-1 w-100"
          v-model="props.detail.overview"
        />
        <p
          v-else
          class="m-0 px-2 py-2 rounded-1 w-100"
          style="background-color: #ebebeb"
        >
          {{ props.detail.overview }}
        </p>

        <button
          v-if="modifyDetailId == props.detail.plan_detail_id && isModifyMode"
          class="position-absolute bottom-0 end-0 p-0"
          @click="completeModify"
        >
          <i class="bi bi-check-square" style="color: gray"></i>
        </button>
        <button
          v-else
          class="position-absolute bottom-0 end-0 p-0"
          @click="clickModify"
        >
          <i class="bi bi-pencil-square" style="color: gray"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar-track {
  border-radius: 0.125rem;
  background-color: white;
}
::-webkit-scrollbar {
  width: 0.25rem;
  border-radius: 0.125rem;
}
::-webkit-scrollbar-thumb {
  border-radius: 0.125rem;
  /* background-color: gray; */
  background-color: lightgray;
}
</style>

<script setup>
import { ref, defineProps } from "vue";
import PlanDetailItem from "./PlanDetailItem.vue";

const props = defineProps([
  "plan",
  "details",
  "selectedDay",
  "isModifyMode",
  "modifyDetailId",
]);
const emit = defineEmits(["clickDay", "goModifyMode"]);

const clickDay = (day) => {
  emit("clickDay", day);
};

const goModifyMode = (detailId, onoff) => {
  emit("goModifyMode", detailId, onoff);
};
</script>

<template>
  <div class="px-3">
    <!-- 여행 계획 헤더 -->
    <div>
      <div class="d-flex justify-content-center">
        <span
          class="d-flex justify-content-center fw-light mb-3"
          style="font-size: 15px"
        >
          {{ props.plan.start_date }}
        </span>
        <span
          v-if="props.plan.end_date"
          class="d-flex justify-content-center fw-light mb-3 ps-1"
          style="font-size: 15px"
        >
          ~ {{ props.plan.end_date }}
        </span>
      </div>
      <p class="d-flex justify-content-center fs-4 fw-light mb-2">
        {{ props.plan.title }}
      </p>
    </div>

    <button
      v-for="(cnt, index) in props.plan.days"
      class="border fs-6 m-0"
      @click="clickDay(index + 1)"
    >
      {{ index + 1 }}일차
    </button>
    <hr class="mt-0" />

    <!-- 여행 계획 내용 -->
    <div id="scroll">
      <div
        v-if="props.details != null && props.details.length == 0"
        class="d-flex justify-content-center fs-6"
      >
        계획이 없습니다.
      </div>
      <PlanDetailItem
        v-else
        v-for="(detail, index) in details"
        :detail="detail"
        :index="index"
        :day="selectedDay"
        :first_day="props.plan.first_day"
        :isModifyMode="isModifyMode"
        :modifyDetailId="modifyDetailId"
        @goModifyMode="goModifyMode"
      />
    </div>
  </div>
</template>

<style scoped>
#scroll {
  max-height: 60vh;
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

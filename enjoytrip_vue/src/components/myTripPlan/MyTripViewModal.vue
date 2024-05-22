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

const deletePlan = () => {
  console.log("삭제할 플랜", props.plan.plan_id);
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

    <!-- N일차 버튼 -->
    <div id="scroll-x" class="border-bottom">
      <button
        v-for="(cnt, index) in props.plan.days"
        class="border fs-6 m-0 pb-1"
        style="
          text-align: center;
          text-decoration: none;
          width: 55px;
          border-radius: 5px 5px 0 0;
        "
        @click="clickDay(index + 1)"
      >
        <span style="font-size: 13px">{{ index + 1 }}일차</span>
      </button>
    </div>

    <!-- 여행 계획 내용 -->
    <div id="scroll" class="mt-3">
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

    <!-- 삭제 -->
    <div class="d-flex justify-content-end" @click="deletePlan">
      <button class="btn btn-outline-danger px-2 p-0 me-4 fs-6 fw-light">
        전체삭제
      </button>
    </div>
  </div>
</template>

<style scoped>
#scroll {
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
#scroll-x {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
::-webkit-scrollbar-track {
  border-radius: 0.125rem;
  background-color: white;
}
::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.125rem;
}
::-webkit-scrollbar-thumb {
  border-radius: 0.125rem;
  /* background-color: gray; */
  background-color: lightgray;
}
</style>

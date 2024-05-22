<script setup>
import { defineProps } from "vue";
import PlanDetailItem from "./PlanDetailItem.vue";

const props = defineProps(["plan", "details"]);
</script>

<template>
  <div id="modal" class="px-3">
    <!-- 여행 계획 헤더 -->
    <div>
      <p class="fs-6 fw-light mb-3">
        {{ props.plan.start_date }} ~ {{ props.plan.end_date }}
      </p>
      <p class="d-flex justify-content-center fs-4 fw-light">
        {{ props.plan.title }}
      </p>
    </div>

    <hr />

    <!-- 여행 계획 내용 -->
    <div v-if="props.details != null && props.details.length == 0">
      아직 계획이 없습니다.
    </div>
    <PlanDetailItem v-else v-for="detail in props.details" :detail="detail" />
  </div>
</template>

<style scoped>
#modal {
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

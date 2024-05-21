<template>
    <button @click="toggleMap" class="btn btn-outline-danger canlendar-btn w-100 p-2">
        <span v-if="isCalendarOpen"> 달력보기 </span>
        <span v-else>달력 닫기</span>
    </button>
    <PlanDurCalendar v-show="isCalendarOpen"/>
</template>

<script setup>
import { ref } from 'vue';
import PlanDurCalendar from "@/components/attraction/PlanDurCalendar.vue";
// 달력 열고 닫기 추가 ---------------------------
// 달력 표시 상태를 제어하는 반응형 속성
const isCalendarOpen = ref(false);
// 달력 표시 상태를 토글하는 함수
const toggleMap = () => {
    isCalendarOpen.value = !isCalendarOpen.value;
};
</script>

<style scoped>

.canlendar-btn{
  margin : auto !important;
  padding : 0.5rem, 1rem !important;
  font-size: small;
}
</style>

<script setup>
import { ref, computed, watch } from 'vue';
import PlanDurCalendar from "@/components/attraction/PlanDurCalendar.vue";

import { usePlanStore } from "@/stores/plan";
const planStore = usePlanStore();

// 달력 열고 닫기 추가 ---------------------------
// 달력 표시 상태를 제어하는 반응형 속성
const isCalendarOpen = ref(false);
// 달력 표시 상태를 토글하는 함수
const toggleMap = () => {
    isCalendarOpen.value = !isCalendarOpen.value;
};

const startDate = ref(planStore.startDate);
const endDate = ref(planStore.endDate);

watch(startDate, (newDate) => {
    planStore.setStartDate(newDate);
});

watch(endDate, (newDate) => {
    planStore.setEndDate(newDate);
});

const formattedStartDate = computed({
    get() {
        return startDate.value.toISOString().split('T')[0];
    },
    set(value) {
        startDate.value = new Date(value);
        if (endDate.value < startDate.value) {
            endDate.value = startDate.value;
        }
    }
});

const formattedEndDate = computed({
    get() {
        return endDate.value.toISOString().split('T')[0];
    },
    set(value) {
        endDate.value = new Date(value);
    }
});

</script>

<template>
    <div class="d-flex startDay inputs">
        <label for="start" class="">
            <strong>
                <i class="fa-solid fa-suitcase-rolling"></i> Start:
            </strong>
        </label>
        <input type="date" id="start" class="input-day" name="trip-start" v-model="formattedStartDate" />
    </div>

    <div class="d-flex endDay inputs">
        <label for="start">
            <strong>
                <i class="fa-solid fa-house-flag"></i> End:
            </strong>
        </label>
        <input type="date" id="start" name="trip-start" class="input-day" :min="formattedStartDate"
            v-model="formattedEndDate" />
    </div>

    <button @click="toggleMap" class="btn btn-outline-danger canlendar-btn w-100 p-2">
        <i class="fa-regular fa-calendar-check"></i>
        <span v-if="isCalendarOpen"> 달력닫기 </span>
        <span v-else>달력 보기</span>
    </button>
    <PlanDurCalendar v-show="isCalendarOpen" :startDate="startDate" :endDate="endDate" />
</template>

<style scoped>
.canlendar-btn {
    margin: auto !important;
    padding: 0.5rem, 1rem !important;
    font-size: small;
}

i {
    margin: 0 .2rem;
}
</style>

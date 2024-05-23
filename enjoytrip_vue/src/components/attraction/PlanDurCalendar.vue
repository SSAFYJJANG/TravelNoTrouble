<script setup>
import { ref, computed, defineProps, watch } from 'vue';
import { CButton } from '@coreui/vue';

const calendar = ref(null);
function moveToday() {
    calendar.value.move(new Date());
}
const props = defineProps({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});
const selectedColor = ref('blue');
const today = ref(new Date().toISOString().split('T')[0]);
const attrs = computed(() => [
    {
        key: 'test',
        highlight: 'gray',
        dates: { start: props.startDate, end: props.endDate },
    },
    {
        key: 'today',
        dot: "red",
        dates: new Date()
    }
]);
function moveStartDay() {
    calendar.value.move(props.startDate);
}

watch(() => props.startDate, (newDate) => {
    moveStartDay();
});

</script>

<template>
    <div v-if="props.startDate">
        <VCalendar expanded ref="calendar" :initial-page="{
            month: props.startDate.getMonth() + 1,
            year: props.startDate.getFullYear()
        }" is-dark="system" :color="selectedColor" :attributes="attrs">
            <template #footer>
                <CButton class="btn btn-outline-danger canlendar-btn w-100 p-2" @click="moveToday">
                    Today ({{ today }})
                </CButton>
            </template>
        </VCalendar>
    </div>
</template>

<style scoped>
.canlendar-btn {
    margin: auto !important;
    padding: 0.5rem, 1rem !important;
    font-size: small;
}
</style>

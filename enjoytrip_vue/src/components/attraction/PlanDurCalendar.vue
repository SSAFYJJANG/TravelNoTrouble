<script setup>
import { ref } from 'vue';
const selectedColor = ref('blue');
const startDate = ref(new Date());
const endDate = ref(new Date());

const attrs = ref([
    {
        key: 'test',
        highlight: true,
        dates: { start: startDate.value, end: endDate.value },
    }
]);
</script>

<template>
    <div v-if="startDate">
        <VCalendar style="width: 100%"
            :initial-page="{ month: startDate.getMonth() + 1, year: startDate.getFullYear() }" :color="selectedColor"
            :attributes="attrs" />
    </div>
</template>

<style scoped></style>
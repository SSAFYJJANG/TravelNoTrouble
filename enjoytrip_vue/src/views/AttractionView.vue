<script setup>
import SearchOffCanvas from '@/components/attraction/SearchOffCanvas.vue';
import AttractionMap from '@/components/attraction/AttractionMap.vue';
import TripPlanOffCanvas from '@/components/attraction/TripPlanOffCanvas.vue';

</script>

<template>
    <div class="page ">
        <div class="place">
            <!--ㄴ 검색 off canvas -->
            <SearchOffCanvas />
            <!--ㄴ AttractionMap map -->
            <AttractionMap />
            <!--ㄴ 여행 계획 off canvas -->
            <TripPlanOffCanvas />
        </div>
    </div>
</template>

<style scoped>
.place {
    width: 100%;
    height: calc(100vh - 70px);
    position: absolute;
    left: 0;
    top: 70px;
    margin: 0;
    padding: 0;
}
</style>
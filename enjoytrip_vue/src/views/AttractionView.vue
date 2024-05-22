<script setup>
import SearchOffCanvas from '@/components/attraction/SearchOffCanvas.vue';
import AttractionMap from '@/components/attraction/AttractionMap.vue';
import TripPlanOffCanvas from '@/components/attraction/TripPlanOffCanvas.vue';
import { useAttractionStore } from "@/stores/attraction";
import { onMounted } from "vue";
const attractionStore = useAttractionStore();
const { getAttractionList, clickSidoCard } = attractionStore;

onMounted(async () => {
    if (clickSidoCard != null) {
        await Promise.all([
            getAttractionList({
                sido_code: clickSidoCard.sido_code,
            }),
        ]);
        clickSidoCard.value = null;
    }
});

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
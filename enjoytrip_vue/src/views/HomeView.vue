<script setup>
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRouter, } from "vue-router";
import HeroImage from '@/components/home/HeroImage.vue';
import CountDown from '@/components/home/CountDown.vue';
import PopularHotPlacesList from '@/components/home/PopularHotPlacesList.vue';
import Weather from "@/components/home/Weather.vue";
import RecommendedAttraction from "@/components/home/RecommendedAttraction.vue";
import AreaAttractionList from "@/components/home/AreaAttractionList.vue";
import { useUserStore } from "@/stores/user";
import { useHotplaceStore } from "@/stores/hotplace";
import { useAttractionStore } from "@/stores/attraction";

const userStore = useUserStore();
const { getUsersCnt, userTotalCnt } = userStore;

const hotplaceStore = useHotplaceStore();
const { getTotalHotplaceCount, hotplaceCnt,
    getBestHotplaceFeed, bestFeedList } = hotplaceStore;

const attractionStore = useAttractionStore();
const { getTotalAttractionCount, attractionCnt,
    getRecommendationAttraction, recommendationAttraction,
    sidoList } = attractionStore;

// const attractionCnt = ref(571);


onMounted(async () => {
    await Promise.all([
        getUsersCnt(),
        getTotalHotplaceCount(),
        getTotalAttractionCount(),
        getRecommendationAttraction(),
        getBestHotplaceFeed()
    ]);
});

</script>


<template>
    <div class="homepage page">
        <!-- 메인이미지&제목 -->
        <HeroImage />
        <!-- user & attractions countdown -->
        <CountDown :user-Cnt="userStore.userTotalCnt" :hotplace-cnt="hotplaceStore.hotplaceCnt"
            :attraction-cnt="attractionStore.attractionCnt" />
        <Weather />
        <!-- 추천 & 지역 여행지 -->
        <RecommendedAttraction :recommendation-attraction="attractionStore.recommendationAttraction" />
        <AreaAttractionList :sido-list="attractionStore.sidoList" />
        <!-- hotplace 인기글 -->
        <PopularHotPlacesList :best-feed-list="hotplaceStore.bestFeedList" />
    </div>
</template>

<style scoped></style>
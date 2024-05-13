<script setup>
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import HeroImage from '@/components/home/HeroImage.vue';
import CountDown from '@/components/home/CountDown.vue';
import PopularHotPlacesList from '@/components/home/PopularHotPlacesList.vue';
import Weather from "@/components/home/Weather.vue";
import RecommendedAttraction from "@/components/home/RecommendedAttraction.vue";


</script>


<template>
    <div class="homepage">
        <!-- 메인이미지&제목 -->
        <HeroImage />
        <!-- user & attractions countdown -->
        <CountDown />
        <Weather />
        <!-- hotplace 인기글 -->
        <PopularHotPlacesList />
        <RecommendedAttraction />
    </div>
</template>

<style scoped></style>
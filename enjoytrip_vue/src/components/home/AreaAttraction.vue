<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useAttractionStore } from "@/stores/attraction";
import { storeToRefs } from "pinia";

const attractionStore = useAttractionStore();
const { isClickSidoCard } = storeToRefs(attractionStore);

isClickSidoCard.value = null;
defineProps({
    sido: Object
})

const clickMove = (sido) => {
    isClickSidoCard.value = sido.sido_code;
    router.push({ name: 'place' });
}

</script>

<template>
    <div class="embla__slide slider-image item" style="margin-left: 0.25rem; margin-right: 0.25rem;">
        <div class="slide-content">
            <div class="item-img">
                <div class="item-wrapper" @dblclick="clickMove(sido)">
                    <img :src=sido.thumbnail :alt=sido.sido_name :title=sido.sido_name>
                    <span class="img-txt-title">
                        {{ sido.sido_name }}
                    </span>
                    <span class="img-txt-slogan">
                        {{ sido.sido_slogan }}
                    </span>
                    <span class="img-txt">
                        <i class="fa-solid fa-map-location-dot"></i> 관광지 조회 하기
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item-wrapper {
    background-color: black;
    border-radius: 0;
}

img {
    border-radius: 0;
    min-width: 250px;
    max-width: 250px;
    max-height: 400px;
    min-height: 400px;
    object-fit: cover;
    opacity: 0.7;
}

.img-txt,
.img-txt-title,
.img-txt-slogan {
    position: absolute;
    z-index: 1;
    color: white;
}

.img-txt-title {
    font-size: 2rem;
    font-weight: 500;
    top: 2rem;
    left: 2rem;
}

.img-txt {
    bottom: 2rem;
    right: 1rem;
    opacity: 0.7;
}

.img-txt-slogan {
    font-size: 1rem;
    font-weight: lighter;
    top: 4.8rem;
    left: 2rem;
}
</style>
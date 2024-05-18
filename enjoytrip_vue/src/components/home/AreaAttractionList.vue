<script setup>
import { ref, computed, watch } from 'vue';
import AreaAttraction from './AreaAttraction.vue';
let id = 1;
const imgsrc = "/src/assets/images/trip2.jpeg"
// TODO : dataSlideTo, dataBsSlideTo은 객체마다 숫자가 달라야하는지, 
// 숫자는 순차적으로 나와야하는지 확인
const popularHotPlaces = ref([
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        sido : "서울",
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
]);

const lengthOfPopularHotPlaces = computed(() => {
    return popularHotPlaces.value.length;
})

</script>

<template>
    <section data-bs-version="5.1" 
        class="features017 mbr-embla cid-uc9PmWNUs6" id="features017-2n">
        <div class="position-relative">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="mbr-section-head mb-4 mt-4">
                            <h3 class="mbr-section-subtitle mbr-fonts-style ">
                                지역별 여행지
                            </h3>
                            <hr style="margin: auto 12%;">
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="lengthOfPopularHotPlaces" 
                class="embla" 
                data-skip-snaps="true" 
                data-align="center"
                data-contain-scroll="trimSnaps" 
                data-loop="true" 
                data-auto-play="true" 
                data-auto-play-interval="2.5"
                data-draggable="true">
                
                <div class="embla__viewport container-fluid">
                    <div class="embla__container">
                        <AreaAttraction v-for="popularHotPlace
                            in popularHotPlaces" :key="popularHotPlace.no" :popular-hot-place="popularHotPlace" />
                    </div>
                </div>

                <button class="embla__button embla__button--prev" style="display: none;">
                    <span class="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true">
                        <i class="bi bi-caret-left-fill"></i>
                    </span>
                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                </button>
                <button class="embla__button embla__button--next"  style="display: none;">
                    <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true">
                        <i class="bi bi-caret-right-fill"></i>
                    </span>
                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
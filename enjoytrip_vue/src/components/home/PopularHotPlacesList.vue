<script setup>
import { ref, computed } from 'vue';
import PopularHotPlace from './PopularHotPlace.vue';
// import "/src/assets/js/embla/embla.min.js";
// import "/src/assets/js/embla/script.js";

let id = 1;
const popularHotPlacesCnt = ref(1);
const imgsrc = "/src/assets/images/trip.jpg"
// TODO : dataSlideTo, dataBsSlideTo은 객체마다 숫자가 달라야하는지, 
// 숫자는 순차적으로 나와야하는지 확인
const popularHotPlaces = ref([
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
        imgSrc: imgsrc,
        alt: "",
        title: "",
        dataSlideTo: id,
        dataBsSlideTo: id++,
    },
    {
        no: id,
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
    <section data-bs-version="5.1" class="features017 mbr-embla cid-uc9PmWNUs6" id="features017-1n">

        <div class="position-relative">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="mbr-section-head mb-4 mt-4">
                            <h3 class="mbr-section-subtitle mbr-fonts-style ">
                                인기 리뷰
                            </h3>
                            <hr style="margin: auto 12%;">
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="lengthOfPopularHotPlaces" class="embla" data-skip-snaps="true" data-align="center"
                data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="2.5"
                data-draggable="true" data-direction="ltr">
                <div class="embla__viewport container-fluid">
                    <div class="embla__container">
                        <PopularHotPlace v-for="popularHotPlace
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

            <div v-else>
                현재 등록된 hotplace가 없습니다.
            </div>

        </div>
    </section>
</template>

<style scoped>
.cid-uc9PmWNUs6 {
  /* padding-top: 1rem; */
  padding-bottom: 5rem;
}
</style>
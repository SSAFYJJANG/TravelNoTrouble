<script setup>
import { ref, computed, watch } from 'vue';
import PopularHotPlace from './PopularHotPlace.vue';

const popularHotPlacesCnt = ref(1);
// TODO : dataSlideTo, dataBsSlideTo은 객체마다 숫자가 달라야하는지, 
// 숫자는 순차적으로 나와야하는지 확인
const popularHotPlaces = ref([
    {
        no: 1,
        imgSrc: "/src/assets/images/shop1.jpg",
        alt: "",
        title: "",
        dataSlideTo: "1",
        dataBsSlideTo: "1",
    },
    {
        no: 2,
        imgSrc: "/src/assets/images/shop2.jpg",
        alt: "",
        title: "",
        dataSlideTo: "2",
        dataBsSlideTo: "2",
    },
    {
        no: 3,
        imgSrc: "/src/assets/images/shop3.jpg",
        alt: "",
        title: "",
        dataSlideTo: "3",
        dataBsSlideTo: "3",
    },
    {
        no: 4,
        imgSrc: "/src/assets/images/shop4.jpg",
        alt: "",
        title: "",
        dataSlideTo: "4",
        dataBsSlideTo: "4",
    }
]);

const lengthOfPopularHotPlaces = computed(() => {
    return popularHotPlaces.value.length;
})
</script>

<template>
    <section data-bs-version="5.1" class="features017 mbr-embla cid-uc9PmWNUs6" id="features017-1n">

        <div class="position-relative">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 content-head">
                        <div class="mbr-section-head mb-5">
                            <h5 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-6">
                                [ popular Hotplaces ]
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="lengthOfPopularHotPlaces" class="embla" data-skip-snaps="true" data-align="center"
                data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="2"
                data-draggable="true">
                <div class="embla__viewport container-fluid">
                    <div class="embla__container">
                        <PopularHotPlace v-for="popularHotPlace
                            in popularHotPlaces" :key="popularHotPlace.no" :popular-hot-place="popularHotPlace" />
                    </div>
                </div>

                <button class="embla__button embla__button--prev">
                    <span class="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true"></span>
                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                </button>
                <button class="embla__button embla__button--next">
                    <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true"></span>
                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                </button>
            </div>

            <div v-else>
                현재 등록된 hotplace가 없습니다.
                <!-- <router-link >
                    hotplace 등록하러 가기
                </router-link> -->
            </div>

        </div>
    </section>
</template>

<style scoped></style>
<script setup>
import { ref, computed } from 'vue';
import PopularHotPlace from './PopularHotPlace.vue';

const props = defineProps({
    bestFeedList: Array,
});

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

            <div v-show="bestFeedList && bestFeedList.length > 0" class="embla" data-skip-snaps="true"
                data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true"
                data-auto-play-interval="2.5" data-draggable="true" data-direction="ltr">
                <div class="embla__viewport container-fluid">
                    <div class="embla__container">
                        <PopularHotPlace v-for="popularHotPlace in bestFeedList" :key="popularHotPlace.hotplace_id"
                            :popular-hot-place="popularHotPlace" />
                    </div>
                </div>

                <button class="embla__button embla__button--prev" style="display: none;">
                    <span class="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true">
                        <i class="bi bi-caret-left-fill"></i>
                    </span>
                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                </button>
                <button class="embla__button embla__button--next" style="display: none;">
                    <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true">
                        <i class="bi bi-caret-right-fill"></i>
                    </span>
                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                </button>
            </div>

            <div v-if="!bestFeedList || !(bestFeedList.length > 0)"
                style=" margin: auto; position: relative; left: 20vw;">
                <span>현재 등록된 리뷰가 없습니다.</span>
                <router-link class="ms-4" :to="{ name: 'hotplace-write' }">
                    <i class="fa-solid fa-right-long"></i>리뷰작성하러 가기
                </router-link>
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
<script setup>
import { ref, computed, watch } from 'vue';
import AreaAttraction from './AreaAttraction.vue';
import data from "@/data/index.js";
const sidoList = ref([]);
sidoList.value = data.sidoList;
</script>

<template>
    <section data-bs-version="5.1" class="features017 mbr-embla cid-uc9PmWNUs6" id="features017-2n">
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

            <div v-if="sidoList.length > 0" class="embla" data-skip-snaps="true" data-align="center"
                data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="2.5"
                data-draggable="true">

                <div class="embla__viewport container-fluid">
                    <div class="embla__container">
                        <AreaAttraction v-for="sido
                            in sidoList" :key="sido.no" :sido="sido" />
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
        </div>
    </section>
</template>

<style scoped></style>
<script setup>
import router from '@/router';
import { ref } from 'vue';
const { VITE_VUE_API_URL } = import.meta.env;
defineProps({
    popularHotPlace: Object
})

const clickMove = () => {
    router.push({ name: 'hotplace' });
}

</script>

<template>
    <div class="embla__slide slider-image item" style="margin-left: 0.25rem; margin-right: 0.25rem;">
        <div class="slide-content">
            <div class="item-img">
                <div class="item-wrapper">
                    <img @dblclick="clickMove" :src="`${VITE_VUE_API_URL}/img/${popularHotPlace.image}`" :alt=popularHotPlace.title
                        :title=popularHotPlace.title :data-slide-to=popularHotPlace.dataSlideTo
                        :data-bs-slide-to=popularHotPlace.dataBsSlideTo>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    border-radius: 0;
    min-width: 250px;
    max-width: 250px;
    max-height: 400px;
    min-height: 400px;
    object-fit: cover;
}
</style>
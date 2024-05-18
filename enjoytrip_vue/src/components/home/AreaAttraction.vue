<script setup>
import router from '@/router';
import { ref } from 'vue';
defineProps({
    popularHotPlace: Object
})

const clickMove = () => {
    router.push({ name: 'spot' });
}

</script>

<template>
    <div class="embla__slide slider-image item" 
        style="margin-left: 0.25rem; margin-right: 0.25rem;">
        <div class="slide-content">
            <div class="item-img">
                <div class="item-wrapper">
                    <img @dblclick="clickMove" 
                        :src=popularHotPlace.imgSrc 
                        :alt=popularHotPlace.alt
                        :title=popularHotPlace.title >
                        <span class="img-txt-title">
                            {{ popularHotPlace.sido }}
                        </span>
                        <span class="img-txt">
                            -> 관광지 조회 하기
                        </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item-wrapper{
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
.img-txt, .img-txt-title{
    position : absolute;
    z-index: 1;
    color : white;
}
.img-txt-title{
    font-size: 2rem;
    font-weight: 500;
    top : 2rem;
    left : 2rem;
}
.img-txt{
    bottom : 2rem;
    right : 1rem;
    opacity: 0.7;
}
</style>
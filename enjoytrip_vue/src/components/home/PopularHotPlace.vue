<script setup>
defineProps({
    popularHotPlace: Object
})

</script>

<template>
    <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
        <div class="slide-content">
            <div class="item-img">
                <div class="item-wrapper">
                    <router-link :to="{ name: 'home' }">
                        <img :src=popularHotPlace.imgSrc :alt=popularHotPlace.alt :title=popularHotPlace.title
                            :data-slide-to=popularHotPlace.dataSlideTo :data-bs-slide-to=popularHotPlace.dataBsSlideTo>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
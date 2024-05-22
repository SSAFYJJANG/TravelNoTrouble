<script setup>
import { CAccordion, CAccordionItem, CButton, CAccordionHeader, CAccordionBody } from '@coreui/vue';
import data from "@/data/index.js";

defineProps({ attraction: Object });
const emit = defineEmits(["pushHeart"]);
const pushHeart = (attraction) => {
    emit('pushHeart', attraction);
}

</script>

<template>
    <div class="card" style="width: 100%">
        <img class="card-img-top" :src="attraction.first_image?attraction.first_image:data.imgsrc" alt="Card image cap">
        <div class="card-body">
            <div class="card-btn d-flex flex-nowrap align-items-center justify-content-between">
                <h5 class="card-title">{{ attraction.title }}</h5>
                <div class="card-btn">
                    <button><i class="fa-regular fa-square-plus"></i></button>
                    <button>
                        <i :class="attraction.isLiked=='1'?'fa-solid':'fa-regular'" 
                        class=" fa-heart" style="color: #f77e7e;" @click="pushHeart(attraction)"></i>
                    </button>
                </div>
            </div>
            <p class="card-text">{{ attraction.addr1 }}</p>
        </div>
        <CAccordion flush>
            <CAccordionItem>
                <CAccordionHeader>
                    <strong>자세히 보기</strong>
                </CAccordionHeader>
                <CAccordionBody>
                    {{ attraction.overview }}
                </CAccordionBody>
            </CAccordionItem>
        </CAccordion>
    </div>
</template>

<style scoped>
.card {
    /* border: 1px solid black; */
    border-radius: 2%;
    padding: 0.25rem;
    margin: 1rem auto;
}

.card-title {
    font-weight: bold;
}

.card-text {
    color: #485664;
}

.card-img-top {
    height: 200px;
    width: 350px;
    object-fit: cover;
    align-self: center;
}

.card-btn i {
    margin-left: .5rem;
    margin-bottom: .5rem;
    margin-right: 0;
}

i {
    margin: 0 .2rem;
}
</style>
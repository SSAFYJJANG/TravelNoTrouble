<script setup>
import { CAccordion, CAccordionItem, CButton, CAccordionHeader, CAccordionBody } from '@coreui/vue';

defineProps({ attraction: Object });

</script>

<template>
    <div class="card" style="width: 100%">
        <img class="card-img-top" :src="attraction.first_image2" alt="Card image cap">
        <div class="card-body">
            <div class="card-btn d-flex flex-nowrap align-items-center justify-content-between">
                <h5 class="card-title">{{ attraction.title }}</h5>
                <div class="card-btn">
                    <i class="bi bi-patch-plus"></i>
                    <i class="bi bi-heart"></i>
                </div>
            </div>
            <p class="card-text">{{ attraction.add1 }}</p>
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
    margin : 1rem auto;
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
.card-btn i{
    margin-left : 1rem;
}
</style>
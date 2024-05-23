<script setup>
import { ref } from 'vue'
import { CFormTextarea, CInputGroup, CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText, CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue';
import data from "@/data/index.js";
defineProps({ attraction: Object });
const emit = defineEmits(["removeCard"]);
const planDetailMemo = ref("");

const removeCard = () => {
    emit('removeCard');
}

</script>

<template>
    <CCard class="plan-detail-card">
        <CRow class="g-0">
            <CCol :md="4">
                <CCardImage class="rounded-0 card-img"
                    :src="attraction.first_image ? attraction.first_image : data.imgsrc" />
            </CCol>
            <CCol :md="8">
                <CCardBody class="card-content">
                    <CCardTitle class="card-title">{{ attraction.title }}</CCardTitle>
                    <CCardText class="card-text">{{ attraction.addr1 }}</CCardText>
                    <CCardText class="card-text card-btn d-flex justify-content-end">
                        <button>
                            <i class="fa-solid fa-square-plus" @click="removeCard(attraction)"></i>
                        </button>
                    </CCardText>
                </CCardBody>
            </CCol>
            <CAccordion flush>
                <CAccordionItem>
                    <CAccordionHeader>
                        <strong>메모작성</strong>
                    </CAccordionHeader>
                    <CAccordionBody class="accodion-body-memo">
                        <CInputGroup>
                            <CFormTextarea class="memo" id="detail-memo" aria-label="With textarea" rows="5"
                                placeholder="장소에 대해 간단히 메모해보세요" style="resize: none;" maxlength="100"
                                v-model="planDetailMemo">
                            </CFormTextarea>
                            <span class="countTextLen">{{ planDetailMemo.length }}/100</span>
                        </CInputGroup>
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem>
                    <CAccordionHeader>
                        <strong>자세히 보기</strong>
                    </CAccordionHeader>
                    <CAccordionBody>
                        {{ attraction.overview }}
                    </CAccordionBody>
                </CAccordionItem>
            </CAccordion>
        </CRow>
    </CCard>
</template>

<style scoped>
.plan-detail-card {
    /* border: 1px solid black; */
    border-radius: 2%;
    padding: 0.25rem;
    margin: .2rem auto;
}

.card-content {
    text-align: left;
    padding: .5rem .8rem;
}

.card-title {
    font-weight: bold;
}

.card-text {
    color: #485664;
}

.card-img {
    height: 100px;
    width: 120px;
    object-fit: cover;
    align-self: center;
}


.card-btn i {
    margin-left: .5rem;
    margin-bottom: .5rem;
    margin-right: 0;
}

.countTextLen {
    color: #8181817a;
    z-index: 6;
    position: absolute;
    bottom: 5px;
    right: 0;
}
</style>
<script setup>
import { ref } from 'vue';
import { COffcanvas, CButton, CCloseButton, COffcanvasHeader, COffcanvasTitle, COffcanvasBody, } from '@coreui/vue';
import PlanDaysDetailList from "@/components/attraction/PlanDaysDetailList.vue";
import PlanCalendar from '@/components/attraction/PlanCalendar.vue';
const visibleOffCanvas = ref(false);
</script>

<template>
    <div>
        <CButton class="offcanvas-button" :class="visibleOffCanvas ? 'open' : ''"
            @click="() => { visibleOffCanvas = !visibleOffCanvas }">
            <i class="bi" :class="visibleOffCanvas ? 'bi-caret-right-fill' : 'bi-caret-left-fill'"></i>
        </CButton>

        <COffcanvas class="search-off-canvas" :backdrop="false" placement="end" scroll :visible="visibleOffCanvas"
            @hide="() => { visibleOffCanvas = !visibleOffCanvas }">
            <COffcanvasHeader>
                <COffcanvasTitle>나의 여행 계획 세우기</COffcanvasTitle>
            </COffcanvasHeader>
            <hr>
            <COffcanvasBody>
                <PlanCalendar/>
                <CButton color="danger" variant="outline" class="save-load-button">저장하기</CButton>
                <PlanDaysDetailList />
            </COffcanvasBody>
        </COffcanvas>

    </div>


</template>

<style scoped>
.offcanvas-button {
    margin: 0;
    padding: 12px 1px;
    position: absolute;
    top: calc(40vh);
    background-color: white;
    right: 398px;
    transform: translateX(400px);
    transition: transform 0.3s ease-in-out;
    border-radius: 0.2rem 0 0 0.2rem;
    z-index: 200;
}

hr {
    margin: 0;
}

.open {
    transform: none;
}
.save-load-button{
    margin : .5rem auto 1rem !important;
    border-radius: 5px;
}
</style>
<!--ㄴ 여행 계획 off canvas -->
<!-- 여행 계획 만들기 버튼  -->
<!-- 여행 계획 만들기 버튼  -->
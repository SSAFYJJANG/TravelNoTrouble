<script setup>
import { ref, watch } from 'vue';
import { COffcanvas, CButton, CInputGroup, COffcanvasHeader, COffcanvasTitle, COffcanvasBody, CFormTextarea } from '@coreui/vue';
import PlanDaysDetailList from "@/components/attraction/PlanDaysDetailList.vue";
import PlanCalendar from '@/components/attraction/PlanCalendar.vue';

import { usePlanStore } from "@/stores/plan";
const planStore = usePlanStore();

const visibleOffCanvas = ref(false);
const title = ref(planStore.title);
const overview = ref(planStore.overview);

watch(title, (newTitle) => {
    planStore.setTitle(newTitle);
});

watch(overview, (newOverview) => {
    planStore.setOverview(newOverview);
});

const savePlan = () => {
    console.log(planStore.scene.value);
    let token = sessionStorage.getItem("accessToken");
    planStore.insertPlan(token);
};

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

                <div class="d-flex startDay inputs">
                    <label for="start" class="">
                        <strong>
                            <i class="fa-solid fa-pen-to-square"></i> title:
                        </strong>
                    </label>
                    <input type="text" id="plan_title" class="plan_title" name="plan_title" v-model="title" />
                </div>

                <PlanCalendar />
                <CInputGroup>
                    <CFormTextarea class="memo" aria-label="With textarea" placeholder="전체 계획에 대해 자유롭게 메모해보세요"
                        v-model="overview">
                    </CFormTextarea>
                </CInputGroup>
                <CButton color="danger" variant="outline" class="save-load-button" @click="savePlan">
                    저장하기
                </CButton>
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

.save-load-button {
    margin: .5rem auto 1rem !important;
    border-radius: 5px;
}

.plan_title {
    border-radius: 5px;
    color: #2f4f4f;
    width: 16.2rem;
    margin-left: 1rem;
    border-color: #dee2e6;
    box-shadow: 0 0 0 0;
}
</style>
<!--ㄴ 여행 계획 off canvas -->
<!-- 여행 계획 만들기 버튼  -->
<!-- 여행 계획 만들기 버튼  -->
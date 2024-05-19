<script setup>
import { ref } from 'vue';
import { COffcanvas, CButton, CCloseButton, COffcanvasHeader, COffcanvasTitle, COffcanvasBody, } from '@coreui/vue';

const visibleOffCanvas = ref(false);
</script>

<template>
    <div>
        <CButton class="offcanvas-button" 
            :class="visibleOffCanvas?'open':''" 
            @click="() => { visibleOffCanvas = !visibleOffCanvas }">
            <i class="bi" :class="visibleOffCanvas ? 'bi-caret-right-fill' : 'bi-caret-left-fill'"></i>
        </CButton>

        <COffcanvas class="search-off-canvas" :backdrop="false" placement="end" 
            scroll :visible="visibleOffCanvas"
            @hide="() => { visibleOffCanvas = !visibleOffCanvas }">
            <COffcanvasHeader>
                <COffcanvasTitle>나의 여행 계획 세우기</COffcanvasTitle>
            </COffcanvasHeader>
            <hr>
            <COffcanvasBody>
                
            </COffcanvasBody>
        </COffcanvas>

    </div>


</template>

<style scoped>
.offcanvas-button{
    margin:0;
    padding: 12px 1px;
    position: absolute;
    top : calc(40vh);
    background-color: white;
    right:398px;
    transform: translateX(400px);
    transition : transform 0.3s ease-in-out;
    border-radius: 0.2rem 0 0 0.2rem;
    z-index: 200;
}

hr{
    margin : 0;
}

.open{
    transform: none;
}
</style>
<!--ㄴ 여행 계획 off canvas -->
    <!-- 여행 계획 만들기 버튼  -->
    <!-- 여행 계획 만들기 버튼  -->
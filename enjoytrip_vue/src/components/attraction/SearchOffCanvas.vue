<script setup>
import { ref } from 'vue';
import AttractionSearch from '@/components/attraction/AttractionSearch.vue';
import AttractionCardList from '@/components/attraction/AttractionCardList.vue';
import { COffcanvas, CButton, CCloseButton, COffcanvasHeader, COffcanvasTitle, COffcanvasBody, } from '@coreui/vue';

const visibleOffCanvas = ref(false);
</script>

<template>
    <div>
        <CButton class="offcanvas-button" 
            :class="visibleOffCanvas?'open':''" 
            @click="() => { visibleOffCanvas = !visibleOffCanvas }">
            <i class="bi" :class="visibleOffCanvas ? 'bi-caret-left-fill' : 'bi-caret-right-fill'"></i>
        </CButton>

        <COffcanvas class="search-off-canvas" :backdrop="false" placement="start" 
            scroll :visible="visibleOffCanvas"
            @hide="() => { visibleOffCanvas = !visibleOffCanvas }">
            <COffcanvasHeader>
                <COffcanvasTitle>관광지 조회</COffcanvasTitle>
            </COffcanvasHeader>
            <hr>
            <COffcanvasBody>
                <AttractionSearch />
                <AttractionCardList />
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
    left:398px;
    transform: translateX(-400px);
    transition : transform 0.3s ease-in-out;
    border-radius: 0 0.2rem 0.2rem 0;
    z-index: 200;
}

hr{
    margin : 0;
}

.open{
    transform: none;
}
</style>

<!--ㄴ 검색 off canvas -->
<!-- ㄴ 검색창 -->
<!-- ㄴ  검색 결과-->
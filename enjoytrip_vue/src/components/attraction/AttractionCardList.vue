<script setup>
import { ref } from 'vue';
import AttractionCardItem from './AttractionCardItem.vue';
import { CFormCheck } from '@coreui/vue';

import data from "@/data/index.js";
const attractionList = ref([]);
attractionList.value = data.attractionList;
console.log(attractionList);
</script>

<template>
    <div>
        <CFormCheck :button="{ color: 'danger', variant: 'outline', class: 'save-load-button' }" id="btn-check-outlined"
            autocomplete="off" label="찜 목록 보기" />
        <hr>
        <p class="info"><i class="bi bi-info-circle"></i> +를 누르면 여행계획에 추가할 수 있어요</p>
        <AttractionCardItem v-for="attraction in attractionList" :key="attraction.content_id"
            :attraction="attraction" />
        <!-- <AttractionCardItem/> -->
    </div>
</template>

<style scoped>
i {
    margin: 0 .2rem;
}
</style>
<!-- ㄴ  검색 결과 카드 리스트-->
<!-- ㄴ 검색 결과 카드 아이템 리스트 
        or 클릭시 결과 리스트 -->
<!-- ㄴ 검색 결과 선택 후 취소 번트 -->
<!-- ㄴ 검색 오픈 캔버스 닫기 버튼 -->
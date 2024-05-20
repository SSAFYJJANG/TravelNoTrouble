<script setup>
import {ref } from 'vue';
import AttractionCardItem from './AttractionCardItem.vue';
import data from "@/data/index.js";
const attractionList = ref([]);
attractionList.value = data.attractionList;
console.log(attractionList);
</script>

<template>
    <div>
        <p class="info"><i class="bi bi-info-circle"></i> +를 누르면 여행계획에 추가할 수 있어요</p>
        <AttractionCardItem v-for="attraction in attractionList" :key="attraction.content_id" :attraction="attraction"/>
        <!-- <AttractionCardItem/> -->
    </div>
</template>

<style scoped>
.info{
    font-size: smaller;
    color : #485664;
    margin : 0.01rem;
}
</style>
<!-- ㄴ  검색 결과 카드 리스트-->
    <!-- ㄴ 검색 결과 카드 아이템 리스트 
        or 클릭시 결과 리스트 -->
    <!-- ㄴ 검색 결과 선택 후 취소 번트 -->
    <!-- ㄴ 검색 오픈 캔버스 닫기 버튼 -->
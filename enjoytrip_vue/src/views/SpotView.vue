<script setup>
import MenuPadding from "@/components/common/MenuPadding.vue";
import SpotInput from "@/components/spot/SpotInput.vue"
import SpotType from "@/components/spot/SpotType.vue"
import SpotMap from "@/components/spot/SpotMap.vue"
import SpotCardList from "@/components/spot/SpotCardList.vue"
// 지도 검색 호출 -> 시도/구군 값 변경 -> 검색 카드에 값 반환 (?)
</script>

<template>
    <div class="page">
        <MenuPadding />
        <!--제목 관광지 검색 -->
        <!-- 소제목 : 지역별 관광지 정보를 확인하세요 -->
        <div class="section-header">
            <h2>관광지 검색</h2>
            <p>지역별 관광지 정보를 확인하세요</p>
        </div>
        <!-- 검색창 (시도 / 구군 / 조회하기 버튼 ) -->
        <SpotInput />
        <!-- 관광지 유형 -->
        <SpotType/>
        <!-- 지도 -->
        <SpotMap/>
        <!-- 검색 카드 -->
        <SpotCardList/>
    </div>
</template>

<style scoped>
.section-header {
    text-align: center;
    padding: 2rem 0;
}
</style>
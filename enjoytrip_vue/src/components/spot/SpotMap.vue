<script setup>
import {ref} from 'vue';
import VKakaoMap from "@/components/common/VKakaoMap.vue"
// 지도 열고 닫기 추가 ---------------------------
// 지도 표시 상태를 제어하는 반응형 속성
const isMapOpen = ref(false);
// 지도 표시 상태를 토글하는 함수
const toggleMap = () => {
  isMapOpen.value = !isMapOpen.value;
};
</script>

<template>
    <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <!-- 지도 열기/닫기 버튼 -->
                <button @click="toggleMap" class="btn btn-outline-secondary w-100">
                    <span v-if="isMapOpen">지도 닫기</span>
                    <span v-else>지도 열기</span>
                </button>
                <VKakaoMap v-if="isMapOpen" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
<script setup>
import { ref } from 'vue';

const selectedOption = ref("0"); // 기본값으로 "관광지" 선택

const selectOption = (option) => {
    selectedOption.value = option;
    //   onChangeAttraction();
};

</script>

<template>
    <div>
        <!-- 검색 버튼 -->
        <div class="col-md-12 d-flex justify-content-center mb-2">
                <button @click="selectOption('0')"
                    :class="['btn', selectedOption === '0' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">전체</button>
                <button @click="selectOption('12')"
                    :class="['btn', selectedOption === '12' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">관광지</button>
                <button @click="selectOption('14')"
                    :class="['btn', selectedOption === '14' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">문화시설</button>
                <button @click="selectOption('15')"
                    :class="['btn', selectedOption === '15' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">축제공연행사</button>
                <button @click="selectOption('25')"
                    :class="['btn', selectedOption === '25' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">여행코스</button>
                <button @click="selectOption('28')"
                    :class="['btn', selectedOption === '28' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">레포츠</button>
                <button @click="selectOption('32')"
                    :class="['btn', selectedOption === '32' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">숙박</button>
                <button @click="selectOption('38')"
                    :class="['btn', selectedOption === '38' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">쇼핑</button>
                <button @click="selectOption('39')"
                    :class="['btn', selectedOption === '39' ? 'btn-secondary' : 'btn-color']"
                    class="me-1 mb-1">음식점</button>
        </div>
    </div>
</template>

<style scoped>
.btn{
    padding: 0.8rem;
}
.btn-color{
    background-color: #edefeb;
}
</style>
<script setup>
import { ref } from 'vue';
const sidos = ref([
    {value : 0, text:'지역을 선택해주세요'},
    {value : 12, text:'서울'},
    {value : 13, text:'대구'},
]);
const sidoCode = ref(0);
const guguns = ref([
    {value : 0, text:'지역을 선택해주세요'},
    {value : 12, text:'강남구'},
    {value : 13, text:'달서구'},
]);
const gugunCode = ref(0)

// 시도 코드로 변경되는 구군 리스트
function gugunList() {
}
</script>
<template>
    <section id="spot_search" class="pb-0" data-aos="zoom-in-up">
        <div class="container">
            <div class="row justify-content-center mb-2"> <!-- justify-content-center 클래스 추가 -->
                <div class="form-group col-md-2">
                    <b-form-select 
                    class="bg-secondary text-light" 
                    v-model="sidoCode" 
                    :options="sidos"
                    @change="gugunList">
                    </b-form-select>
                </div>
                <div class="form-group col-md-2">
                    <b-form-select 
                    class="bg-secondary text-light" 
                    v-model="gugunCode" 
                    :options="guguns">
                    </b-form-select>
                </div>
                <div class="form-group col-md-2 d-flex justify-content-center align-items-center">
                    <b-button type="button" 
                    id="list-btn" 
                    class="btn btn-default"
                    variant=""
                    >
                    검색
                </b-button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.btn-default {
    color: var(--color-white);
    background: var(--color-primary);
    padding: .375rem 1.8rem .375rem 1.8rem;;
    margin: 0;
    border: none;
    border-radius: 4px;
    transition: 0.3s;
    font-family: var(--font-secondary);
    text-align: center;
    background-color: #edefeb;
}

.btn-default:hover {
    color: var(--color-white);
    background: rgba(156, 197, 161, 0.85);
}
</style>
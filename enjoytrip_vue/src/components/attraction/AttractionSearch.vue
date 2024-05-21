<script setup>
import { CFormCheck } from '@coreui/vue';
import { ref } from 'vue';
import VSelect from "@/components/common/VSelect.vue";
import VSearchInput from "@/components/common/VSearchInput.vue";
import AttractionCardList from "@/components/attraction/AttractionCardList.vue";
const sidoSelectOption = ref([
    { text: "시/도", value: "" },
]);
const gugunSelectOption = ref([
    { text: "구/군", value: "" },
]);

const param = ref({
    key: "",
    word: "",
});
const selectClass = ref([
    'mb-2', 'me-1', 'ms-1'
]);

const changeKey = (val) => {
    param.value.key = val;
    console.log(param.value.key);
};

const content_types = ref([
    { text: '전체', value: '0' },
    { text: '관광지', value: '1' },
    { text: '문화시설', value: '2' },
    { text: '축제공연행사', value: '3' },
    { text: '여행코스', value: '4' },
    { text: '레포츠', value: '5' },
    { text: '숙박', value: '6' },
    { text: '쇼핑', value: '7' },
    { text: '식당', value: '8' }
]);

const picked = ref('1');
const btnColor = 'danger';
</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <VSelect :selectOption="sidoSelectOption" :selectClass="selectClass" @onKeySelect="changeKey" />
            <VSelect :selectOption="gugunSelectOption" :selectClass="selectClass" @onKeySelect="changeKey" />
        </div>
        <VSearchInput class="mb-3" :btn-color="btnColor" />
        <div>
            <div class="line">분류 선택</div>
            <div class="d-flex align-content-around flex-wrap">
                <CFormCheck v-for="(content_type, index) in content_types" :key="content_type.text" type="radio" inline
                    :label="content_type.text" :value="content_type.value" :id="`content-type-${index}`"
                    v-model="picked" />
            </div>
            <hr>
            <CFormCheck :button="{ color: 'danger', variant: 'outline', class: 'save-load-button' }"
                id="btn-check-outlined" autocomplete="off" label="찜 목록 보기" />
            <AttractionCardList />
        </div>
    </div>
</template>

<style scoped>
.line {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 14px;
    margin: 8px 0px;
}

.line::before {
    content: "";
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
}

.line::after {
    content: "";
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
}

i {
    margin: 0 .2rem;
}
</style>
<!-- ㄴ 검색창 -->
<!-- ㄴ 검색 선택 select 칸 (시/도 , 구/군)-->
<!-- ㄴ 검색 창 -->
<!-- ㄴ content_type -->

<script setup>
import { CFormCheck } from '@coreui/vue';
import { ref, onMounted, computed, watch } from 'vue';
import VSelect from "@/components/common/VSelect.vue";
import VSearchInput from "@/components/common/VSearchInput.vue";
import AttractionCardList from "@/components/attraction/AttractionCardList.vue";
import { useAttractionStore } from "@/stores/attraction";
import { storeToRefs } from "pinia";
const attractionStore = useAttractionStore();
const { getSidoList, getGugunList, getAttractionList } = attractionStore;
const { sidoList, isClickSidoCard, gugunList } = storeToRefs(attractionStore);

const selectGugunList = ref([]);
const selectOptionSidoList = ref([]);
const isSelectGugunCode = ref(0);
const isSelectSidoCode  = ref(0);
const isSelectContenType = ref('0');

import data from "@/data/index.js";
const contentTypeList = ref([]);
contentTypeList.value = data.content_types;

onMounted(async () => {
    console.log("isClickSidoCard " + isClickSidoCard.value );
    if (isClickSidoCard.value != null) {
        const params = {
            sido_code: isClickSidoCard.value,
            gugun_code: 0,
            content_type_id: 0,
            overview: '',
        }
        await Promise.all([
            getAttractionList(params),
            changeSido(isClickSidoCard.value),
        ]);
    }


    await Promise.all([
        selectOptionSidoList.value = sidoList.value.map((sido) => ({
            text: sido.sido_name,
            value: sido.sido_code,
        })),
        selectOptionSidoList.value.unshift({
            text: '시/도',
            value: 0,
        }),
        selectGugunList.value.unshift({
            text: '구/군',
            value: 0,
        }),
    ]);
    console.log(isSelectSidoCode.value);
    console.log(selectOptionSidoList.value);
});

const selectClass = ref([
    'mb-2', 'me-1', 'ms-1'
]);

const changeSido = (val) => {
    isSelectGugunCode.value = 0;
    isSelectSidoCode.value = val;
    selectGugunList.value = [];
    if (val != 0 && gugunList != null) {
        selectGugunList.value = gugunList.value[val].map(item => ({
            text: item.gugun_name,
            value: item.gugun_code
        }));
    }
    selectGugunList.value.unshift({
        text: '구/군',
        value: 0,
    });
    console.log("selectGugunList " + selectGugunList.value);
};

const changeGugun = (val) => {
    isSelectGugunCode = val;
    console.log(isSelectGugunCode);
}

const clickSearch = (val) => {
    const params = {
        sido_code: isSelectSidoCode.value,
        gugun_code: isSelectGugunCode.value,
        content_type_id: isSelectContenType.value,
        overview: val
    }
    getAttractionList(params);
}

const btnColor = 'danger';
</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <VSelect :selectOption="selectOptionSidoList" :selectClass="selectClass" @onKeySelect="changeSido"
                v-model="isSelectSidoCode" />
            <VSelect :selectOption="selectGugunList" :selectClass="selectClass" @onKeySelect="changeGugun" />
        </div>
        <VSearchInput class="mb-3" :btn-color="btnColor" @clickBtn="clickSearch" />
        <div>
            <div class="line">분류 선택</div>
            <div class="d-flex align-content-around flex-wrap">
                <CFormCheck v-for="(content_type, index) in contentTypeList" :key="content_type.text" type="radio"
                    inline :label="content_type.text" :value="content_type.value" :id="`content-type-${index}`"
                    v-model="isSelectContenType" />
            </div>
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

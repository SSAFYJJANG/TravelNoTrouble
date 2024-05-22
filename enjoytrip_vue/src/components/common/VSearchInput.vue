<script setup>
import { CFormInput, CForm, CButton, CInputGroup } from '@coreui/vue';
import { ref } from 'vue';
const props = defineProps({ btnColor: String });
const emit = defineEmits(["clickBtn"]);
const keyword = ref("");
const clickBtn = () => {
  console.log("click " + keyword.value);
  emit("clickBtn", keyword.value);
};

</script>

<template>
    <CForm class="d-flex justify-content-between">
        <CFormInput style="min-height: 33px; border-radius: 5px 0 0 5px;" type="search"
            class="h-100 p-1 ms-1 search-input" placeholder="검색 키워드를 입력해주세요" 
            v-model="keyword"/>
        <CButton type="button" class="m-0 me-1 search-button" :color="btnColor" variant="outline" @click="clickBtn">검색</CButton>
    </CForm>
</template>

<style scoped>
.search-button {
    min-height: 32px;
    padding: 0.25rem 1rem;
    min-width: 75px;
    border-radius: 0 5px 5px 0;
}
</style>
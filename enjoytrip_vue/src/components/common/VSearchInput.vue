<script setup>
import { CFormInput, CForm, CButton, CInputGroup } from '@coreui/vue';
import { ref } from 'vue';
const props = defineProps({ btnColor: String });
</script>

<template>
    <CForm class="d-flex justify-content-between">
        <CFormInput style="min-height: 33px; border-radius: 5px 0 0 5px;" type="search"
            class="h-100 p-1 ms-1 search-input" placeholder="검색 키워드를 입력해주세요" />
        <CButton type="button" class="m-0 me-1 search-button" :color="btnColor" variant="outline">검색</CButton>
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
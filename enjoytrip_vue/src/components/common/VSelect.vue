<script setup>
import { ref, watch, watchEffect } from "vue";
import { CFormSelect } from '@coreui/vue';

const props = defineProps({
  selectOption: Array,
  selectClass: Array
})

const emit = defineEmits(["onKeySelect"]);

const select = ref("");

const onSelect = (value) => {
  console.log("select " + value);
  emit("onKeySelect", value);
};

// select 변수의 변경을 감시하고 변경될 때마다 onSelect 함수를 호출합니다.
watch(select, (newValue, oldValue) => {
  onSelect(newValue)
})

// 부모 컴포넌트에서 변경된 selectOption을 감지하여 업데이트합니다.
watchEffect(() => {
  console.log("selectOption changed:", props.selectOption)
})
</script>

<template>
  <CFormSelect v-model="select" size="sm" class="h-100" :class="selectClass" aria-label="Small select example">
    <option v-for="option in selectOption" :key="option.value" :value="option.value"
      :disabled="option.value === '' ? true : false" :selected="option.value === '' ? true : false">
      {{ option.text }}
    </option>
  </CFormSelect>

</template>

<style scoped></style>

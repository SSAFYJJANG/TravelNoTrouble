<script setup>
import { ref } from "vue";
import { CFormSelect } from '@coreui/vue';

defineProps({ 
  selectOption: Array,
  selectClass : Array
 });

const emit = defineEmits(["onKeySelect"]);

const key = ref("");

const onSelect = () => {
  console.log(key.value);
  emit("onKeySelect", key.value);
};
</script>

<template>
  <CFormSelect v-model="key" size="sm" class="h-100" :class="selectClass" aria-label="Small select example" @change="onSelect">
    <option v-for="option in selectOption" :key="option.value" :value="option.value"
      :disabled="option.value === '' ? true : false" :selected="option.value === '' ? true : false">
      {{ option.text }}
    </option>
  </CFormSelect>

</template>

<style scoped></style>

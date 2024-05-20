<script setup>
import { ref, defineProps, onMounted } from "vue";
import { useHotplaceStore } from "@/stores/hotplace";

const hotplaceStore = useHotplaceStore();
const { getHotplaceDetail, feedInfo } = hotplaceStore;

const props = defineProps(["card"]);
const info = ref(null);
const loading = ref(true);

onMounted(async () => {
  await getHotplaceDetail(props.card.hotplace_id);
  info.value = hotplaceStore.feedInfo;
  loading.value = false;
});

</script>

<template>
  <div>
    <div v-if="loading">
      loading...
    </div>

    <div v-else>
      <div class="d-flex justify-content-center">
        <img class="hotplace_img border" :src="`${props.card.image}`" />
      </div>
      <p>ID: {{ props.card.hotplace_id }}</p>
      <h5>{{ props.card.title }}</h5>
      <!-- <p>{{ writer_info.username }}</p> -->
      <p>{{ props.card.overview }}</p>
      <p>{{ info.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.hotplace_img {
  height: 250px;
  width: 400px;
  object-fit: cover;
}
</style>

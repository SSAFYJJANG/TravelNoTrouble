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
  console.log("INFO", info.value);
});

const likeFeed = () => { 
  console.log("click Like");
};
</script>

<template>
  <div>
    <div v-if="loading">
      loading...
    </div>

    <div v-else>
      <div class="d-flex justify-content-center">
        <img class="hotplace_img border rounded-3" :src="`${props.card.image}`" />
      </div>

      <div class="my-4 mx-5">
        <!-- <p>ID: {{ props.card.hotplace_id }}</p> -->
        <h4>{{ info.title }}</h4>
        <div class="d-flex justify-content-between">
          <div>{{ info.userId }} | {{ info.regist_time }}</div>
          <!-- <p>마지막 수정 : {{ info.modified_time }}</p> -->
          <button @click="likeFeed">❤ 좋아요 {{ info.like }}</button>  
        </div>
        
        <hr class="mt-3 mb-3" />
        <p>{{ info.overview }}</p>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.hotplace_img {
  height: 300px;
  width: 500px;
  object-fit: cover;
}
</style>

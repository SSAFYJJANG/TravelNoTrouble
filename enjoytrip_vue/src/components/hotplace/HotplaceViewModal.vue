<script setup>
import { ref, defineProps, onMounted } from "vue";
import { useHotplaceStore } from "@/stores/hotplace";
const { VITE_VUE_API_URL } = import.meta.env;

const hotplaceStore = useHotplaceStore();
const { getHotplaceDetail, feedInfo, likeHotplaceFeed } = hotplaceStore;

const props = defineProps(["card"]);
const info = ref(null);
const loading = ref(true);

onMounted(async () => {
  await getHotplaceDetail(props.card.hotplace_id);
  info.value = hotplaceStore.feedInfo;
  loading.value = false;
});

const likeFeed = () => { 
  likeHotplaceFeed(info.value.hotplace_id);
  info.value.like++;
};
</script>

<template>
  <div>
    <div v-if="loading">
      loading...
    </div>

    <div v-else>
      <div class="d-flex justify-content-center">
        <img class="hotplace_img border rounded-3" :src="`${VITE_VUE_API_URL}/img/${props.card.image}`" />
      </div>

      <div class="my-4 mx-5">
        <h4>{{ hotplaceStore.feedInfo.title }}</h4>
        <div class="d-flex justify-content-between">
          <div>{{ hotplaceStore.feedInfo.userId }} | {{ hotplaceStore.feedInfo.regist_time }}</div>
          <button @click="likeFeed">
            <i class="bi bi-heart-fill"></i>
            좋아요 {{ info.like }}</button>  
        </div>
        
        <hr class="mt-3 mb-3" />
        <p>{{ hotplaceStore.feedInfo.overview }}</p>
        
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

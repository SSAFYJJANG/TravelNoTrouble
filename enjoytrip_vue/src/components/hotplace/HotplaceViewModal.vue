<script setup>
import { ref, defineProps, onMounted } from "vue";
import { useHotplaceStore } from "@/stores/hotplace";
import { useAttractionStore } from "@/stores/attraction";
import { storeToRefs } from "pinia";

const attractionStore = useAttractionStore();
const { sidoList, gugunList } = storeToRefs(attractionStore);
const { VITE_VUE_API_URL } = import.meta.env;

const hotplaceStore = useHotplaceStore();
const { getHotplaceDetail, feedInfo, likeHotplaceFeed } = hotplaceStore;

const props = defineProps(["card"]);
const info = ref(null);
const loading = ref(true);

const addr = ref({
  sido_name: null,
  gugun_name: null,
});

const selectGugunList = ref([]);

onMounted(async () => {
  await getHotplaceDetail(props.card.hotplace_id);
  info.value = hotplaceStore.feedInfo;
  loading.value = false;

  for (let i = 0; i < sidoList.value.length; i++) {
    if (sidoList.value[i].sido_code == feedInfo.sido_code) {
      addr.value.sido_name = sidoList.value[i].sido_name;
      break;
    }
  }

  if (addr.value.sido_name != null && gugunList.value != null) {
    selectGugunList.value = gugunList.value[feedInfo.sido_code].map((item) => ({
      text: item.gugun_name,
      value: item.gugun_code,
    }));
  }

  for (let i = 0; i < selectGugunList.value.length; i++) {
    if (selectGugunList.value[i].value == feedInfo.gugun_code) {
      addr.value.gugun_name = selectGugunList.value[i].text;
      break;
    }
  }
});

const likeFeed = () => {
  likeHotplaceFeed(info.value.hotplace_id);
  info.value.like++;
};
</script>

<template>
  <div>
    <div v-if="!loading">
      <div class="d-flex justify-content-center">
        <img
          class="hotplace_img border rounded-3"
          :src="`${VITE_VUE_API_URL}/img/${props.card.image}`"
        />
      </div>

      <div class="my-4 mx-5">
        <h4 class="mb-3">{{ info.title }}</h4>
        <div>
          {{ hotplaceStore.feedInfo.username }} ({{
            hotplaceStore.feedInfo.userId
          }})
        </div>
        <div class="d-flex justify-content-between">
          <div>
            {{ addr.sido_name }} {{ addr.gugun_name }} | {{ info.regist_time }}
          </div>
          <button @click="likeFeed">
            <i class="bi bi-heart-fill"></i>
            좋아요 {{ info.like }}
          </button>
        </div>

        <hr class="mt-2 mb-3" />
        <p>{{ info.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hotplace_img {
  height: 400px;
  width: 500px;
  object-fit: cover;
}
</style>

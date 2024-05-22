<script setup>
import { ref, onMounted, watch } from "vue";
import { useHotplaceStore } from "@/stores/hotplace";
import HotplaceCard from "@/components/hotplace/HotplaceCard.vue";
import PageNavigation from "../common/PageNavigation.vue";

const hotplaceStore = useHotplaceStore();
const { getHotplaceFeed, feedList } = hotplaceStore;

const loading = ref(true);

onMounted(async () => {
  await getHotplaceFeed();
});

watch(
  () => hotplaceStore.feedList,
  (newFeedList) => {
    if (newFeedList != null) {
      loading.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <div id="sidebar">
      <router-link :to="{ name: 'hotplace-write' }">
        <div
          id="btn-post"
          class="btn btn-primary rounded-circle bg-primary text-white fs-2"
        >
          <i class="bi bi-pencil-fill"></i>
        </div>
      </router-link>
    </div>

    <div class="container">
      <section
        data-bs-version="5.1"
        class="clients1 cid-uc9Pp8Jzvy"
        id="clients01-2f"
      >
        <div class="">
          <div class="mt-5">
            <div v-if="!loading" class="row">
              <HotplaceCard
                v-for="feed in hotplaceStore.feedList"
                :card="feed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#sidebar {
  position: fixed;
  bottom: 60px;
  right: 30px;
  z-index: 10;
}
#btn-post {
  width: 66px;
  height: 66px;
}
</style>

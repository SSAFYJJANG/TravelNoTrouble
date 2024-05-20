<script setup>
import { ref, onMounted, onUpdated, watch } from "vue";
import HotplaceCard from "@/components/hotplace/HotplaceCard.vue";
import PageNavigation from "../common/PageNavigation.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useHotplaceStore } from "@/stores/hotplace";

const hotplaceStore = useHotplaceStore();
const { getHotplaceFeed, feedList } = hotplaceStore;
const loading = ref(true);
const cardList = ref(null);

onMounted(async () => {
  console.log(loading.value);
  await getHotplaceFeed();
  loading.value = false;
  console.log(loading.value);
});

const options = [
  { id: 1, name: "최신순", unavailable: true },
  { id: 2, name: "조회순", unavailable: false },
  { id: 3, name: "좋아요순", unavailable: false },
];
const selectedOption = ref(options[0]);
</script>

<template>
  <div>
    <div id="sidebar">
      <router-link :to="{ name: 'hotplace-write' }">
        <div
          id="btn-post"
          class="btn btn-primary rounded-circle bg-primary text-white fs-2"
        >
          <i class="fa-solid fa-plus"></i>
        </div>
      </router-link>
    </div>

    <div class="container">
      <div class="pb-3">
        <div style="width: 200px">
          <Listbox v-model="selectedOption">
            <div class="relative mt-1">
              <ListboxButton
                class="w-100 d-flex justify-content-between shadow rounded bg-white py-2 px-4 z-0"
              >
                <span class="block truncate">{{ selectedOption.name }}</span>
                <span class="absolute right-0 flex items-center pr-2">
                  <i
                    class="fa-solid fa-caret-down text-secondary"
                    aria-hidden="true"
                  ></i>
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-3 rounded mt-1 py-1 text-base shadow"
                >
                  <ListboxOption
                    class="list-unstyled"
                    v-slot="{ active, selected }"
                    v-for="option in options"
                    :key="option.name"
                    :value="option"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-light text-primary' : 'text-black',
                        'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ option.name }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                      >
                        <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>

      <section
        data-bs-version="5.1"
        class="clients1 cid-uc9Pp8Jzvy"
        id="clients01-2f"
      >
        <div>
          <div class="mt-5">
            <div v-if="loading">
              <p>Loading...</p>
            </div>

            <div v-else>
              <div v-for="feed in feedList">{{ feed.title }}</div>
              <div>엥</div>
              <HotplaceCard v-for="feed in feedList" :card="feed" />
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
  bottom: 30px;
  right: 30px;
  z-index: 10;
}
#btn-post {
  width: 66px;
  height: 66px;
}
</style>

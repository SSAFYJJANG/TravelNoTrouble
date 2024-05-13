<script setup>
import { ref } from "vue";
import HotplaceCard from "@/components/hotplace/HotplaceCard.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const options = [
  { id: 1, name: "최신순", unavailable: true },
  { id: 2, name: "조회순", unavailable: false },
  { id: 3, name: "좋아요순", unavailable: false },
];
const selectedOption = ref(options[0]);

const hotplace_cards = [
  {
    cardImg: "/src/assets/images/shop7.jpg",
  },
  {
    cardImg: "/src/assets/images/shop6.jpg",
  },
  {
    cardImg: "/src/assets/images/shop5.jpg",
  },
  {
    cardImg: "/src/assets/images/shop4.jpg",
  },
  {
    cardImg: "/src/assets/images/shop3.jpg",
  },
  {
    cardImg: "/src/assets/images/shop2.jpg",
  },
  {
    cardImg: "/src/assets/images/shop1.jpg",
  },
];
const cardImg = "/src/assets/images/shop7.jpg";
</script>

<template>
  <div>
    <div id="sidebar">
      <router-link
        id="btn-post"
        class="btn btn-primary rounded-circle text-white"
        :to="{ name: 'hotplace-write' }"
      >
        <i class="fa-solid fa-pen fa-2x"></i>
      </router-link>
      <!-- <button id="btn-post" class="btn btn-primary rounded-circle text-white">
        <i class="fa-solid fa-pen fa-2x"></i>
      </button> -->
    </div>

    <section
      data-bs-version="5.1"
      class="gallery1 mbr-gallery cid-uc9Pp8biJG"
      id="gallery01-2e"
    >
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 content-head">
            <div class="mb-5">
              <h3
                class="mbr-section-title mbr-fonts-style align-center m-0 display-2"
              >
                <strong>Hot Place Feed</strong>
              </h3>
              <h4
                class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-7"
              >
                여러 사람들 핫플 보기 -&gt; 핫플 글쓰기는 (햄버거 버튼) 왼쪽
                고정
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid pb-3">
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
      <div class="container-fluid">
        <div class="row mt-5">
          <!-- -->
          <HotplaceCard
            v-for="card in hotplace_cards"
            :cardImg="card.cardImg"
          />
        </div>

        <div class="d-flex justify-content-center mt-5">
          <div>페이지 표시할 곳</div>
        </div>
      </div>
    </section>
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
  width: 75px;
  height: 75px;
}
#btn-post:hover {
  /* background-color: btn-primary-emphasis; */
  background-color: red;
}
</style>

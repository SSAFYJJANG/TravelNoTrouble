<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useUserStore } from "@/stores/user";
import MyTripCalendar from "../myTripPlan/MyTripCalendar.vue";
import { useAttractionStore } from "@/stores/attraction";
import { storeToRefs } from "pinia";
const attractionStore = useAttractionStore();
const { sidoList, gugunList } = storeToRefs(attractionStore);
const { VITE_VUE_API_URL } = import.meta.env;

const userStore = useUserStore();
const { userInfo } = userStore;

const addr = ref({
  sido_name: null,
  gugun_name: null
});

const selectGugunList = ref([]);

onMounted(() => {
  for (let i = 0; i < sidoList.value.length; i++) {
    if (sidoList.value[i].sido_code == userInfo.sido_code) {
      addr.value.sido_name = sidoList.value[i].sido_name;
      break;
    }
  }

  if (addr.value.sido_name != null && gugunList.value != null) {
    selectGugunList.value = gugunList.value[userInfo.sido_code].map(item => ({
      text: item.gugun_name,
      value: item.gugun_code
    }));
  }

  for (let i = 0; i < selectGugunList.value.length; i++) {
    if (selectGugunList.value[i].value == userInfo.gugun_code) {
      addr.value.gugun_name = selectGugunList.value[i].text;
      break;
    }
  }
});

const profileImage = computed(() => {
  return userInfo.image == null
    ? "/src/assets/images/default_profile.png"
    : `${VITE_VUE_API_URL}/profile/${userInfo.image}`;
});
</script>

<template>
  <div class="container">
    <div class="p-5">
      <div v-if="userInfo != null" class="d-flex flex-column">

        <h3 style="font-weight: 700;">
          프로필 정보
        </h3>
        <!-- 프로필 카드 -->
        <div class="mypage-item row justify-content-center rounded-4 mt-4 px-5">
          <!-- 프로필 이미지 -->
          <div class="col-lg-4 px-4 py-4 d-flex justify-content-center">
            <img
              :src="profileImage"
              style="width: 160px; height: 160px; object-fit: cover;"
              class="rounded-pill align-self-center border"
            />
          </div>
          <!-- 프로필 정보 -->
          <div class="col-lg-8 px-5 py-4 d-flex flex-column align-self-center">
            <div>
              <div class="mb-3 d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="fs-4 fw-light">
                    {{ userInfo.username }}
                  </div>
                  <div class="fs-5 ps-1 fw-light">({{ userInfo.userId }})</div>
                </div>

                <router-link
                  class="btn btn-primary display-7 px-2 py-1 m-0 rounded-2 fs-6 fw-light"
                  :to="{ name: 'mypage-modify' }"
                >
                  수정
                </router-link>
              </div>

              <div class="row border rounded-3 px-3 align-center">
                <div class="col-lg-6 my-3">
                  <p class="mb-3 fw-light">이메일</p>
                  <p class="mb-0 fw-light">{{ userInfo.email }}</p>
                </div>
                <div class="col-lg-6 my-3">
                  <p class="fw-light">주소</p>
                  <p class="mb-0 fw-llight">
                    {{ addr.sido_name }}  {{ addr.gugun_name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-5"></div>

        <!-- 캘린더 -->
        <h3 style="font-weight: 700;">
          나의 여행 계획 캘린더
        </h3>
        <div
          class="mypage-item row justify-content-center rounded-4 mt-4 mb-5"
        >
          <div class="h2 d-flex justify-content-center align-self-center">
            <MyTripCalendar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mypage-item {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 5px rgba(0, 0, 0, 0.07),
    0 0px 0px rgba(0, 0, 0, 0.07), 0 0 64px rgba(0, 0, 0, 0.07);
}
#profile-info {
  position: absolute;
  top: 124px;
}
</style>

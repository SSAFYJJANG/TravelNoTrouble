<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
const { VITE_VUE_API_URL } = import.meta.env;

const userStore = useUserStore();

const { getUserInfo, userInfo } = userStore;
const defaultProfile = ref("/src/assets/images/default_profile.png"); // 기본 이미지

onMounted(() => {
  let token = sessionStorage.getItem("accessToken");
  getUserInfo(token);
});
</script>

<template>
  <div class="container">
    <div class="p-5">
      <div class="d-flex flex-column">
        <!-- 프로필 카드 -->
        <div class="mypage-item row justify-content-center rounded-4 mt-5 px-5">
          <!-- 프로필 이미지 -->
          <div class="col-lg-4 px-4 py-4 d-flex justify-content-center">
            <img
              v-if="userInfo.image != null"
              :src="`${VITE_VUE_API_URL}/profile/${userInfo.image}`"
              style="width: 160px; height: 160px"
              class="rounded-pill align-self-center border"
            />
            <img
              v-else
              :src="defaultProfile"
              style="width: 160px; height: 160px"
              class="rounded-pill align-self-center border"
            />
          </div>
          <!-- 프로필 정보 -->
          <div class="col-lg-8 px-5 py-4 d-flex flex-column align-self-center">
            <div>
              <div class="mb-3 d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="fs-4 fw-bold">
                    {{ userInfo.username }}
                  </div>
                  <div class="fs-5 ps-1 fw-light">({{ userInfo.userId }})</div>
                </div>

                <router-link
                  class="btn btn-primary display-7 px-2 py-1 m-0 rounded-2 fs-6 fw-normal"
                  :to="{ name: 'mypage-modify' }"
                >
                  수정
                </router-link>
              </div>

              <div class="row border rounded-3 px-3 align-center">
                <div class="col-lg-6 my-3">
                  <p class="mb-3 fw-light">이메일</p>
                  <p class="mb-0 fw-bold">{{ userInfo.email }}</p>
                </div>
                <div class="col-lg-6 my-3">
                  <p class="fw-light">주소</p>
                  <p class="mb-0 fw-bold">
                    {{ userInfo.sido_code }}시 {{ userInfo.gugun_code }}구
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 캘린더 -->
        <div
          class="mypage-item row justify-content-center rounded-4 mt-5"
          style="height: 600px"
        >
          <div class="h2 d-flex justify-content-center align-self-center">
            캘린더 자리
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

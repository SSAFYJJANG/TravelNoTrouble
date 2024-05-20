<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const { getUserInfo, userInfo } = userStore;

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
        <div class="mypage-item row justify-content-center rounded-4 mt-5">
          <!-- 프로필 이미지 -->
          <div class="col-4 px-5 py-4 d-flex justify-content-center">
            <img
              src="@/assets/images/shop5.jpg"
              style="width: 200px; height: 200px"
              class="rounded-pill align-self-center border"
            />
          </div>
          <!-- 프로필 정보 -->
          <div class="col-8 px-5 py-4 d-flex flex-column">
            <div class="border">
              <p class="h3">{{ userInfo.username }}</p>
              <p>{{ userInfo.userId }}</p>
              <p>{{ userInfo.email }}</p>
              <p>{{ userInfo.sido_code }}시 {{ userInfo.gugun_code }}구</p>
            </div>
            <div class="d-flex justify-content-end my-3">
              <router-link
                class="btn btn-primary display-7 p-2 rounded-2 fs-6 fw-normal"
                :to="{ name: 'mypage-modify' }"
              >
                수정
              </router-link>
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

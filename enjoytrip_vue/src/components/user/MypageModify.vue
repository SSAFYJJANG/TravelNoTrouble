<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
const { VITE_VUE_API_URL } = import.meta.env;

const userStore = useUserStore();
const router = useRouter();
const { userInfo, updateUserInfo, deleteUserInfo } = userStore;

const formData = new FormData();
const info = ref({
  userId: userInfo.userId,
  username: userInfo.username,
  email: userInfo.email,
  image: userInfo.image,
  sido_code: userInfo.sido_code,
  gugun_code: userInfo.gugun_code,
});

const defaultImage = computed(() => {
  return userInfo.image == null
    ? "/src/assets/images/default_profile.png"
    : `${VITE_VUE_API_URL}/profile/${userInfo.image}`;
});
const previewImage = ref(defaultImage.value);
const fileImage = ref(null);

const uploadImage = (event) => {
  const files = event.target?.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

    info.value.image = file.name;
    fileImage.value = file;
  }
};

const completeModify = async () => {
  formData.append("info", encodeURIComponent(JSON.stringify(info.value)));
  formData.append("fileImage", fileImage.value);
  await updateUserInfo(formData);
  router.replace({ name: "mypage-info" });
};

const deleteAccount = () => {
  const checkDel = confirm("정말 탈퇴하시겠습니까?");
  if (checkDel) {
    deleteUserInfo(info.value);
    router.replace({ name: "auth-login" });
  }
};
</script>

<template>
  <div class="container">
    <div class="p-5">
      <div class="d-flex flex-column">
        <div class="mypage-item row justify-content-center rounded-4 mt-5">
          <!-- 프로필 이미지 파일 업로드 -->
          <div class="mt-4 px-5 py-4 d-flex justify-content-center">
            <input type="file" id="profile-img" hidden @change="uploadImage" />
            <label for="profile-img">
              <div>
                <div class="position-relative">
                  <img
                    :src="previewImage"
                    style="width: 200px; height: 200px; object-fit: cover"
                    class="rounded-pill align-self-center border"
                  />
                  <i
                    class="position-absolute bottom-0 end-0 fa-solid fa-square-pen fs-4"
                    style="color: #acb4b9"
                  ></i>
                </div>
              </div>
            </label>
          </div>

          <!-- 프로필 정보 -->
          <div class="row">
            <div class="align-center">
              <table>
                <tr>
                  <td>닉네임</td>
                  <td class="ps-5">
                    <input
                      type="text"
                      name="username"
                      data-form-field="username"
                      class="form-control fs-6 py-0 px-4"
                      v-model="info.username"
                    />
                  </td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td class="ps-5">
                    <input
                      type="text"
                      name="email"
                      data-form-field="email"
                      class="form-control fs-6 py-0 px-4"
                      v-model="info.email"
                    />
                  </td>
                </tr>
                <tr>
                  <td>시도</td>
                  <td class="ps-5">
                    <select
                      name="sido"
                      class="form-control fs-6 py-0 px-4"
                      data-form-field="sido"
                      v-model="info.sido_code"
                    >
                      <option value="0">시도</option>
                      <option value="1">서울</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>구군</td>
                  <td class="ps-5">
                    <select
                      name="gugun"
                      class="form-control fs-6 py-0 px-4"
                      data-form-field="gugun"
                      v-model="info.gugun_code"
                    >
                      <option value="0">구군</option>
                      <option value="1">강서</option>
                      <option value="2">강북</option>
                      <option value="3">강남</option>
                    </select>
                  </td>
                </tr>
              </table>

              <div class="">
                <button
                  class="btn btn-primary display-7 py-2 px-4 mt-4 rounded-3 fs-6 fw-normal"
                  @click="completeModify"
                >
                  수정 완료
                </button>
              </div>
            </div>
            <button
              class="mb-4 fw-light text-primary mb-5"
              @click="deleteAccount"
            >
              회원 탈퇴
            </button>
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
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  margin-left: auto;
  margin-right: auto;
}
input,
select {
  max-width: 300px;
}
</style>

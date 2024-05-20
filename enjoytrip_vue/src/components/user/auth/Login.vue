<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();

const { isLogin, isLoginError } = storeToRefs(userStore);
const { userLogin, getUserInfo } = userStore;

const loginUser = ref({
  userId: "",
  password: "",
});

const clickLogin = async () => {
  await userLogin(loginUser.value);
  let token = sessionStorage.getItem("accessToken");
  console.log("token", token);
  console.log("isLogin: " + isLogin.value);
  if (isLogin.value) {
    // await getUserInfo(token);
    router.replace({ name: "home" });
  }
};
</script>

<template>
  <div
    data-bs-version="5.1"
    class="header16 cid-uc9PmWn2MS mbr-fullscreen mbr-parallax-background"
  >
    <div class="container-fluid">
      <div
        class="container py-2 px-4 bg-white rounded-3 shadow-lg"
        style="width: 440px"
      >
        <h4 class="align-center my-4 fw-light">로그인</h4>
        <div class="row align-center">
          <div class="fw-light">
            <table>
              <tr>
                <td>아이디</td>
                <td class="ps-5">
                  <input
                    type="text"
                    name="userid"
                    data-form-field="userid"
                    class="form-control fs-6 py-0 px-4"
                    v-model="loginUser.userId"
                  />
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td class="ps-5">
                  <input
                    type="password"
                    name="password"
                    data-form-field="password"
                    class="form-control fs-6 py-0 px-4"
                    v-model="loginUser.password"
                  />
                </td>
              </tr>
            </table>

            <div>
              <button
                class="btn btn-primary display-7 py-2 px-4 mt-3 rounded-2 fs-6 fw-normal"
                @click="clickLogin"
              >
                로그인
              </button>
            </div>
          </div>

          <router-link :to="{ name: 'auth-signup' }" class="mb-2 fw-light">
            회원가입
          </router-link>

          <div class="d-flex justify-content-center mb-4">
            <router-link :to="{ name: 'auth-pwd' }" class="fw-light text-primary">
              비밀번호 찾기
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  margin-left: auto;
  margin-right: auto;
}
input {
  max-width: 300px;
}
</style>

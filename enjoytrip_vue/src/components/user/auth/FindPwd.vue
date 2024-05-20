<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();

const { isLogin, isLoginError } = storeToRefs(userStore);
const { userLogin, getUserInfo, findUserPassword, userPwd } = userStore;

const userid = ref(null);

const findPassword = async () => {
  await findUserPassword(userid.value);
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
        <h4 class="align-center my-4 fw-light">비밀번호 찾기</h4>
        <p class="align-center my-4 fw-light">회원 아이디를 입력하세요</p>
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
                    v-model="userid"
                  />
                </td>
              </tr>
            </table>

            <div>
                <div v-if="userStore.userPwd == null">
                    <button
                        class="btn btn-primary display-7 py-2 px-4 mt-3 rounded-2 fs-6 fw-normal"
                        @click="findPassword"
                    >
                        비밀번호 찾기
                    </button>
                </div>
                
                <div v-else>
                    <div class="display-7 py-2 px-4 mt-3 fs-6 fw-light text-primary">
                        비밀번호 : {{ userStore.userPwd }}
                    </div>
                </div>
            </div>

            <div class="mb-4">
              <router-link :to="{ name: 'auth-login' }" class="fw-light">
                로그인 화면으로
              </router-link>
            </div>
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

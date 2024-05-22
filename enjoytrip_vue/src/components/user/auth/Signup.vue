<script setup>
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useAttractionStore } from "@/stores/attraction";
const attractionStore = useAttractionStore();
const { sidoList, gugunList } = storeToRefs(attractionStore);

const router = useRouter();
const userStore = useUserStore();

const { isLogin, isLoginError } = storeToRefs(userStore);
const { userSignup, checkIdDuplicate, isDuplicate } = userStore;

const signupUser = ref({
  userId: "",
  password: "",
  username: "",
  email: "",
  sido_code: 0,
  gugun_code: 0
});

const possible = ref(false);
const checkClick = ref(false);
const errorId = ref(false);

const checkId = async () => {
  const validateId = /^[A-Za-z0-9]{4,8}$/
  userStore.isDuplicate = false;
  possible.value = false;

  if (!validateId.test(signupUser.value.userId) || !signupUser.value.userId) {
    errorId.value = true;
    return;
  }
  errorId.value = false;

  checkClick.value = true;
  await checkIdDuplicate(signupUser.value.userId);
  if (!errorId.value && !userStore.isDuplicate) {
    possible.value = true;
  }
};

const clickSignup = () => {
  if (checkClick.value && !userStore.isDuplicate) {
    console.log(checkEmail(signupUser.value.email));
    if (checkEmail(signupUser.value.email)) {
      userSignup(signupUser.value);
      router.replace({ name: "auth-login" });
    } else {
      alert("이메일 형식이 적절하지 않습니다.")
    }
  } else {
    alert("아이디 중복 검사는 필수입니다.");
    return;
  }

};

const checkEmail = () => {
  const validateEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!validateEmail.test(signupUser.value.email) || !signupUser.value.email) {
    return false;
  }
  return true;
};

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     );
// }

const selectGugunList = ref([]);

const sidos = sidoList.value.map((sido) => ({
  text: sido.sido_name,
  value: sido.sido_code,
}));

sidos.unshift({
  text: '시/도',
  value: 0,
});

selectGugunList.value.unshift({
  text: '구/군',
  value: 0,
});

const selectSido = ref(0);
const selectOptionSidoList = ref(sidos);

// select 변수의 변경을 감시하고 변경될 때마다 onSelect 함수를 호출합니다.
watch(selectSido, (newValue, oldValue) => {
  signupUser.value.sido_code = newValue;
  signupUser.value.gugun_code = 0;
  selectGugunList.value = [];
  if (newValue != 0 && gugunList.value != null) {
    selectGugunList.value = gugunList.value[newValue].map(item => ({
      text: item.gugun_name,
      value: item.gugun_code
    }));
  }
  selectGugunList.value.unshift({
    text: '구/군',
    value: 0,
  });

  // console.log(newValue);
  // console.log("selectGugunList " + selectGugunList.value);
});

</script>

<template>
  <div data-bs-version="5.1" class="header16 cid-uc9PmWn2MS mbr-fullscreen mbr-parallax-background">
    <div class="container-fluid">
      <div class="container py-2 px-4 bg-white rounded-3 shadow-lg" style="width: 440px">
        <h4 class="align-center my-4 fw-light">회원가입</h4>
        <div class="row align-center">
          <div class="fw-light">
            <table>
              <tr>
                <td>아이디</td>
                <td class="ps-5">
                  <div class="d-flex">
                    <input type="text" name="userid" data-form-field="userid" class="form-control fs-6 py-0 px-4"
                      v-model="signupUser.userId" />
                    <button class="btn btn-primary p-0 m-0 ms-2 fw-light" style="font-size: 12px; width:45px"
                      @click="checkId">
                      중복 확인
                    </button>
                  </div>

                  <div :style="[errorId == true ? { display: 'inline-block' } : { display: 'none' }]" colspan="2"
                    style="font-size: 13px; color: red">
                    아이디는 영문, 숫자를 포함한 4자 이상 8자 이내여야 합니다.
                  </div>
                  <div :style="[userStore.isDuplicate == true ? { display: 'inline-block' } : { display: 'none' }]"
                    colspan="2" style="font-size: 13px; color: red">
                    이미 사용중인 아이디입니다.
                  </div>
                  <div :style="[possible == true ? { display: 'inline-block' } : { display: 'none' }]" colspan="2"
                    style="font-size: 13px; color: green">
                    사용 가능한 아이디입니다.
                  </div>
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td class="ps-5">
                  <input type="password" name="password" data-form-field="password" class="form-control fs-6 py-0 px-4"
                    v-model="signupUser.password" />
                </td>
              </tr>
              <tr>
                <td>닉네임</td>
                <td class="ps-5">
                  <input type="text" name="username" data-form-field="username" class="form-control fs-6 py-0 px-4"
                    v-model="signupUser.username" />
                </td>
              </tr>
              <tr>
                <td>이메일</td>
                <td class="ps-5">
                  <div class="d-flex">
                    <input type="email" name="email" data-form-field="email" class="form-control fs-6 py-0 px-4"
                      v-model="signupUser.email" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>시도</td>
                <td class="ps-5">
                  <select name="sido" data-form-field="sido" class="form-control fs-6 py-0 px-4"
                    v-model="selectSido">
                    <option v-for="option in selectOptionSidoList" 
                      :key="option.value" 
                      :value="option.value"
                      :disabled="option.value === '' ? true : false">
                      {{ option.text }}
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>구/군</td>
                <td class="ps-5">
                  <select name="gugun" data-form-field="gugun" class="form-control fs-6 py-0 px-4"
                    v-model="signupUser.gugun_code">
                    <option v-for="option in selectGugunList" :key="option.value" :value="option.value"
                      :disabled="option.value === '' ? true : false">
                      {{ option.text }}
                    </option>
                  </select>
                </td>
              </tr>
            </table>

            <div>
              <button class="btn btn-primary display-7 py-2 px-4 mt-3 fw-light rounded-2 fs-6 fw-normal"
                @click="clickSignup">
                회원가입
              </button>
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
  </div>
</template>

<style scoped>
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

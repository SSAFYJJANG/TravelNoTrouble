<script setup>
import { ref, defineProps, defineEmits } from "vue";
const login = ref({
  id: "",
  name: "",
  isLogin: true,
});

const props = defineProps(["loginModalCheck", "signupModalCheck"]);
const emit = defineEmits(["toggleLoginModal", "toggleSignupModal"]);

const toggleLoginModal = () => {
  emit("toggleLoginModal");
};
const toggleSignupModal = () => {
  emit("toggleSignupModal");
};
</script>

<template>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse"
    data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup"
    aria-expanded="false" aria-label="Toggle navigation">
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>

  <div class="collapse navbar-collapse opacityScroll" id="navbarSupportedContent">
    <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
      <li class="nav-item" v-if="!login.isLogin">
        <button class="nav-link link text-black display-4" @click="toggleLoginModal">
          로그인
        </button>
      </li>
      <li class="nav-item" v-if="!login.isLogin">
        <button class="nav-link link text-black display-4" @click="toggleSignupModal">
          회원가입
        </button>
      </li>

      <li class="nav-item">
        <router-link class="nav-link link text-black display-4" :to="{ name: 'spot' }">
          관광지 조회
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link link text-black display-4" :to="{ name: 'hotplace' }">
          핫플 구경 & 자랑하기
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link link text-black display-4" :to="{ name: 'plan' }">
          나의 여행 계획
        </router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link class="nav-link link text-black dropdown-toggle display-4" :to="{ name: 'home' }"
          data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          커뮤니티
        </router-link>
        <div class="dropdown-menu" aria-labelledby="dropdown-694">
          <router-link class="text-black dropdown-item display-4" :to="{ name: 'board' }">
            공지사항<br />
          </router-link>
          <router-link class="text-black dropdown-item display-4" :to="{ name: 'board' }">
            QnA<br />
          </router-link>
          <router-link class="text-black dropdown-item display-4" :to="{ name: 'board' }">
            자유게시판<br />
          </router-link>
        </div>
      </li>
      <div v-if="login.isLogin">
        <li class="nav-item dropdown">
          <router-link class="nav-link link text-black dropdown-toggle display-4" :to="{ name: 'home' }"
            data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            😄
          </router-link>
          <div class="dropdown-menu" aria-labelledby="dropdown-694">
            <router-link class="text-black dropdown-item display-4" :to="{ name: 'mypage' }">
              마이페이지<br />
            </router-link>
            <router-link class="text-black dropdown-item display-4" :to="{ name: 'home' }">
              로그아웃<br />
            </router-link>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1100px;
  height: 80%;
  background: #edefeb;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 1100px) {
  .modal-container {
    max-width: 90%;
  }
}
</style>

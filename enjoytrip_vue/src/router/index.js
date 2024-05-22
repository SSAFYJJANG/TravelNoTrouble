import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";
import BoardList from "@/components/board/BoardList.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import BoardModify from "@/components/board/BoardModify.vue";
import MypageView from "@/views/MypageView.vue";
import MypageInfo from "@/components/user/MypageInfo.vue";
import MypageModify from "@/components/user/MypageModify.vue";
import AttractionView from "@/views/AttractionView.vue";
import HotplaceView from "@/views/HotplaceView.vue";
import HotplaceFeed from "@/components/hotplace/HotplaceFeed.vue";
import HotplaceWrite from "@/components/hotplace/HotplaceWrite.vue";
import AuthView from "@/views/AuthView.vue";
import Login from "@/components/user/auth/Login.vue";
import Signup from "@/components/user/auth/Signup.vue";
import FindPwd from "@/components/user/auth/FindPwd.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const checkLoginUser = async (to, from, next) => {
  console.log("checkLoginUser");
  const userStore = useUserStore();
  const { userInfo, isValidToken } = storeToRefs(userStore);
  const { getUserInfo } = userStore;

  let token = sessionStorage.getItem("accessToken");

  if (token) {
    console.log("getInfo");
    await getUserInfo(token);
    next();
  } else {
    console.log("로그인 필요");
    next({ name: "auth-login" });
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: checkLoginUser,
      component: HomeView,
    },
    {
      path: "/board",
      name: "board",
      beforeEnter: checkLoginUser,
      component: BoardView,
      children: [
        {
          path: "",
          name: "board-list",
          beforeEnter: checkLoginUser,
          component: BoardList,
        },
        {
          path: "write",
          name: "article-write",
          beforeEnter: checkLoginUser,
          component: BoardWrite,
        },
        {
          path: "view/:articleno",
          name: "article-view",
          beforeEnter: checkLoginUser,
          component: BoardDetail,
        },
        {
          path: "modify/:articleno",
          name: "article-modify",
          beforeEnter: checkLoginUser,
          component: BoardModify,
        },
      ],
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: checkLoginUser,
      component: MypageView,
      redirect: { name: "mypage-info" },
      children: [
        {
          path: "info",
          name: "mypage-info",
          beforeEnter: checkLoginUser,
          component: MypageInfo,
        },
        {
          path: "modify",
          name: "mypage-modify",
          beforeEnter: checkLoginUser,
          component: MypageModify,
        },
      ],
    },
    {
      path: "/hotplace",
      name: "hotplace",
      beforeEnter: checkLoginUser,
      component: HotplaceView,
      redirect: { name: "hotplace-feed" },
      children: [
        {
          path: "feed",
          name: "hotplace-feed",
          beforeEnter: checkLoginUser,
          component: HotplaceFeed,
        },
        {
          path: "write",
          name: "hotplace-write",
          beforeEnter: checkLoginUser,
          component: HotplaceWrite,
        },
      ],
    },
    {
      path: "/place",
      name: "place",
      beforeEnter: checkLoginUser,
      component: AttractionView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
      children: [
        {
          path: "login",
          name: "auth-login",
          component: Login,
        },
        {
          path: "signup",
          name: "auth-signup",
          component: Signup,
        },
        {
          path: "findpwd",
          name: "auth-pwd",
          component: FindPwd,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router;

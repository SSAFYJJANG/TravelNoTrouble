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
import SpotView from "@/views/SpotView.vue";
import HotplaceView from "@/views/HotplaceView.vue";
import HotplaceFeed from "@/components/hotplace/HotplaceFeed.vue";
import HotplaceWrite from "@/components/hotplace/HotplaceWrite.vue";
import MyTripPlanView from "@/views/MyTripPlanView.vue";
import MyTripPlanList from "@/components/myTripPlan/MyTripPlanList.vue";
import MyTripPlanWrite from "@/components/myTripPlan/MyTripPlanWrite.vue";
import AuthView from "@/views/AuthView.vue";
import Login from "@/components/user/auth/Login.vue";
import Signup from "@/components/user/auth/Signup.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const checkLoginUser = async (to, from, next) => {
  console.log("checkLoginUser");
  const userStore = useUserStore();
  const { userInfo, isValidToken } = storeToRefs(userStore);
  const { getUserInfo } = userStore;

  let token = sessionStorage.getItem("accessToken");
  console.log("USERINFO", userInfo.value);

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
          component: BoardList,
        },
        {
          path: "write",
          name: "article-write",
          component: BoardWrite,
        },
        {
          path: "view/:articleno",
          name: "article-view",
          component: BoardDetail,
        },
        {
          path: "modify/:articleno",
          name: "article-modify",
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
          component: MypageInfo,
        },
        {
          path: "modify",
          name: "mypage-modify",
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
          component: HotplaceFeed,
        },
        {
          path: "write",
          name: "hotplace-write",
          component: HotplaceWrite,
        },
      ],
    },
    {
      path: "/spot",
      name: "spot",
      beforeEnter: checkLoginUser,
      component: SpotView,
    },
    {
      path: "/plan",
      name: "plan",
      beforeEnter: checkLoginUser,
      component: MyTripPlanView,
      redirect: { name: "plan-list" },
      children: [
        {
          path: "",
          name: "plan-list",
          component: MyTripPlanList,
        },
        {
          path: "write",
          name: "plan-write",
          component: MyTripPlanWrite,
        },
      ],
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
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

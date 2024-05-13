import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";
import BoardList from "@/components/board/BoardList.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import HotplaceView from "@/views/HotplaceView.vue";
import MypageView from "@/views/MypageView.vue";
import MypageInfo from "@/components/user/MypageInfo.vue";
import MypageModify from "@/components/user/MypageModify.vue";
import SpotView from "@/views/SpotView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/board",
      name: "board",
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
      ],
    },
    {
      path: "/hotplace",
      name: "hotplace",
      component: HotplaceView,
    },
    {
      path: "/mypage",
      name: "mypage",
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
      path: "/spot",
      name: "spot",
      component: SpotView,
    },
  ],
});

export default router;

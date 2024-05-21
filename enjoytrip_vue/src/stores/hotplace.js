import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

import { upload, listFeed, viewDetail, likeFeed } from "@/api/hotplace";
import { httpStatusCode } from "@/util/http-status";

export const useHotplaceStore = defineStore("hotplaceStore", () => {
  const feedList = ref(null);
  const feedInfo = ref(null);

  const router = useRouter();

  const isLogin = ref(false);
  const isLoginError = ref(false);
  const userInfo = ref(null);
  const isValidToken = ref(false);

  const uploadHotplace = async (data) => {
    await upload(
      data,
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          console.log("response", response);
        }
      },
      async (error) => {
        console.error("upload hotplace feed", error);
      }
    );
  };

  const getHotplaceFeed = async () => {
    await listFeed(
      "",
      (response) => {
        if (response.status === httpStatusCode.OK) {
          feedList.value = response.data;
          console.log("feedList", response.data);
        }
      },
      async (error) => {
        console.log("list hotplace feed", error);
      }
    );
  };

  const getHotplaceDetail = async (feedId) => {
    await viewDetail(
      feedId,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          feedInfo.value = response.data;
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  const likeHotplaceFeed = async (feedId) => {
    await likeFeed(
      feedId,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("좋아요 성공!!!");
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  return {
    feedList,
    feedInfo,
    uploadHotplace,
    getHotplaceFeed,
    getHotplaceDetail,
    likeHotplaceFeed,
  };
});

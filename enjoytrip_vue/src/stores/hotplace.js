import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

import { upload, listFeed } from "@/api/hotplace";
import { httpStatusCode } from "@/util/http-status";

export const useHotplaceStore = defineStore("hotplaceStore", () => {
  const router = useRouter();

  const isLogin = ref(false);
  const isLoginError = ref(false);
  const userInfo = ref(null);
  const isValidToken = ref(false);

  const feedList = ref(null);

  const uploadHotplace = async (info) => {
    console.log("핫플 업로드 시도");
    await upload(
      info,
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          console.log("response", response);
        } else {
          console.log("핫플 업로드 response bad");
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
        feedList.value = response.data;
        console.log(response.data);
      },
      async (error) => {
        console.log("list hotplace feed", error);
      }
    );
    // .then((response) => {
    //   console.log("LIST", response);
    // });
  };

  return {
    feedList,
    uploadHotplace,
    getHotplaceFeed,
  };
});

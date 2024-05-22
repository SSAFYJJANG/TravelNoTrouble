import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

import {
  TotalHotplaceCnt,
  bestFeed,
  upload,
  listFeed,
  modify,
  deleteHotplaceFeed,
  viewDetail,
  likeFeed,
} from "@/api/hotplace";
import { httpStatusCode } from "@/util/http-status";

export const useHotplaceStore = defineStore("hotplaceStore", () => {
  const feedList = ref(null);
  const feedInfo = ref(null);
  const bestFeedList = ref(null);
  const hotplaceCnt = ref(357);

  const getBestHotplaceFeed = async () => {
    await bestFeed(
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          bestFeedList.value = response.data;
          console.log("bestFeedList", response.data);
        }
      },
      async (error) => {
        console.error("get list Best hotplac feed", error);
      }
    );
  };

  const getTotalHotplaceCount = async () => {
    await TotalHotplaceCnt(
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          hotplaceCnt.value = response.data;
          console.log("hotplaceCnt", response.data);
        }
      },
      async (error) => {
        console.error("get hotplac cnt", error);
      }
    );
  };

  const modifyHotplace = async (data) => {
    await modify(
      data,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("리뷰 수정 성공!!!");
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  const deleteHotplace = async (data) => {
    await deleteHotplaceFeed(
      data,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("리뷰 삭제 성공!!!");
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

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
          console.log("getHotplaceDetail", feedInfo.value);
          return feedInfo.value;
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
    bestFeedList,
    hotplaceCnt,
    getBestHotplaceFeed,
    getTotalHotplaceCount,
    uploadHotplace,
    getHotplaceFeed,
    getHotplaceDetail,
    likeHotplaceFeed,
    deleteHotplace,
    modifyHotplace,
  };
});

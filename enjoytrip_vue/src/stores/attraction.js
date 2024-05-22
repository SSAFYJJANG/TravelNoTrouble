import { ref } from "vue";
import { defineStore } from "pinia";

import {
  sido,
  gugun,
  attractionResult,
  totalAttractionCnt,
  recommendedAttraction,
  userLikeAttraction,
  addLikeAttraction,
  deleteLikeAttraction,
} from "@/api/attraction";
import { httpStatusCode } from "@/util/http-status";

export const useAttractionStore = defineStore("AttractionStore", () => {
  const sidoList = ref(null);
  const gugunList = ref(null);
  const searchAttractionList = ref(null);
  const attractionCnt = ref(2357);
  const recommendationAttraction = ref(null);
  const likeAttractionList = ref(null);

  const getSidoList = async () => {
    await sido(
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          sidoList.value = response.data;
          console.log("sidoList", response.data);
        }
      },
      async (error) => {
        console.error("get sido list", error);
      }
    );
  };
  const getGugunList = async () => {
    await gugun(
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          gugunList.value = response.data;
          console.log("gugunList", response.data);
        }
      },
      async (error) => {
        console.error("get gugun list", error);
      }
    );
  };

  const getAttractionList = async (data) => {
    await attractionResult(
      data,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          searchAttractionList.value = response.data;
          console.log("searchAttractionList", response.data);
        }
      },
      async (error) => {
        console.error("get search Attraction list", error);
      }
    );
  };
  const getTotalAttractionCount = async () => {
    await totalAttractionCnt(
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          attractionCnt.value = response.data;
          console.log("attractionCnt", response.data);
        }
      },
      async (error) => {
        console.error("get attraction count", error);
      }
    );
  };
  const getRecommendationAttraction = async () => {
    await recommendedAttraction(
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          recommendationAttraction.value = response.data;
          console.log("recommendationAttraction", response.data);
        }
      },
      async (error) => {
        console.error("get recommendation Attraction", error);
      }
    );
  };
  const getUserAttractionList = async (data) => {
    await userLikeAttraction(
      data,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          likeAttractionList.value = response.data;
          console.log("likeAttractionList", response.data);
        }
      },
      async (error) => {
        console.error("get like Attraction List", error);
      }
    );
  };
  const insertAttraction = async (data) => {
    await addLikeAttraction(
      data,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          console.log("insert Like Attraction", response.data);
          getUserAttractionList();
        }
      },
      async (error) => {
        console.error("insert like Attraction List", error);
      }
    );
  };

  const deleteAttraction = async (data) => {
    await deleteLikeAttraction(
      data,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("response", response);
          console.log("like Attraction List", response.data);
          getUserAttractionList();
        }
      },
      async (error) => {
        console.error("delete like Attraction List", error);
      }
    );
  };
  return {
    getSidoList,
    getGugunList,
    getAttractionList,
    getTotalAttractionCount,
    getRecommendationAttraction,
    getUserAttractionList,
    insertAttraction,
    deleteAttraction,
  };
});

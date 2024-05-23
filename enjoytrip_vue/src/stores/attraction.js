import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

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

export const useAttractionStore = defineStore(
  "AttractionStore",
  () => {
    const sidoList = ref(null);
    const gugunList = ref(null);
    const searchAttractionList = ref(null);
    const attractionCnt = ref(2357);
    const recommendationAttraction = ref(null);
    const likeAttractionList = ref(null);
    const isClickSidoCard = ref(0);
    const clickLikeBnt = ref(false);
    const clickHeart = ref(false);

    const getSidoList = async () => {
      await sido(
        (response) => {
          if (response.status === httpStatusCode.OK) {
            sidoList.value = response.data;
            console.log("sidoList", sidoList.value);
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
            gugunList.value = response.data;
            console.log("gugunList", gugunList.value);
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
            likeAttractionList.value = response.data;
            console.log("likeAttractionList", response.data);
          }
        },
        async (error) => {
          console.error("get like Attraction List", error);
        }
      );
    };

    const insertAttraction = async (token, attraction_id) => {
      let decodeToken = jwtDecode(token);
      await addLikeAttraction(
        decodeToken.userId,
        attraction_id,
        (response) => {
          if (response.status === httpStatusCode.OK) {
            console.log("insert Like Attraction", response.data);
          }
        },
        async (error) => {
          console.error("insert like Attraction List", error);
        }
      );
    };

    const deleteAttraction = async (token, attraction_id) => {
      let decodeToken = jwtDecode(token);
      const params = {
        userid: decodeToken.userId,
        content_id: attraction_id,
      };
      await deleteLikeAttraction(
        params,
        (response) => {
          if (response.status === httpStatusCode.OK) {
            console.log("response", response);
            console.log("like Attraction List", response.data);
          }
        },
        async (error) => {
          console.error("delete like Attraction List", error);
        }
      );
    };

    return {
      clickHeart,
      isClickSidoCard,
      sidoList,
      gugunList,
      searchAttractionList,
      attractionCnt,
      recommendationAttraction,
      likeAttractionList,
      clickLikeBnt,
      getSidoList,
      getGugunList,
      getAttractionList,
      getTotalAttractionCount,
      getRecommendationAttraction,
      getUserAttractionList,
      insertAttraction,
      deleteAttraction,
    };
  },
  {
    persist: true,
  }
);

import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

import { write, list, view, modify } from "@/api/board";
import { httpStatusCode } from "@/util/http-status";

export const useBoardStore = defineStore("boardStore", () => {
  const boardList = ref(null);
  const articleInfo = ref(null);

  const router = useRouter();

  const isLogin = ref(false);
  const isLoginError = ref(false);
  const userInfo = ref(null);
  const isValidToken = ref(false);

  const writeArticle = async (article) => {
    await write(
      article,
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          console.log("response", response);
        }
      },
      async (error) => {
        console.error(error);
      }
    );
  };

  const getBoardList = async () => {
    await list(
      "",
      (response) => {
        if (response.status === httpStatusCode.OK) {
          boardList.value = response.data;
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  const getArticleView = async (articleno) => {
    await view(
      articleno,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          articleInfo.value = response.data;
          console.log("board view", articleInfo.value);
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  const modifyArticle = async (article) => {
    await modify(
      article,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("수정 성공!!!");
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  return {
    boardList,
    articleInfo,
    writeArticle,
    getBoardList,
    getArticleView,
    modifyArticle,
  };
});

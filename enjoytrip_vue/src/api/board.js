// import data from "@/data/index.js";
import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function write(article, success, fail) {
  console.log("WRite 시도", article);
  await local.post(`/board`, article).then(success).catch(fail);
}

async function list(param, success, fail) {
  // console.log(data.article);
  // const articles = data.article;
  // const currentPage = 1; // 현재 페이지
  // const totalPageCount = Math.ceil(articles.length / 2); // 전체 페이지 수 계산
  // success 콜백 함수에 더미 데이터를 전달합니다.
  // success({
  //   data: {
  //     articles: articles,
  //     currentPage: currentPage,
  //     totalPageCount: totalPageCount,
  //   },
  // });
  await local.get(`/board`).then(success).catch(fail);
}

async function view(articleno, success, fail) {
  await local.get(`/board/${articleno}`).then(success).catch(fail);
}

async function modify(article, success, fail) {
  await local.put(`/board`, article).then(success).catch(fail);
}

async function del(articleId, success, fail) {
  await local.delete(`/board/${articleId}`).then(success).catch(fail);
}

export { write, list, view, modify, del };

// import data from "@/data/index.js";
import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function listArticle(param, success, fail) {
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

async function viewDetail(articleno, success, fail) {
  await local.get(`/board/${articleno}`).then(success).catch(fail);
}

async function modify(article, success, fail) {
  console.log("MODIFY", article);
  await local.put(`/board`, article).then(success).catch(fail);
}

export { listArticle, viewDetail, modify };

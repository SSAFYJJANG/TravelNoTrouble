import data from "@/data/index.js";

function listArticle(param, success, fail) {
  console.log(data.article);
  const articles = data.article;
  const currentPage = 1; // 현재 페이지
  const totalPageCount = Math.ceil(articles.length / 2); // 전체 페이지 수 계산
  // success 콜백 함수에 더미 데이터를 전달합니다.
  success({
    data: {
      articles: articles,
      currentPage: currentPage,
      totalPageCount: totalPageCount,
    },
  });
}
export { listArticle };

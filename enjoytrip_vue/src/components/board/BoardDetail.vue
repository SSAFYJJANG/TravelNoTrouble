<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { detailArticle, deleteArticle } from "@/api/board";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const route = useRoute();
const router = useRouter();

const { articleno } = route.params;
const article = ref({
  articleNo: articleno,
  title: "제목 테스트",
  writer: "정수현",
  date: "2024-05-10 15:46",
  content:
    '<h1 class="ql-align-center">글쓰기 테스트</h1><h2 class="ql-align-center">글쓰기 테스트</h2><h3 class="ql-align-center">글쓰기 테스트</h3><h4 class="ql-align-center">글쓰기 테스트</h4><h1 class="ql-align-center">글쓰기 테스트</h1><h2 class="ql-align-center">글쓰기 테스트</h2><h3 class="ql-align-center">글쓰기 테스트</h3><h4 class="ql-align-center">글쓰기 테스트</h4><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="background-color: rgb(250, 204, 204);">가나다라마바사</span></p><p class="ql-align-center"><br></p><ul><li class="ql-align-center"><span style="background-color: rgb(250, 204, 204);">아에이오우</span></li><li class="ql-align-center"><span style="background-color: rgb(255, 255, 204);">가나다라마바사</span></li><li class="ql-align-center"><span style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">ABCDEFG</span></li></ul><p class="ql-align-center"><br></p><p class="ql-align-center"><u style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">옹오오ㅗ오ㅗ</u></p><p><br></p><h1 class="ql-align-center">글쓰기 테스트</h1><h2 class="ql-align-center">글쓰기 테스트</h2><h3 class="ql-align-center">글쓰기 테스트</h3><h4 class="ql-align-center">글쓰기 테스트</h4><h1 class="ql-align-center">글쓰기 테스트</h1><h2 class="ql-align-center">글쓰기 테스트</h2><h3 class="ql-align-center">글쓰기 테스트</h3><h4 class="ql-align-center">글쓰기 테스트</h4><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="background-color: rgb(250, 204, 204);">가나다라마바사</span></p><p class="ql-align-center"><br></p><ul><li class="ql-align-center"><span style="background-color: rgb(250, 204, 204);">아에이오우</span></li><li class="ql-align-center"><span style="background-color: rgb(255, 255, 204);">가나다라마바사</span></li><li class="ql-align-center"><span style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">ABCDEFG</span></li></ul><p class="ql-align-center"><br></p><p class="ql-align-center"><u style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">옹오오ㅗ오ㅗ</u></p><p><br></p>',
});

onMounted(() => {
  getArticle();
});

const getArticle = () => {
  //   // const { articleno } = route.params;
  console.log(articleno + "번글 얻으러 가자!!!");
  //   detailArticle(
  //     articleno,
  //     ({ data }) => {
  //       article.value = data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
};

function moveList() {
  router.push({ name: "article-list" });
}

function moveModify() {
  router.push({ name: "article-modify", params: { articleno } });
}

function onDeleteArticle() {
  //   // const { articleno } = route.params;
  console.log(articleno + "번글 삭제하러 가자!!!");
  //   deleteArticle(
  //     articleno,
  //     (response) => {
  //       if (response.status == 200) moveList();
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
}
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 border rounded-3">
        <h3 class="m-4">{{ article.title }}</h3>
        <div class="m-4">
          <div>{{ article.writer }}</div>
          <div>{{ article.date }} | 조회 12</div>
          <hr />
        </div>

        <div class="ql-editor mb-3">
          <div :innerHTML="article.content"></div>
          <div class="mt-5"><button id="article-like">❤</button>좋아요 7</div>
        </div>
      </div>

      <div class="col-lg-10 d-flex justify-content-end mt-3">
        <router-link
          class="btn btn-primary mb-3 ms-1 rounded-pill"
          :to="{ name: 'board-list' }"
        >
          글목록
        </router-link>
        <router-link
          :to="{
            name: 'article-modify',
            params: { articleno: article.articleNo },
          }"
          class="btn btn-outline-success mb-3 ms-1 rounded-pill"
        >
          글수정
        </router-link>
        <button
          type="button"
          class="btn btn-outline-secondary mb-3 ms-1 rounded-pill"
          @click="onDeleteArticle"
        >
          글삭제
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ql-align-right {
  text-align: right;
}
.ql-align-center {
  text-align: center;
}
.ql-align-left {
  text-align: left;
}
</style>

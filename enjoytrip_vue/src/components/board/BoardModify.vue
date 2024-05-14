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
  //   const editor = document.querySelector("#editor");
  //   editor.children[0].innerHTML = article.content.value;
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
  <div class="container d-flex flex-column py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <input
          type="text"
          class="w-100 mb-3 border px-3 py-1"
          v-model="article.title"
        />
        <QuillEditor
          id="editor"
          toolbar="full"
          theme="snow"
          spellcheck="false"
          v-model:content="article.content"
          contentType="html"
        />
        <div class="d-flex justify-content-center">
          <button
            id="btn-board"
            class="btn btn-primary rounded-pill mt-3"
            @click="clickWrite"
          >
            수정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#editor {
  overflow: auto;
}
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

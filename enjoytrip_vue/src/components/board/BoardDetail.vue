<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { detailArticle, deleteArticle } from "@/api/board";
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const route = useRoute();
const router = useRouter();

const { articleno } = route.params;
const article = ref({
    no: articleno,
    title: '제목 테스트',
    writer: '정수현',
    date: '2024-05-10 15:46',
    content: '<h1 class="ql-align-center">글쓰기 테스트</h1><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="background-color: rgb(250, 204, 204);">가나다라마바사</span></p><p class="ql-align-center"><br></p><ul><li class="ql-align-center"><span style="background-color: rgb(250, 204, 204);">아에이오우</span></li><li class="ql-align-center"><span style="background-color: rgb(255, 255, 204);">가나다라마바사</span></li><li class="ql-align-center"><span style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">ABCDEFG</span></li></ul><p class="ql-align-center"><br></p><p class="ql-align-center"><u style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">옹오오ㅗ오ㅗ</u></p><p><br></p>'
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
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-lg-10 text-start">
            <div class="row my-2">
            <!-- <h2 class="text-secondary px-5">
                {{ article.articleNo }}. {{ article.subject }}
            </h2> -->
            </div>
            <h3>{{ article.title }}</h3>
            <div class="row">
                <div class="col-md-8"> {{ article.writer }} | {{ article.date }} </div>
                <div class="col-md-4 align-self-center text-end">조회수 1 | 댓글 17</div>
                <div class="text-secondary">
                    <!-- {{ article.content }} -->
                </div>
                <div class="divider mt-3 mb-3"></div>
            </div>

            <div class="ql-editor border rounded p-4">
                <div :innerHTML="article.content"></div>
            </div>
            
            <div class="divider mt-3 mb-3"></div>

            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary mb-3" @click="moveList">
                글목록
                </button>
                <button type="button" class="btn btn-outline-success mb-3 ms-1" @click="moveModify">
                글수정
                </button>
                <button type="button" class="btn btn-outline-danger mb-3 ms-1" @click="onDeleteArticle">
                글삭제
                </button>
            </div>
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
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const route = useRoute();
const router = useRouter();
const boardStore = useBoardStore();

const { getArticleView, articleInfo } = boardStore;

const { articleno } = route.params;

onMounted(() => {
  getArticleView(articleno);
});

function moveList() {
  router.replace({ name: "article-list" });
}

function moveModify() {
  router.replace({ name: "article-modify", params: { articleno } });
}

function onDeleteArticle() {
  console.log(articleno + "번글 삭제하러 가자!!!");
}
</script>

<template>
  <div class="container py-5">
    <div v-if="boardStore.articleInfo != null" class="row justify-content-center px-4">
      <div class="col-lg-10 border rounded-3">
        <h3 class="m-4">{{ boardStore.articleInfo.title }}</h3>
        <div class="m-4">
          <div>{{ boardStore.articleInfo.userId }}</div>
          <div>{{ boardStore.articleInfo.regist_time }} | 조회 12</div>
          <hr />
        </div>

        <div class="ql-editor mb-3">
          <div :innerHTML="boardStore.articleInfo.overview"></div>
          <!-- <div class="mt-5"><button id="article-like">❤</button>좋아요 7</div> -->
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
            params: { articleno: boardStore.articleInfo.board_id },
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

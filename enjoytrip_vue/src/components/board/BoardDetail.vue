<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useBoardStore } from "@/stores/board";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const boardStore = useBoardStore();
const { userInfo } = userStore;
const { getArticleView, articleInfo, deleteArticle } = boardStore;
const { articleno } = route.params;

onMounted(() => {
  getArticleView(articleno);
});

const onDeleteArticle = () => {
  const checkDel = confirm("정말 삭제하시겠습니까?");
  if (checkDel) {
    deleteArticle(articleno);
    router.replace({ name: 'board-list' });
  }
}
</script>

<template>
  <div class="container py-5">
    <div
      v-if="boardStore.articleInfo != null"
      class="row justify-content-center px-4"
    >
      <div class="col-lg-10 border rounded-3">
        <h3 class="m-4">{{ boardStore.articleInfo.title }}</h3>
        <div class="m-4">
          <div>{{ boardStore.articleInfo.username }} ({{ boardStore.articleInfo.userId }})</div>
          <div class="mt-1">{{ boardStore.articleInfo.regist_time }} | 조회 {{ boardStore.articleInfo.hit }}</div>
          <hr />
        </div>

        <div class="ql-editor mb-3">
          <div :innerHTML="boardStore.articleInfo.overview"></div>
        </div>
      </div>

      <div class="col-lg-10 d-flex justify-content-end mt-3 mb-5">
        <router-link
          class="btn btn-primary py-1 px-2 mb-3 ms-1 rounded-2"
          :to="{ name: 'board-list' }"
        >
          글목록
        </router-link>
        <div v-if="userInfo != null">
          <router-link
            v-if="userInfo.userId == boardStore.articleInfo.userId"
            :to="{
              name: 'article-modify',
              params: { articleno: boardStore.articleInfo.board_id },
            }"
            class="btn btn-outline-success py-1 px-2 mb-3 ms-1 rounded-2"
          >
            글수정
          </router-link>
          <button
            v-if="userInfo.userId == boardStore.articleInfo.userId"
            type="button"
            class="btn btn-outline-secondary py-1 px-2 mb-3 ms-1 rounded-2"
            @click="onDeleteArticle"
          >
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

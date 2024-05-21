<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board"; 
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const route = useRoute();
const router = useRouter();
const boardStore = useBoardStore();
const { getArticleView, articleInfo, modifyArticle } = boardStore;
const { articleno } = route.params;

onMounted(() => {
  getArticleView(articleno);
});

const clickModify = async () => {
  await modifyArticle(boardStore.articleInfo);
  router.replace({ name: "article-view", params: { articleno } });
};
</script>

<template>
  <div class="container d-flex flex-column py-5">
    <div class="row justify-content-center px-4">
      <div v-if="boardStore.articleInfo != null" class="col-lg-10">
        <input
          type="text"
          id="editor-title"
          class="w-100 mb-3 border px-3 py-1"
          v-model="boardStore.articleInfo.title"
        />
        <QuillEditor
          id="editor"
          toolbar="full"
          theme="snow"
          spellcheck="false"
          v-model:content="boardStore.articleInfo.overview"
          contentType="html"
        />
        <div class="d-flex justify-content-center">
          <button
            id="btn-board"
            class="btn btn-primary rounded-pill mt-3"
            @click="clickModify"
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

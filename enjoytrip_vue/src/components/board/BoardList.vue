<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import MenuPadding from "../common/MenuPadding.vue";
import VSelect from "../common/VSelect.vue";
import VSearchInput from "@/components/common/VSearchInput.vue";
import PageNavigation from "../common/PageNavigation.vue";
import { useBoardStore } from "@/stores/board";
import BoardListItem from "@/components/board/item/BoardListItem.vue";
import router from "@/router";

const boardStore = useBoardStore();
const { boardList, getBoardList } = boardStore;

const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "글번호", value: "article_no" },
  { text: "제목", value: "subject" },
  { text: "작성자명", value: "user_id" },
]);

const selectClass = ref(["w-50", "me-2", "ms-2"]);

const articles = ref([]);
const currentPage = ref(1);
const totalPage = ref(0);

const param = ref({
  key: "",
  word: "",
});

onMounted(() => {
  getBoardList();
});

const moveWrite = () => {
  router.push({ name: "article-write" });
};

const onPageChange = (val) => {
  currentPage.value = val;
  param.value.pgno = val;
  getArticleList();
};

const changeKey = (val) => {
  param.value.key = val;
};

const getArticleList = () => {
  listArticle(
    param.value,
    ({ data }) => {
      console.log("data", data);
      articles.value = data.articles;
      currentPage.value = data.currentPage;
      totalPage.value = data.totalPageCount;
      console.log(articles.value);
    },
    (error) => {
      console.log(error);
    }
  );
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글목록</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start">
            <button
              type="button"
              class="btn btn-sm btn-outline-success py-1 px-2"
              @click="moveWrite"
            >
              글쓰기
            </button>
          </div>
          <div class="col-md-5 offset-5">
            <form class="d-flex">
              <VSelect
                :selectOption="selectOption"
                :selectClass="selectClass"
                @onKeySelect="changeKey"
              />
              <!-- <div class="input-group input-group-sm">
                                <input type="text" class="form-control" v-model="param.word" placeholder="검색어..." />
                                <button class="btn btn-dark" type="button" @click="getArticleList">검색</button>
                            </div> -->
              <VSearchInput @click="getArticleList" />
            </form>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <BoardListItem
              v-for="article in boardStore.boardList"
              :key="article.board_id"
              :article="article"
            >
            </BoardListItem>
          </tbody>
        </table>
      </div>
      <PageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      >
      </PageNavigation>
    </div>
  </div>
</template>

<style scoped></style>

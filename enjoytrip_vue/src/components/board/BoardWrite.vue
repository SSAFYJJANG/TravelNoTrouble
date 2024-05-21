<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useBoardStore } from "@/stores/board";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const router = useRouter();
const userStore = useUserStore();
const boardStore = useBoardStore();

const { getUserInfo, userInfo } = userStore;
const { writeArticle } = boardStore;

onMounted(() => {
  let token = sessionStorage.getItem("accessToken");
  getUserInfo(token);
});

const article = ref({
  title: "",
  overview: "",
  userId: userInfo.userId,
});

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const clickWrite = async () => {
  const editor = document.querySelector("#editor");
  article.value.overview = editor.children[0].innerHTML;

  await writeArticle(article.value);
  router.replace({ name: "board-list" });
};
</script>

<template>
  <div class="container d-flex flex-column py-5">
    <div class="row justify-content-center px-4">
      <div class="col-lg-10">
        <input
          type="text"
          id="editor-title"
          placeholder="제목을 입력하세요"
          class="w-100 mb-3 border px-3 py-1"
          v-model="article.title"
        />
        <QuillEditor
          id="editor"
          toolbar="full"
          theme="snow"
          spellcheck="false"
        />
        <div class="d-flex justify-content-center">
          <button
            id="btn-board"
            class="btn btn-primary py-1 px-2 rounded-2 my-5"
            @click="clickWrite"
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ql-container {
  height: 600px;
}
</style>

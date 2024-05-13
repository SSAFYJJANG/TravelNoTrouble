<script setup>
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const clickWrite = function () {
  const editor = document.querySelector("#editor");
  console.log(editor.children[0].innerHTML); // editor 내용
}
</script>

<template>
  <QuillEditor
      id="editor"
      toolbar="full"
      theme="snow"
      spellcheck="false"
  />
  <button id="btn-board" class="btn btn-primary rounded" @click="clickWrite">
    글쓰기
  </button>
</template>

<style>
.ql-container {
  height: 600px;
}
</style>
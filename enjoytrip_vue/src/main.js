import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// 카카오 지도
import { useKakao } from 'vue3-kakao-maps/@utils';
useKakao('API 키');

// bootstrap vue
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// icon
import "bootstrap-icons/font/bootstrap-icons.css"
const app = createApp(App);
app.component('QuillEditor', QuillEditor)

app.use(router);
app.use(BootstrapVue3);

app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

// 카카오 지도
import { useKakao } from "vue3-kakao-maps/@utils";
useKakao('api-key', ['clusterer', 'services', 'drawing']); // 각 라이브러리는 ',(콤마)'로 구분합니다.

// bootstrap vue
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// icon
import "bootstrap-icons/font/bootstrap-icons.css";
const app = createApp(App);
const pinia = createPinia();

app.component("QuillEditor", QuillEditor);

//coreui
// import '@coreui/coreui/dist/css/coreui.min.css'

//AOS
import AOS from 'aos';
import "aos/dist/aos.css";
app.use(AOS);
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(BootstrapVue3);

app.mount("#app");

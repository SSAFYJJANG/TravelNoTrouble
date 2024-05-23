<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useHotplaceStore } from "@/stores/hotplace";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useAttractionStore } from "@/stores/attraction";

const attractionStore = useAttractionStore();
const { sidoList, gugunList } = storeToRefs(attractionStore);
const router = useRouter();
const userStore = useUserStore();
const { userInfo } = userStore;
const hotplaceStore = useHotplaceStore();
const { uploadHotplace } = hotplaceStore;
const formData = new FormData();

const previewImage = ref("/src/assets/images/no_image.jpeg"); // 기본 이미지
const info = ref({
  title: "",
  overview: "",
  image: null,
  userId: userInfo.userId,
  sido_code: null,
  gugun_code: null,
});
const fileImage = ref(null);
const fileCheck = ref(false);

const uploadImage = (event) => {
  const files = event.target?.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

    info.value.image = file.name;
    fileImage.value = file;
    fileCheck.value = true;
  }
};

const clickSubmit = async () => {
  if (fileCheck.value) {
    formData.append("info", encodeURIComponent(JSON.stringify(info.value)));
    formData.append("fileImage", fileImage.value);
    await uploadHotplace(formData);
    router.replace({ name: "hotplace-feed" });
  } else {
    alert("이미지를 첨부해주세요.");
  }
};

const selectGugunList = ref([]);

const sidos = sidoList.value.map((sido) => ({
  text: sido.sido_name,
  value: sido.sido_code,
}));

sidos.unshift({
  text: "시/도",
  value: 0,
});

selectGugunList.value.unshift({
  text: "구/군",
  value: 0,
});

const selectSido = ref(0);
const selectOptionSidoList = ref(sidos);

// select 변수의 변경을 감시하고 변경될 때마다 onSelect 함수를 호출합니다.
watch(selectSido, (newValue, oldValue) => {
  info.value.sido_code = newValue;
  info.value.gugun_code = 0;
  selectGugunList.value = [];
  if (newValue != 0 && gugunList.value != null) {
    selectGugunList.value = gugunList.value[newValue].map((item) => ({
      text: item.gugun_name,
      value: item.gugun_code,
    }));
  }
  selectGugunList.value.unshift({
    text: "구/군",
    value: 0,
  });

  // console.log(newValue);
  // console.log("selectGugunList " + selectGugunList.value);
});
</script>

<template>
  <div class="container">
    <!-- 핫플레이스 피드 업로드 -->
    <section class="page-section my-5" id="hotplaceupload">
      <div>
        <div class="row">
          <!-- 이미지 파일 업로드 -->
          <div class="position-relative col-lg-6">
            <div>
              <input
                type="file"
                id="upfile"
                name="upfile"
                multiple="multiple"
                hidden
                @change="uploadImage"
              />
              <label for="upfile" class="w-100">
                <img
                  class="border rounded-3"
                  style="height: 410px; object-fit: cover"
                  :src="previewImage"
                />
              </label>
              <i
                class="position-absolute top-0 end-0 fa-solid fa-square-pen fs-4"
                style="color: #acb4b9"
              ></i>
            </div>
            <div
              v-if="fileCheck == false"
              class="d-flex justify-content-center"
            >
              이미지 첨부는 필수입니다.
            </div>
          </div>

          <!-- 입력 폼 -->
          <div class="col-lg-6">
            <!-- <div class="col-lg-6 row gx-4 gx-lg-5 justify-content-center mb-5"> -->
            <div class="col-lg-12">
              <form id="hotPlaceForm" data-sb-form-api-token="API_TOKEN">
                <!-- 핫플 이름-->
                <div class="form-floating mb-3">
                  <input
                    class="form-control px-5 hot-input"
                    type="text"
                    data-sb-validations="required"
                    v-model="info.title"
                  />
                  <label for="name" class="mx-4">핫플 이름</label>
                  <div
                    style="font-size: small"
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    핫플 이름이 빈칸입니다.
                  </div>
                </div>
                <!-- 핫플 주소 -->
                <div class="d-flex justify-content-between">
                  <div class="form-floating mb-3 col-6">
                    <select
                      type="text"
                      name="sido"
                      data-form-field="sido"
                      class="form-control px-5 hot-input"
                      v-model="selectSido"
                    >
                      <option
                        v-for="option in selectOptionSidoList"
                        :key="option.value"
                        :value="option.value"
                        :disabled="option.value === '' ? true : false"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                    <label for="name" class="mx-4">핫플 위치 - 시도</label>
                    <div
                      style="font-size: small"
                      class="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      핫플 장소가 빈칸입니다.
                    </div>
                  </div>

                  <div class="form-floating mb-3 col-6">
                    <select
                      type="text"
                      name="gugun"
                      data-form-field="gugun"
                      class="form-control px-5 hot-input"
                      v-model="info.gugun_code"
                    >
                      <option
                        v-for="option in selectGugunList"
                        :key="option.value"
                        :value="option.value"
                        :disabled="option.value === '' ? true : false"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                    <label for="name" class="mx-4">핫플 위치 - 구군</label>
                    <div
                      style="font-size: small"
                      class="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      핫플 장소가 빈칸입니다.
                    </div>
                  </div>
                </div>
                <!-- 핫플 상세설명-->
                <div class="form-floating mb-3">
                  <textarea
                    class="form-control px-5 hot-input"
                    type="text"
                    style="height: 12rem; max-height: 13rem"
                    data-sb-validations="required"
                    v-model="info.overview"
                  ></textarea>
                  <label for="message" class="mx-4">핫플 상세설명</label>
                  <div
                    class="invalid-feedback px-5"
                    data-sb-feedback="message:required"
                  >
                    상세설명이 빈칸입니다.
                  </div>
                </div>

                <!-- Submit Button-->
                <div class="d-grid">
                  <button
                    type="button"
                    class="btn btn-primary btn-xl fs-6"
                    @click="clickSubmit"
                  >
                    피드 올리기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hot-input {
  font-size: 0.9rem;
}
.hot-input:hover,
.hot-input:focus {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 3px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
  border-color: #49a078;
}
/* i {
  top: 10px;
  left: 20px;
} */
</style>

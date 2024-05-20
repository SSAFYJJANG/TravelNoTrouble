<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useHotplaceStore } from "@/stores/hotplace";

const router = useRouter();
const hotplaceStore = useHotplaceStore();
const { uploadHotplace } = hotplaceStore;
const formData = new FormData();

const previewImage = ref("/src/assets/images/gallery06.jpg"); // 기본 이미지
const info = ref({
  title: "",
  overview: "",
  image: "",
  userId: "ssafy2",
  sido_code: null,
  gugun_code: null,
});
const fileImage = ref(null);

const uploadImage = (event) => {
  const files = event.target?.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

    console.log(file);
    info.value.image = file.name;
    // 이미지 파일 이름 : file.name
    fileImage.value = file;
  }
};

const clickSubmit = async () => {
  formData.append("info", JSON.stringify(info.value));
  formData.append("fileImage", fileImage.value);
  await uploadHotplace(formData);
  // router.replace({ name: "hotplace-feed" });
};
</script>

<template>
  <div class="container">
    <!-- 핫플레이스 피드 업로드 -->
    <section class="page-section my-5" id="hotplaceupload">
      <div>
        <div class="row">
          <!-- 이미지 파일 업로드 -->
          <div class="col-lg-6">
            <input
              type="file"
              id="upfile"
              name="upfile"
              multiple="multiple"
              hidden
              @change="uploadImage"
            />
            <label for="upfile">
              <img class="border rounded-2" :src="previewImage" />
            </label>
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
                      v-model="info.sido_code"
                    >
                      <option value="0">시도</option>
                      <option value="1">대구</option>
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
                      <option value="0">구군</option>
                      <option value="1">수성구</option>
                      <option value="2">달서구</option>
                      <option value="3">중구</option>
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
                    @click.once="clickSubmit"
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
</style>

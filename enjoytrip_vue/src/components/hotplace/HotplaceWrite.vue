<script setup></script>

<template>
  <section
    data-bs-version="5.1"
    class="gallery1 mbr-gallery cid-uc9Pp8biJG"
    id="gallery01-2e"
  >
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mb-5">
            <h3
              class="mbr-section-title mbr-fonts-style align-center m-0 display-2"
            >
              <strong>Post Feed</strong>
            </h3>
            <h4
              class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-7"
            >
              핫플 피드 올리기
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section mt-5" id="hotplaceupload">
    <div class="container px-4 px-lg-5">
      <div class="row">
        <!-- 지도 Start -->
        <div id="map2" class="col-lg-6" style="width: 50%"></div>
        <!-- 지도 End -->

        <div class="col-lg-6">
          <!-- <div class="col-lg-6 row gx-4 gx-lg-5 justify-content-center mb-5"> -->
          <div class="col-lg-12">
            <form id="hotPlaceForm" data-sb-form-api-token="API_TOKEN">
              <!-- 핫플 이름-->
              <div class="form-floating mb-3">
                <input
                  class="form-control px-5 hot-input"
                  id="name"
                  type="text"
                  data-sb-validations="required"
                />
                <label for="name" class="px-5">핫플 이름</label>
                <div
                  style="font-size: small"
                  class="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  핫플 이름이 빈칸입니다.
                </div>
              </div>
              <!-- 다녀온 날짜-->
              <div class="form-floating mb-3">
                <input
                  class="form-control px-5 hot-input"
                  id="date"
                  type="date"
                  data-sb-validations="required"
                />
                <label for="date" class="px-5">다녀온 날짜</label>
                <div class="invalid-feedback" data-sb-feedback="date:required">
                  날짜가 빈칸입니다.
                </div>
              </div>
              <!-- 장소 유형-->
              <div class="form-floating mb-3">
                <input
                  class="form-control px-5 hot-input"
                  id="type"
                  type="text"
                  data-sb-validations="required"
                />
                <label for="type" class="px-5">장소 유형</label>
                <div class="invalid-feedback" data-sb-feedback="type:required">
                  장소 유형이 빈칸입니다.
                </div>
              </div>
              <!-- 핫플 상세설명-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control px-5 hot-input"
                  id="message"
                  type="text"
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message" class="px-5">핫플 상세설명</label>
                <div
                  class="invalid-feedback px-5"
                  data-sb-feedback="message:required"
                >
                  상세설명이 빈칸입니다.
                </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center">
                  <div class="fs-5 fw-bolder">자랑하였습니다!</div>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  오류가 발생하였습니다!
                </div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid" onclick="submitHotPlace(this)">
                <button
                  class="btn btn-primary btn-xl disabled fs-6"
                  id="submitButton"
                  type="submit"
                >
                  자랑하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hot-input {
  font-size: 0.9rem;
}
</style>
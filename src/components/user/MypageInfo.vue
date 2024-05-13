<script setup></script>

<template>
  <section data-bs-version="5.1" class="header5 cid-tJS6uM4N87" id="header05-1">
    <div class="topbg"></div>
    <div class="align-center container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-9">
          <h1 class="mbr-section-title mbr-fonts-style mb-4 display-1">
            <strong>MyPage</strong>
          </h1>
          <p class="mbr-text mbr-fonts-style mb-4 display-7">
            Click any text to edit or style it. Select text to insert a link.
            <br />Click the blue icon at the top right corner (Block Parameters)
            of the block to hide/show buttons, text, title, and change the block
            background. Click the red "+" button at the bottom right corner to
            add a new block. Use the top left menu to create new pages, sites,
            and add new themes and extensions.
          </p>
        </div>
      </div>
      <div class="row mt-5 mx-3 justify-content-center">
        <div class="col-12 col-lg-12">
          <div class="container bg-white rounded-5 shadow py-5">
            <div class="row justify-content-center py-5">
              <div class="map-wrapper col-12 col-md-6 px-4">
                <img
                  src="../assets/images/11.jpg"
                  alt="Mobirise Website Builder"
                  title=""
                />
              </div>
              <div class="card col-12 col-md-6">
                <div class="card-wrapper">
                  <div class="text-wrapper">
                    <h5 class="cardTitle mbr-fonts-style mb-2 display-5 mt-4">
                      <strong>이 름</strong>
                    </h5>
                    <div class="mt-5 list mbr-fonts-style display-7">
                      <div class="mbr-text item-wrap">
                        ID: <span class="text-primary">아이디</span>
                      </div>
                      <div class="mbr-text item-wrap">
                        E-mail: <span class="text-primary">이메일@이메일</span>
                      </div>
                      <div class="mbr-text item-wrap">
                        Location:
                        <span class="text-primary">sido 시 gugun 구</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mbr-section-btn mt-3">
          <router-link
            class="btn btn-primary display-7"
            :to="{ name: 'mypage-modify' }"
          >
            수정
          </router-link>
          <!-- <router-link class="btn btn-primary-outline display-7" :to="{ name: 'mypage-delete' }">
            탈퇴
          </router-link> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cid-tJS6uM4N87 {
  /* padding-top: 12rem; */
  padding-top: 6rem;
  padding-bottom: 2rem;
  background-color: #edefeb;
}
.cid-tJS6uM4N87 .mbr-fallback-image.disabled {
  display: none;
}
.cid-tJS6uM4N87 .mbr-fallback-image {
  display: block;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}
.cid-tJS6uM4N87 .topbg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: #2e481a;
}
.cid-tJS6uM4N87 .mbr-section-title {
  color: #000000;
}
.cid-tJS6uM4N87 .mbr-text,
.cid-tJS6uM4N87 .mbr-section-btn {
  color: #000000;
}
</style>

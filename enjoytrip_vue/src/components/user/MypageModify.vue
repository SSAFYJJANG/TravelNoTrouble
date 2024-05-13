<script setup></script>

<template>
  <section data-bs-version="5.1" class="header5 cid-tJS6uM4N87" id="header05-1">
    <div class="topbg"></div>
    <div class="align-center container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-9">
          <h1 class="mbr-section-title mbr-fonts-style mb-4 display-1">
            <strong>Edit Profile</strong>
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
          <div class="container bg-white rounded-5 shadow py-3">
            <div class="row justify-content-center py-5">
              <div class="card col-12 col-md-7">
                <div class="card-wrapper">
                  <div class="text-wrapper">
                    <h5 class="cardTitle mbr-fonts-style mb-2 display-5 mt-2">
                      <strong>회원 정보 수정</strong>
                    </h5>
                    <ul class="mt-5 list mbr-fonts-style display-7">
                      <label class="mbr-text item-wrap mb-3">
                        <span>ID</span>
                        <input
                          type="text"
                          name="userid"
                          data-form-field="userid"
                          class="form-control"
                          value=""
                          id="phone-form03-19"
                        />
                      </label>

                      <label class="mbr-text item-wrap mb-3">
                        <span>Password</span>
                        <input
                          type="password"
                          name="password"
                          data-form-field="password"
                          class="form-control"
                          placeholder="Password"
                          value=""
                          id="phone-form03-19"
                        />
                      </label>

                      <label class="mbr-text item-wrap mb-3">
                        <span>Name</span>
                        <input
                          type="text"
                          name="username"
                          data-form-field="username"
                          class="form-control"
                          value=""
                          id="phone-form03-19"
                        />
                      </label>

                      <label class="mbr-text item-wrap">
                        <span>E-mail</span>
                        <input
                          type="email"
                          name="email"
                          data-form-field="email"
                          class="form-control"
                          value=""
                          id="phone-form03-19"
                        />
                      </label>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="mbr-section-btn mt-3">
                <a class="btn btn-primary display-7" href="index.html#form02-6"
                    >수정</a
                >
                <a
                    class="btn btn-primary-outline display-7"
                    href="index.html#gallery02-v"
                    >탈퇴</a
                >
                </div> -->
          </div>
        </div>

        <div class="mbr-section-btn mt-3">
          <a class="btn btn-primary display-7" href="index.html#form02-6"
            >수정완료</a
          >
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

<script setup></script>

<template>
  <div
    data-bs-version="5.1"
    class="header16 cid-uc9PmWn2MS mbr-fullscreen mbr-parallax-background"
  >
    <div class="container-fluid">
      <div
        class="container py-2 px-4 bg-white rounded-3 shadow-lg"
        style="width: 440px"
      >
        <h4 class="align-center my-4 fw-light">회원가입</h4>
        <div class="row align-center">
          <div class="fw-light">
            <table>
              <tr>
                <td>아이디</td>
                <td class="ps-5">
                  <input
                    type="text"
                    name="userid"
                    data-form-field="userid"
                    class="form-control fs-6 py-0 px-4"
                  />
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td class="ps-5">
                  <input
                    type="password"
                    name="password"
                    data-form-field="password"
                    class="form-control fs-6 py-0 px-4"
                  />
                </td>
              </tr>
              <tr>
                <td>닉네임</td>
                <td class="ps-5">
                  <input
                    type="text"
                    name="username"
                    data-form-field="username"
                    class="form-control fs-6 py-0 px-4"
                  />
                </td>
              </tr>
              <tr>
                <td>이메일</td>
                <td class="ps-5">
                  <input
                    type="email"
                    name="email"
                    data-form-field="email"
                    class="form-control fs-6 py-0 px-4"
                  />
                </td>
              </tr>
              <tr>
                <td>시도</td>
                <td class="ps-5">
                  <select
                    type="text"
                    name="sido"
                    data-form-field="sido"
                    class="form-control fs-6 py-0 px-4"
                  >
                    <option value="0">시도</option>
                    <option value="1">대구</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>구군</td>
                <td class="ps-5">
                  <select
                    type="text"
                    name="gugun"
                    data-form-field="gugun"
                    class="form-control fs-6 py-0 px-4"
                  >
                    <option value="0">구군</option>
                    <option value="1">수성구</option>
                    <option value="1">달서구</option>
                    <option value="1">중구</option>
                  </select>
                </td>
              </tr>
            </table>

            <div>
              <button
                class="btn btn-primary display-7 py-2 px-4 mt-3 mb-4 fw-light rounded-pill fs-6 fw-normal"
                @click="completeModify"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  margin-left: auto;
  margin-right: auto;
}
input,
select {
  max-width: 300px;
}
</style>

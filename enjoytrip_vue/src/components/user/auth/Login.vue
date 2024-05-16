<script setup></script>

<template>
  <div>
    <div class="position-relative h-100">
      <div
        class="position-absolute top-50 start-50 translate-middle p-3 border rounded-3 d-flex flex-column align-center"
      >
        <Strong>로그인</Strong>
        <div>테스트</div>

        <form action="" method="POST">
          <div class="" data-for="userid">
            <input
              type="text"
              name="userid"
              placeholder="ID"
              class="form-control"
              data-form-field="userid"
            />
          </div>
          <div class="" data-for="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="form-control"
              data-form-field="password"
            />
          </div>

          <div class="align-center mbr-section-btn">
            <button type="submit" class="btn btn-primary display-4">
              로그인
            </button>
          </div>
        </form>

        <router-link :to="{ name: 'auth-signup' }"> 회원가입 </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

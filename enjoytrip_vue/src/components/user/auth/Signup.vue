<script setup></script>

<template>
  <div>
    <div class="position-relative h-100">
      <div
        class="position-absolute top-50 start-50 translate-middle p-3 border rounded-3 d-flex flex-column align-center"
      >
        <Strong>로그인</Strong>
        <div>헤더랑 푸터 빼는게 더 나을듯</div>

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
          <div class="" data-for="username">
            <input
              type="text"
              name="username"
              placeholder="Name"
              class="form-control"
              data-form-field="username"
            />
          </div>
          <div class="" data-for="email">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              class="form-control"
              data-form-field="email"
            />
          </div>
          <div class="" data-for="sido">
            <select name="sido" class="form-control" data-form-field="sido">
              <option>시도</option>
              <option>서울</option>
            </select>
          </div>
          <div class="" data-for="gugun">
            <select name="gugun" class="form-control" data-form-field="gugun">
              <option>구군</option>
              <option>강남</option>
            </select>
          </div>

          <div class="align-center mbr-section-btn">
            <button type="submit" class="btn btn-primary display-4">
              회원가입
            </button>
          </div>
        </form>

        <router-link :to="{ name: 'auth-signup' }"> 회원가입 </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1100px) {
  .signup-img {
    display: none;
  }
}
</style>

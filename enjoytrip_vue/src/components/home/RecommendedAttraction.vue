<template>
    <section id="cta" class="cta" v-if="monthInfo">
        <div class="container" data-aos="zoom-out">
            <div class="row">
                <div class="col-lg-7 content d-flex flex-column justify-content-center order-last  order-lg-first">
                    <h3 >
                        이달의 추천 여행지
                    </h3>
                    <hr/>
                    <h4>
                        <em>
                            {{ monthInfo.title }}
                        </em>
                    </h4>
                    <p>{{ monthInfo.address }}</p>
                    <p class="description">{{ monthInfo.desc }}</p>
                    <router-link :to="{ name: 'plan' }" class="cta-btn align-self-start">여행 계획 짜러가기</router-link>
                </div>
                <div class="col-lg-5 order-first order-lg-last d-flex align-items-center img-area">
                    <div class="img">
                        <img :src="monthInfo.image" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const monthInfo = {
    title : "가나다라마바사",
    address : "울릉도 동남쪽 뱃길따라 200리",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image : "/src/assets/images/main.jpg"
}
</script>




<style scoped>
.cta {
  padding: 0;
  margin : 5rem auto 1rem;
}

.cta .container {
  padding: 3rem 4rem;
  background: rgba(72, 86, 100, 0.1);
  border-radius: 15px;
}

@media (max-width: 992px) {
  .cta .container {
    padding: 60px;
  }
}

.cta .content h3 {
  color: #485664;
  font-size: 2rem;
  font-weight: 600;
}

.cta .content h4 em {
  font-style: normal;
  position: relative;
}

.cta .content h4 em:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  height: 10px;
  background: rgba(14, 162, 189, 0.5);
  z-index: -1;
}

.cta .content p {
  color: #485664;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.8rem
}

.description{
    margin : 1rem 0 2rem;
}

.cta .content .cta-btn {
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 5px;
  transition: 0.5s;
  margin-top: 10px;
  background: rgba( 1, 137, 161, 0.9);
}

.cta .content .cta-btn:hover {
  background: #0ea2bd;
}

.cta .img {
  position: relative;
}

.cta .img:before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  transform: rotate(12deg);
}

.cta .img:after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  transform: rotate(6deg);
}

.cta .img img {
  position: relative;
  z-index: 3;
  border-radius: 15px;
}

.img-area {
    padding: 1.5rem;
}
hr{
    margin : 0.5rem, 0 2rem;
}
</style>
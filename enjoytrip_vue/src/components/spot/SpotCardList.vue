<script setup>

const chargingStations = [
    {
        title: '맛나맛집',
        addr1 : '부산광역시',
        addr2 : '해운대구',
    },
    {
        title: '맛나맛집',
        addr1 : '부산광역시',
        addr2 : '해운대구',
    },
    {
        title: '맛나맛집',
        addr1 : '부산광역시',
        addr2 : '해운대구',
    },
    {
        title: '맛나맛집',
        addr1 : '부산광역시',
        addr2 : '해운대구',
    },
    {
        title: '맛나맛집',
        addr1 : '부산광역시',
        addr2 : '해운대구',
    }
]

</script>

<template>
    <div class="container">
        <div class="row">
            <!-- 관광지 정보 반복 출력 -->
            <div v-for="station in chargingStations" :key="station.title" class="col-md-3 mb-4 mt-5">
                <div class="card h-100" style="border: 5ch;">
                    <div class="image-container p-2">
                        <img v-if="station.firstimage" :src="station.firstimage" class="card-img-top img-fluid" />
                        <div v-else class="no-image-placeholder">
                            <img src="/src/assets/images/AdobeStock_275376593.jpeg" alt="No Image Available" class="img-fluid" />
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ station.title }}</h5>
                        <p class="card-text">{{ station.addr1 }} {{ station.addr2 }}</p>
                        <div class="mt-auto align-self-center">
                            <button class="btn btn-secondary" style="padding: 1rem;">자세히보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-container img, .no-image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하면서 컨테이너를 채움 */
}
.no-image-placeholder {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overview-container {
  margin-left: 20px;
  flex-grow: 1; /* 남은 공간을 모두 차지하도록 설정 */
}
</style>
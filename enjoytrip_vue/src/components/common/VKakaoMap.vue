<script setup>
import {ref} from 'vue';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import SpotSearchItem from "@/components/spot/item/SpotSearchItem.vue"
const coordinate = {
    lat: 37.566826,
    lng: 126.9786567
};

const searchSpots = ref([
    {
        spotid : 1,
        theme : 12,
        title : "맛있다음식점",
        address : "구미시 구미동 구미길1",
    },
])

</script>

<template>
    <section id="search_spots" class="pb-0 mb-5">
        <div class="container">
            <div class="map_wrap">
                <KakaoMap style="width: 100%;" :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
                    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
                </KakaoMap>

                <div id="menu_wrap" class="bg_white">
                    <div class="option">
                        <div class="d-flex align-items-center">
                            <input class="form pl-2" 
                                type="text" value="" id="keyword" 
                                placeholder="키워드 입력"
                                @keyup.enter="searchLocs()" />
                            <button id="keyword_search" 
                                class="btn btn-outline-secondary p-1" 
                                style="width: 20%"
                                @click="searchLocs()">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <hr />

                    <ul id="placesList">
                        <SpotSearchItem v-for="spot in searchSpots" 
                            :key="spot.spotid" :spot="spot"
                         >
                        </SpotSearchItem>
                    </ul>

                </div>

            </div>
        </div>
    </section>

</template>

<style scoped>

.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  font-size: 0.8rem;
}
.map_wrap a,
.map_wrap a:hover,
.map_wrap a:active {
  color: #000;
  text-decoration: none;
}
.map_wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.map_wrap > button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  color: white;
}
.map_wrap > button:hover {
  background: white;
}
#menu_wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30%;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 0.8rem;
  border-radius: 10px;
}
.bg_white {
  background: #fff;
}
#menu_wrap hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #5f5f5f;
  margin: 3px 0;
}
#menu_wrap .option {
  text-align: center;
}
#menu_wrap .option p {
  margin: 10px 0;
}
#menu_wrap .option button {
  margin-left: 5px;
}
#pagination {
  margin: 10px auto;
  text-align: center;
}
#keyword{
    padding : 0.5rem 1rem;
    border : 0px;
    border-radius: 10px;
    width: 90%;
}
#keyword:hover{
    border : solid 1px #5f5f5f;
}
</style>
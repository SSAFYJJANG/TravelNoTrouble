<script setup lang="ts">
import { KakaoMap, KakaoMapMarker, type KakaoMapMarkerListItem } from 'vue3-kakao-maps';
import { ref } from 'vue';
//라이브러리 사용 방법을 반드시 참고하여 주시기 바랍니다.
const map = ref<kakao.maps.Map>();
const markerList = ref<KakaoMapMarkerListItem[]>([]);

// 검색 키워드
const keyword = ref("서울");

// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
let bounds: kakao.maps.LatLngBounds;

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;
  // 장소 검색 객체를 생성합니다
  // const ps = new kakao.maps.services.Places();
  // 키워드로 장소를 검색합니다
  // ps.keywordSearch(keyword.value, placesSearchCB);
};

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
const placesSearchCB = (
  data: kakao.maps.services.PlacesSearchResult,
  status: kakao.maps.services.Status): void => {
  if (status === kakao.maps.services.Status.OK) {
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    bounds = new kakao.maps.LatLngBounds();

    for (let marker of data) {
      const markerItem: KakaoMapMarkerListItem = {
        lat: marker.y,
        lng: marker.x,
        infoWindow: {
          content: marker.place_name,
          visible: false
        }
      };
      markerList.value.push(markerItem);
      bounds.extend(new kakao.maps.LatLng(Number(marker.y), Number(marker.x)));
    }
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.value?.setBounds(bounds);
  }
};

//마커 클릭 시 인포윈도우의 visible 값을 반전시킵니다
const onClickMapMarker = (markerItem: KakaoMapMarkerListItem): void => {
  if (markerItem.infoWindow?.visible !== null && markerItem.infoWindow?.visible !== undefined) {
    markerItem.infoWindow.visible = !markerItem.infoWindow.visible;
  } else {
    markerItem.infoWindow.visible = true;
  }
};

const setBounds = (): void => {
  // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
  // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
  if (map.value !== undefined) {
    map.value.setBounds(bounds);
  }
};

const coordinate = {
  lat: 33.450701,
  lng: 126.570667
};
</script>

<template>
  <KakaoMap style="border-radius: 0;" width="100%" height="100%" :lat="coordinate.lat" :lng="coordinate.lng"
    @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapMarker v-for="(marker, index) in markerList" 
      :key="marker.key === undefined ? index : marker.key"
      :lat="marker.lat" 
      :lng="marker.lng" 
      :infoWindow="marker.infoWindow" :clickable="true"
      @onClickKakaoMapMarker="onClickMapMarker(marker)" />
  </KakaoMap>
  <button class="reset-button" @click="setBounds">
    <i class="bi bi-crosshair"></i>
  </button>
</template>

<style scoped>
.reset-button {
  position: fixed;
  bottom: calc(1%);
  background-color: rgb(255, 255, 255);
  right: calc(50%);
  z-index: 200;
  border-radius: 20%;
  border: 1px solid rgb(0, 0, 0, 0.3)
}
</style>

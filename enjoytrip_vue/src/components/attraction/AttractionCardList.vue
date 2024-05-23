<script setup>
import { ref, watch } from 'vue';
import AttractionCardItem from './AttractionCardItem.vue';
import { CFormCheck } from '@coreui/vue';
import { useAttractionStore } from "@/stores/attraction";
const attractionStore = useAttractionStore();
import { storeToRefs } from "pinia";
const { clickLikeBnt, searchAttractionList, clickHeart } = storeToRefs(attractionStore);
const { insertAttraction, deleteAttraction } = attractionStore;

const likefilterAttraction = ref([]);
likefilterAttraction.valule = searchAttractionList.value;

watch(() => clickLikeBnt.value,
  (newState) => {
    if (newState && searchAttractionList.value != null && searchAttractionList.value.length > 0) {
      likefilterAttraction.value = searchAttractionList.value.filter(attraction => attraction.isLiked == '1');
    } else {
      likefilterAttraction.value = searchAttractionList.value;
    }
  },
  {
    immediate: true
  });

watch(() => searchAttractionList.value,
  (newState) => {
    if (clickLikeBnt.value && newState != null && newState.length > 0) {
      likefilterAttraction.value = newState.filter(attraction => attraction.isLiked == '1');
    } else {
      likefilterAttraction.value = newState;
    }
  },
  {
    immediate: true
  }
);

const onPushHeart = (attraction) => {
  let token = sessionStorage.getItem("accessToken");
  clickHeart.value = !clickHeart.value
  console.log(clickHeart.value);
  if (attraction.isLiked == 0) {
    attraction.isLiked = 1;
    insertAttraction(token, attraction.content_id);
  } else {
    attraction.isLiked = 0;
    deleteAttraction(token, attraction.content_id);
  }
}

</script>

<template>
  <div>
    <CFormCheck :button="{ color: 'danger', variant: 'outline', class: 'save-load-button' }" id="btn-check-outlined"
      autocomplete="off" label="찜 목록 보기" v-model="clickLikeBnt" />
    <hr>
    <p class="info"><i class="bi bi-info-circle"></i> +를 누르면 여행계획에 추가할 수 있어요</p>
    <AttractionCardItem v-for="attraction in likefilterAttraction" :key="attraction.content_id" :attraction="attraction"
      @push-heart="onPushHeart" />
    <!-- <AttractionCardItem/> -->
  </div>
</template>

<style scoped>
i {
  margin: 0 .2rem;
}
</style>
<!-- ㄴ  검색 결과 카드 리스트-->
<!-- ㄴ 검색 결과 카드 아이템 리스트 
        or 클릭시 결과 리스트 -->
<!-- ㄴ 검색 결과 선택 후 취소 번트 -->
<!-- ㄴ 검색 오픈 캔버스 닫기 버튼 -->
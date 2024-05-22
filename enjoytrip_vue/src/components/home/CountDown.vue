<script setup>
import { onMounted, ref, } from 'vue';
// auto count
import Vue3Autocounter from "vue3-autocounter";
import { useUserStore } from "@/stores/user";
import { useHotplaceStore } from "@/stores/hotplace";


const userStore = useUserStore();
const { getUsersCnt, userTotalCnt } = userStore;

const hotplaceStore = useHotplaceStore();
const { getTotalHotplaceCount, hotplaceCnt } = hotplaceStore;

const attractionCnt = ref(571);


onMounted(async () => {
	await Promise.all([
		getUsersCnt(),
		getTotalHotplaceCount(),
	]);
});

</script>

<template>
	<section data-bs-version="5.1" class="countdown1 cid-uc9PmWxFUA" id="countdown1-1m">
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-lg-8 countdown-cont align-center mb-2 display-5">
					<div class="row">
						<div class="col-4">
							<div class="number-wrap">
								<span class="number display-2">
									<vue3-autocounter ref='counter' class="number display-2" :startAmount='0'
										:endAmount='hotplaceStore.hotplaceCnt' :duration='4' prefix='' suffix=''
										:decimals='0' :autoinit='true' style="font-weight: bold;" />
								</span>
								<span mbr-text="" class="period display-7">
									Hotplaces
								</span>
							</div>
						</div>
						<div class="col-4">
							<div class="number-wrap">
								<span class="number display-2">
									<vue3-autocounter ref='counter' class="number display-2" :startAmount='0'
										:endAmount='hotplaceStore.hotplaceCnt' :duration='4' prefix='' suffix=''
										:decimals='0' :autoinit='true' style="font-weight: bold;" />
								</span>
								<span mbr-text="" class="period display-7">
									Tour Attractions
								</span>
							</div>
						</div>
						<div class="col-4">
							<div class="number-wrap">
								<span class="number display-2">
									<vue3-autocounter ref='counter' class="number display-2" :startAmount='0'
										:endAmount='userStore.userTotalCnt' :duration='4' prefix='' suffix=''
										:decimals='0' :autoinit='true' style="font-weight: bold;" />
								</span>
								<span mbr-text="" class="period display-7">
									Users
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
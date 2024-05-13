<script setup>
import { ref, } from 'vue';
const dataDueDate = ref("2025/01/01");
</script>

<template>
	<section data-bs-version="5.1" class="countdown1 cid-uc9PmWxFUA" id="countdown1-1m">
		<div class="container-fluid">
			<div class="row justify-content-center" data-v-inspector="src/components/home/CountDown.vue:9:4">
				<div class="col-lg-8" data-v-inspector="src/components/home/CountDown.vue:10:5">
					<div class="countdown-cont align-center mb-2 display-5"
						data-v-inspector="src/components/home/CountDown.vue:11:6">
						<div class="countdown countdown-inited" data-due-date="2025/01/01"
							data-v-inspector="src/components/home/CountDown.vue:18:7">
							<div class="row">
								<div class="col-4">
									<div class="number-wrap">
										<span class="number display-2">
											<b>231</b>
										</span>
										<span mbr-text="" class="period display-7">
											Hotplaces
										</span>
										<span class="dot">:</span>
									</div>
								</div>
								<div class="col-4">
									<div class="number-wrap">
										<span class="number display-2">
											<b>22</b>
										</span>
										<span mbr-text="" class="period display-7">
											Tour Attractions
										</span>
									</div>
								</div>
								<div class="col-4">
									<div class="number-wrap">
										<span class="number display-2">
											<b>56</b>
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
			</div>
		</div>
	</section>
</template>

<style scoped></style>
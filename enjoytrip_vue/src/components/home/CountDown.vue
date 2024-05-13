<script setup>
import { ref, } from 'vue';
const dataDueDate = ref("2025/01/01");
</script>

<template>
	<section data-bs-version="5.1" class="countdown1 cid-uc9PmWxFUA" id="countdown1-1m">
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="countdown-cont align-center mb-2 display-5">
						<div title="Hotplaces" class="daysCountdown col-xs-3 col-sm-3 col-md-3 display-7"></div>
						<div title="Tour Attractions" class="hoursCountdown col-xs-3 col-sm-3 col-md-3 display-7">
							Tour Attractions
						</div>
						<div title="Users" class="minutesCountdown col-xs-3 col-sm-3 col-md-3 display-7"></div>
						<div title="etc" class="secondsCountdown col-xs-3 col-sm-3 col-md-3 display-7"></div>
						<div class="countdown" data-due-date="2025/01/01"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
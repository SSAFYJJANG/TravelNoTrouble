<script setup>
import { ref } from 'vue';

// TODO : props로 title 얻어오기
const maintitle = ref("Travel No Trouble");
// TODO : subtitle을 고정시킬까 그때 그때 변경 시킬까?
const subtitle = ref("Good Travel No Trouble");
</script>

<template>
	<section data-bs-version="5.1" class="header16 cid-uc9PmWn2MS mbr-fullscreen mbr-parallax-background"
		id="header17-1l">
		<div class="container-fluid">
			<div class="row">
				<div class="content-wrap col-12 col-md-12" data-aos="fade-down" data-aos-duration="1000">
					<h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
						<strong>{{ maintitle }}</strong>
					</h1>
					<p class="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
						{{ subtitle }}&nbsp;
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
<script lang="ts" setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
	const { width } = useWindowSize();
	watchEffect(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onMounted(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		}
	});
	definePageMeta({
		layout: 'advert',
	});
</script>

<template>
	<div class="container">
		<div class="advert" v-if="isLarge">
			<div class="advert__title">Новое объявление</div>
			<div class="advert__subtitle">
				Объявление будет доступно на <a target="_blank" href="/">Баня.ру</a> и в
				нашем мобильном <a target="_blank" href="/">приложении</a>
			</div>
		</div>
		<div class="content">
			<AdvertMain />
			<AdvertAside v-if="isLarge" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.advert {
		margin-top: 11rem;
		margin-bottom: 5rem;
		display: flex;
		flex-direction: column;
		gap: 2.4rem;

		& * {
			box-sizing: border-box;
		}
		&__title {
			font-weight: 700;
			font-size: 2.8rem;
			line-height: 100%;
		}
		&__subtitle {
			max-width: 30rem;
			padding-left: 1rem;
			& a {
				color: $green-color;
			}
		}
	}
	.content {
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		padding-top: 2.3rem;

		@media screen and (max-width: 768px) {
			padding-top: 0;
		}
	}
</style>

<script setup>
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
</script>

<template>
	<div class="cabinet-favorite">
		<div class="cabinet-ads-mobile__top" v-if="!isLarge">
			<NuxtLink to="/cabinet/"> <IconBack /></NuxtLink>
			<div class="cabinet-ads__title h2">Избранное</div>
			<IconAdd />
		</div>
		<div class="cabinet-favorite__title h2" v-if="isLarge">Избранное</div>
		<div class="cabinet-favorite__content">
			<!-- <CabinetAdsEmpty
				text="Добавляейте объявления в избранное"
				btn="Добавить объявление"
			/> -->
			<CabinetFavoriteItem />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.cabinet-favorite {
		height: 100%;
		display: flex;
		flex-direction: column;
		&__title {
		}

		&__content {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.cabinet-ads-mobile__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 4rem 2rem;
	}
</style>

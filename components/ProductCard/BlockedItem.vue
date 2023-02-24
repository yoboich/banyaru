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

	defineProps(['title', 'index']);
</script>

<template>
	<div
		v-if="!isLarge"
		class="product-card-blocked__item"
		:class="'product-card-blocked__item-' + index"
	>
		<div class="product-card-blocker__info">
			<div class="product-card-blocked__title h2">{{ title }}</div>
			<div class="product-card-blocked__text h4">
				Контент доступен пользователям с премиум аккаунтом
			</div>
		</div>
		<div class="product-card-blocked__right">
			<div class="product-card-blocked__lock">
				<img src="~/assets/img/product-card/lock.svg" alt="" />
			</div>
		</div>
	</div>
	<div
		v-else
		class="product-card-blocked__item"
		:class="'product-card-blocked__item-' + index"
	>
		<div class="product-card-blocked__title h2">{{ title }}</div>
		<div class="product-card-blocked__right">
			<div class="product-card-blocked__text h5">
				Контент доступен пользователям с премиум аккаунтом
			</div>
			<div class="product-card-blocked__lock">
				<img src="~/assets/img/product-card/lock.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.product-card-blocked {
		&__item {
			margin-top: -3rem;
			display: flex;
			z-index: 10;
			align-items: center;
			justify-content: space-between;

			@media screen and (max-width: 768px) {
				align-items: flex-end;
			}

			&-2 {
				z-index: 9;
			}
			&-3 {
				z-index: 8;
			}
			&-4 {
				z-index: 7;
			}
			&-5 {
				z-index: 6;
			}
		}

		&__title {
			color: $mainFontColor;

			@media screen and (max-width: 768px) {
				margin-bottom: 1rem;
			}
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 3rem;
		}

		&__text {
			color: $secondary-color;
		}

		&__lock {
			background: $default-color;
			box-shadow: 1px 4px 20px rgba(166, 175, 205, 0.8);
			border-radius: 50%;
			width: 5.5rem;
			height: 5.5rem;
			display: flex;
			justify-content: center;
			align-items: center;

			& img {
				width: 1.7rem;
				height: 2.2rem;
			}
		}
	}
</style>

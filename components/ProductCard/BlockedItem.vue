<script setup>
	defineProps(['title', 'index']);
</script>

<template>
	<div
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

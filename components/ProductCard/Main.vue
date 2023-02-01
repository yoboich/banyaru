<script setup></script>

<template>
	<div class="card">
		<div class="card__top">
			<div class="card__top-tariff">Бесплатно</div>

			<div class="card__top-left">
				<div class="card__top-info">Размещено 07.11.2019</div>
				|
				<div class="card__top-info">
					<img src="~/assets/img/icon/eye.svg" alt="" /> 1438 просмотров
				</div>
				|
				<div class="card__top-info">Обновлено 01.01.20223</div>
			</div>
			<div class="card__top-right">Объявление 234987</div>
		</div>
		<div class="card__content">
			<div class="card__left">
				<ProductCardLeftFirst />
			</div>
			<div class="card__right">
				<ProductCardSwiper />
			</div>
		</div>
	</div>
	<ProductCardBlocked v-if="true" />
</template>

<style lang="scss" scoped>
	.card {
		&__top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: $secondary-color;
			margin-bottom: 5.5rem;
			position: relative;
		}

		&__top-tariff {
			position: absolute;
			top: 0.5rem;
			left: -4.5rem;
			background: #8f99ba;
			color: white;
			padding: 1rem;
			border-radius: 6px 0 0px 0px;
		}

		&__top-left {
			padding-left: 6.4rem;
			display: flex;
			align-items: center;

			gap: 1.6rem;
		}

		&__top-info {
			font-weight: 400;
			font-size: 1.4rem;
		}

		&__top-right {
		}

		&__content {
			display: flex;
			gap: 3.3rem;
		}

		&__left {
			max-width: 52rem;
		}

		&__right {
			width: 100%;
		}
	}
</style>

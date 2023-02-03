<script setup>
	defineProps({
		badje: {
			type: String,
			default: 'free',
			validator(value) {
				return ['free', 'vip', 'book'].includes(value);
			},
		},
		badjeText: {
			type: String,
			default: 'Бесплатно',
			validator(value) {
				return ['Бесплатно', 'Бронь', 'VIP'].includes(value);
			},
		},
	});
</script>

<template>
	<div class="card__top">
		<div class="card__top-tariff" :class="badje">{{ badjeText }}</div>

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
	}
</style>

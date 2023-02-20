<script setup>
	const prices = [
		{
			item: '9 000 ₽',
			text: '1ч./мин.3ч. пн-вс 24ч.',
		},
		{
			item: '800 ₽',
			text: '+1чел./ч. свыше 17',
		},
		{
			item: '50 000 ₽',
			text: 'депозит /ночь с 0:00',
		},
	];
</script>

<template>
	<div class="card card-price">
		<div class="card-price__name card__name h1">Цены</div>
		<div class="card-price__row">
			<div class="card-price__content">
				<div class="card-price__items" v-for="price in prices">
					<div class="card-price__price">{{ price.item }}</div>
					<div class="card-price__text">{{ price.text }}</div>
				</div>
			</div>
			<div class="card-price__content">
				<div class="card-price__items" v-for="price in prices">
					<div class="card-price__price">{{ price.item }}</div>
					<div class="card-price__text">{{ price.text }}</div>
				</div>
			</div>
		</div>
		<div class="card-price__btns">
			Смотреть все
			<IconSelect class="green" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-price {
		margin-top: -4rem;
		z-index: 10;
		&__name {
			margin-bottom: 3rem;
		}

		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;
			margin-bottom: 3.5rem;

			@media screen and (max-width: 768px) {
				flex-direction: column;
			}
		}

		&__content {
			flex: 1;

			@media screen and (max-width: 768px) {
				width: 100%;
			}
		}

		&__items {
			display: flex;
			justify-content: space-between;
			margin-bottom: 0.8rem;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				bottom: 0.4rem;
				left: 8rem;
				right: 8rem;
				width: 63%;
				height: 1px;
				border-bottom: 1px dashed $secondary-color;

				@media screen and (max-width: 768px) {
					left: 7rem;
					width: 30%;
				}
			}

			&:last-child {
				margin: 0;
			}
		}

		&__price {
			font-weight: 800;
			font-size: 1.6rem;
			color: $mainFontColor;
		}

		&__text {
			font-weight: 700;
			font-size: 1.6rem;
			color: $secondary-color;
		}

		&__btns {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			color: $green-color;
			gap: 1.5rem;
		}

		&__select {
		}
	}
</style>

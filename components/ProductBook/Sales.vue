<script setup></script>

<template>
	<div class="card card-sales">
		<div class="card-sales__name card__name h1">Скидки</div>
		<div class="card-sales__row">
			<div class="card-sales__item">
				<div class="card-sales__percent h4">15 %</div>
				<div class="card-sales__text h5">На всю банную продукцию</div>
			</div>
			<div class="card-sales__item">
				<div class="card-sales__percent h4">10 %</div>
				<div class="card-sales__text h5">
					На все услуги бани при <br />
					предъявлении промокода
				</div>
			</div>
			<div class="card-sales__item">
				<div class="card-sales__percent h4">15 %</div>
				<div class="card-sales__text h5">На Большой зал от 9 000 ₽</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-sales {
		margin-top: -4rem;
		z-index: 8;
		&__name {
		}

		&__row {
			display: flex;
			justify-content: space-between;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 2.5rem;
			}
		}

		&__item {
			display: flex;
			gap: 10rem;
			position: relative;

			@media screen and (max-width: 768px) {
				justify-content: space-between;
			}

			&::before {
				content: '';
				position: absolute;
				bottom: 2rem;
				left: 5rem;
				width: 25%;
				height: 1px;
				border-bottom: 1px dashed $secondary-color;

				@media screen and (max-width: 768px) {
					bottom: 0;
					width: 30%;
				}
			}
		}

		&__percent {
			font-weight: 700;
			font-size: 16px;
			color: $mainFontColor;
		}

		&__text {
			text-align: right;
			font-weight: 600;
			color: $secondary-color;
		}
	}
</style>

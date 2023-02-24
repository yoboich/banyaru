<script setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
	const tab = ref(1);
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
	<div class="card card-detail">
		<div class="card-detail__name card__name h1">Бронирование</div>
		<div class="card-detail__row">
			<div class="card-detail__column" v-if="isLarge">
				<div class="card-detail__item">
					<div class="card-detail__top">
						<div class="card-detail__hall h2">Зал мак</div>
						<div class="card-detail__all h3-lite">
							Все залы <IconArrow class="green" />
						</div>
					</div>
					<div class="card-detail__advantage">
						<div class="card-detail__advantage-text h4">
							Преимущества онлайн бронирования
						</div>
						<IconSelect class="green" />
					</div>
				</div>
			</div>
			<div class="card-detail__column" v-if="tab === 1 || tab === 2 || isLarge">
				<div class="card-detail__item">
					<ProductBookDate v-if="tab === 1 || isLarge" />
					<ProductBookTime v-if="tab === 1 || isLarge" />
					<ProductBookCount v-if="tab === 2 || isLarge" />
					<ProductBookWhom v-if="tab === 2 || isLarge" />
				</div>
			</div>
			<div class="card-detail__column" v-if="tab === 3 || isLarge">
				<div class="card-detail__item">
					<div class="card-detail__num">
						<div class="card-detail__num-text h4">Детали бронирования:</div>
					</div>
				</div>
				<div class="card-detail__item-info">
					<div class="card-detail__info">
						<div class="card-detail__info-item">Дата:</div>
						<div class="card-detail__info-text">12.11.2023</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Время:</div>
						<div class="card-detail__info-text">15:00 - 18:30</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Объект:</div>
						<div class="card-detail__info-text">Сауна Цветы</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Зал:</div>
						<div class="card-detail__info-text">Зал Мак</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Включено человек:</div>
						<div class="card-detail__info-add">(7 Максимум)</div>
						<div class="card-detail__info-text">4</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Стоимость аренды:</div>
						<div class="card-detail__info-another">3ч. 30 мин.</div>
						<div class="card-detail__info-text">32 000 ₽</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Доп. чел.:</div>
						<div class="card-detail__info-another">0 чел.</div>
						<div class="card-detail__info-text">0 ₽</div>
					</div>
					<div class="card-detail__info">
						<div class="card-detail__info-item">Ответственный:</div>
						<div class="card-detail__info-text">Владимир</div>
					</div>
				</div>
				<div class="card-detail__price h2">
					<div class="card-detail__price-text">Итого:</div>
					<div class="card-detail__price-item">32 000 ₽</div>
				</div>
				<div class="card-detail__cancel">
					<div class="card-detail__cancel-text h4">Отмена бронирования:</div>
					<div class="card-detail__cancel-info">
						ОТ 12 часов - моментальный возврат средств
					</div>
					<div class="card-detail__cancel-info">
						ДО 12 часов - возврат средств не производится!
					</div>
				</div>
				<div class="card-detail__book">
					<div class="card-detail__checkbox">
						<input type="checkbox" id="book" />
						<label for="book"
							>Данные брони мной проверены. С условиями бронирования и публичной
							офертой согласен(-на)</label
						>
					</div>
					<div class="card-detail__btns">
						<button
							class="card-detail__btn btn btn-grey h2-lite"
							@click="tab -= 1"
						>
							Назад
						</button>
						<button class="card-detail__btn btn btn-purple h2-lite">
							Забронировать
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="card-detail__btn btn btn-green" @click="tab += 1">Далее</div>
		<UISteps :number="tab" />
	</div>
</template>

<style lang="scss">
	@import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
	.card-detail {
		margin-top: -4rem;
		z-index: 7;
		&__name {
		}

		&__row {
			display: flex;
		}

		&__btns {
			display: flex;
			gap: 1.5rem;
		}

		&__btn {
			padding: 1.5rem 0;
			margin-top: 4rem;
			text-align: center;

			&.btn-grey {
				color: white;
				background-color: #8f99ba;
				flex: 0 1 40%;
			}
		}

		&__column {
			flex: 1;
			padding-right: 3rem;
			padding-left: 3rem;
			border-right: 1px solid #e1e5f2;

			&:first-child {
				padding-left: 0;
			}

			&:last-child {
				padding-right: 0;
				border: none;
			}
		}

		&__item {
		}

		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 3rem;
		}

		&__num {
			display: flex;
			align-items: center;
			gap: 1rem;
			font-weight: 700;
			margin-bottom: 2rem;
		}

		&__num-item {
			color: $mainFontColor;
		}

		&__num-text {
			color: $mainFontColor;
		}

		&__hall {
			color: $green-color;
		}

		&__all {
			display: flex;
			align-items: center;
			color: $green-color;
			gap: 1rem;
		}

		&__advantage {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__advantage-text {
			color: $mainFontColor;
			font-size: 1.6rem;
			font-weight: 700;
		}

		&__item-info {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			padding-bottom: 3.5rem;
			border-bottom: 1px solid #e1e5f2;
		}
		&__info {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
			font-size: 1.4rem;
			color: $mainFontColor;
			position: relative;

			&:last-child::before {
				content: none;
			}

			&::before {
				content: '';
				position: absolute;
				width: 85%;
				height: 1px;
				background-color: rgba(225, 229, 242, 0.5);
				bottom: -1rem;
				left: 3rem;
			}
		}

		&__info-item {
			color: $secondary-color;
		}
		&__info-text {
		}

		&__info-add {
			counter-reset: $secondary-color;
		}

		&__price {
			display: flex;
			padding-top: 3.5rem;
			padding-bottom: 3.5rem;
			text-transform: uppercase;
			border-bottom: 1px solid #e1e5f2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: $mainFontColor;
		}

		&__cancel {
			padding-top: 3.5rem;
			padding-bottom: 3.5rem;
			border-bottom: 1px solid #e1e5f2;
			color: $mainFontColor;
		}

		&__cancel-text {
			margin-bottom: 1.7rem;
			font-size: 1.6rem;
			font-weight: 700;
			color: $mainFontColor;
		}

		&__cancel-info {
			margin-bottom: 1.2rem;
			font-weight: 600;
			font-size: 1.4rem;

			&:last-child {
				margin: 0;
			}
		}

		&__book {
			padding-top: 2.6rem;
		}

		&__checkbox {
			display: flex;
			align-items: center;
			gap: 3rem;
			margin-bottom: 3rem;

			& input {
				min-width: 2.5rem;
				min-height: 2.5rem;
			}

			& label {
				font-weight: 500;
				font-size: 1.4rem;
				color: $mainFontColor;
			}
		}

		&__btn {
			width: 100%;
		}
	}

	// calendar
	.dp__month_year_row {
		display: inline-flex;
		gap: 2rem;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.dp__month_year_wrap {
		gap: 2rem;

		font-weight: 700;
		font-size: 1.6rem;
		color: #3e3e51;
	}

	.dp__month_year_select {
		pointer-events: none;
		cursor: auto;
	}

	.dp__calendar_header_item {
		font-weight: 500;
		font-size: 1.4rem;
		color: #8f99ba;

		&:nth-child(6) {
			color: $red-color;
		}
		&:nth-child(7) {
			color: $red-color;
		}
	}

	.dp__cell_inner {
		font-weight: 500;
		font-size: 1.4rem;
		color: #3e3e51;
	}

	.dp__today {
		border-color: #17a300;
		border-radius: 24px;
	}

	.dp__range_end,
	.dp__range_start,
	.dp__active_date {
		color: white;
		background: #17a300;
		border-radius: 24px;
		border: none;
	}
	.dp__action_row {
		padding-top: 0;
		padding-bottom: 10px;
	}

	.dp__action_buttons {
		width: 100%;
		font-size: 1.4rem;
		color: $green-color;
	}

	.dp__cancel,
	.dp__selection_preview {
		display: none;
	}

	.dp__cell_offset {
		color: #8f99ba;
	}
</style>

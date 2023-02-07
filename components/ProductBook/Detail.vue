<script setup>
	import Datepicker from '@vuepic/vue-datepicker';
	const currentDate = ref(new Date().getDate());
	const date = ref(new Date());
	const dateValue = ref();

	watchEffect(() => {
		const year = date.value.getFullYear();
		const month = date.value.getMonth();
		const day = date.value.getDate();
		dateValue.value = `${month}.${day}.${year}`;
	});

	const plusDay = () => {
		date.value = new Date(date.value.setDate(date.value.getDate() + 1));
	};
	const minusDay = () => {
		if (date.value.getDate() - 1 < currentDate.value) {
			console.log(1);
			return;
		}
		date.value = new Date(date.value.setDate(date.value.getDate() - 1));
	};

	const handleDate = modelData => {
		if (modelData.getDate() < currentDate.value) {
			return;
		}
		date.value = modelData;
	};
</script>

<template>
	<div class="card card-detail">
		<div class="card-detail__name card__name h1">Бронирование</div>
		<div class="card-detail__row">
			<div class="card-detail__column">
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
			<div class="card-detail__column">
				<div class="card-detail__item">
					<div class="card-detail__num h4">
						<div class="card-detail__num-item">1.</div>
						<div class="card-detail__num-text">Дата брони</div>
					</div>
					<div class="card-detail__date">
						<div class="card-detail__change btn btn-white">
							<IconArrow @click="minusDay" class="card-detail__arrow first" />
							{{ dateValue }}
							<IconArrow @click="plusDay" class="card-detail__arrow" />
						</div>
						<Datepicker
							@update:modelValue="handleDate"
							:value="date"
							:range="false"
							:enable-time-picker="false"
						>
							<template #trigger>
								<div class="card-detail__calendar">
									<IconCalendar />
								</div>
							</template>
						</Datepicker>
					</div>
				</div>
			</div>
			<div class="card-detail__column">
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
					<button class="card-detail__btn btn btn-purple h2-lite">
						Забронировать
					</button>
				</div>
			</div>
		</div>
		<UISteps />
	</div>
</template>

<style lang="scss">
	@import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
	.card-detail {
		margin-top: -4rem;
		z-index: 8;
		&__name {
		}

		&__row {
			display: flex;
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

		&__num {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-bottom: 2rem;
		}

		&__num-item {
			color: $mainFontColor;
		}

		&__num-text {
			color: $mainFontColor;
		}

		&__date {
			display: flex;
			align-items: center;
			gap: 1.8rem;
		}

		&__change {
			padding: 0.5rem 1.1rem;
			display: flex;
			font-weight: 500;
			font-size: 1.4rem;
			gap: 1.6rem;
			cursor: auto;
			color: $mainFontColor;
			&:hover {
				background-color: #fff;
			}
		}

		&__arrow {
			width: 1.2rem;
			cursor: pointer;

			&.first {
				transform: rotate(180deg);
			}
		}

		&__calendar {
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			background: #ffffff;
			box-shadow: 0px 4px 22px rgba(143, 153, 186, 0.27);
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

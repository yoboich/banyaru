<script setup>
	import Datepicker from '@vuepic/vue-datepicker';
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
		date.value = new Date(date.value.setDate(date.value.getDate() - 1));
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
					<div class="card-detail__num">
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
							v-model="date"
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
						<div class="card-detail__num-item">1.</div>
						<div class="card-detail__num-text">Дата брони</div>
					</div>
				</div>
			</div>
		</div>
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
		}

		&__num-text {
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
	}
</style>

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
</template>

<style lang="scss" scoped>
	.card-detail {
		

		&__date {
			display: flex;
			align-items: center;
			gap: 1.8rem;
			margin-bottom: 1.6rem;
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

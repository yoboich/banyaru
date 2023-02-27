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
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<div class="zal-holidays">
		<div class="zal-holidays__title">Праздничные дни</div>
		<div class="zal-holidays__subtitle">
			Укажите праздничные дни для правильного расчета цены
		</div>
		<span v-if="!isLarge" class="zal-holidays__text"
			>Дата праздничных дней</span
		>
		<div class="zal-holidays__inner">
			<span v-if="isLarge">Дата праздничных дней</span>
			<input type="text" class="input" />
			<IconCalendar class="calendar" />
			<span class="icon-minus"></span>
		</div>
		<div class="icon">
			<span class="icon-plus"></span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.icon {
		display: flex;
		align-items: center;
		margin-top: 2.7rem;
	}
	.icon-minus {
		position: relative;
		background: #ffffff;
		box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
		border-radius: 100px;
		padding: 1.7rem;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 32%;
			width: 1.3rem;
			height: 0.3rem;
			border-radius: 3rem;
			background-color: $green-color;
		}
	}
	.icon-plus {
		position: relative;
		background: #ffffff;
		box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
		border-radius: 100px;
		padding: 1.7rem;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 32%;
			width: 1.3rem;
			height: 0.3rem;
			border-radius: 3rem;
			background-color: $green-color;
		}
		&::after {
			content: '';
			position: absolute;
			top: 35%;
			left: 47%;
			width: 0.3rem;
			height: 1.3rem;
			border-radius: 3rem;
			background-color: $green-color;
		}
	}
	.calendar {
		margin-right: 2rem;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		padding: 0.1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: #ffffff;
		box-shadow: 0px 4px 22px rgba(143, 153, 186, 0.27);
	}
	.zal-holidays {
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		&__title {
			font-weight: 700;
			margin-top: 6.4rem;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 1.5rem;
			position: relative;

			@media screen and (max-width: 768px) {
				padding-left: 2.5rem;
				margin-top: 4rem;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					width: 10px;
					height: 10px;
					transform: translateY(-50%);
					background: $red-color;
					border-radius: 50%;
				}
			}
		}
		&__subtitle {
			color: $secondary-color;
			margin-bottom: 3.4rem;
		}
		&__text {
			display: block;
			@media screen and (max-width: 768px) {
				margin: 0 0 1.5rem;
			}
		}
		&__inner {
			display: flex;
			align-items: center;
			& span {
				font-weight: 700;
				font-size: 1.6rem;
				line-height: 2rem;
				margin-right: 3rem;
			}
			& input {
				max-width: 9.6rem;
				margin-right: 2.2rem;
			}
		}
	}
</style>

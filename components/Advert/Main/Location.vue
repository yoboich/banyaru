<script setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
	const { width } = useWindowSize();

	console.log(width.value);
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
	<div class="location">
		<div class="location__item">
			<div class="location__title">Расположение {{ width }}</div>
			<div class="location__subtitle">
				Введите адрес или поставьте точку на карте
			</div>
			<div class="location__mobile-input" v-if="!isLarge">
				<input placeholder="Адрес" type="text" /> <IconArrow class="green" />
			</div>
			<div class="location__input">
				<input class="input" placeholder="Адрес" type="text" />
				<p>или</p>
				<input class="input" placeholder="Координаты" type="text" />
			</div>
		</div>
		<div class="location__map">
			<iframe
				width="100%"
				height="100%"
				class="absolute inset-0"
				frameborder="0"
				title="map"
				marginheight="0"
				marginwidth="0"
				scrolling="no"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
				loading="lazy"
				style="filter: opacity(0.7)"
			></iframe>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.location {
		display: flex;
		gap: 5.3rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		&__map {
			max-width: 57.7rem;
			width: 100%;
			height: 32rem;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}
		&__item {
			max-width: 34rem;
			width: 100%;
		}

		&__mobile-input {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-top: 1px solid $secondary-color;
			border-bottom: 1px solid $secondary-color;
			padding: 2rem 0;
			& svg {
				cursor: pointer;
			}
			& input {
				flex: 1;
				border: none;
				outline: none;
			}
		}
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 1.8rem;
			position: relative;

			@media screen and (max-width: 768px) {
				margin-bottom: 7.5rem;
				padding-left: 2.5rem;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					width: 10px;
					height: 10px;
					transform: translateY(-50%);
					background: $green-color;
					border-radius: 50%;
				}

				&::before {
					content: '*';
					position: absolute;
					top: 0;
					right: 0;
					color: $red-color;
				}
			}
		}
		&__subtitle {
			margin-bottom: 4.3rem;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}
		&__input {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			@media screen and (max-width: 768px) {
				display: none;
			}
			& p {
				padding-left: 1.5rem;
			}
		}
	}
</style>

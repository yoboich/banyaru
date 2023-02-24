<script setup>
	import { useWindowSize } from '@vueuse/core';
	defineProps({
		title: {
			type: String,
		},
		price: {
			type: [Boolean, Number],
			default: false,
		},
		logo: {
			type: Boolean,
			default: false,
		},
		place: {
			type: [Boolean, String],
			default: false,
		},
		desc: {
			type: [Boolean, String],
			default: false,
		},
		img: {
			type: [Boolean, String],
			default: false,
		},
		book: {
			type: Boolean,
			default: false,
		},
	});

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
		if (width.value <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<div class="card-item__main-content">
		<div class="card-item__content">
			<div class="card-item__img">
				<img class="card-item__img-main" v-if="img" :src="img" alt="" />
				<img
					v-if="logo && !isLarge"
					class="card-item__img-logo"
					src="~/assets/img/product-card/card-logo.svg"
					alt=""
				/>
				<div class="card-item__price" v-if="price && !isLarge">
					от {{ price }} <span class="h5-mini">р.</span>
				</div>
			</div>
			<div class="card-item__info">
				<div class="card-item__info-top">
					<div class="card-item__name h4">
						<img
							v-if="logo && isLarge"
							src="~/assets/img/product-card/card-logo.svg"
							alt=""
						/>
						{{ title }}
					</div>
					<div class="card-item__price" v-if="price && isLarge">
						от {{ price }} <span class="h5-mini">р.</span>
					</div>
				</div>

				<div class="card-item__what h5-mini">
					<div class="card-item__what-text">Сауны и бани - Массаж</div>
					<div class="card-item__what-place" v-if="place">({{ place }})</div>
				</div>
				<div class="card-item__review">
					<UIStars />
					<div class="card-item__feedback">
						11 <img src="~/assets/img/icon/comment.svg" alt="" />
					</div>
				</div>
				<div class="card-item__desc h5" v-if="desc">
					{{ desc }}
				</div>
				<div class="card-item__book h5" v-if="book">
					<div class="card-item__book-text">
						Бронирование <IconArrow class="green" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.card-item {
		&__main-content {
			padding: 2rem;
			border-radius: 1.2rem;

			&:hover {
				box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.4);
			}
		}
		&__content {
			display: flex;

			gap: 2rem;
		}

		&__img {
			min-width: 150px;
			@media screen and (max-width: 768px) {
				position: relative;
			}
		}

		&__img-main {
			@media screen and (max-width: 768px) {
				margin-bottom: 1rem;
			}
		}
		&__info {
			flex: 1;
			padding-bottom: 1.5rem;

			border-bottom: 1px solid #e1e5f2;
		}

		&__info-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__name {
			color: $mainFontColor;
			margin-bottom: 1rem;
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}

		&__price {
			font-size: 1.6rem;
			font-weight: 700;
			color: $green-color;

			& span {
				color: $green-color;
			}

			@media screen and (max-width: 768px) {
				color: $mainFontColor;
				& span {
					color: $mainFontColor;
				}
			}
		}

		&__what {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 1rem;
		}

		&__what-text {
			color: $secondary-color;
		}

		&__what-place {
			color: $green-color;
		}

		&__review {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-bottom: 1.5rem;
		}

		&__feedback {
			display: flex;
			align-items: center;
			font-family: 'Montserrat';
			font-weight: 500;
			font-size: 1rem;

			color: #9da7c7;
		}

		&__desc {
			color: $secondary-color;
		}

		&__book {
			display: flex;
			justify-content: flex-end;
			margin-top: 0.5rem;
			cursor: pointer;
			color: $green-color;

			&-text {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}
	}

	.card-item__img-logo {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}
</style>

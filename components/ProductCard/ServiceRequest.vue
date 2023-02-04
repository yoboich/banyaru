<script setup>
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
	});
</script>

<template>
	<div class="card-item__content">
		<div class="card-item__img">
			<img v-if="img" :src="img" alt="" />
		</div>
		<div class="card-item__info">
			<div class="card-item__info-top">
				<div class="card-item__name h4">
					<img
						v-if="logo"
						src="~/assets/img/product-card/card-logo.svg"
						alt=""
					/>
					{{ title }}
				</div>
				<div class="card-item__price" v-if="price">
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
		</div>
	</div>
</template>

<style lang="scss">
	.card-item {
		&__content {
			display: flex;
			gap: 2rem;
			padding: 2rem;
			border-radius: 1.2rem;
			&:hover {
				box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.4);
			}
		}

		&__img {
			min-width: 150px;
		}

		&__info {
			flex: 1;
			padding-bottom: 1.5rem;
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
	}
</style>

<script setup>
	defineProps({
		title: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
	});
</script>

<template>
	<div class="card card-offers card-under">
		<div class="card-offers__title card__name h1">{{ title }}</div>
		<div class="card-offers__row">
			<div class="card-offers__column" v-for="item in items">
				<div class="card-offers__item">
					<div class="card-offers__name h3">{{ item.name }}</div>
					<div class="card-offers__type h5">{{ item.type }}</div>
					<div class="card-offers__img">
						<div class="card-offers__play" v-if="item.video">
							<img src="~/assets/img/product-card/play-white.svg" alt="" />
						</div>
						<img :src="item.img" alt="" />
					</div>
					<div class="card-offers__price h3">от {{ item.price }} ₽</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-offers {
		& * {
			box-sizing: border-box;
		}
		margin-top: -4rem;
		&__title {
			margin-bottom: 3.5rem;
		}
		&__name {
			color: $mainFontColor;
			flex: 1;
		}

		&__row {
			display: flex;
			margin: 0 -1rem;

			@media screen and (max-width: 768px) {
				flex-wrap: wrap;
				row-gap: 2rem;
			}
		}

		&__column {
			flex: 0 1 25%;
			padding: 0 1rem;

			@media screen and (max-width: 768px) {
				flex: 0 1 50%;
			}
		}

		&__item {
			height: 100%;
			display: flex;
			flex-direction: column;
		}

		&__type {
			color: $secondary-color;
			margin-bottom: 1rem;
		}

		&__img {
			position: relative;
			margin-bottom: 2rem;
		}

		&__play {
			position: absolute;
			background-color: rgba($color: #000000, $alpha: 0.4);
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 5.8rem;
			height: 5.8rem;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			cursor: pointer;
		}

		&__price {
			color: $mainFontColor;
		}
	}
</style>

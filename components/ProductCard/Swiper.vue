<script setup>
	import img1 from '~/assets/img/product-card/1.png';
	import img2 from '~/assets/img/product-card/2.png';
	import img3 from '~/assets/img/product-card/3.png';
	import img4 from '~/assets/img/product-card/4.png';
	import img5 from '~/assets/img/product-card/5.png';
	import img6 from '~/assets/img/product-card/6.png';
	import img7 from '~/assets/img/product-card/6.png';

	defineProps({
		premium: {
			type: Boolean,
			default: false,
		},
	});

	const images = ref([img1, img2, img3, img4, img5, img6, img7]);
</script>

<template>
	<div class="product-card-swiper">
		<div class="product-card-swiper__main">
			<img
				class="product-card-swiper__bg"
				src="~/assets/img/product-card/card-swiper.jpg"
				alt=""
			/>

			<img
				src="~/assets/img/product-card/logo.png"
				alt=""
				class="product-card-swiper__logo pos"
			/>
			<div class="product-card-swiper__play pos" v-if="premium">
				<img src="~/assets/img/product-card/play.svg" alt="" />
			</div>

			<div class="product-card-swiper__arrow arrow-left pos" v-if="premium">
				<IconArrow class="fill" />
			</div>
			<div class="product-card-swiper__arrow arrow-right pos" v-if="premium">
				<IconArrow />
			</div>

			<SliderButton class="product-card-swiper__count pos" v-if="premium" />
		</div>
		<div class="product-card-swiper__thumbnail" v-if="premium">
			<img v-for="(item, idx) in 7" :src="images[idx]" alt="" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.pos {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
	}
	.product-card-swiper {
		&__main {
			position: relative;
		}

		&__bg {
			border-radius: 2.8rem;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__logo {
			top: 2rem;
			right: 2rem;
			left: auto;
		}

		&__play {
			background: rgba($color: #000000, $alpha: 0.4);
			width: 6.4rem;
			height: 6.4rem;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 2rem;
			cursor: pointer;
		}

		&__arrow {
			background: $default-color;
			box-shadow: 1px 4px 12px #a6afcd;
			border-radius: 50%;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 4rem;
			height: 4rem;

			top: 50%;
			left: 2rem;
			cursor: pointer;
			transform: translateY(-50%);
			& svg {
				width: 3.5rem;
				height: 3rem;
			}
		}

		&__count {
			top: auto;
			bottom: 1.5rem;
			left: 50%;
			transform: translateX(-50%);
		}

		&__thumbnail {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 1.6rem;

			& img {
				max-width: 15.1rem;
				width: 100%;
				border: 2px solid transparent;
				transition: all 0.2s linear;
				border-radius: 12px;
				cursor: pointer;

				&:hover {
					border: 2px solid #17a300;
					filter: drop-shadow(0px 7px 23px rgba(118, 130, 168, 0.55));
					border-radius: 12px;
					transform: scale(1.1);
				}
			}
		}
	}
	.arrow-left {
		transform: translateY(-50%) rotate(180deg);
	}
	.arrow-right {
		left: auto;
		right: 2rem;
	}
</style>

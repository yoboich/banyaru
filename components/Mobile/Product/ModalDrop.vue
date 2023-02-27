<script setup>
	defineProps({
		visible: {
			type: Boolean,
			default: false,
		},
	});
	const emit = defineEmits('closeModal');
	const closeModal = () => {
		emit('closeModal');
	};

	const info = [
		[
			{ price: '9 000 ₽', text: '1ч./мин.3ч. пн-вс 24ч.' },
			{ price: '800 ₽', text: '+1чел./ч. свыше 17' },
			{ price: '50 000 ₽', text: 'депозит /ночь с 0:00' },
		],
		[
			{ price: '9 000 ₽', text: '1ч./мин.3ч. пн-вс 24ч.' },
			{ price: '800 ₽', text: '+1чел./ч. свыше 17' },
			{ price: '50 000 ₽', text: 'депозит /ночь с 0:00' },
		],
		[
			{ price: '9 000 ₽', text: '1ч./мин.3ч. пн-вс 24ч.' },
			{ price: '800 ₽', text: '+1чел./ч. свыше 17' },
			{ price: '50 000 ₽', text: 'депозит /ночь с 0:00' },
		],
		[
			{ price: '9 000 ₽', text: '1ч./мин.3ч. пн-вс 24ч.' },
			{ price: '800 ₽', text: '+1чел./ч. свыше 17' },
			{ price: '50 000 ₽', text: 'депозит /ночь с 0:00' },
		],
	];
</script>

<template>
	<div class="product-info-modal" v-if="visible" @click="closeModal">
		<div class="product-info-modal__content" @click.stop>
			<img
				@click="closeModal"
				class="product-info-modal__close"
				src="~/assets/img/icon/close.svg"
				alt=""
			/>
			<div class="product-info-modal__title h1">Рорячий сруб</div>
			<div class="product-info-modal__items" v-for="items in info">
				<div class="product-info-modal__item" v-for="item in items">
					<div class="product-info-modal__price h4">{{ item.price }}</div>
					<div class="product-info-modal__text h4">{{ item.text }}</div>
				</div>
			</div>
			<div class="btn next-prev-btn">
				<button
					class="next-prev-btn__item h3-lite next-prev-btn__prev"
					@click="prev"
				>
					<IconArrow class="green" /> Предыдущее
				</button>
				<button
					class="next-prev-btn__item h3-lite next-prev-btn__next"
					@click="next"
				>
					Следующее <IconArrow class="green" />
				</button>
			</div>
			<div class="card-bottom-btn__left">
				<button class="card-mobile-halls__btn btn btn-green">Позвонить</button>
				<button class="card-mobile-halls__btn btn btn-green">Написать</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.product-info-modal {
		&__content {
		}

		&__close {
		}

		&__title {
		}

		&__items {
			margin-bottom: 1.5rem;

			&:last-child {
				border-bottom: 1px solid #000;
			}
		}

		&__item {
			display: flex;
			justify-content: space-between;

			margin-bottom: 0.5rem;
		}

		&__price {
			color: $mainFontColor;
		}

		&__text {
			color: $secondary-color;
		}
	}
	.next-prev-btn {
		margin-top: 4.4rem;
		margin-bottom: 3.5rem;

		&__item {
			padding: 1.5rem 0;
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.card-bottom-btn__left {
	}

	.card-mobile-halls {
		&__btn {
			flex: 1;
		}
	}
</style>

<script setup>
	defineProps({
		free: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<div class="card card-mobile">
		<div class="card-mobile__warn" v-if="!free">На длительный срок!</div>

		<div class="card-mobile__top">
			<div class="card__open">Откроется в <span>09:00</span></div>
			<div class="card-mobile__status">Бесплатное</div>
		</div>
		<div class="card-mobile__info">
			<IconInfo class="setting-aside__info-item" />
		</div>
		<div class="card-mobile__title h2">Сауна цветы</div>
		<div class="card-mobile__types h4">
			<div class="card-mobile__type">Баня на дровах</div>
			<div class="card-mobile__type">Сауна</div>
			<div class="card-mobile__type">Хаммам</div>
		</div>
		<div class="card__review">
			<UIStars :rate="true" />
			|
			<div class="card__feedback h5-mini">11 отзывов</div>
		</div>
		<div class="book-card-first__btns">
			<button class="btn book-card-first__announc">Объявление</button>
			<div class="btn next-prev-btn">
				<button class="next-prev-btn__item h3-lite next-prev-btn__prev">
					<IconArrow class="green" /> Предыдущее
				</button>
				<button class="next-prev-btn__item h3-lite next-prev-btn__next">
					Следующее <IconArrow class="green" />
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card {
		&__open {
			margin: 0;
		}

		&__review {
			margin-bottom: 4.5rem;
		}

		&__feedback {
		}
	}
	.card-mobile {
		border-radius: 0 0 2.3rem 2.3rem;

		&__warn {
			text-align: center;
			background-color: #faba17;
			border-radius: 100px;
			width: 100%;

			font-weight: 500;
			font-size: 1.6rem;
			color: $mainFontColor;
			padding: 0.5rem 0;
			margin-bottom: 2rem;
		}

		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 1rem;
		}

		&__info {
			display: flex;
			justify-content: flex-end;
			margin-bottom: 0.5rem;
		}

		&__status {
		}

		&__title {
			margin-bottom: 1rem;
			color: $mainFontColor;
		}

		&__types {
			display: flex;
			align-items: center;
			margin-bottom: 1.8rem;
		}

		&__type {
			color: $mainFontColor;
			padding-right: 1rem;
			padding-left: 1rem;
			border-right: 1px solid $mainFontColor;

			&:last-child {
				border: none;
				padding-right: 0;
			}
			&:first-child {
				padding-left: 0;
			}
		}
	}
</style>

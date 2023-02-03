<script setup>
	import productDescData from '~~/composables/productDescData';

	const desc = productDescData.desc;
</script>

<template>
	<div class="book-card-desc">
		<div class="book-card-desc__title card__name h1">Описание</div>

		<div class="bood-card-desc__row">
			<div class="book-card-desc__item" v-for="item in desc">
				<div class="book-card-desc__name h4" :class="{ active: item.active }">
					{{ item.title }}
				</div>
				<div class="book-card-desc__text h4" :class="{ active: item.active }">
					{{ item.text }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.book-card-desc {
		&__title {
			margin-bottom: 2.5rem;
		}

		&__item {
			display: flex;
			// justify-content: space-between;
			gap: 3.8rem;
			margin-bottom: 1rem;

			&:last-child {
				margin: 0;
			}
		}

		&__name {
			width: 14rem;
			color: $secondary-color;

			&.active {
				color: $green-color;
				border-bottom: 2px solid $green-color;
			}
		}

		&__text {
			max-width: 33rem;
			color: $mainFontColor;

			&.active {
				font-weight: 900;
			}
		}
	}
</style>

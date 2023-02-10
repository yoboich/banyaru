<script setup>
	const recomend = ref([
		{
			text: 'Ледяная купель',
			price: '34 000',
		},
		{
			text: 'Spa терапия',
			price: '4 000',
		},
		{
			text: 'Ледяная купель',
			price: '34 000',
		},
		{
			text: 'Spa терапия',
			price: '4 000',
		},
		{
			text: 'Ледяная купель',
			price: '34 000',
		},
		{
			text: 'Spa терапия',
			price: '4 000',
		},
	]);

	const badje = ref([
		{ type: 'book', text: 'Бронь' },
		{ type: 'vip', text: 'VIP' },
		{ type: 'buy', text: 'Плптно' },
		{ type: 'free', text: 'Бесплатно' },
	]);
</script>

<template>
	<div class="search-found">
		<div class="search__recomend recomend">
			<div class="recomend__title h3">Рекомендуем посмотреть</div>
			<div class="recomend__row">
				<div class="recomend__item h4" v-for="item in recomend">
					<div class="recomend__name">{{ item.text }}</div>
					<div class="recomend__price">{{ item.price }}</div>
				</div>
			</div>
		</div>
		<div class="search__row">
			<SearchItem v-for="item in badje" :key="item.text" :badje="item" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.recomend {
		margin-bottom: 5rem;
		&__title {
			color: $mainFontColor;
			margin-bottom: 3rem;
		}

		&__row {
			display: flex;
			column-gap: 10rem;
			row-gap: 2rem;
			flex-wrap: wrap;
		}

		&__item {
			flex: 0 1 25%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__name {
			color: $green-color;
		}

		&__price {
			color: $secondary-color;
		}
	}
</style>

<script setup>
	const breadcrumbs = ref(['Главная', 'Бани в городе Москва']);

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
	<div class="search">
		<div class="search__inner">
			<div class="search__left">
				<UIBreadcrumbs :items="breadcrumbs" />
				<div class="search__info">
					<div class="search__title h1">Русская баня в г. Москва</div>
					<div class="search__text h4">
						Сауны бани с массажем - мы нашли для вас 550 саун и бань в городе
						Москва
					</div>
				</div>
				<div class="search__recomend recomend">
					<div class="recomend__title">Рекомендуем посмотреть</div>
					<div class="recomend__row">
						<div class="recomend__item" v-for="item in recomend">
							<div class="recomend__name">{{ item.text }}</div>
							<div class="recomend__price">{{ item.price }}</div>
						</div>
					</div>
				</div>
				<div class="search__row">
					<SearchItem v-for="item in badje" :key="item.text" :badje="item" />
				</div>
			</div>
			<div class="search__right">
				<!-- map -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.search {
		padding-left: 2rem;
		width: 100%;

		&__inner {
		}

		&__left {
			width: 60%;
		}

		&__right {
		}
	}
</style>

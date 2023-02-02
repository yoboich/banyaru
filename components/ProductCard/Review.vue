<script setup>
	import man from '~/assets/img/review/man-avatar.jpg';
	import girl from '~/assets/img/review/girl-avatar.jpg';

	const reviews = ref([
		{
			name: 'ID:42313',
			text: 'Отличные бани. Цена-качество на уровне!',
			date: '25.10.2022',
			img: man,
		},
		{
			name: 'Ангелина',
			text: 'Неизменное место, всегда собираемся тут попариться с друзьями.  Если думаете идти или нет, то однозначно идите, не пожалеете. Все классно и на высшем уровне!!!',
			date: '06.09.2021',
			img: girl,
		},
	]);
</script>

<template>
	<div class="card card-service">
		<div class="card-service__content">
			<div class="card-service__top">
				<div class="card-service__title h1">Отзывы</div>
				<div class="card-service__text h4">
					<img src="~/assets/img/icon/comment.svg" alt="" /> 181 отзывов
				</div>
			</div>
			<div class="card-service__items">
				<ProductCardReviewItem
					v-for="item in reviews"
					:key="item.name"
					:date="item.date"
					:img="item.img"
					:name="item.name"
					:text="item.text"
				/>
			</div>
			<form action="#" @submit.prevent>
				<input
					class="card-service__input h4"
					type="text"
					placeholder="Оставить отзыв"
				/>
			</form>
			<div class="card-service__all h3-lite">
				<div class="card-service__all-item">
					Показать все отзывы <IconArrow class="green" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-service {
		margin-top: 2rem;
		&__content {
		}

		&__top {
			display: flex;
			align-items: center;
			gap: 1.5em;
			margin-bottom: 3rem;
		}

		&__title {
			color: $mainFontColor;
		}

		&__text {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			color: #9da7c7;
		}

		&__items {
			padding: 0 2.2rem;
		}

		&__input {
			box-sizing: border-box;
			display: block;
			background: $default-color;
			box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
			border-radius: 1.2rem;
			width: 100%;
			padding: 1rem 2rem 3rem;
			margin-bottom: 2.5rem;
			outline: none;
		}

		&__all {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 1rem;

			&-item {
				cursor: pointer;
				color: $green-color;
			}
		}
	}
</style>

<script setup></script>

<template>
	<div class="card">
		<ProductCardTop badje="book" badjeText="Бронь" />
		<div class="card__content">
			<div class="card__left">
				<ProductBookFirst />
				<ProductBookSecond />
			</div>
			<div class="card__right">
				<ProductCardSwiper :premium="true" />
			</div>
		</div>
		<div class="card-desc">
			<div class="card-desc__left">
				<ProductBookThird />
			</div>
			<div class="card-desc__right">
				<!-- map -->
			</div>
		</div>
		<div class="card-bottom-btn">
			<div class="card-bottom-btn__left">
				<button class="btn btn-green">Позвонить</button>
				<button class="btn btn-green">Написать</button>
			</div>
			<div class="card-bottom-btn__right">
				<button class="btn btn-white">Построить маршрут</button>
				<button class="btn btn-white">Вызвать такси</button>
			</div>
		</div>
	</div>
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss">
	.card-desc {
		padding-top: 3.5em;
		display: flex;
		gap: 1rem;
		&__left {
			width: 100%;
			max-width: 54rem;
		}

		&__right {
			width: 100%;
		}
	}

	.card-bottom-btn {
		padding-top: 5.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__left {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			& * {
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}
	}
</style>

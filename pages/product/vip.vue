<script setup></script>

<template>
	<div class="card">
		<ProductCardTop badje="vip" badjeText="VIP" />
		<div class="card__content">
			<div class="card__left">
				<ProductVipFirst />
				<ProductVipSecond />
				<div class="vip-card-third">
					<div class="vip-card-third__text h4">
						А Сибирский сруб рядом! Для этого не нужно ехать за 5000 километров.
						<br />
						У вас есть уникальная возможность принять комплекс настоящих
					</div>
					<div class="card__read keep-read">
						Читать всё <IconArrow class="green" />
					</div>
				</div>
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
	<ProductBookPrice class="card-under" />
	<ProductBookSales class="card-under" />
	<ProductBookItems
		class="card-hall"
		title="Залы"
		:items="productItemData.halls"
	/>
	<ProductBookItems
		class="card-service"
		title="Услуги"
		:items="productItemData.services"
	/>
	<ProductBookItems
		class="card-bath"
		title="Банные принадлежности"
		:items="productItemData.bath"
	/>
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss" scoped>
	.vip-card-third {
		padding-top: 3rem;
		&__text {
			color: $secondary-color;
			margin-bottom: 3rem;
		}
	}
</style>

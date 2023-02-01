<script setup></script>

<template>
	<div class="card__name h1">Сауна цветы</div>
	<div class="card__review">
		<div class="card__stars">
			<div class="card__star" v-for="item in 4">
				<img src="~/assets/img/icon/active-star.svg" alt="" />
			</div>
			<div class="card__star">
				<img src="~/assets/img/icon/star.svg" alt="" />
			</div>
			<span class="h4">4,2</span>
		</div>
		|
		<div class="card__feedback h5-mini">11 отзывов</div>
	</div>
	<div class="card__info">
		<div class="card__info-item h5">
			<span><img src="~/assets/img/icon/metro.svg" alt="" />Озёрная</span>
			<span><img src="~/assets/img/icon/run.svg" alt="" />13 мин пешком</span>
		</div>
		|
		<div class="card__info-item h5">
			<span
				>г. Москва, ул. Большая <br />
				Очаковская, 35</span
			>
		</div>
	</div>
	<div class="card__open">Откроется в <span>09:00</span></div>
	<div class="card__text h5">
		Хотите узнать, как снимали усталость после добычливой охоты русские цари?
		<br />
		Тогда вам – сюда.
	</div>
	<div class="card__text h5">
		Здесь переплелись суровость охотничьего быта и царская роскошь гостевого
		зала, воспринимаемого сначала, как ожившая история. Великолепная парная в
		древнем бревенчатом стиле контрастирует с европейский газон с бассейном....
	</div>
	<div class="card__read keep-read">Читать всё <IconArrow class="green" /></div>
	<div class="card__btn btn">+7 498 289 89 ...</div>
</template>

<style lang="scss" scoped>
	.card {
		&__name {
			color: $mainFontColor;
			margin-bottom: 0.5rem;
		}

		&__review {
			display: flex;
			align-items: center;
			gap: 1.3rem;
			color: $secondary-color;
			margin-bottom: 1.3rem;
		}

		&__stars {
			display: flex;
			align-items: center;

			& span {
				color: #9da7c7;
				margin-left: 1rem;
			}
		}

		&__star {
		}

		&__feedback {
			color: $green-color;
			text-decoration: underline;
		}

		&__info {
			display: flex;
			align-items: center;
			gap: 1.8rem;
			color: $secondary-color;
			margin-bottom: 1.1rem;
		}

		&__info-item {
			display: flex;
			justify-content: center;
			flex-direction: column;
			color: $secondary-color;

			& span {
				display: flex;
				align-items: center;
				gap: 0.6rem;
			}
		}

		&__open {
			color: $red-color;
			font-weight: 500;
			font-size: 1.4rem;
			margin-bottom: 1.1rem;
			& span {
				font-weight: 900;
			}
		}

		&__text {
			color: #8f99ba;
			margin-bottom: 2rem;
		}
	}
</style>

<script setup>
	const activeText = ref(0);
	const text = ref([
		'Здесь переплелись суровость охотничьего быта и царская роскошь гостевого зала, воспринимаемого сначала, как ожившая история. Великолепная парная в древнем бревенчатом стиле контрастирует с европейский газон с бассейном....',
		'Здесь переплелись суровость охотничьего быта и царская роскошь гостевого зала, воспринимаемого сначала, как ожившая история. Великолепная парная в древнем бревенчатом стиле контрастирует с европейский газон с бассейном ожившая история. Великолепная парная в древнем бревенчатом стиле контрастирует с европейский газон с бассейном',
	]);
</script>

<template>
	<div class="card__name h1">Сауна цветы</div>
	<div class="card__review">
		<UIStars :rate="true" />
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
		{{ activeText === 0 ? text[0] : text[1] }}
	</div>
	<div
		class="card__read keep-read"
		v-if="activeText === 0"
		@click="activeText = 1"
	>
		Читать всё <IconArrow class="green" />
	</div>
	<div class="card__btn">
		<button class="card__btn-item btn btn-green h2-lite">
			+7 498 289 89 ...
		</button>
	</div>
</template>

<style lang="scss" scoped>
	.card {
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

		&__text {
			color: #8f99ba;
			margin-bottom: 2rem;
		}

		&__btn-item {
			padding-top: 1.4rem;
			padding-bottom: 1.4rem;
		}
	}
</style>

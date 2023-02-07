<script setup></script>

<template>
	<div class="vip-card-first">
		<div class="vip-card-first__name card__name h1">Сауна цветы</div>

		<div class="card__review">
			<UIStars :rate="true" />
			|
			<div class="card__feedback h5-mini">11 отзывов</div>
		</div>
		<div class="vip-card-first__info">
			<div class="vip-card-first__adress h4">
				г. Москва, ул. Большая <br />
				Очаковская, 35
			</div>
			<div class="vip-card-first__loc">
				<div class="vip-card-first__metro h4">
					<img src="~/assets/img/icon/metro.svg" alt="" /> Озёрная
				</div>
				<div class="vip-card-first__walk h4">
					<img src="~/assets/img/icon/run.svg" alt="" /> 13 мин пешком
				</div>
			</div>
		</div>
		<div class="card__open">Откроется в <span>09:00</span></div>
		<div class="vip-card-first__text h4">
			Аминевские бани, Для этого не нужно ехать за 5000 километров. У вас есть
			уникальная возможность принять комплекс настоящих
		</div>
		<div class="card__read keep-read">
			Читать всё <IconArrow class="green" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.vip-card-first {
		&__name {
		}

		&__info {
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-end;
			gap: 3rem;
			align-items: center;
			color: $secondary-color;
			margin-bottom: 1.5rem;
		}

		&__loc {
		}

		&__adress {
			color: $secondary-color;
		}

		&__metro {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: $secondary-color;
			margin-bottom: 0.5rem;
		}

		&__walk {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: $secondary-color;
		}

		&__text {
			margin-top: 1rem;
			margin-bottom: 1.5rem;
			color: $secondary-color;
		}
	}
</style>

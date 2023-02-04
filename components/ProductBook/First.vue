<script setup></script>

<template>
	<div class="book-card-first">
		<div class="book-card-first__top">
			<div class="card__open">Откроется в <span>09:00</span></div>
			<div class="book-card-first__i">
				<img src="~/assets/img/icon/i.svg" alt="" />
			</div>
		</div>
		<div class="book-card-first__name card__name h1">Сауна цветы</div>
		<div class="book-card-first__info">
			<div class="book-card-first__info-left">
				<div class="card__review">
					<UIStars :rate="true" />
					|
					<div class="card__feedback h5-mini">11 отзывов</div>
				</div>
				<div class="book-card-first__price h2">
					от 9 000 ₽
					<span class="book-card-first__select btn-select">
						<IconSelect class="green" />
					</span>
				</div>
			</div>
			<div class="book-card-first__info-right">
				<div class="book-card-first__adress h4">
					г. Москва, ул. Большая Очаковская, 35
				</div>
				<div class="book-card-first__metro h4">
					<img src="~/assets/img/icon/metro.svg" alt="" /> Озёрная
				</div>
				<div class="book-card-first__walk h4">
					<img src="~/assets/img/icon/run.svg" alt="" /> 13 мин пешком
				</div>
			</div>
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
	.book-card-first {
		border-bottom: 1px solid #E1E5F2;
		padding-bottom: 4rem;
		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__name {
			margin-bottom: 2.5rem;
		}
		&__info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 4.5rem;
			margin-bottom: 4.5rem;

			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 50%;
				width: 1px;
				height: 100%;
				background-color: #e1e5f2;

				transform: translateX(-50%);
			}
		}

		&__info-left {
		}

		&__price {
			margin-top: 3rem;
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}

		&__select {
			
		}

		&__info-right {
			& * {
				color: $secondary-color;
			}
		}

		&__adress {
			margin-bottom: 1rem;
		}

		&__metro {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		&__walk {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		&__btns {
			position: relative;
			display: flex;
			justify-content: center;
		}

		&__announc {
			position: absolute;
			padding-top: 0;
			padding-bottom: 0;
			background-color: $default-color;
			box-shadow: 0px 4px 8px rgba(143, 153, 186, 0.16);
			color: $secondary-color;
		}
	}
</style>

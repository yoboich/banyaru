<script setup>
	defineProps(['badje']);
</script>

<template>
	<div class="search__item card no-box">
		<div class="search__swip">
			<div class="search__main-img">
				<img class="search__img" src="~/assets/img/search/main.png" alt="" />
				<div class="search__like img-pos">
					<img src="~/assets/img/icon/love.svg" alt="" />
				</div>
				<div class="search__play img-pos">
					<img src="~/assets/img/product-card/play.svg" alt="" />
				</div>
				<div class="search__arrow back img-pos">
					<img src="~/assets/img/search/big-arr.png" alt="" />
				</div>
				<div class="search__arrow img-pos">
					<img src="~/assets/img/search/big-arr.png" alt="" />
				</div>
			</div>
			<div class="search__thumbnail">
				<img src="~/assets/img/search/main.png" alt="" />
				<img src="~/assets/img/search/main.png" alt="" />
				<img src="~/assets/img/search/main.png" alt="" />
				<img src="~/assets/img/search/main.png" alt="" />
			</div>
		</div>
		<div class="search__info info-search">
			<div class="info-search__top">
				<div class="info-search__title">Очаковские Бани и Сауны</div>
				<img src="" alt="" class="info-search__logo" />
				<UIBadje class="info-search__badje" :class="badje.type">{{
					badje.text
				}}</UIBadje>
			</div>
			<UIStars />
			<div class="info-search__column">
				<div class="info-search__item">
					<div class="card__open">Откроется в <span>09:00</span></div>
				</div>
				<div class="info-search__item">
					<div class="info-search__metro h4">
						<img src="~/assets/img/icon/metro.svg" alt="" /> Озёрная
					</div>
					<div class="info-search__walk h4">
						<img src="~/assets/img/icon/run.svg" alt="" /> 13 мин пешком
					</div>
				</div>
				<div class="info-search__item">
					<div class="info-search__adress h4">
						г. Москва, ул. Большая Очаковская, 35
					</div>
				</div>
			</div>
			<div class="info-search__detail detail-search">
				<div class="detail-search__row">
					<div class="detail-search__item">
						<div class="detail-search__text">Цена</div>
						<div class="detail-search__item">от 1 500 ₽</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text">Вместимость</div>
						<div class="detail-search__item">60</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text">Скидка</div>
						<div class="detail-search__item">до 10%</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text">Залы</div>
						<div class="detail-search__item">9</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text">Парная</div>
						<div class="detail-search__item">Русская баня, Сауна | Финская</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text">Услуги</div>
						<div class="detail-search__item">Парение | Массаж</div>
					</div>
				</div>
				<button class="detail-search__btn btn btn-green">Забронировать</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.img-pos {
		position: absolute;
		border-radius: 50%;
		background-color: rgba($color: #000000, $alpha: 0.4);
		z-index: 1;
		cursor: pointer;
	}
	.search {
		&__item {
			display: flex;
			margin-bottom: 1.5rem;

			&:last-child {
				margin: 0;
			}
		}

		&__swip {
		}

		&__main-img {
			position: relative;
		}

		&__img {
			width: 100%;
			margin-bottom: 1.5rem;
		}

		&__like {
			top: 2rem;
			left: 2rem;
		}

		&__play {
			top: 2rem;
			right: 2rem;
		}

		&__arrow {
			top: 50%;
			right: 2rem;

			&.back {
				right: auto;
				left: 2rem;
				transform: rotate(180deg);
			}
		}

		&__thumbnail {
			display: flex;
			align-items: center;
			gap: 1rem;

			& img {
				max-width: 10rem;
				width: 100%;
			}
		}

		&__info {
		}
	}
	.info-search {
		&__top {
		}
		&__badje {
			top: 2rem;
			left: auto;
			right: -1rem;
		}

		&__title {
		}

		&__logo {
		}

		&__column {
		}

		&__item {
		}

		&__metro {
		}

		&__walk {
		}

		&__adress {
		}

		&__detail {
		}
	}

	.detail-search {
		&__row {
		}

		&__item {
		}

		&__text {
		}

		&__btn {
		}
	}
</style>

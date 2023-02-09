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
				<div class="search__arrow inactive back img-pos">
					<img src="~/assets/img/search/big-arr.png" alt="" />
				</div>
				<div class="search__arrow img-pos">
					<img src="~/assets/img/search/big-arr.png" alt="" />
				</div>
			</div>
			<div class="search__thumbnail" v-if="true">
				<img src="~/assets/img/search/main.png" alt="" />
				<img src="~/assets/img/search/main.png" alt="" />
				<img src="~/assets/img/search/main.png" alt="" />
				<img src="~/assets/img/search/main.png" alt="" />
			</div>
		</div>
		<div class="search__info info-search">
			<div class="info-search__top">
				<div class="info-search__title h2" :class="badje.type">
					Очаковские Бани и Сауны
				</div>
				<img
					src="~/assets/img/search/logo.jpg"
					alt=""
					class="info-search__logo"
					:class="badje.type"
				/>
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
						г. Москва, ул. Большая <br />
						Очаковская, 35
					</div>
				</div>
			</div>
			<div class="info-search__detail detail-search">
				<div class="detail-search__row">
					<div class="detail-search__item">
						<div class="detail-search__text h4">Цена</div>
						<div class="detail-search__price">от 1 500 ₽</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text h4">Вместимость</div>
						<div class="detail-search__price">60</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text h4">Скидка</div>
						<div class="detail-search__price">до 10%</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text h4">Залы</div>
						<div class="detail-search__price">9</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text h4">Парная</div>
						<div class="detail-search__price">
							Русская баня, Сауна | Финская
						</div>
					</div>
					<div class="detail-search__item">
						<div class="detail-search__text h4">Услуги</div>
						<div class="detail-search__price">Парение | Массаж</div>
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
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search {
		&__item {
			display: flex;
			margin-bottom: 1.5rem;
			gap: 2rem;
			padding: 1rem;
			transition: width 0.4s linear;

			&:hover {
				width: 105%;
			}

			&:last-child {
				margin: 0;
			}
		}

		&__swip {
			min-width: 40rem;
			max-width: 40rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		&__main-img {
			position: relative;
			height: 100%;
			flex: 1;
		}

		&__img {
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
			margin-bottom: 1.5rem;
			border-radius: 2rem;
		}

		&__like {
			top: 2rem;
			left: 2rem;
			width: 3rem;
			height: 3rem;
		}

		&__play {
			top: 2rem;
			right: 2rem;
			width: 4rem;
			height: 4rem;

			& img {
				width: 1.5rem;
			}
		}

		&__arrow {
			top: 50%;
			right: 2rem;
			width: 3rem;
			height: 3rem;

			&.back {
				right: auto;
				left: 2rem;
				transform: rotate(180deg);
			}

			&.inactive {
				& img {
					opacity: 0.4;
				}
			}
		}

		&__thumbnail {
			display: flex;
			align-items: center;
			gap: 1rem;

			& img {
				// max-width: 10rem;
				width: 100%;
			}
		}

		&__info {
		}
	}
	.info-search {
		width: 100%;
		&__top {
			padding-top: 0.7rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__badje {
			top: 2rem;
			left: auto;
			right: -1rem;
		}

		&__title {
			color: #8f99ba;

			&.book {
				color: $purple-color;
			}

			&.vip {
				color: $vip-color;
			}

			&.buy {
				color: $green-color;
			}
		}

		&__logo {
			padding-right: 5.5rem;
			width: 4.5rem;
			height: 4.5rem;

			&.free {
				padding-right: 8.5rem;
			}
		}

		&__stars {
			margin-bottom: 1rem;
		}

		&__column {
			margin-top: 1rem;
			margin-bottom: 1.8rem;
			display: flex;
		}

		&__item {
			padding: 0 1.6rem;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				right: 0;
				height: 2.3rem;
				width: 1px;
				background-color: #e1e5f2;

				transform: translateY(-50%);
			}
			&:first-child {
				padding-left: 0;
			}
			&:last-child {
				padding-right: 0;
				&::before {
					content: none;
				}
			}
		}

		&__metro,
		&__walk {
			color: $secondary-color;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		&__adress {
			color: $secondary-color;
		}

		&__detail {
		}
	}

	.detail-search {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		&__row {
		}

		&__item {
			display: flex;
			gap: 6rem;
			align-items: center;
			margin-bottom: 0.8rem;
		}

		&__text {
			width: 8.7rem;
			color: $secondary-color;
		}

		&__price {
			font-weight: 900;
			font-size: 1.4rem;
			color: #3e3e51;
		}

		&__btn {
			padding-top: 1.4rem;
			padding-bottom: 1.4rem;
		}
	}
</style>

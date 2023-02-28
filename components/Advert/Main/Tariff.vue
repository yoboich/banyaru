<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
	// Import Swiper styles
	import 'swiper/css';
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
	const { width } = useWindowSize();

	const swiperBtn = ref(null);
	function getRef(swiperInstance) {
		swiperBtn.value = swiperInstance;
	}

	watchEffect(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onMounted(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		}
	});
</script>

<template>
	<div class="tariff">
		<div class="tariff__title">Выбор тарифа</div>
		<div class="tariff__inner" v-if="isLarge">
			<div class="tariff__item">
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">Бесплатное</label>
					</div>
					<div class="tariff__price-top">0 ₽</div>
				</div>
				<div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
			</div>

			<div class="tariff__item">
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">Платное</label>
					</div>
					<div class="tariff__price-top">30 000 ₽ на 3 месяца</div>
				</div>
				<div class="tariff__price price">
					<span class="price__text">Оплата</span>
					<div class="price__inner">
						<div class="price__item">
							<div class="price__tab">
								<span class="price__tab-item active">3 мес.</span>
								<span class="price__tab-item">6 мес.</span>
								<span class="price__tab-item">12 мес.</span>
							</div>
							<div class="price__tab-bottom">
								<p class="price__tab-subitem">10 000 ₽/мес.</p>
								<p class="price__tab-subitem">
									8 000 ₽/мес. <span>Скидка 20%</span>
								</p>
								<p class="price__tab-subitem">
									6 000 ₽/мес. <span>Скидка 40%</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
			</div>

			<div class="tariff__item">
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">VIP</label>
					</div>
					<div class="tariff__price-top">120 000 ₽ на 3 месяца</div>
				</div>
				<div class="tariff__price price">
					<span class="price__text">Оплата</span>
					<div class="price__inner">
						<div class="price__item">
							<div class="price__tab">
								<span class="price__tab-item active">3 мес.</span>
								<span class="price__tab-item">6 мес.</span>
								<span class="price__tab-item">12 мес.</span>
							</div>
							<div class="price__tab-bottom">
								<p class="price__tab-subitem">40 000 ₽/мес.</p>
								<p class="price__tab-subitem">
									32 000 ₽/мес. <span>Скидка 20%</span>
								</p>
								<p class="price__tab-subitem">
									24 000 ₽/мес. <span>Скидка 40%</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
			</div>

			<div class="tariff__item">
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">Бронирование</label>
					</div>
					<div class="tariff__price-top">30 000 ₽ разовое подключение</div>
				</div>
				<div class="tariff__price price">
					<span class="price__text">Оплата</span>
					<div class="price__inner">
						<div class="price__item">
							<div class="price__tab">
								<span class="price__tab-item active">15%</span>
								<span class="price__tab-item">20%</span>
							</div>
							<div class="price__tab-bottom">
								<p class="price__tab-subitem">ООО/ИП</p>
								<p class="price__tab-subitem price__tab-subitem_w">
									Физическое лицо
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
			</div>
		</div>
		<swiper @swiper="getRef" v-if="!isLarge" class="tariff__swiper">
			<swiper-slide>
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">Бесплатный</label>
					</div>
					<div class="tariff__text">
						Объявление ничем не выделено на фоне других и показывается в самом
						конце списка - после платных объявлений. Информация отображается в
						сокращенном, справочном формате.
					</div>
				</div>
				<div class="tariff__price">
					<div class="tariff__price-new">0 ₽ / 3 месяца</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">Платный</label>
					</div>
					<div class="tariff__text">
						Платные объявления показываются над бесплатными. Информация
						отображается в полном объеме. Тариф является достойным инструментом
						для продвижения и привлечения гостей.
					</div>
					<div class="tariff__choose">
						<div class="tariff__tab tab-tarrif">
							<div class="tab-tarrif__info">
								<div class="tab-tarrif__month">3 мес.</div>
								<div class="tab-tarrif__price">10 000 ₽/мес.</div>
							</div>
							<input type="radio" />
						</div>
						<div class="tariff__tab tab-tarrif">
							<div class="tab-tarrif__info">
								<div class="tab-tarrif__month">6 мес.</div>
								<div class="tab-tarrif__price">8 000 ₽/мес.</div>
							</div>
							<input type="radio" />
						</div>
						<div class="tariff__tab tab-tarrif">
							<div class="tab-tarrif__info">
								<div class="tab-tarrif__month">12 мес.</div>
								<div class="tab-tarrif__price">6 000 ₽/мес.</div>
							</div>
							<input type="radio" />
						</div>
					</div>
					<div class="tariff__price">
						<div class="tariff__price-old">50 000 ₽ / 3 месяца</div>
						<div class="tariff__price-new">30 000 ₽ / 3 месяца</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">VIP</label>
					</div>
					<div class="tariff__text">
						VIP - отображается выше всех в линейке. Объявление показывается над
						платными. Тариф максимально эффективен, привлекает гостей и
						показывает статус вашего заведения.
					</div>
				</div>
				<div class="tariff__choose">
					<div class="tariff__tab tab-tarrif">
						<div class="tab-tarrif__info">
							<div class="tab-tarrif__month">3 мес.</div>
							<div class="tab-tarrif__price">40 000 ₽/мес.</div>
						</div>
						<input type="radio" name="month" />
					</div>
					<div class="tariff__tab tab-tarrif">
						<div class="tab-tarrif__info">
							<div class="tab-tarrif__month">6 мес.</div>
							<div class="tab-tarrif__price">32 000 ₽/мес.</div>
						</div>
						<input type="radio" name="month" />
					</div>
					<div class="tariff__tab tab-tarrif">
						<div class="tab-tarrif__info">
							<div class="tab-tarrif__month">12 мес.</div>
							<div class="tab-tarrif__price">24 000 ₽/мес.</div>
						</div>
						<input type="radio" name="month" />
					</div>
				</div>
				<div class="tariff__price">
					<div class="tariff__price-new">120 000 ₽ / 3 месяца</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="tariff__top">
					<div class="radio">
						<input type="radio" />
						<label class="tariff__name">Бронирование</label>
					</div>
					<div class="tariff__text">
						Объявление показывается вверху - на уровне тарифа VIP. Мы вас
						подключим к удобной и первой в России онлайн системе бронирования
						бань. Найдем и приведем к вам уже оплаченного клиента. Деньги за
						бронирование моментально переведем на расчетный счет ООО / ИП или на
						карту физического лица.
					</div>
				</div>
				<div class="tariff__choose">
					<div class="tariff__tab tab-tarrif">
						<div class="tab-tarrif__info">
							<div class="tab-tarrif__month">15%</div>
							<div class="tab-tarrif__price">ООО/ИП</div>
						</div>
						<input type="radio" />
					</div>
					<div class="tariff__tab tab-tarrif">
						<div class="tab-tarrif__info">
							<div class="tab-tarrif__month">20%</div>
							<div class="tab-tarrif__price">Физическое лицо</div>
						</div>
						<input type="radio" />
					</div>
				</div>
				<div class="tariff__price">
					<div class="tariff__price-item">30 000 ₽ / разовое подключение</div>
					<div class="tariff__price-item">Коммисия 15% для ООО/ИП</div>
				</div>
			</swiper-slide>
		</swiper>
		<div class="check">
			<div class="check__item">
				<div class="check__top">
					<input type="checkbox" />
					<p>Автоматически продлевать срок размещения</p>
				</div>
				<span
					>Объявление будет автоматически продлеваться в размещении “Премиум”
					каждые 7 дней</span
				>
			</div>

			<div class="check__item check__item_green">
				<div class="check__top">
					<input type="checkbox" />
					<div class="check__top-text">
						<p>Помощь в размещении</p>
						<div class="check__price" v-if="!isLarge">10 000 ₽</div>
					</div>
				</div>
				<span
					>Наш специалист сам разместит ваше объявление для максимального
					результата. При необходимости, он свяжется с Вами для уточнения
					информации.</span
				>
				<div class="check__price" v-if="isLarge">10 000 ₽</div>
			</div>
		</div>
		<div class="info">
			<img src="@/assets/img/icon/i.svg" alt="" />
			<p>
				Недостаточно денег. <span>Пополнить счет</span> или изменить условия
				размещения
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.info {
		display: flex;
		gap: 1.6rem;
		margin-top: 4.4rem;
		padding-left: 2rem;
		& span {
			color: $green-color;
		}
	}
	.check {
		margin-top: 3.7rem;
		&__item {
			padding: 2rem;
			&_green {
				position: relative;
				background: #d8ffd1;
				border-radius: 23px;
			}
		}
		&__top {
			display: flex;
			align-items: center;
			gap: 1.4rem;
			@media screen and (max-width: 768px) {
				align-items: flex-start;
			}
		}
		& p {
			font-weight: 500;
			font-size: 1.6rem;
			line-height: 1.8rem;

			@media screen and (max-width: 768px) {
				margin-bottom: 1.8rem;
			}
		}
		& span {
			color: $secondary-color;
			padding-left: 4rem;
			margin-top: 1.4rem;
			display: block;
			max-width: 60rem;
		}
		&__price {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			position: absolute;
			right: 2rem;
			bottom: 38%;

			@media screen and (max-width: 768px) {
				position: relative;
				right: auto;
				bottom: auto;
				font-size: 1.6rem;
			}
		}
	}
	.price {
		display: flex;
		gap: 2.5rem;
		&__text {
			font-weight: 700;
			font-size: 1.6rem;
			line-height: 2rem;
			align-self: flex-start;
			padding-top: 1.5rem;
			display: block;
		}
		&__inner {
			display: flex;
			gap: 2.5rem;
		}
		&__tab {
			display: flex;
			justify-content: flex-start;
			background: #ffffff;
			box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
			border-radius: 100px;
			padding: 0.4rem;
			align-self: self-start;
			margin-bottom: 2rem;
		}
		&__tab-item {
			padding: 1.1rem 5.5rem;
			&.active {
				background: $default-color;
				box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
				border-radius: 100px;
				font-weight: 700;
			}
		}
		&__tab-bottom {
			display: flex;
			justify-content: space-between;
			padding: 0 3rem;
		}
		&__tab-subitem {
			position: relative;
			max-width: 9rem;
			margin-bottom: 2.2rem;
			& span {
				color: #ff515b;
			}
			&::before {
				content: '';
				position: absolute;
				width: 0.4rem;
				height: 0.4rem;
				background-color: $secondary-color;
				top: -1rem;
				left: 50%;
				border-radius: 100rem;
			}
			&_w {
				max-width: 12rem;
			}
		}
	}
	.tariff {
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 3.5rem;
			margin-top: 6rem;
		}
		&__inner {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
		}
		&__item {
			background: #ffffff;
			box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
			border-radius: 23px;
			padding: 2.4rem 2rem 3.5rem 6.7rem;

			@media screen and (max-width: 768px) {
				padding: 0;
				background: transparent;
				box-shadow: none;
				height: 100%;
				display: flex;
				flex-direction: column;
			}
		}
		&__name {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;

			@media screen and (max-width: 768px) {
				margin: 0;
				margin-bottom: 2rem;
			}
		}

		&__choose {
			@media screen and (max-width: 768px) {
				margin-bottom: 2rem;
			}
		}
		&__price-top {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
		}

		&__price-old {
			font-size: 1.6rem;
			color: $red-color;
			text-decoration: line-through;
		}
		&__price-new {
			font-size: 1.6rem;
			color: $mainFontColor;
		}
		&__top {
			margin-bottom: 1.5rem;
			margin-left: -4.7rem;
			display: flex;
			align-items: flex-start;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				margin-left: 0;
				flex: 1;
			}
			& .radio {
				flex: 1;

				@media screen and (max-width: 768px) {
					flex: none;
				}
			}
			& input {
				margin-right: 2.1rem;

				@media screen and (max-width: 768px) {
					display: none;
				}
			}
		}

		&__swiper {
			& .swiper-slide {
				padding: 2.4rem 0.9rem 2.4rem 2.1rem;
				box-sizing: border-box;
				min-height: 54.6rem;
				height: 100%;
				display: flex;
				flex-direction: column;

				border: 1px solid transparent;
			}

			& .swiper-slide-active {
				border-color: $green-color;
				box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
				border-radius: 2.3rem;
			}
		}
	}

	.tab-tarrif {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 0;
		border-bottom: 1px solid $secondary-color;

		&__info {
		}

		&__month {
			margin-bottom: 1rem;
		}

		&__price {
		}
	}
</style>

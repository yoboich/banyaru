<script setup></script>

<template>
	<div class="card-adress card card-under">
		<div class="card-adress__title h1">Адрес</div>
		<div class="card-adress__copy">
			<div class="card-adress__copy-text">
				г. Москва, ул. Большая Очаковская, 35
			</div>
			<img src="~/assets/img/product-mobile/copy.svg" alt="" />
		</div>
		<div class="card-adress__path">
			<div class="card-adress__way">
				<div class="card-adress__metro h4">Пражская <IconMetro /></div>
				<div class="card-adress__walk h4">
					<img src="~/assets/img/icon/run.svg" alt="" /> 13 мин
				</div>
			</div>
			<div class="card-adress__way">
				<div class="card-adress__metro h4">
					Озёрная <IconMetro class="green" />
				</div>
				<div class="card-adress__walk h4">
					<img src="~/assets/img/icon/run.svg" alt="" /> 13 мин
				</div>
			</div>
			<div class="card-adress__way">
				<div class="card-adress__metro h4">Академическая <IconMetro /></div>
				<div class="card-adress__walk h4">
					<img src="~/assets/img/icon/run.svg" alt="" /> 13 мин
				</div>
			</div>
		</div>
		<iframe
			width="100%"
			height="100%"
			class="absolute inset-0"
			frameborder="0"
			title="map"
			marginheight="0"
			marginwidth="0"
			scrolling="no"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
			loading="lazy"
			style="filter: opacity(0.7)"
		></iframe>
		<div class="card-adress__btns">
			<div class="card-adress__btn btn btn-white h4">Построить маршрут</div>
			<div class="card-adress__btn btn btn-white h4">Вызвать такси</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-adress {
		margin-top: -3rem;
		z-index: 12;
		&__title {
			margin-bottom: 2.6rem;
			color: $mainFontColor;
		}

		&__copy {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $mainFontColor;
			margin-bottom: 3rem;

			& img {
				cursor: pointer;
			}
		}

		&__copy-text {
			font-weight: 500;
			font-size: 1.6rem;
		}

		&__path {
			margin-bottom: 4rem;
		}

		&__way {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			margin-bottom: 1rem;
		}

		&__metro {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: $mainFontColor;
		}

		&__walk {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: $mainFontColor;
		}

		&__btns {
			display: flex;

			margin-top: 4rem;
			gap: 2rem;
		}

		&__btn {
			padding: 1.5rem 1.1rem;
			flex: 1;
			text-align: center;
		}
	}
</style>

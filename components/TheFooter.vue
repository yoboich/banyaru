<script setup>
let activeTab = ref(1);
</script>

<template>
	<footer class="footer">
		<div class="container">
			<ul class="nav">
				<li class="nav__item" @click="activeTab = 1" :class="[activeTab == 1 ? 'router-link-active' : '']">
					Бани и&nbsp;сауны
				</li>
				<li class="nav__item" @click="activeTab = 2" :class="[activeTab == 2 ? 'router-link-active' : '']">
					Номера
				</li>
				<li class="nav__item" @click="activeTab = 3" :class="[activeTab == 3 ? 'router-link-active' : '']">
					Услуги
				</li>
				<li class="nav__item" @click="activeTab = 4" :class="[activeTab == 4 ? 'router-link-active' : '']">
					Предбанник
				</li>
			</ul>

			<div class="information">
				<div class="information__item">
					<div class="information__logo">
						<img src="@/assets/img/logo2.png" alt="" />
						<p class="information__text">
							Ведущий тематический портал о&nbsp;банях и&nbsp;саунах России,
							банных услугах и&nbsp;товарах* <br />
							* По&nbsp;данным сервиса SimilarWeb на&nbsp;февраль 2021 года
						</p>
					</div>

					<p class="information__text">
						Banya.ru&nbsp;&mdash; достоверная база данных об&nbsp;аренде
						и&nbsp;продаже бань и саун, услуг и&nbsp;товаров для бань
					</p>
				</div>

				<div class="information__item">
					<p class="information__text">
            БАНЯ.РУ &mdash;&nbsp;крупнейший в&nbsp;России каталог бань и&nbsp;саун,
						услуг, товаров и&nbsp;готовых бань. Использование сайта означает
						согласие с&nbsp;Пользовательским соглашением и&nbsp;
							Политикой конфиденциальности
						. Оплачивая лицензионный платеж, вы&nbsp;принимаете
						Лицензионное соглашение.
					</p>
					<div class="subscribe">
						<p>Подпишитесь на&nbsp;новые объявления и&nbsp;новости Баня.ру</p>
						<div class="subscribe__item">
							<input placeholder="Адрес электронной почты" type="text" class="input"/>
							<button class="btn click">Подписаться</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
  <div class="copyright">
    <div class="container">
      <div class="copyright__content">
        <div class="copyright__bot-left">
          <p class="copyright__text">
            2022&nbsp;&copy; ООО &laquo;Баня.ру&raquo;&nbsp;&mdash; Бани
            и&nbsp;сауны ОГРН 1187746492120
            <span class="copyright__text copyright__text_small">
								Предложения и условия не&nbsp;являются публичной афертой
							</span>
          </p>
        </div>
        <div class="copyright__bot-right">
          <div class="copyright__social-links">
            <img src="@/assets/img/social/vk.svg" alt="" />
            <img src="@/assets/img/social/facebook.svg" alt="" />
            <img src="@/assets/img/social/instagram.svg" alt="" />
            <img src="@/assets/img/social/youtube.svg" alt="" />
            <img src="@/assets/img/social/dzen.svg" alt="" />
            <img src="@/assets/img/social/twitter.svg" alt="" />
          </div>
          <div class="copyright__icon">18+</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.input{
  width: 340px;
  height: 35px;
  background: #FFFFFF;
  box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
  border-radius: 100px;
}
	.footer {
    z-index: 2;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px -6px 50px rgba(166, 175, 203, 0.16);
    border-radius: 23px;
    width: 98%;
    margin: 3rem auto 0;
    padding: 30px 0;

    @media screen and (max-width: 768px) {
			padding: 3rem 2rem;
		}
	}
	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5.6rem;
		margin-bottom: 7rem;

		@media screen and (max-width: 768px) {
			display: none;
		}
		&__item {
			position: relative;
      cursor: pointer;
      padding-bottom: 5px;
			&::after {
				content: '';
				position: absolute;
				width: 0.1rem;
				height: 100%;
				top: 0;
				right: -2.4rem;
				background: #e1e5f2;
			}
			&:last-child::after {
				width: 0;
			}
		}
		&__link {
		}
	}
	.router-link-active {
		color: $green-color;
		font-size: 1.6rem;
		font-weight: 700;
    border-bottom: 2px solid $green-color;
	}
	.information {
		display: flex;
		justify-content: center;
		gap: 15.9rem;

		@media screen and (max-width: 768px) {
			flex-direction: column;
			gap: 2rem;
		}
		& img {
			max-width: 10.7rem;
			max-height: 3rem;

			@media screen and (max-width: 768px) {
				margin: 0 auto;
			}
		}
		&__item:nth-child(1) {
			max-width: 54rem;
			width: 100%;
		}
		&__item:nth-child(2) {
			max-width: 68.1rem;
			width: 100%;
		}
		&__logo {
			display: flex;
			gap: 3rem;
			margin-bottom: 1.8rem;

			@media screen and (max-width: 768px) {
				flex-direction: column;
			}
		}
		&__text {
			font-weight: 400;
			color: $secondary-color;
		}
		&__text_black {
			color: $mainFontColor;
		}
	}
	.subscribe {
		display: flex;
		flex-direction: column;
		gap: 1.9rem;
		& p {
			padding: 1.9rem 5rem 0 0;

			@media screen and (max-width: 768px) {
			padding: 1.9rem 0 0;
		}
		}
		&__item {
			display: flex;
			gap: 3.1rem;

			@media screen and (max-width: 768px) {
				flex-direction: column;

				& .btn {
					background-color: white;
					color: $mainFontColor;
					box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
				}
			}
		}
		& input {
			max-width: 39.6rem;
			width: 100%;
			padding: 0.5rem 1.5rem;
			border: 0.1rem solid #8f99ba;
			border-radius: 10rem;
			box-sizing: border-box;
			&::placeholder {
				color: $secondary-color;
			}
		}
	}

	.copyright {
    background: #FFFFFF;
    box-shadow: 0px -6px 50px rgba(166, 175, 203, 0.16);
    border-radius: 23px;
    width: 95%;
    margin: 0 auto;
    padding: 10px;
    transform: translateY(-10px);

		@media screen and (max-width: 768px) {
			box-shadow: none;
			padding: 0;
		}
		&__content {
			display: flex;
			align-items: center;
      justify-content: space-between;

			@media screen and (max-width: 768px) {
				flex-direction: column-reverse;
				gap: 2.3rem;
			}
		}
		&__text {
			margin-right: 2.7rem;
			color: $secondary-color;
			&_small {
				font-size: 1.3rem;
			}
		}
		&__social-links {
			display: flex;
			margin-left: 9.2rem;
			margin-right: 8.9rem;
			gap: 1.2rem;

			@media screen and (max-width: 768px) {
				margin: 0;
			}
		}
		&__icon {
			font-size: 1.15rem;
			padding: 0.4rem;
			border: 0.5rem solid $mainFontColor;
		}

		&__bot-right {
			display: flex;
			align-items: center;
			@media screen and (max-width: 768px) {
				width: 100%;
				justify-content: space-between;
			}
		}
		&__bot-left {
			display: flex;
			align-items: center;
			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 2.5rem;
			}
		}
	}
  .click {
    width: 260px;
    height: 35px;
    background: #FFFFFF;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
    border-radius: 100px;
  }
</style>

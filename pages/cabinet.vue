<script setup>
	definePageMeta({
		layout: 'cabinet',
	});

	const breadcrumbs = ref(['Главная', 'Личный кабинет']);
</script>

<template>
	<div class="cabinet">
		<div class="container">
			<div class="cabinet__inner">
				<UIBreadcrumbs :items="breadcrumbs" />
				<div class="card card-cabinet">
					<div class="card-cabinet__title h1">Личный кабинет</div>
					<div class="card-cabinet__content">
						<div class="cabinet-aside">
							<div class="cabinet-aside__top">
								<div class="cabinet-aside__avatar">
									<img src="~/assets/img/cabinet/avatar.png" alt="" />
								</div>
								<div class="cabinet-aside__info">
									<div class="cabinet-aside__name h2-lite">Светлана</div>
									<div class="cabinet-aside__phone h4">+7 985 123 33 34</div>
								</div>
								<IconArrow class="green" />
								<div class="cabinet-aside__price h4">15 300 ₽</div>
								<div class="cabinet-aside__plus">
									<img src="~/assets/img/cabinet/plus.svg" alt="" />
								</div>
							</div>
							<div class="cabiner-aside__setting setting-aside">
								<div class="setting-aside__title h2">Настройки</div>
								<div class="setting-aside__content">
									<div class="setting-aside__item">
										<NuxtLink to="ads" class="setting-aside__text h3-lite">
											Мои объявления
										</NuxtLink>
									</div>
									<div class="setting-aside__item">
										<NuxtLink to="favorite" class="setting-aside__text h3-lite"
											>Избранное</NuxtLink
										>
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">Уведомление</div>
										<img src="~/assets/img/cabinet/bell.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">
											Обратная связь
											<span class="setting-aside__info"
												><IconInfo class="setting-aside__info-item"
											/></span>
										</div>
										<img src="~/assets/img/cabinet/msg.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">Позвонить нам</div>
										<img src="~/assets/img/cabinet/tel.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">Приложение</div>
										<div class="setting-aside__green h3-lite">Установить</div>
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">
											Конфеденциальность
										</div>
										<img src="~/assets/img/cabinet/block.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">
											Поделиться приложением
										</div>
										<img src="~/assets/img/cabinet/share.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">О нас</div>
										<img src="~/assets/img/cabinet/info.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">Выйти</div>
										<img src="~/assets/img/cabinet/r-share.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">
											Удалить аккаунт
										</div>
										<img src="~/assets/img/cabinet/trash.svg" alt="" />
									</div>
									<div class="setting-aside__item">
										<div class="setting-aside__text h3-lite">
											Версия 1.2.3 | 10.11.22
										</div>
										<IconArrow class="black" />
									</div>
								</div>
							</div>
							<div class="cabinet-aside__order order-aside">
								<div class="order-aside__title h2">Заказы</div>
								<button class="order-aside__btn btn btn-white h2-lite">
									Найти баню, услугу, товары
								</button>
							</div>
						</div>
						<div class="cabinet-main">
							<NuxtPage />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.cabinet {
		margin-top: 3.5rem;
		width: 100%;
		&__inner {
		}
	}
	.card-cabinet {
		margin-top: 3.5rem;
		&__title {
			margin-bottom: 4.5rem;
		}

		&__content {
			display: flex;
		}
	}
	.cabinet-main {
		padding-left: 4.5rem;
		width: 65%;
	}
	.cabinet-aside {
		padding-right: 4.5rem;

		border-right: 1px solid #8f99ba;
		&__top {
			display: flex;
			align-items: center;
			margin-bottom: 4.4rem;
		}

		&__avatar {
			margin-right: 1rem;
		}

		&__info {
			margin-right: 1.5rem;
		}

		&__name {
			color: $mainFontColor;
		}

		&__phone {
			color: $secondary-color;
		}

		&__price {
			margin-left: 3.5rem;
			margin-right: 1rem;

			font-size: 1.6rem;
			color: $mainFontColor;
		}

		&__plus {
		}

		&__order {
		}
	}
	.cabiner-aside {
		&__setting {
		}
	}
	.setting-aside {
		margin-bottom: 4rem;
		&__title {
			margin-bottom: 3.5rem;
		}

		&__content {
		}

		&__item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1.1rem 0;
			border-bottom: 1px solid #8f99ba;
			cursor: pointer;

			&:last-child {
				border: none;
			}
		}

		&__text {
			color: $mainFontColor;
			display: flex;
			align-items: center;
		}

		&__info {
			width: 2.8rem;
			height: 2.8rem;
			border-radius: 50%;
			background: #ffffff;
			box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
		}

		&__green {
			color: $green-color;
		}
	}
	.order-aside {
		&__title {
			margin-bottom: 3rem;
		}
		&__btn {
			color: $green-color;
		}
	}
</style>

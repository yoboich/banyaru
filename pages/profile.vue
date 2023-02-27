<script setup>
	import { useWindowSize } from '@vueuse/core';
	const route = useRoute();
	const isLarge = ref(true);
	const navIsShown = ref(true);
	const breadcrumbs = ref(['Главная', 'Избранное']);

	const { width } = useWindowSize();
	watchEffect(() => {
		if (route.name.includes('chat-') && width.value <= 768) {
			navIsShown.value = false;
		} else {
			navIsShown.value = true;
		}
		if (width.value <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onMounted(() => {
		if (route.name.includes('chat-') && width.value <= 768) {
			navIsShown.value = false;
		} else {
			navIsShown.value = true;
		}
		if (width.value <= 768) {
			console.log('hello');
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});

	let activeTab = ref(1);
	const tabs = [
		{
			text: 'Активнх',
			notif: '22',
		},
		{
			text: 'Завершенных',
			notif: '41',
		},
	];

	const modalVisible = ref(false);
	const openModal = () => {
		modalVisible.value = true;

		document.body.classList.add('lock');
	};

	const closeModal = () => {
		modalVisible.value = false;

		document.body.classList.remove('lock');
	};

	definePageMeta({
		layout: 'cabinet',
	});
</script>

<template>
	<div class="profile">
		<div class="container">
			<div class="profile__inner">
				<UIBreadcrumbs
					class="profile__bread"
					:items="breadcrumbs"
					v-if="isLarge"
				/>
				<div class="card profile-card">
					<div class="profile-card__content">
						<IconArrow v-if="!isLarge" class="green rotate" />
						<div class="profile-card__title h1">Профиль</div>
						<IconShare v-if="!isLarge" class="black" />
					</div>
					<div class="profile-card__top">
						<div class="profile-card__info">
							<img
								src="~/assets/img/cabinet/avatar.png"
								alt=""
								class="profile-card__avatar"
							/>
							<div class="profile-info">
								<div class="profile-info__top">
									<div class="profile-info__name h2-lite">Анатолий</div>
									<div class="profile-info__status h4-mini">в сети</div>
								</div>
								<div class="profile-info__desc h4">
									На Баня.ру с декабря 2015
								</div>
								<div class="card__review">
									<UIStars :rate="true" />
									|
									<div class="card__feedback h5-mini">11 отзывов</div>
								</div>
							</div>
						</div>
						<div class="nav" v-if="isLarge">
							<div class="nav__inner">
								<div
									v-for="(item, idx) in tabs"
									:key="item"
									@click="activeTab = idx + 1"
									:class="[activeTab == idx + 1 ? 'nav__item_active' : '']"
									class="nav__item"
								>
									{{ item.text }}
									<span v-if="item.notif">{{ item.notif }}</span>
								</div>
							</div>
						</div>
						<div class="profile-card__btns">
							<button
								class="profile-card__btn btn btn-green"
								@click="openModal"
							>
								Позвонить
							</button>
							<button class="profile-card__btn btn btn-white">Написать</button>
							<button class="profile-card__share btn btn-white" v-if="isLarge">
								<IconShare class="black" />
							</button>
						</div>
						<div class="nav" v-if="!isLarge">
							<div class="nav__inner">
								<div
									v-for="(item, idx) in tabs"
									:key="item"
									@click="activeTab = idx + 1"
									:class="[activeTab == idx + 1 ? 'nav__item_active' : '']"
									class="nav__item"
								>
									{{ item.text }}
									<span v-if="item.notif">{{ item.notif }}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="profile-card__row">
						<div class="profile-card-ads__item" v-for="_ in 12">
							<UIBadje :class="['free', 'profile__badje']">
								Бесплатное
							</UIBadje>
							<div class="profile-card-ads__right">
								<img
									class="profile-card-ads__img"
									src="~/assets/img/promotions/1.jpg"
									alt=""
								/>
								<div class="profile-card-ads__status h4-mini"></div>
							</div>
							<div class="profile-card-ads__left">
								<div class="profile-card-ads__name h4">Сауны</div>
								<div class="profile-card-ads__text h4">Сауна Дионис-СПА</div>
								<div class="profile-card-ads__price h3">22 300 ₽</div>
								<div class="profile-card-ads__adress h4-mini">
									ул. Тимирязьева, м. Могилевская
								</div>
								<div class="profile-card-ads__action">
									<div class="profile-card-ads__view">
										<img src="~/assets/img/icon/eye.svg" alt="" /> 0
									</div>
									<div class="profile-card-ads__like">
										<img src="~/assets/img/icon/like.svg" alt="" /> 0
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ProfileModal :visible="modalVisible" @close-modal="closeModal" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.profile__badje {
		z-index: 1;
		padding: 0.2rem 0.2rem 0.2rem 0.6rem;
		font-size: 1.2rem;
		color: $secondary-color;
		gap: 0.5rem;
		left: 0.5rem;
		top: 0.5rem;

		@media screen and (max-width: 768px) {
			font-size: 1rem;
			left: 0;
		}
	}
	.card__review {
		margin: 0;
	}
	.nav {
		display: flex;
		align-items: flex-start;
		flex: 1;
		&__inner {
			display: flex;
		}
		&__item {
			cursor: pointer;
			padding: 2.15rem 3.4rem 1.95rem;
			border-top: 1px solid rgb(56%, 60%, 73%, 0.15);
			border-right: 1px solid rgb(56%, 60%, 73%, 0.15);
			border-radius: 6px 6px 0px 0px;
			display: flex;
			align-items: center;
			gap: 0.8rem;

			& span {
				color: $secondary-color;
			}
			&:nth-child(1) {
				border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
			}
			&_active {
				color: $green-color;
				padding: 2.35rem 3.4rem 1.95rem;
				border: none;
				background: #ffffff;
				box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
				border-radius: 6px 6px 0px 0px;
			}
		}
	}

	.profile {
		&__inner {
		}

		&__bread {
			margin: 3rem 0;
		}
	}

	.profile-card {
		@media screen and (max-width: 768px) {
			border-radius: 0 0 2.3rem 2.3rem;
		}
		&__title {
			color: $mainFontColor;
			margin-bottom: 2.5rem;
			@media screen and (max-width: 768px) {
				margin: 0;
			}
		}
		&__content {
			@media screen and (max-width: 768px) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 2rem;
			}
		}

		&__top {
			display: flex;
			gap: 1rem;
			margin-bottom: 7rem;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				margin-bottom: 2rem;
			}
		}

		&__info {
			display: flex;
			gap: 1rem;
			margin-right: 5rem;

			@media screen and (max-width: 768px) {
				align-items: center;
				margin: 0;
				margin-bottom: 3.5rem;
			}
		}

		&__avatar {
		}

		&__btns {
			display: flex;
			align-items: center;
			gap: 1.8rem;

			@media screen and (max-width: 768px) {
				margin-bottom: 1.5rem;
			}
		}

		&__btn {
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;

			@media screen and (max-width: 768px) {
				flex: 1;
			}
		}

		&__share {
			width: 5rem;
			height: 5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			border-radius: 50%;
		}

		&__row {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			row-gap: 2.7rem;
		}
	}
	.profile-aside {
		&__title {
		}
	}
	.profile-info {
		&__top {
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}

		&__name {
			margin-bottom: 0.5rem;
			color: $mainFontColor;

			@media screen and (max-width: 768px) {
				margin-bottom: 0.5rem;
			}
		}

		&__status {
			color: $green-color;
		}

		&__desc {
			color: $secondary-color;
			margin-bottom: 1.1rem;

			@media screen and (max-width: 768px) {
				margin-bottom: 0.5rem;
			}
		}
	}

	.profile-card-ads {
		&__item {
			position: relative;
			display: flex;
			gap: 2rem;
		}

		&__right {
		}

		&__img {
			max-width: 21rem;
			filter: drop-shadow(1px 7px 22px rgba(166, 175, 205, 0.58));
			border-radius: 12px;
		}

		&__status {
		}

		&__left {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		&__name {
			color: $secondary-color;
		}

		&__text {
			color: $mainFontColor;
		}

		&__price {
			color: $mainFontColor;
		}

		&__adress {
			color: $secondary-color;
		}

		&__action {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			margin-bottom: 1rem;
		}

		&__view {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			color: $secondary-color;
		}

		&__like {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			color: $secondary-color;

			& img {
				width: 2.5rem;
			}
		}
	}
</style>

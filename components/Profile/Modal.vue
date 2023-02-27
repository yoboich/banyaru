<script setup>
	defineProps({
		visible: {
			type: Boolean,
			default: false,
		},
	});
	const emit = defineEmits('closeModal');
	const closeModal = () => {
		emit('closeModal');
	};
</script>

<template>
	<div class="profile-modal" v-if="visible">
		<div class="profile-modal__content">
			<div class="profile-modal__logo">
				<img src="~/assets/img/logomobile.png" alt="" /> Звонок через Баня.ру
			</div>
			<div class="profile-modal__avatar">
				<img src="~/assets/img/cabinet/avatar.png" alt="" />
				<div class="profile-modal__name">Анатолий</div>
				<div class="profile-modal__connect">Соединяем...</div>
			</div>
			<div class="profile-modal__item">
				<nuxt-img src="/promotions/1.jpg" quality="80" />

				<div class="profile-modal__info">
					<div class="profile-modal__name h4">Сауны</div>
					<div class="profile-modal__text h4">Сауна Дионис-СПА</div>
					<div class="profile-modal__price h3">22 300 ₽</div>
				</div>
			</div>

			<div class="profile-modal__btns">
				<img
					@click="closeModal"
					src="~/assets/img/profile/decline.svg"
					alt=""
				/>
				<img src="~/assets/img/profile/mute.svg" alt="" />
				<img src="~/assets/img/profile/sound.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.profile-modal {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 1000;
		transform: translate(-50%, -50%);
		@media screen and (max-width: 768px) {
			height: 100%;
		}
		&__content {
			max-width: 58rem;
			background-color: $mainFontColor;
			padding: 5rem 13rem;
			box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.25);
			border-radius: 23px;

			@media screen and (max-width: 768px) {
				max-width: 100%;
				height: 100%;
			}

			& * {
				color: white;
			}
		}

		&__logo {
			justify-content: center;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 6.8rem;
		}

		&__avatar {
			text-align: center;
			margin-bottom: 6.8rem;
		}

		&__name {
		}

		&__connect {
		}

		&__item {
			display: flex;
			align-items: center;
			gap: 2rem;
			margin-bottom: 6rem;
			& img {
				max-width: 21rem;
				border-radius: 12px;
			}
		}

		&__info {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		&__text {
		}

		&__price {
		}

		&__btns {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 3rem;

			& * {
				cursor: pointer;
			}
		}
	}
</style>

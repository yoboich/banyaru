<script setup>
	let activeTab = ref(1);

	const tabs = [
		{
			text: 'Все',
		},
		{
			text: 'Чаты',
			notif: 1,
		},
		{
			text: 'Звонки',
		},
	];
</script>

<template>
	<div class="chat-msg">
		<div class="chat__tabs">
			<div class="nav">
				<div class="nav__inner">
					<div
						v-for="(item, idx) in tabs"
						:key="item"
						@click="activeTab = idx + 1"
						:class="[activeTab == idx + 1 ? 'nav__item_active' : '']"
						class="nav__item"
					>
						{{ item.text }} <span v-if="item.notif">{{ item.notif }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="chat-msg__help">
			<img src="~/assets/img/chat/logo.png" alt="" />
			<div class="chat-msg__info">
				<div class="chat-msg__help-name h3">Поддержка баня.ру</div>
				<div class="chat-msg__help-text h4">
					Задавайте вопросы, мы неприменно на них ответим
				</div>
			</div>
		</div>
		<div class="chat-msg__row">
			<nuxt-link
				v-for="(_, idx) in 5"
				to="/1"
				class="chat-msg__item chat-content__left"
			>
				<div class="chat-content__img">
					<img
						src="~/assets/img/cabinet/avatar.png"
						alt=""
						class="chat-content__img-avatar"
					/>
					<img
						src="~/assets/img/promotions/1.jpg"
						alt=""
						class="chat-content__img-bg"
					/>
				</div>
				<div class="chat-content__info">
					<div class="chat-content__name h3">Светлана</div>
					<div class="chat-content__text h4">
						Массаж в 4 руки | 2000 р. <br />
						Здравствуйте
					</div>
				</div>
				<div class="chat-content__checked h4-mini">
					<img src="~/assets/img/chat/checked.svg" alt="" /> 13:00
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.nav {
		display: flex;
		align-items: flex-start;
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
				background-color: $green-color;
				color: white;
				border-radius: 50%;
				width: 2rem;
				height: 2rem;
				display: flex;
				align-items: center;
				justify-content: center;
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

	.chat-msg {
		&__help {
			display: flex;
			align-items: center;
			margin-top: 5rem;
			margin-bottom: 3.5rem;
			gap: 1.4rem;
		}

		&__info {
		}

		&__help-name {
			color: $mainFontColor;
			margin-bottom: 0.5rem;
		}

		&__help-text {
			color: $secondary-color;
		}

		&__row {
		}

		&__item {
			padding-top: 2rem;
			padding-bottom: 2.5rem;
			border-bottom: 1px solid $secondary-color;
			transition: all 0.2s linear;
			cursor: pointer;

			&:hover {
				box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
			}
			&:last-child {
				border: none;
			}
		}
	}
</style>

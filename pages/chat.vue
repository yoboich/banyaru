<script setup>
	const route = useRoute();
	const isLarge = ref(true);
	const navIsShown = ref(true);

	onMounted(() => {
		if (route.name.includes('chat-') && window.innerWidth <= 768) {
			navIsShown.value = false;
		} else {
			navIsShown.value = true;
		}
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onUpdated(() => {
		if (route.name.includes('chat-') && window.innerWidth <= 768) {
			navIsShown.value = false;
		} else {
			navIsShown.value = true;
		}
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});

	definePageMeta({
		layout: 'cabinet',
	});
</script>

<template>
	<div class="chat">
		<div class="container">
			<div class="chat__inner">
				<div class="card chat-card">
					<div class="chat-card__content">
						<div class="chat-aside">
							<div class="chat-aside__title h1">Чаты</div>
							<ChatAside v-if="false" />
							<ChatAsideMsg />
						</div>
						<div class="chat-main" :class="{ hidden: !isLarge && navIsShown }">
							<ChatUnSelected v-if="!route.params.name" />
							<NuxtPage />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.chat {
		margin-top: 2.5rem;
		margin-bottom: 8rem;
		flex: 1 1 auto;

		@media screen and (max-width: 768px) {
			margin: 0;
		}

		&__inner {
		}
	}
	.chat-card {
		padding: 0;
		height: 90rem;
		&__content {
			display: flex;
			height: 100%;
		}
	}
	.chat-aside {
		width: 38%;
		border-right: 1px solid $secondary-color;
		padding: 3.3rem 0 3.3rem 2.2rem;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		@media screen and (max-width: 768px) {
			width: 100%;
			border: none;
			padding: 1.8rem;
		}
		&__title {
			color: $mainFontColor;
			margin-bottom: 2.5rem;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}
	}
	.chat-main {
		width: 100%;

		&.hidden {
			display: none;
		}
	}
</style>

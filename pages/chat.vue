<script setup>
	const route = useRoute();

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
						<div class="chat-main">
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
		&__title {
			color: $mainFontColor;
			margin-bottom: 2.5rem;
		}
	}
	.chat-main {
		width: 100%;
	}
</style>

<script setup></script>

<template>
	<div class="chat-empty">
		<img src="~/assets/img/chat/empty-msg.svg" alt="" />
		<div class="chat-empty__text h2-lite">У вас пока нет новых сообщений</div>
	</div>
</template>

<style lang="scss" scoped>
	.chat-empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		&__text {
			color: $secondary-color;
		}
	}
</style>

<script setup></script>

<template>
	<div class="user-action">
		<img class="user-action__item" src="~/assets/img/icon/like.svg" alt="" />

		<img class="user-action__item" src="~/assets/img/icon/dislike.svg" alt="" />

		<img class="user-action__item" src="~/assets/img/icon/msg.svg" alt="" />

		<img class="user-action__item" src="~/assets/img/icon/share.svg" alt="" />
	</div>
</template>

<style lang="scss" scoped>
	.user-action {
		display: flex;
		align-items: center;
		background-color: $default-color;
		background: #ffffff;
		box-shadow: 0px 8.75px 15px rgba(123, 129, 148, 0.1);
		border-radius: 2.5rem;

		padding: 8px;
		&__item {
			padding: 0 .7rem;
			border-right: 1.25px solid #e1e5f2;
			&:last-child {
				border: none;
			}
		}
	}
</style>

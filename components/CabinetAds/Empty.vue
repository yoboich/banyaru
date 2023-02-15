<script setup>
	defineProps(['btn', 'text']);
</script>

<template>
	<div class="cabinet-ads__empty empty-ads">
		<img src="~/assets/img/cabinet/empty.svg" alt="" />
		<div class="empty-ads__title h2-lite">{{ text }}</div>
		<button class="empty-ads__btn btn btn-green">{{ btn }}</button>
	</div>
</template>

<style lang="scss" scoped>
	.empty-ads {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		& img {
			margin-bottom: 1.2rem;
		}
		&__title {
			color: $secondary-color;
			margin-bottom: 5rem;
		}

		&__btn {
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}
	}
</style>

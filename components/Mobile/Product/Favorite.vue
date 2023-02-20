<script setup></script>

<template>
	<div class="card-mobile-add card card-under">
		<div class="card-mobile-add__btn btn btn-white">
			<img src="~/assets/img/product-mobile/green-like.svg" alt="" />Добавить
			баню / Сауну в избранное
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-mobile-add {
		margin-top: -3rem;
		z-index: 11;
		padding-top: 5rem;
		padding-bottom: 2rem;
		&__btn {
			display: flex;
			align-items: center;
			width: 100%;
			gap: 0.8rem;
			font-weight: 700;
			font-size: 1.6rem;
			color: $green-color;
			padding: 1rem 1.3rem;
		}
	}
</style>

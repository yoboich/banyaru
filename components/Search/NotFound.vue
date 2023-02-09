<script setup></script>

<template>
	<div class="search-not-found">
		<img src="~/assets/img/notFound.svg" alt="" />
		<button class="search-not-found__btn btn btn-green">Сбросить фильтр</button>
		<p class="search-not-found__text">
			Нет заведений, соответствующим фильтрам
		</p>
	</div>
</template>

<style lang="scss" scoped>
	.search-not-found {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 7.5rem;
		& img {
			margin-bottom: 4rem;
		}
		&__btn {
			margin-bottom: 3rem;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}

		&__text {
			color: $mainFontColor;
		}
	}
</style>

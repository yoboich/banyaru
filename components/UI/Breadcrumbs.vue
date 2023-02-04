<script lang="ts" setup></script>

<template>
	<ul class="breadcrumbs">
		<li class="breadcrumbs__item">Главная</li>
		<IconArrow class="breadcrumbs__arr" />
		<li class="breadcrumbs__item">Бани в городе Москва</li>
		<IconArrow class="breadcrumbs__arr" />
		<li class="breadcrumbs__item">Аминьевские бани</li>
	</ul>
</template>

<style lang="scss" scoped>
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 10px;
		&__item {
			cursor: pointer;
			font-family: 'Lato';
			font-weight: 400;
			font-size: 13.5px;
			color: #8f99ba;
		}

		&__arr {
			width: 1.4rem;
			height: 1.6rem;
		}
	}
</style>

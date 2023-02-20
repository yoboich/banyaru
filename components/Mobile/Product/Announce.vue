<script setup></script>

<template>
	<div class="card-announc card card-under">
		<div class="card-announc__title h1">Объявление</div>
		<div class="card-announc__row">
			<div class="card-announc__item">
				<div class="card-announc__name h4">№ объявления</div>
				<div class="card-announc__text h4">123654657</div>
			</div>
			<div class="card-announc__item">
				<div class="card-announc__name h4">Дата размещения</div>
				<div class="card-announc__text h4">12.10.21</div>
			</div>
			<div class="card-announc__item">
				<div class="card-announc__name h4">Дата обновления</div>
				<div class="card-announc__text h4">10.10.21</div>
			</div>
			<div class="card-announc__item">
				<div class="card-announc__name h4">Количество показов</div>
				<div class="card-announc__text h4">1434</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-announc {
		box-shadow: none !important;
		z-index: 0;
		&__title {
			margin-bottom: 2.2rem;
			color: $mainFontColor;
		}

		&__row {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		&__item {
			display: flex;
			justify-content: space-between;
		}

		&__name {
			color: $secondary-color;
		}

		&__text {
			width: 16rem;
			color: $mainFontColor;
		}
	}
</style>

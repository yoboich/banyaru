<script setup></script>

<template>
	<div class="cabinet-favorite">
		<div class="cabinet-favorite__title h2">Избранное</div>
		<div class="cabinet-favorite__content">
			<!-- <CabinetAdsEmpty
				text="Добавляейте объявления в избранное"
				btn="Добавить объявление"
			/> -->
			<CabinetFavoriteItem />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.cabinet-favorite {
		height: 100%;
		display: flex;
		flex-direction: column;
		&__title {
		}

		&__content {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.h2 {
	}
</style>

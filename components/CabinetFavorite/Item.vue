<script setup></script>

<template>
	<div class="cabinet-card-ads">
		<div class="cabinet-card-ads__row">
			<div class="cabinet-card-ads__column" v-for="item in 8">
				<UIBadje :class="['free', 'cabinet-card-favorite__badje']">
					Бесплатное
				</UIBadje>
				<div class="cabinet-card-ads__item">
					<div class="cabinet-card-ads__right">
						<img
							class="cabinet-card-ads__img"
							src="~/assets/img/promotions/1.jpg"
							alt=""
						/>
					</div>
					<div class="cabinet-card-ads__left">
						<div class="cabinet-card-ads__name h4">Сауны</div>
						<div class="cabinet-card-ads__text h4">Сауна Дионис-СПА</div>
						<div class="cabinet-card-ads__price h3">22 300 ₽</div>
						<div class="cabinet-card-ads__adress h4-mini">
							ул. Тимирязьева, м. Могилевская
						</div>
						<div class="cabinet-card-ads__action">
							<div class="cabinet-card-ads__view">
								<img src="~/assets/img/icon/eye.svg" alt="" /> 0
							</div>
							<div class="cabinet-card-ads__like">
								<img src="~/assets/img/icon/like.svg" alt="" /> 0
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.cabinet-card-favorite__badje {
		z-index: 1;
		padding: 0.2rem 0.2rem 0.2rem 0.6rem;
		font-size: 1.6rem;
		color: $secondary-color;
		gap: 0.5rem;

		@media screen and (max-width: 768px) {
			font-size: 1rem;
			left: 0;
		}
	}
</style>

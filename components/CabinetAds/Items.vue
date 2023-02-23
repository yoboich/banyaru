<script setup>
	const items = ref([
		{ badje: 'free', badjeText: 'Бесплатное', active: false },
		{ badje: 'free', badjeText: 'Бесплатное', active: true },
		{ badje: 'vip', badjeText: 'Платное', active: false },
		{ badje: 'vip', badjeText: 'Платное', active: false },
		{ badje: 'vip', badjeText: 'Платное', active: false },
		{ badje: 'vip', badjeText: 'Платное', active: false },
	]);
</script>

<template>
	<div class="cabinet-card-ads">
		<div class="cabinet-card-ads__row">
			<div class="cabinet-card-ads__column" v-for="item in items">
				<UIBadje :class="[item.badje, 'cabinet-card-ads__badje']">{{
					item.badjeText
				}}</UIBadje>
				<div class="cabinet-card-ads__item">
					<div class="cabinet-card-ads__right">
						<img
							class="cabinet-card-ads__img"
							src="~/assets/img/promotions/1.jpg"
							alt=""
						/>
						<div
							class="cabinet-card-ads__status h4-mini"
							:class="{ active: item.active }"
						>
							{{ item.active === true ? 'Активно ' : 'Неактивно | отклонено' }}
						</div>
					</div>
					<div class="cabinet-card-ads__left">
						<div class="cabinet-card-ads__name h4">
							Сауны <img src="~/assets/img/cabinet/extra.svg" alt="" />
						</div>
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
						<div class="cabinet-card-ads__place">
							<div class="cabinet-card-ads__hall h4-mini">Залы 5</div>
							<div class="cabinet-card-ads__service h4-mini">Услуги 12</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.cabinet-card-ads {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		&__row {
			display: flex;
			flex-wrap: wrap;
			row-gap: 3rem;
		}

		&__column {
			flex: 0 1 50%;
			position: relative;

			@media screen and (max-width: 768px) {
				flex: 0 1 100%;
			}
		}

		&__item {
			display: flex;
			gap: 2rem;
		}

		&__badje {
			z-index: 1;
			font-weight: 500;
			font-size: 0.7rem;
			color: $secondary-color;
			padding: 0.2rem 0.2rem 0.2rem 0.6rem;
			gap: 0.5rem;
			top: 0.5rem;
			left: 0.7rem;

			& svg {
				width: 1.2rem;
			}
		}

		&__right {
		}

		&__img {
			max-width: 21rem;
			margin-bottom: 0.5rem;
			filter: drop-shadow(1px 7px 22px rgba(166, 175, 205, 0.58));
			border-radius: 12px;
		}

		&__status {
			color: $red-color;
			position: relative;
			padding-left: 1.6rem;
			margin-left: 0.5rem;

			&.active {
				color: $green-color;

				&::before {
					background-color: $green-color;
				}
			}

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				width: 1rem;
				height: 1rem;
				border-radius: 50%;
				background-color: $red-color;
			}
		}

		&__left {
		}

		&__name {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $secondary-color;
			margin-bottom: 0.5rem;
		}

		&__text {
			color: $mainFontColor;
			margin-bottom: 0.3rem;
		}

		&__price {
			color: $mainFontColor;
		}

		&__adress {
			color: $secondary-color;
			margin-bottom: 0.3rem;
			margin-bottom: 1.5rem;
		}

		&__action {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			margin-bottom: 1rem;
		}

		&__view {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			color: $secondary-color;
		}

		&__like {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			color: $secondary-color;

			& img {
				width: 2.5rem;
			}
		}

		&__place {
			display: flex;
			align-items: center;
			gap: 2rem;
		}

		&__hall {
			color: $secondary-color;
		}

		&__service {
			color: $secondary-color;
		}
	}
</style>

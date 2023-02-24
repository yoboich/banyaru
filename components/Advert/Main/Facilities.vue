<template>
	<div class="facilities">
		<div class="facilities__title">Удобства</div>
		<div class="facilities__inner">
			<div class="facilities__wrapper">
				<div class="facilities__item">
					<label class="facilities__name">Беседка летняя </label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Беседка теплая</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Летняя веранда</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Отель / Гостевые номера</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Парковка</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Автомойка</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Выход к водоему</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Пробковый сбор</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Можно с детьми</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Можно с животными</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Свой двор</label>
					<input type="checkbox" />
				</div>
			</div>

			<div class="facilities__wrapper">
				<div class="facilities__item">
					<div class="facilities__name facilities__name_title">
						<b>Парковка</b>
					</div>
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Бесплатная</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Платная</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">С видео-наблюдением</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Охранаяемая</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Свободная (стихийная)</label>
					<input type="checkbox" />
				</div>
				<div class="facilities__item">
					<label class="facilities__name">Крытая</label>
					<input type="checkbox" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.facilities {
		margin-top: 7.2rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		@media screen and (max-width: 768px) {
			margin-top: 4rem;
			padding: 0;
		}
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 4.1rem;
			position: relative;
			@media screen and (max-width: 768px) {
				padding-left: 2.5rem;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					width: 10px;
					height: 10px;
					transform: translateY(-50%);
					background: $red-color;
					border-radius: 50%;
				}
			}
		}
		&__inner {
			display: flex;
			column-gap: 19.6rem;
			row-gap: 1.3rem;
			grid-auto-flow: dense;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 4rem;
			}
		}
		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 1.3rem;
			flex: 1 1 auto;

			@media screen and (max-width: 768px) {
				padding-bottom: 4rem;
				&:first-child {
					border-bottom: 1px solid $secondary-color;
				}
			}
		}
		&__item {
			display: flex;
			justify-content: space-between;
		}
		&__name {
			font-weight: 500;
			font-size: 1.6rem;
			line-height: 1.8rem;
			&_title {
				margin-bottom: 1.5rem;
			}
		}
	}
</style>

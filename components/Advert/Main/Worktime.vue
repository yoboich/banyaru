<template>
	<div class="worktime">
		<div class="worktime__inner">
			<div class="worktime__title">Режим работы</div>
			<div class="worktime__item">
				<div class="worktime__radio">
					<label for="">Круглосуточно</label>
					<input type="radio" />
				</div>
			</div>
			<div class="worktime__item">
				<div class="worktime__radio">
					<label for="">Ежедневно</label>
					<input type="radio" />
				</div>
				<div class="worktime__input">
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
			</div>
		</div>
		<div class="worktime__item worktime__item-own">
			<div class="worktime__radio">
				<label for="">Свой график</label>
				<input type="radio" />
			</div>
			<div class="worktime__input-inner">
				<div class="worktime__input">
					<span>Пн</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
				<div class="worktime__input">
					<span>Вт</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
				<div class="worktime__input">
					<span>Ср</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
				<div class="worktime__input">
					<span>Чт</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
				<div class="worktime__input">
					<span>Пт</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
				<div class="worktime__input">
					<span>Сб</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
				<div class="worktime__input">
					<span>Вс</span>
					<input class="input" placeholder="c 9:00" type="text" />
					<input class="input" placeholder="до 18:00" type="text" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	input {
		max-width: 10rem;
	}
	.worktime {
		display: flex;
		gap: 16rem;
		margin-top: 7.2rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);

		@media screen and (max-width: 768px) {
			margin-top: 4rem;
			gap: 0;
			flex-direction: column;
		}
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 3rem;
			position: relative;
			@media screen and (max-width: 768px) {
				margin-bottom: 0;
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
			flex-direction: column;
			// gap: 5rem;
			max-width: 34.5rem;
		}

	
		&__item {
			padding-top: 2rem;
			padding-bottom: 2rem;
			border-bottom: 1px solid rgba(143, 153, 186, 0.2);

			&:nth-last-child(1) {
				border-bottom: none;
				@media screen and (max-width: 768px) {
					border-bottom: 1px solid rgba(143, 153, 186, 0.2);

					& label {
						color: $secondary-color;
					}
				}
			}
		}
		&__radio {
			display: flex;
			justify-content: space-between;
			gap: 4.3rem;
			width: 100%;
			& label {
				margin-bottom: 2rem;
			}
		}
		&__input-inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
		&__input {
			display: flex;
			gap: 2rem;
			align-items: center;
			& span {
				margin-right: 7rem;

				@media screen and (max-width: 768px) {
					color: $secondary-color;
				}
			}
		}
		&__item-own {
			@media screen and (max-width: 768px) {
				border: none !important;
			}
		}
	}
</style>

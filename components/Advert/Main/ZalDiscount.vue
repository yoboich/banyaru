<template>
	<div class="discount">
		<div class="discount__inner">
			<div class="discount__item">
				<div class="discount__title">Скидки</div>
				<div class="discount__input">
					<input placeholder="10" class="input" type="text" />
					<span>%</span>
					<input
						placeholder="Д/Р (5 дней До и После+документ)"
						class="input"
						type="text"
					/>
				</div>
				<div class="discount__input">
					<input placeholder="10" class="input" type="text" />
					<span>%</span>
					<input placeholder="7- 14 лет" class="input" type="text" />
				</div>
				<div class="discount__input">
					<input placeholder="10" class="input" type="text" />
					<span>%</span>
					<input placeholder="9-17 пн-чт" class="input" type="text" />
				</div>
			</div>
			<div class="discount__item">
				<div class="discount__title">Вместимость</div>
				<div class="discount__input-quantity">
					<span>Количество гостей, входящих в цену.</span>
					<input placeholder="1" class="input" type="text" />
				</div>
				<div class="discount__input-quantity">
					<span>Максимальное допустимое количество гостей для зала.</span>
					<input placeholder="1" class="input" type="text" />
				</div>
				<div class="discount__input-quantity">
					<span>Количество комнат отдыха с кроватью.</span>
					<input placeholder="1" class="input" type="text" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.discount {
		margin-top: 7.2rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		max-width: 83rem;
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 2rem;
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
			justify-content: flex-start;
			gap: 12rem;
			position: relative;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 4rem;
			}
		}
		&__item {
			flex: 1 1 34rem;
			@media screen and (max-width: 768px) {
				flex: auto;
			}
			& button {
				width: 100%;
				box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
				border-radius: 10rem;
				color: $green-color;
				font-weight: 500;
			}
		}
		&__input {
			display: flex;
			gap: 2rem;
			align-items: center;
			margin-bottom: 1rem;
			& input:nth-child(1) {
				max-width: 6rem;
			}
			& span {
				color: $secondary-color;
			}
		}
		&__input-quantity {
			display: flex;
			justify-content: space-between;
			gap: 5rem;
			align-items: center;
			margin-bottom: 3rem;
			& input {
				max-width: 6rem;
			}
		}
	}
</style>

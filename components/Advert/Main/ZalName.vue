<template>
	<div class="zal-name">
		<div class="zal-name__inner">
			<div class="zal-name__item">
				<div class="zal-name__title">Название зала</div>
				<div class="zal-name__subtitle">
					Примеры: Жаркий сруб | Королевский номер | Зал №3 | Общее отделение |
					Хаммам
				</div>
				<input class="input" placeholder="Название зала" type="text" />
			</div>
			<div class="zal-name__item">
				<div class="zal-name__desc">
					<span>Описание</span>
					<textarea
						class="input input_textarea"
						placeholder="Добавиьте описание"
						name=""
						id=""
						cols="30"
						rows="8"
					></textarea>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.zal-name {
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
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
		&__subtitle {
			color: $secondary-color;
			margin-bottom: 2.5rem;

			@media screen and (max-width: 768px) {
				margin-bottom: 4rem;
			}
			&_logo {
				margin-bottom: 1.6rem;
			}
		}
		&__inner {
			display: flex;
			justify-content: flex-start;
			gap: 12rem;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 2.7rem;
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
		&__desc {
			display: flex;
			flex-direction: column;
			& span {
				margin-bottom: 1.6rem;
				font-weight: 700;
				font-size: 2.4rem;
				line-height: 130%;
			}
		}
		&__gallery {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 2rem;
			row-gap: 2rem;
			margin-bottom: 2.2rem;
			& img {
				filter: drop-shadow(1px 7px 22px rgba(166, 175, 205, 0.58));
				border-radius: 12px;
				width: 100%;
				object-fit: cover;
			}
		}
	}
</style>

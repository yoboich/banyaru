<template>
	<div class="social">
		<div class="social__title">Объект в интернете</div>
		<div class="social__subtitle">Если есть</div>
		<div class="social__inner">
			<div class="social__item">
				<div class="social__name">Официальный сайт</div>
				<input class="input" placeholder="Сайт" type="text" />
			</div>
			<div class="social__item">
				<div class="social__name">Вк</div>
				<input class="input" placeholder="Ссылка" type="text" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.social {
		margin-top: 7.2rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 1.1rem;
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
			margin-bottom: 2.7rem;
		}
		&__inner {
			max-width: 74rem;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 6rem;

			@media screen and (max-width: 768px) {
				display: flex;
				flex-direction: column;
				gap: 2.5rem;
			}
		}
		&__item {
			display: flex;
			flex-direction: column;
			gap: 1.4rem;
		}
	}
</style>

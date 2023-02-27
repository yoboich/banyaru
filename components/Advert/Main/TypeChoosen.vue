<template>
	<div class="type">
		<div class="type__title">Тип объявления</div>
		<div class="type__inner">
			<div class="type__item">
				<div class="type__name">Аренда бани / сауны, почасовая</div>
				<button class="type__button btn btn-white">Изменить</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.type {
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		margin-bottom: 6rem;

		@media screen and (max-width: 768px) {
			display: none;
		}
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 0.9rem;
			margin-top: 4.6rem;
		}
		&__inner {
			background: #d8ffd1;
			border-radius: 23px;
			padding: 3rem 4rem 3rem 2.5rem;
		}
		&__item {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__name {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
		}
		&__button {
			font-weight: 500;
			font-size: 2rem;
			line-height: 100%;
			color: $green-color;
		}
	}
</style>

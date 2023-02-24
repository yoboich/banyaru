<template>
	<div class="contacts">
		<div class="contacts__title">Контакты</div>
		<div class="contacts__subtitle">Если есть</div>
		<div class="contacts__inner">
			<div class="contacts__item">
				<div class="contacts__name has">Номер телефона объекта</div>
				<input class="input" placeholder="+7" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name has">Номер владельца | управляющего</div>
				<input class="input" placeholder="+7" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name has">Номер для оповещений WhatsApp</div>
				<input class="input" placeholder="+7" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name has">Эл. почта владельца | управляющего</div>
				<input class="input" placeholder="Ссылка" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name">Номер администратора</div>
				<input class="input" placeholder="+7" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name">Юридическое название организации</div>
				<input class="input" placeholder="Название" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name">Электронная почта объекта</div>
				<input class="input" placeholder="Ссылка" type="text" />
			</div>
			<div class="contacts__item">
				<div class="contacts__name">ИНН</div>
				<input class="input" placeholder="инн" type="text" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.contacts {
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
			position: relative;
			@media screen and (max-width: 768px) {
				padding-left: 2.5rem;
				&::before {
					content: '*';
					position: absolute;
					top: 0;
					right: 0;
					color: $red-color;
				}
			}
		}
		&__inner {
			max-width: 74rem;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 6rem;
			row-gap: 2rem;

			@media screen and (max-width: 768px) {
				display: flex;
				flex-direction: column;
			}
		}
		&__item {
			display: flex;
			flex-direction: column;
			gap: 1.4rem;
		}
		&__name {
			&.has {
				position: relative;
				@media screen and (max-width: 768px) {
					&::before {
						content: '*';
						position: absolute;
						top: 0;
						right: 0;
						color: $red-color;
					}
				}
			}
		}
	}
</style>

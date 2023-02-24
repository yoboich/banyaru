<template>
	<div class="name">
		<div class="name__title">Название объекта</div>
		<div class="name__subtitle">Символов 120</div>
		<div class="name__inner">
			<div class="name__item">
				<div class="name__text">
					Название не должно содержать привязки к географическому положению.
					Например: Баня на ул. Ленина, Сауна Томск
				</div>
				<input class="input" placeholder="Название бани" type="text" />
			</div>
			<div class="name__desc">
				<textarea
					class="input input_textarea"
					placeholder="Описание бани"
					type="textarea"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.name {
		margin-top: 7.2rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		@media screen and (max-width: 768px) {
			margin-top: 4rem;
		}
		&__title {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
			margin-bottom: 0.6rem;
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
			font-weight: 500;
			font-size: 1.4rem;
			line-height: 2rem;
			margin-bottom: 1.6rem;
			@media screen and (max-width: 768px) {
				padding-left: 2.5rem;
			}
		}
		&__inner {
			display: flex;
			gap: 7.2rem;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 2.5rem;
			}
		}
		&__item {
			display: flex;
			flex-direction: column;
			gap: 4.3rem;
			max-width: 33.9rem;
			width: 100%;
		}
		&__text {
			font-weight: 500;
		}
		&__desc {
			max-width: 56rem;
			width: 100%;
			& textarea {
				max-width: 56rem;
				width: 100%;
				height: 13.3rem;
			}
		}
	}
</style>

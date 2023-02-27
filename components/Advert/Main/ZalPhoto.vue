<template>
	<div class="zal-photo">
		<div class="zal-photo__title">Фотографии</div>
		<div class="zal-photo__inner">
			<div class="zal-photo__item">
				<img src="@/assets/img/promotions/1.jpg" alt="" />
			</div>
			<div class="zal-photo__item">
				<img src="@/assets/img/promotions/1.jpg" alt="" />
			</div>
			<div class="zal-photo__item">
				<img src="@/assets/img/promotions/1.jpg" alt="" />
			</div>
		</div>
		<div class="zal-photo__button btn btn-white">+ Добавить фото</div>
		<div class="photo__sub-item sub-item">
			<div class="sub-item__title">Видео</div>
			<div class="sub-item__subtitle">
				Добавить ссылку на видео ролик об объекте (YouTube)
			</div>
			<input placeholder="Ссылка на YouTube" type="text" class="input" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.sub-item {
		& input {
			max-width: 34rem;
		}
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		&__title {
			margin-top: 1rem;
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 130%;
		}
		&__subtitle {
			font-weight: 500;
			font-size: 1.4rem;
			line-height: 1.8rem;
			color: $secondary-color;
		}
	}
	.zal-photo {
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		margin-bottom: 6rem;
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
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			border: 1px dashed #8f99ba;
			border-radius: 23px;
			padding: 2rem;
			gap: 2rem;

			@media screen and (max-width: 768px) {
				padding: 0;
				display: flex;
				flex-wrap: wrap;
				border: none;
			}
		}
		&__item {
			& img {
				max-width: 16rem;
				object-fit: cover;
				filter: drop-shadow(1px 7px 22px rgba(166, 175, 205, 0.58));
				border-radius: 12px;
			}
		}
		&__button {
			margin-left: auto;
			text-align: center;
			max-width: 24rem;
			color: $green-color;
			margin-top: 1.6rem;
			@media screen and (max-width: 768px) {
				margin: 4rem 0;
				max-width: 100%;
			}
		}
	}
</style>

<script setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
	const { width } = useWindowSize();
	watchEffect(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onMounted(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		}
	});
	function uploadFile(e) {
		const file = e.target.files[0];
	}
</script>

<template>
	<div class="photo">
		<div class="photo__inner">
			<div class="photo__item photo__main">
				<div class="photo__title">Главная фотография</div>
				<div class="photo__subtitle">
					Не допускать к размещению фотографии с водяным знаками, чужих объектах
					и рекламные баннеры, JPG, PNG или GIF
				</div>
				<label class="photo__input">
					<img src="@/assets/img/chat/camera.svg" alt="" />
					<p>Добавить фото</p>
					<span>Jpeg | Png | 160 x 160</span>
					<input
						@change="uploadFile"
						type="file"
						ref="file"
						accept="image/gif, 
            image/jpeg, image/png"
						hidden
					/>
				</label>
				<div class="photo__sub-item sub-item" v-if="isLarge">
					<div class="sub-item__title">Видео</div>
					<div class="sub-item__subtitle">
						Добавить ссылку на видео ролик об объекте (YouTube)
					</div>
					<input placeholder="Ссылка на YouTube" type="text" class="input" />
				</div>
			</div>
			<div class="photo__item">
				<div class="photo__title">Логотип</div>
				<div class="photo__subtitle photo__subtitle" v-if="isLarge">
					Не допускать к размещению фотографии с водяным знаками, чужих объектах
					и рекламные баннеры, JPG, PNG или GIF
				</div>
				<label class="photo__input">
					<img src="@/assets/img/chat/camera.svg" alt="" />
					<p>Добавить фото</p>
					<span>Jpeg | Png | 160 x 160</span>
					<input
						@change="uploadFile"
						type="file"
						ref="file"
						accept="image/gif, 
            image/jpeg, image/png"
						hidden
					/>
				</label>
				<div class="photo__sub-item sub-item" v-if="!isLarge">
					<div class="sub-item__title">Видео</div>
					<div class="sub-item__subtitle">
						Добавить ссылку на видео ролик об объекте (YouTube)
					</div>
					<input placeholder="Ссылка на YouTube" type="text" class="input" />
				</div>
				<div class="photo__sub-item sub-item">
					<div class="sub-item__title">Заголовок</div>
					<div class="sub-item__subtitle">
						Яркий заголовок объявления для Платных, Бронирования и VIP.
					</div>
					<input placeholder="Заголовок" type="text" class="input" />
				</div>
			</div>
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
			margin-top: 3.7rem;
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
	.photo {
		margin-top: 7.2rem;
		padding-bottom: 5.9rem;
		border-bottom: 1px solid rgba(143, 153, 186, 0.2);
		@media screen and (max-width: 768px) {
			margin-top: 4rem;
		}
		&__title {
			font-weight: 700;
			font-size: 2rem;
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
			&_logo {
				font-weight: 700;
				font-size: 1.6rem;
				line-height: 2rem;
				margin-bottom: 1.7rem;
			}
		}

		&__subtitle {
			color: $secondary-color;
			margin-bottom: 2.5rem;
			max-width: 32rem;
			&_logo {
				margin-bottom: 1.6rem;
			}
		}
		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
			@media screen and (max-width: 768px) {
				flex-direction: column;
				gap: 4rem;
			}
		}

		&__main {
			@media screen and (max-width: 768px) {
				padding-bottom: 4rem;
				border-bottom: 1px solid $secondary-color;
			}
		}
		&__item {
		}
		&__input {
			cursor: pointer;
			width: 34rem;
			height: 20rem;
			border: 1px solid #8f99ba;
			border-radius: 23px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			& img {
				margin-bottom: 1.2rem;
			}
			& p {
				color: $green-color;
			}
			& span {
				font-size: 1.1rem;
				margin-top: 1rem;
				color: $secondary-color;
			}
		}
	}
</style>

<script setup>
	defineProps(['type', 'name', 'img', 'metro', 'walk', 'price']);
</script>

<template>
	<div class="card-related__column">
		<div class="card-related__item">
			<div class="card-related__action">
				<UIStars />
				<div class="card-related__feedback">
					11 <img src="~/assets/img/icon/comment.svg" alt="" />
				</div>
				<img
					class="card-related__like"
					src="~/assets/img/icon/like.svg"
					alt=""
				/>
			</div>
			<div class="card-related__img">
				<img :src="img" alt="" />
				<div class="card-related__play">
					<img src="~/assets/img/product-card/play.svg" alt="" />
				</div>
				<button class="btn btn-white card-related__btn">Подробнее</button>
			</div>
			<div class="card-related__info">
				<div class="card-related__what h4">{{ type }}</div>
				<div class="card-related__name h3">{{ name }}</div>
				<div class="card-related__metro">
					<div class="card-related__metro-text h4">
						<img src="~/assets/img/icon/metro.svg" alt="" />
						{{ metro }}
					</div>
					<div class="card-related__walk">{{ walk }}</div>
				</div>
				<div class="card-related__price h3">{{ price }} руб.</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-related {
		&__column {
			flex: 1;
		}

		&__btn {
			display: none;
		}

		&__item {
			border-radius: 23px;
			&:hover {
				background: #ffffff;
				box-shadow: 0px 6px 56px rgba(123, 129, 148, 0.48);
				padding: 0.8rem 0.8rem 3.4rem 0.8rem;
				transform: scale(1.2);
				z-index: 2;
				position: relative;
				height: 100%;
				max-height: 35rem;
				display: flex;
				flex-direction: column;
				.card-related__action {
					display: none;
				}

				.card-related__metro {
					display: none;
				}

				.card-related__what {
					display: none;
				}

				.card-related__info {
					display: flex;
					justify-content: flex-end;
					flex-direction: row-reverse;
					gap: 2rem;
					font-size: 1.6rem;
				}

				.card-related__img {
					width: 38rem;
					margin: 0 0 3.8rem;
					flex: 1;
				}
				.card-related__name {
					margin: 0;
				}
				.card-related__btn {
					display: block;
					position: absolute;
					bottom: 1.7rem;
					right: 1.7rem;
				}
			}
		}

		&__action {
			display: flex;
			align-items: center;
			margin-bottom: 1.8rem;
		}

		&__feedback {
			flex: 1;
			display: flex;
			align-items: center;
			font-weight: 500;
			font-size: 1rem;
			color: #9da7c7;
			margin-left: 0.8rem;
		}

		&__img {
			position: relative;
			margin-bottom: 2rem;

			& img {
				width: 100%;
				filter: drop-shadow(1px 7px 22px rgba(166, 175, 205, 0.58));
				border-radius: 6px;
			}
		}

		&__like {
			width: 3rem;
		}

		&__play {
			position: absolute;
			top: 1.4rem;
			right: 1.6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba($color: #000000, $alpha: 0.4);
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			cursor: pointer;
			& img {
				width: 1.5rem;
			}
		}

		&__info {
		}

		&__what {
			margin-bottom: 0.5rem;
			color: $secondary-color;
		}

		&__name {
			margin-bottom: 3.5rem;
			color: $mainFontColor;
		}

		&__metro {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 1.5rem;
			color: $mainFontColor;
		}

		&__metro-text {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		&__walk {
			font-weight: 600;
			font-size: 1.4rem;
			color: $secondary-color;
		}

		&__price {
			color: $green-color;
			font-weight: 700;
		}
	}
</style>

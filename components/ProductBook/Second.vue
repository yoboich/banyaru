<script setup></script>

<template>
	<div class="book-card-sec">
		<div class="book-card-sec__top">
			<div class="book-card-sec__title">
				<div class="book-card-sec__name card__name h1">Зал</div>
				<div class="book-card-sec__text h4">Баня на дровах</div>
			</div>
			<div class="book-card-sec__all h4">Все</div>
		</div>
		<div class="book-card-sec__info">
			<div class="book-card-sec__subtitle h3">Жаркая изба</div>
			<div class="book-card-first__i">
				<img src="~/assets/img/icon/i.svg" alt="" />
			</div>
		</div>
		<div class="book-card-sec__btns">
			<div class="btn next-prev-btn">
				<button class="next-prev-btn__item h3-lite next-prev-btn__prev">
					<IconArrow class="green" /> Предыдущее
				</button>
				<button class="next-prev-btn__item h3-lite next-prev-btn__next">
					Следующее <IconArrow class="green" />
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.book-card-sec {
		border-bottom: 1px solid #e1e5f2;
		padding-bottom: 3.5rem;
		padding-top: 3.5rem;
		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 1.5rem;
		}

		&__title {
			display: flex;
			align-items: center;
			gap: 4rem;
		}

		&__name {
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				right: -2.3rem;
				width: 1px;
				height: 2rem;
				background-color: #e1e5f2;

				transform: translateY(-50%);
			}
		}

		&__text {
		}

		&__all {
			cursor: pointer;
			color: $green-color;
		}

		&__info {
			display: flex;
			justify-content: space-between;
			margin-bottom: 2.5rem;
		}

		&__subtitle {
		}

		&__btns {
			display: flex;
			justify-content: center;
		}
	}
	.h1 {
	}
	.h4 {
	}
	.book-card-first {
		&__i {
		}
	}
</style>

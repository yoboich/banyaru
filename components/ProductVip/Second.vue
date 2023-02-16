<script setup></script>

<template>
	<div class="vip-card-sec">
		<div class="vip-card-sec__title h2">Зал мак</div>
		<div class="vip-card-sec__btns">
			<div class="vip-card-sec__btn">
				<button class="btn btn-white h3-lite">
					<IconArrow class="green rotate" /> Зал малинки
				</button>
			</div>
			<div class="vip-card-sec__btn">
				<button class="vip-card-sec__btn btn btn-white h3-lite">
					Зал мак <IconArrow class="green" />
				</button>
			</div>
			<div class="vip-card-sec__btn">
				<button class="vip-card-sec__btn btn btn-white h3-lite">
					Все Залы <IconArrow class="green down" />
				</button>
			</div>
		</div>
		<div class="vip-card-sec__bot">
			<div class="vip-card-sec__price">от <span>9 000 ₽</span></div>
			<div class="vip-card-sec__all">
				<button class="btn btn-white h3-lite">
					Смотреть все <IconArrow class="green" />
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.vip-card-sec {
		padding-top: 2rem;
		padding-bottom: 30px;
		border-bottom: 1px solid #E1E5F2;
		&__title {
			margin-bottom: 1.2rem;
		}

		&__btns {
			display: flex;
			margin-bottom: 3.3rem;
		}

		&__btn {
			& .btn {
				display: flex;
				align-items: center;
				gap: 0.8rem;
				padding: 0.5rem 1.2rem;
				color: $green-color;
			}

			&:first-child {
				margin-right: 3rem;
			}
			&:nth-child(2) {
				flex: 1;
			}
		}

		&__bot {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__price {
			font-weight: 500;
			font-size: 1.9rem;
			color: $green-color;

			span {
				font-weight: 700;
				font-size: 2.8rem;
			}
		}

		&__all {
			& .btn {
				display: flex;
				align-items: center;
				gap: 0.8rem;
				padding: 0.5rem 1.2rem;
				color: $green-color;
			}
		}
	}
</style>

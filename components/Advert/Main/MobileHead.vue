<script setup></script>

<template>
	<div class="advert-mobile-head">
		<div class="advert-mobile-head__top">
			<IconArrow class="green rotate" />
			<div class="advert-mobile-head__title h2">Сдать баню</div>
			<IconAdd />
		</div>
		<div class="advert-mobile-head__nav">
			<div class="advert-mobile-head__tab h3-lite active">Тип объявления</div>
			<div class="advert-mobile-head__tab h3-lite">расположение</div>
			<div class="advert-mobile-head__tab h3-lite">тип задания</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.advert-mobile-head {
		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #ffffff;
			position: relative;
			z-index: 2;

			box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.22);
			border-radius: 0 0 23px 23px;
			padding: 1.7rem 2rem;

			& svg {
				cursor: pointer;
			}
		}

		&__title {
			color: $mainFontColor;
		}

		&__nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #ffffff;
			box-shadow: 0px 6px 50px rgba(166, 175, 203, 0.28);
			border-radius: 0 0 23px 23px;
			padding: 4rem 2rem 2rem;
			margin-top: -2rem;
			position: relative;
			z-index: 1;

		}

		&__tab {
			color: $secondary-color;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				right: -6%;
				height: 100%;
				width: 1px;
				background-color: $secondary-color;
				transform: translateY(-50%);
			}

			&:last-child {
				&::before {
					content: none;
				}
			}
			&.active {
				color: $mainFontColor;
			}
		}
	}
</style>

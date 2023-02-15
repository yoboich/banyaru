<script setup>
	let activeTab = ref(1);

	const tabs = [
		'Аренда 1',
		'Продажа 2',
		'Залы',
		'Услуги',
		'Архив 2',
		'Неактивные',
	];
</script>

<template>
	<div class="cabinet-ads">
		<div class="cabinet-ads__tabs">
			<div class="nav">
				<div class="nav__inner">
					<div
						v-for="(item, idx) in tabs"
						:key="item"
						@click="activeTab = idx + 1"
						:class="[activeTab == idx + 1 ? 'nav__item_active' : '']"
						class="nav__item"
					>
						{{ item }}
					</div>
				</div>
			</div>
		</div>
		<div class="cabinet-ads__top">
			<div class="cabinet-ads__title h2">Мои объявления</div>
			<button class="cabinet-ads__btn btn btn-white h2-lite">
				+Разместить объявление
			</button>
		</div>
		<div class="cabinet-ads__content">
			<!-- <CabinetAdsEmpty text="Нет активных объявлений" btn="Разместить объявление"/> -->
			<CabinetAdsItems />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.nav {
		display: flex;
		align-items: flex-start;
		&__inner {
			display: flex;
		}
		&__item {
			cursor: pointer;
			padding: 2.15rem 3.4rem 1.95rem;
			border-top: 1px solid rgb(56%, 60%, 73%, 0.15);
			border-right: 1px solid rgb(56%, 60%, 73%, 0.15);
			border-radius: 6px 6px 0px 0px;
			&:nth-child(1) {
				border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
			}
			&_active {
				color: $green-color;
				padding: 2.35rem 3.4rem 1.95rem;
				border: none;
				background: #ffffff;
				box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
				border-radius: 6px 6px 0px 0px;
			}
		}
	}

	.cabinet-ads {
		height: 100%;
		display: flex;
		flex-direction: column;
		&__tabs {
			margin-bottom: 3rem;
		}

		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__title {
			color: $mainFontColor;
		}

		&__btn {
			color: $green-color;
		}

		&__content {
			flex: 1;
		}
	}
</style>

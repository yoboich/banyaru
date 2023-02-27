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
</script>
<template>
	<div class="advert-main">
		<div class="advert-main__item" v-if="isLarge">
			<AdvertMainType />
		</div>
		<AdvertMainMobileHead v-if="!isLarge" />

		<div class="advert-main__item">
			<AdvertMainTypeChoosen />
			<AdvertMainLocation />
			<AdvertMainBuildingType />
			<AdvertMainName />
			<AdvertMainWorktime />
			<AdvertMainFacilities />
			<AdvertMainPhoto />
			<AdvertMainSocial />
			<AdvertMainContacts />
			<div class="advert-main__title advert-main__title_zal">Зал</div>
			<div class="advert-main__zal">
				<span class="advert-main__zal-active">Активность</span>
				<span class="info-icon">i</span>
				<input class="switch" type="checkbox" />
			</div>
			<AdvertMainZalPhoto />
			<AdvertMainZalName />
			<AdvertMainZalPrice />
			<AdvertMainZalTime />
			<AdvertMainZalFacilities />
			<AdvertMainZalHolidays />
			<AdvertMainZalDiscount />
			<AdvertMainZalService />
			<AdvertMainZalBooking />
			<AdvertMainTotal/>
			<AdvertMainTariff/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.info-icon {
		width: 3.2rem;
		height: 3.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 1.3rem;
		margin-right: 6rem;
		background: #ffffff;
		box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
		border-radius: 100px;
		color: $green-color;
	}
	.advert-main {
		display: flex;
		flex-direction: column;
		gap: 4.3rem;
		max-width: 106rem;
		width: 100%;

		@media screen and (max-width: 768px) {
			max-width: 100%;
			gap: 0;
		}
		&__item {
			display: flex;
			flex-direction: column;
			background: #ffffff;
			box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
			border-radius: 2.3rem;
			padding: 0 5rem;

			@media screen and (max-width: 768px) {
				margin-top: -2rem;
				border-radius: 0 0 2.3rem 2.3rem;
				padding: 6rem 2rem 0;
			}
		}
		&__title {
			text-align: center;
			font-weight: 700;
			font-size: 2.6rem;
			line-height: 100%;
			margin-top: 3.9rem;
			margin-bottom: 5.7rem;

			@media screen and (max-width: 768px) {
				text-align: left;
			}
			&_first {
				margin-bottom: 1.5rem;
			}
			&_zal {
				margin-bottom: 1.9rem;
			}
			&__zal-active {
				font-weight: 700;
				font-size: 2rem;
				line-height: 130%;
			}
		}
		&__subtitle {
			text-align: center;
			margin-bottom: 2.6rem;
			color: $secondary-color;
			max-width: 26rem;
			margin-left: auto;
			margin-right: auto;
			& a {
				color: $green-color;
			}
		}
		&__zal {
			justify-content: center;
			display: flex;
			align-items: center;

			padding-bottom: 6.9rem;

			@media screen and (max-width: 768px) {
				justify-content: flex-start;
				font-weight: 700;
				font-size: 2.4rem;
				color: $mainFontColor;
			}
		}
	}
</style>

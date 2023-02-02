<script setup>
	import img1 from '~/assets/img/product-card/service1.png';
	import img2 from '~/assets/img/product-card/service2.png';
	import img3 from '~/assets/img/product-card/service3.png';

	const service = ref([
		{
			title: 'SPA-клуб на метро Крестьянкая застава',
			price: false,
			logo: false,
			place: false,
			desc: false,
			img: false,
		},
		{
			title: 'SPA-клуб на метро Крестьянкая застава',
			price: 2300,
			logo: false,
			place: false,
			desc: false,
			img: img1,
		},
		{
			title: 'SPA-клуб на метро Крестьянкая застава',
			price: 4300,
			logo: true,
			place: '7 залов',
			desc: 'Особое - спина-живот | Медовое - 2 парения «Особое» без перерыва | Королевское - 3 парения «Особ...',
			img: img2,
		},
		{
			title: 'SPA-клуб на метро Крестьянкая застава',
			price: 6800,
			logo: true,
			place: '7 залов',
			desc: 'Особое - спина-живот | Медовое - 2 парения «Особое» без перерыва | Королевское - 3 парения «Особ...',
			img: img3,
		},
	]);
</script>

<template>
	<div class="card card-item">
		<div class="card-item__left">
			<div class="card-item__top">
				<div class="card-item__title h2">Сауны и бани с массжем в Москве</div>
				<div class="card-item__text h5">
					Сауны бани с массажем - мы нашли для вас 550 саун <br />
					и бань в городе Москва
				</div>
			</div>
			<ProductCardServiceRequest
				v-for="item in service"
				:title="item.title"
				:desc="item.desc"
				:logo="item.logo"
				:price="item.price"
				:place="item.place"
				:img="item.img"
			/>
		</div>
		<div class="card-item__right">
			<!-- map -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-item {
		margin-top: 2rem;
		display: flex;
		gap: 2rem;
		&__left {
			width: 100%;
		}

		&__top {
			padding-bottom: 1rem;
			border-bottom: 1px solid #e1e5f2;
		}

		&__title {
			color: $mainFontColor;
			margin-bottom: 3px;
		}

		&__text {
			color: $secondary-color;
		}

		&__right {
			width: 65rem;
		}
	}
</style>

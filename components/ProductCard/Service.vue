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
			<iframe
				width="100%"
				height="100%"
				class="absolute inset-0"
				frameborder="0"
				title="map"
				marginheight="0"
				marginwidth="0"
				scrolling="yes"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
				loading="lazy"
				style="filter: opacity(0.7)"
			></iframe>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-item {
		margin-top: 2rem;
		display: flex;
		gap: 2rem;
		&__left {
			width: 50%;
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

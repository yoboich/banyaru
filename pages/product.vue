<script setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
	const mobileHead = ref(false);
	const breadcrumbs = ref([
		'Главная',
		'Бани в городе Москва',
		'Аминьевские бани',
	]);

	const handleScroll = () => {
		if (window.scrollY > 330) {
			mobileHead.value = true;
		}
		if (window.scrollY < 330) {
			mobileHead.value = false;
		}
	};

	const { width } = useWindowSize();

	window.addEventListener('scroll', handleScroll);
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

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	definePageMeta({
		layout: 'product',
	});
</script>

<template>
	<div class="product-card">
		<div class="container">
			<!-- header -->
			<div class="sub-header" v-if="isLarge">
				<UIBreadcrumbs :items="breadcrumbs" />
				<UserAction />
			</div>
			<div
				class="sub-header"
				:class="{
					fixed: mobileHead,
				}"
				v-else
			>
				<div class="sub-header__back">
					<nuxt-link to="/">
						<IconBack :class="{ white: !mobileHead }"
					/></nuxt-link>
				</div>
				<div class="sub-header__right">
					<IconShare :class="{ white: !mobileHead }" />
					<IconHeart :class="{ white: !mobileHead }" />
					<IconAdd :class="{ white: !mobileHead }" />
				</div>
			</div>
			<ProductMobileSwiper v-if="!isLarge" />
			<NuxtPage />
		</div>
	</div>
</template>

<style lang="scss">
	ul,
	ol {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	.product-card {
		width: 100%;
	}
	.sub-header {
		display: flex;
		justify-content: space-between;
		margin: 1.6rem 0;

		&.fixed {
			position: fixed;
			width: 100%;
			z-index: 1000;
			box-sizing: border-box;
		}

		@media screen and (max-width: 768px) {
			padding: 4rem 2rem;
			background-color: $mainFontColor;
			display: flex;
			margin: 0;
			& img {
				cursor: pointer;
			}
			&__right {
				display: flex;
				align-items: center;
				gap: 2.5rem;
			}
		}
	}
	.product-container {
		@media screen and (max-width: 1000px) {
			width: auto;
			padding: 0;
		}
	}
</style>

<script setup>
	const breadcrumbs = ref([
		'Главная',
		'Бани в городе Москва',
		'Аминьевские бани',
	]);
</script>

<template>
	<div class="product-card">
		<div class="container">
			<!-- header -->
			<div class="sub-header" >
				<UIBreadcrumbs :items="breadcrumbs" />
				<UserAction />
			</div>
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

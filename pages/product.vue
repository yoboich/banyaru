<script setup></script>

<template>
	<div class="product-card">
		<!-- header -->
		<div class="sub-header">
			<Breadcrumbs />
			<UserAction />
		</div>
		<ProductCardMain />
	</div>
</template>

<style lang="scss" scoped>
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
	}
</style>

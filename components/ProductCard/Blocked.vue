<script setup>
	const title = ref(['Цены', 'Залы', 'Банный ивентарь', 'Услуги']);
</script>

<template>
	<div class="product-card-blocked">
		<ProductCardBlockedItem
			v-for="(item, idx) in title"
			:key="item"
			:title="item"
			:index="idx + 1"
			class="card card-under"
		/>
	</div>
</template>

<style lang="scss" scoped></style>

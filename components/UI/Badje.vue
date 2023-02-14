<script setup>
	defineProps({
		icon: {
			type: Boolean,
			default: true,
		},
	});
</script>

<template>
	<div class="card__top-tariff"><slot /> <IconInfo v-if="icon" /></div>
</template>

<style lang="scss" scoped></style>

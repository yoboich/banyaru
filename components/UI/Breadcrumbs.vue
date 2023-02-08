<script lang="ts" setup>
	defineProps(['items']);
</script>

<template>
	<ul class="breadcrumbs">
		<template v-for="item in items" :key="item">
			<li class="breadcrumbs__item">{{ item }}</li>
			<IconArrow class="breadcrumbs__arr" />
		</template>
	</ul>
</template>

<style lang="scss" scoped>
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 10px;
		&__item {
			cursor: pointer;
			font-family: 'Lato';
			font-weight: 400;
			font-size: 13.5px;
			color: #8f99ba;
		}

		&__arr {
			width: 1.4rem;
			height: 1.6rem;

			&:last-child {
				display: none;
			}
		}
	}
</style>

<script setup>
	defineProps({
		rate: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<div class="card__stars">
		<div class="card__star" v-for="item in 4">
			<img src="~/assets/img/icon/active-star.svg" alt="" />
		</div>
		<div class="card__star">
			<img src="~/assets/img/icon/star.svg" alt="" />
		</div>
		<span v-if="rate" class="h4">4,2</span>
	</div>
</template>

<style lang="scss" scoped>
	.card {
		&__stars {
			display: flex;
			align-items: center;

			& span {
				color: #9da7c7;
				margin-left: 1rem;
			}
		}

		&__star {
		}
	}
</style>

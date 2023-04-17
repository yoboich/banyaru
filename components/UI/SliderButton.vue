<script setup>
	defineProps({
		current: Number,
		max: Number,
		mobile: Boolean,
	});
</script>

<template>
	<div
		class="slider-btn"
		:class="{
			mobile: mobile,
		}"
	>
		<div class="slider-btn__content">
			<span class="slider-btn__active h2">{{ current }}</span> |
			<span class="slider-btn__total h5">{{ 20 }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.slider-btn {
		background-color: rgba($color: #fff, $alpha: 0.9);
		border-radius: 2.2rem;
		display: flex;
		align-items: center;
		gap: 0.2rem;
		padding: 1.3rem 2.6rem;

		border-radius: 23px;

		&__content {
			color: #9da7c7;
			display: flex;
			align-items: flex-end;
			gap: .4rem;
		}

		&__active {
			color: #3e3e51;
		}
		&__total {
			color: #9da7c7;
		}
	}

	.mobile {
		margin-top: 6rem;
		justify-content: flex-end;
		& .slider-btn__active {
			color: $default-color;
		}
	}
</style>

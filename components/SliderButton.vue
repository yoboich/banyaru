<script setup></script>

<template>
	<div class="slider-btn">
		<div class="slider-btn__content">
			<span class="slider-btn__active h2">01</span> |
			<span class="slider-btn__total h5">20</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.slider-btn {
		background-color: $default-color;
		border-radius: 2.2rem;
		display: flex;
		align-items: center;
		gap: 0.2rem;
		padding: 1.3rem 2.5rem;

		border-radius: 23px;

		&__content {
		}

		&__active {
			color: #3e3e51;
		}
		&__total {
			color: #9da7c7;
		}
	}
</style>

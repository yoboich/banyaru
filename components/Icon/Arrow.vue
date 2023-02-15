<script setup></script>

<template>
	<svg viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg">
		<path
			class="fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.95495 4.47501L2.06495 7.47501C1.92415 7.57161 1.75461 7.61728 1.58434 7.60446C1.41407 7.59165 1.25327 7.52112 1.12852 7.40453C1.00377 7.28794 0.92254 7.13227 0.898252 6.96326C0.873965 6.79425 0.908075 6.62201 0.994947 6.47501L3.36495 3.95501L0.994947 1.52501C0.908075 1.37801 0.873965 1.20576 0.898252 1.03675C0.92254 0.867738 1.00377 0.712071 1.12852 0.595483C1.25327 0.478894 1.41407 0.408363 1.58434 0.395549C1.75461 0.382734 1.92415 0.428403 2.06495 0.525006L4.95495 3.52501C5.07002 3.64156 5.14378 3.79259 5.16495 3.95501C5.16482 4.14897 5.08956 4.33535 4.95495 4.47501Z"
			fill="#8F99BA"
		/>
	</svg>
</template>

<style lang="scss" scoped>
	.fill path {
		fill: #3e3e51;
	}

	.green {
		width: 1.4rem;
		& path {
			fill: $green-color;
		}
	}
	.black {
		width: 1.4rem;
		& path {
			fill: $mainFontColor;
		}
	}

	.swiper-btn__arr.active {
		& path {
			fill: $green-color;
		}
	}
	.swiper-btn__arr.active-black {
		& path {
			fill: #3e3e51;
		}
	}
</style>

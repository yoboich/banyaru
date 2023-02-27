<script setup>
	defineProps({
		visible: {
			type: Boolean,
			default: false,
		},
	});
	const emit = defineEmits('closeModal');
	const closeModal = () => {
		emit('closeModal');
	};
</script>

<template>
	<div class="product-info-modal" v-if="visible" @click="closeModal">
		<div class="product-info-modal__content" @click.stop>
			<img
				@click="closeModal"
				class="product-info-modal__close"
				src="~/assets/img/icon/close.svg"
				alt=""
			/>
			<div class="product-info-modal__title h1">Сауна цветы</div>
			<div class="product-info-modal__text h4">
				Комплекс премиум класса «Аминьевские бани», расположенный в западной
				части Москвы, приглашает любителей банного отдыха насладится настоящим
				искусством русского парения.На охраняемой территории 6 отдельных
				деревянных домов в стиле шале.
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.product-info-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		box-sizing: border-box;
		background: rgba(62, 62, 81, 0.81);

		& * {
			box-sizing: border-box;
		}

		&__content {
			position: absolute;
			right: 1rem;
			left: 1rem;
			bottom: 1rem;
			background-color: $default-color;
			border-radius: 2.3rem;
			padding: 4rem 1.5rem;
		}

		&__close {
			position: absolute;
			top: 2.5rem;
			right: 2.5rem;
			cursor: pointer;
			width: 1.1rem;
			height: 1.1rem;
		}

		&__title {
			color: $mainFontColor;
			margin-bottom: 3rem;
		}

		&__text {
			color: $secondary-color;
		}
	}
</style>

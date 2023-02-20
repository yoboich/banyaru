<script setup>
	const props = defineProps({
		number: {
			type: Number,
		},
	});
	const isLarge = ref(true);

	onMounted(() => {
		if (window.innerWidth <= 768) {
			isLarge.value = false;
		}
	});

	const steps = ref([
		{ text: 'Создана', num: 1 },
		{ text: 'Подтверждение брони', num: 2 },
		{ text: 'Оплата', num: 3 },
		{ text: 'Забронировано!', num: 4 },
	]);
</script>

<template>
	<div class="steps">
		<div
			class="steps__item"
			v-for="(item, idx) in steps"
			:key="item.text"
			:class="{
				active: idx === 0,
				'un-shown':
					!(idx + 1 === props.number || idx + 1 === props.number + 1) &&
					!isLarge,
			}"
		>
			<div class="steps__text">{{ item.text }}</div>
			<div
				class="steps__circle"
				:class="{
					active: idx === 0 || idx === 1,
				}"
			></div>
			<div class="steps__num">{{ item.num }}</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.steps {
		display: flex;
		padding-top: 5rem;

		&__item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;

			&:last-child::before {
				content: none;
			}

			&.active::before {
				background-color: $green-color;
			}

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 100%;
				width: 90%;
				height: 0.9rem;
				background: #ffffff;
				box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
				border-radius: 6px;

				transform: translate(-50%, -50%);
			}
		}

		&__text {
			margin-bottom: 0.6rem;
		}

		&__circle {
			width: 2rem;
			height: 2rem;
			background: #ffffff;
			box-shadow: 0px 4px 22px rgba(143, 153, 186, 0.27);
			border-radius: 50%;
			position: relative;
			margin-bottom: 0.2rem;

			&.active::before {
				background-color: $green-color;
			}

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 1rem;
				height: 1rem;
				border-radius: 50%;
				background-color: $secondary-color;
			}
		}

		&__num {
		}
	}
	.un-shown {
		display: none;
	}
</style>

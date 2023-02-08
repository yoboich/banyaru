<script setup>
	import timePickerData from '~~/composables/timePickerData';
</script>

<template>
	<div class="card-detail-time">
		<div class="card-detail-time__num card-detail__num h4">
			<div class="card-detail__num-item">2.</div>
			<div class="card-detail__num-text">Время посещения</div>
		</div>
		<div class="card-detail-time__min">Мин. время брони, ч: 2</div>
		<div class="card-detail-time__content">
			<div
				class="card-detail-time__item"
				v-for="item in timePickerData.time"
				:key="item.text"
			>
				<div class="card-detail-time__name">{{ item.text }}</div>
				<div class="card-detail-time__pick">
					<div
						class="card-detail-time__pick-item"
						v-for="clock in item.item"
						:class="{
							active: clock.active,
							disabled: clock.disabled,
							'pre-active': clock.preActive,
						}"
					>
						{{ clock.hour }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-detail-time {
		&__min {
			margin-bottom: 3rem;
			font-weight: 500;
			font-size: 1.1rem;
			color: $secondary-color;
		}

		&__num {
			margin-bottom: 0.6em;
		}

		&__content {
		}

		&__item {
			margin-bottom: 3.3rem;

			&:last-child {
				margin: 0;
			}
		}

		&__name {
			font-weight: 500;
			font-size: 1.1rem;
			text-align: center;
			margin-bottom: 1rem;
			color: #000;
		}

		&__pick {
			display: flex;
			column-gap: 3.5rem;
			row-gap: 0.5rem;
			flex-wrap: wrap;
		}

		&__pick-item {
			padding: 0.1rem 0.7rem;
			font-weight: 500;
			font-size: 1.4rem;
			cursor: pointer;

			&.disabled {
				color: $secondary-color;
			}

			&.active {
				color: white;
				background-color: $green-color;
				border-radius: 100px;
			}

			&.pre-active {
				position: relative;

				&::before {
					content: '';
					position: absolute;
					top: 0;
					left: -100%;
					width: 300%;
					height: 100%;
					background: #cfffc7;
					border-radius: 100px;
					z-index: -1;
				}
			}
		}
	}
	.card-detail {
		&__num {
		}

		&__num-item {
		}

		&__num-text {
		}
	}
</style>

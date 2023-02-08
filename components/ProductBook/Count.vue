<script setup></script>

<template>
	<div class="card-detail-count">
		<div class="card-detail-count__info">
			<div class="card-detail-count__num card-detail__num h4">
				<div class="card-detail__num-item">3.</div>
				<div class="card-detail__num-text">Количество гостей</div>
			</div>
			<div class="card-detail-count__max">Макс. чел: 7</div>
		</div>
		<div class="card-detail-count__content">
			<input
				class="card-detail-count__input"
				type="number"
				value="1"
				max="7"
				min="1"
			/>
		</div>
	</div>
</template>

<style lang="scss">
	.card-detail-count {
		padding-top: 4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		&__info {
			position: relative;

			&::before {
				content: '*';
				position: absolute;
				top: -1rem;
				right: -1rem;
				font-size: 1.6rem;
				color: $red-color;
			}
		}

		&__num {
			margin-bottom: 0.4rem;
		}

		&__max {
			font-weight: 600;
			font-size: 1.4rem;
			color: $secondary-color;
		}

		&__content {
		}

		&__input {
			background: #ffffff;
			box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
			border-radius: 6px;
			outline: none;
			border: none;
			text-align: center;
			width: 100%;
			max-width: 5rem;
			color: $secondary-color;
		}
	}
</style>

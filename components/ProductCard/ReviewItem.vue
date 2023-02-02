<script setup>
	defineProps(['img', 'name', 'text', 'date']);
</script>

<template>
	<div class="card-service__item">
		<div class="card-service__avatar">
			<img :src="img" alt="" />
		</div>
		<div class="card-service__info">
			<div class="card-service__first">
				<div class="card-service__name h3">{{ name }}</div>
				<Stars />
			</div>
			<div class="card-service__review h4">
				{{ text }}
			</div>
			<div class="card-service__answer">Ответить</div>
		</div>
		<div class="card-service__date h4-mini">{{ date }}</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-service {
		&__item {
			display: flex;
			border-top: 1px solid #e1e5f2;
			padding: 2.4rem 0 2rem;
		}

		&__avatar {
			margin-right: 1.2rem;
			& img {
				border-radius: 50%;
			}
		}

		&__info {
			flex: 1;
		}

		&__first {
			margin-bottom: 2rem;
			display: flex;
			gap: 2rem;
		}

		&__name {
		}

		&__review {
			font-weight: 500;
			margin-bottom: 2rem;
			color: $secondary-color;
		}

		&__answer {
			cursor: pointer;
			font-family: 'Lato-Bold';
			font-size: 1.4rem;
			color: $green-color;
		}

		&__date {
			color: $gray-color;
		}
	}
</style>

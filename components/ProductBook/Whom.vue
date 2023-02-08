<script setup></script>

<template>
	<div class="card-detail-count">
		<div class="card-detail-count__info">
			<div class="card-detail-whom__num card-detail__num h4">
				<div class="card-detail__num-item">4.</div>
				<div class="card-detail__num-text">На кого бронь</div>
			</div>
		</div>
		<div class="card-detail-count__content">
			<input
				class="card-detail-whom__input card-detail-count__input"
				type="text"
				placeholder="Имя"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card-detail-whom__num {
	margin: 0;
}
.card-detail-whom__input {
	max-width: 13.5rem;
	padding: 0.3rem 1.3rem;
	display: block;
	text-align: left;
	
}
</style>

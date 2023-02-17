<script setup>
</script>

<template>
	<div class="wrapper">
		<TheHeader/>
		<div class="wrapper-content">
			<slot />
		</div>
		<TheFooter />
	</div>
</template>

<style scoped lang="scss">
	.wrapper-content {
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}
</style>

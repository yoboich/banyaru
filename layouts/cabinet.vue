<template>
	<div class="wrapper">
		<TheHeader class="header-cabinet" />

		<slot />
	</div>
</template>

<style scoped>
	.header-cabinet {
		position: relative;
		margin-top: 2rem;
	}
</style>

<script lang="ts" setup>
  definePageMeta({
		layout: 'advert',
	});
</script>


<template>
  <div class="container">
    <div class="content">
    <AdvertMain/>
    <AdvertAside/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding-top: 2.3rem;
}
</style>

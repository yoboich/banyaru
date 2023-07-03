<template>
  <div class="header-only">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.header-only {
  padding-bottom: 100px;

  @media (max-width: 700px) {
    padding-bottom: 0;
  }

}
</style>

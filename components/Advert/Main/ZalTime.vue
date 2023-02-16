<template>
  <div class="type">
    <div class="type__title">День и время</div>

   
  </div>
</template>

<style lang="scss" scoped>
.type {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 4.1rem;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 19.6rem;
    row-gap: 1.3rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
  }
  &__name {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
}
</style>

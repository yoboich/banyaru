<template>
  <div class="name">
    <div class="name__title">Название</div>
    <div class="name__subtitle">Символов 120</div>
    <div class="name__inner">
      <div class="name__item">
        <div class="name__text">
          Название не должно содержать привязки к географическому положению.
          Например: Баня на ул. Ленина, Сауна Томск
        </div>
        <input class="input" placeholder="Название бани" type="text" />
      </div>
      <div class="name__desc">
        <textarea class="input input_textarea" placeholder="Описание бани" type="textarea" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: .6rem;
  }
  &__subtitle {
    color: $secondary-color;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 1.6rem;
  }
  &__inner {
    display: flex;
    gap: 7.2rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 4.3rem;
    max-width: 33.9rem;
    width: 100%;
  }
  &__text{
    font-weight: 500;
  }
  &__desc{
    max-width: 56rem;
    width: 100%;
    & textarea{
      max-width: 56rem;
      width: 100%;
      height: 13.3rem;
    }
  }
}
</style>

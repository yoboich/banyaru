<template>
  <div class="photo">
    <div class="photo__inner">
      <div class="photo__item">
        <div class="photo__title">Фото бани | Лого</div>
        <div class="photo__subtitle">Добавьте самое удачное фото</div>
        <div class="photo__input">
          <img src="" alt="" />
          <span>Добавить фото</span>
        </div>
      </div>
      <div class="photo__item">
        <div class="photo__title_logo">Логотип</div>
        <div class="photo__subtitle photo__subtitle_logo">Добавьте самое удачное фото</div>
        <div class="photo__input">
          <img src="" alt="" />
          <span>Добавить фото</span>
          <span>Jepg | Png | 160 x 160</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 1.1rem;
    &_logo {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2rem;
      margin-bottom: 1.7rem;
    }
  }
  &__subtitle {
    color: $secondary-color;
    margin-bottom: 2.5rem;
    &_logo{
      margin-bottom: 1.6rem;
    }
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
   
  }
  &__input {
    width: 34rem;
    height: 20rem;
    border: 1px solid #8f99ba;
    border-radius: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

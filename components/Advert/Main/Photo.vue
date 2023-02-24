<script setup>
function uploadFile(e) {
  const file = e.target.files[0];
}
</script>

<template>
  <div class="photo">
    <div class="photo__inner">
      <div class="photo__item">
        <div class="photo__title">Главная фотография</div>
        <div class="photo__subtitle">
          Не допускать к размещению фотографии с водяным знаками, чужих объектах
          и рекламные баннеры, JPG, PNG или GIF
        </div>
        <label class="photo__input">
          <img src="@/assets/img/chat/camera.svg" alt="" />
          <p>Добавить фото</p>
          <span>Jpeg | Png | 160 x 160</span>
          <input
            @change="uploadFile"
            type="file"
            ref="file"
            accept="image/gif, 
            image/jpeg, image/png"
            hidden
          />
        </label>
        <div class="photo__sub-item sub-item">
          <div class="sub-item__title">Видео</div>
          <div class="sub-item__subtitle">
            Добавить ссылку на видео ролик об объекте (YouTube)
          </div>
          <input placeholder="Ссылка на YouTube" type="text" class="input" />
        </div>
      </div>
      <div class="photo__item">
        <div class="photo__title">Логотип</div>
        <div class="photo__subtitle photo__subtitle">
          Не допускать к размещению фотографии с водяным знаками, чужих объектах
          и рекламные баннеры, JPG, PNG или GIF
        </div>
        <label class="photo__input">
          <img src="@/assets/img/chat/camera.svg" alt="" />
          <p>Добавить фото</p>
          <span>Jpeg | Png | 160 x 160</span>
          <input
            @change="uploadFile"
            type="file"
            ref="file"
            accept="image/gif, 
            image/jpeg, image/png"
            hidden
          />
        </label>
        <div class="photo__sub-item sub-item">
          <div class="sub-item__title">Заголовок</div>
          <div class="sub-item__subtitle">
            Яркий заголовок объявления для Платных, Бронирования и VIP.
          </div>
          <input placeholder="Заголовок" type="text" class="input" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-item {
  & input{
    max-width: 34rem;
  }
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  &__title {
    margin-top: 3.7rem;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color:$secondary-color;
  }
}
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
    max-width: 32rem;
    &_logo {
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
    cursor: pointer;
    width: 34rem;
    height: 20rem;
    border: 1px solid #8f99ba;
    border-radius: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
      margin-bottom: 1.2rem;
    }
    & p {
      color: $green-color;
    }
    & span {
      font-size: 1.1rem;
      margin-top: 1rem;
      color: $secondary-color;
    }
  }
}
</style>

<template>
  <dialog class="gallery" ref="gallery">
    <header class="gallery__header">
      <button class="gallery__btn" @click="close">
        <IconBase icon="gallery-close" color="white" />
      </button>
      <div class="gallery__preview">
        <BookingPreviewImage />
        <div class="gallery__preview-info">
          <h3 class="gallery__preview-place">Сауна цветы</h3>
          <div class="gallery__preview-details">
            от 2000 ₽
            <br />
            Администратор
            <br />
          </div>
          <span class="gallery__last-online">был(а) 15 мин. назад</span>
        </div>
      </div>
      <button class="gallery__btn btn-more" @click="reportDialog.showModal()">
        <IconBase icon="more" color="white" />
      </button>
    </header>
    <dialog ref="reportDialog" class="report">
      <button class="report__close-btn" @click="reportDialog.close()">
        <IconBase icon="close" />
      </button>
      <h1 class="report__title">Раскажите, в чем заключается проблема.</h1>
      <ul class="report__list">
        <li
          class="report__list-item"
          v-for="item of reportItems"
          :key="item"
          @click="sendReport(item)"
        >
          {{ item }}
        </li>
      </ul>
    </dialog>
    <SwiperSlider
      class="gallery__slider"
      navigation
      spaceBetween="0"
      arrowColor="white"
      arrowHoverColor="green"
    >
      <swiper-slide class="gallery__slider-slide" v-for="i of 10" :key="i">
        <img
          class="gallery__slider-image"
          src="~/assets/images/preview/room.jpg"
          alt=""
        />
      </swiper-slide>
    </SwiperSlider>
    <div class="gallery__actions">
      <button class="gallery__action-btn">
        <IconBase icon="phone" color="white" />
        <span>+7 999 333 14 ...</span>
      </button>
      <button class="gallery__action-btn">
        <IconBase icon="message" color="white" />
        <span>Чат</span>
      </button>
      <button class="gallery__action-btn">
        <IconBase icon="booking" color="white" />
        Расчет брони
      </button>
      <button class="gallery__action-btn">
        <IconBase icon="share" color="white" />
        Отправить
      </button>
      <button class="gallery__action-btn">
        <IconBase icon="route" color="white" />
        Маршрут
      </button>
      <button class="gallery__action-btn">
        <IconBase icon="car" color="white" />
        Такси
      </button>
      <button class="gallery__action-btn btn-favorite">
        <IconBase icon="favorite" color="white" />
      </button>
    </div>
  </dialog>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

const emits = defineEmits(["close"]);

const close = () => {
  gallery.value.close();
  emits("close");
};

const gallery = ref();
const reportDialog = ref();

const sendReport = (item) => {
  reportDialog.value.close();
};

const reportItems = ref([
  "Наверное расположение",
  "Низкое качество",
  "Порнография или содержание сексуального характера",
  "Дискриминационные высказывания или проявление ненависти",
  "Спам",
  "Контент, запрещенный авторскими правами",
]);

defineExpose({
  gallery
})
</script>

<style lang="scss" scoped>
.report {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  padding: 45px 30px;
  background: #ffffff;
  box-shadow: 0px 20px 56px rgba(123, 129, 148, 0.16);
  border-radius: 25px;
  border: none;
  margin: 0;
  font-family: Lato;

  @media (max-width: 600px) {
    width: 90vw;
  }

  &__close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;

    &:hover {
      svg {
        --icon-color: #{$red};
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    margin: 0 0 30px;
  }

  &__list {
    &-item {
      padding: 10px 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: rgba($color: $gray, $alpha: 0.1);
      }
    }
  }
}
.gallery {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: #000;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  font-family: Lato;

  &__preview {
    color: #fff;
    display: flex;
    gap: 15px;

    &-place {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 2px;
    }
    &-details {
      margin-bottom: 5px;
    }
  }

  &__btn {
    @include flex-center-all;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba($color: #000000, $alpha: 0.6);
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    cursor: pointer;
    flex-shrink: 0;

    @media (max-width: 1000px) {
      width: 40px;
      height: 40px;
      padding: 0 !important;

      &.btn-more {
       svg {
         width: 20px;
       }
      }

      svg {
        height: 14px;
      }
    }

    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }

    &.btn-more {
      svg {
        max-width: 30px;
      }
    }

    svg {
      max-width: 20px;
    }

    &:last-of-type {
      padding: 15px;
      margin-left: auto;
    }
  }

  &__header {
    position: absolute;
    top: 40px;
    width: calc(100% - 70px);
    left: 35px;
    z-index: 1001;
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 1000px) {
      gap: 10px;
      left: 20px;
      width: calc(100% - 40px);
    }
  }

  &__slider {
    width: 100%;
    height: 100%;

    &:deep(.slider__arrow) {
      background: rgba($color: #000000, $alpha: 0.6);
      &.prev {
        left: 35px;

        @media (max-width: 1000px) {
          left: 20px;
        }
      }

      &.next {
        right: 35px;

        @media (max-width: 1000px) {
          right: 20px;
        }
      }
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__actions {
    position: absolute;
    bottom: 40px;
    left: 35px;
    z-index: 1001;

    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 1300px) {
      width: 100%;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

    }

    @media (max-width: 1000px) {
      left: 20px;
      padding-right: 50px;
    }
  }

  &__action-btn {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 20px;
    border: 2px solid #ffffff;
    border-radius: 100px;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0px 4px 21px rgba(143, 153, 186, 0.7);
    }

    &.btn-favorite {
      @include flex-center-all;
      border-radius: 50%;
      padding: 0;
      width: 50px;
    }

    i {
      height: 30px;
    }
  }
}
</style>

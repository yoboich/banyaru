<template>
  <div class="booking-page__intro p-x">
    <Teleport to="body">
      <Call ref="callElement"/>
    </Teleport>
    <Teleport to="body">
      <Gallery ref="gallery"/>
    </Teleport>
    <SwiperSlider class="booking-page__slider" navigation counter>
      <swiper-slide
          style="cursor: pointer"
          v-for="i of 10"
          :key="i"
          @click="gallery?.gallery.showModal()"
      >
        <img src="~/assets/images/preview/room.jpg" alt=""/>
      </swiper-slide>
    </SwiperSlider>
    <BookingIntroRoom/>
    <div class="booking-page__card">
      <div class="booking-page__paid-hint">
        <span>Платное</span>
        <IconBase icon="info" color="green"/>
      </div>
      <h2 class="booking-page__price">
        от 2 000 ₽/час
        <div class="booking-page__price-action">
          <!-- <img src="~/assets/img/icon/arrow-green.svg" alt="" /> -->
          <IconBase icon="arrow-left" color="green"/>
        </div>
      </h2>
      <ul class="booking-page__tags">
        <li class="booking-page__tag active">Баня на дровах</li>
        <li class="booking-page__tag active">Сауна</li>
        <li class="booking-page__tag">Хаммам</li>
      </ul>
      <div class="flex">
        <h3 class="booking-page__place">
          Сауна цветы
          <IconBase icon="info" color="black"/>
        </h3>
        <BookingSearchItemRate rate="4.2"/>
        <Reviews text="122 отзыва"/>
      </div>
      <BookingSearchItemLocation place="Пражская" time="13 мин"/>
      <p class="booking-page__street">г. Москва, ул. Большая Очаковская, 35</p>
      <WorkTime time="9:00" closed/>
      <div class="booking-page__card-actions flex">
        <UIButton class="booking-page__card-action--phone flex" @click="callUser">
          <IconBase icon="phone" color="white"/>
          <span>+7 999 333 14</span>
        </UIButton>
        <UIButton class="booking-page__card-action--chat">
          <nuxt-link class="flex" to="/chat/test">
            <IconBase icon="message" color="white"/>
            <div class="unread">3</div>
          </nuxt-link>
        </UIButton>
        <UIButton class="booking-page__card-action--calc flex">
          <IconBase icon="calc" color="white"/>
          <span>Калькулятор</span>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";

const gallery = ref();

const callElement = ref()
const callUser = () => callElement.value?.dialog.showModal()

</script>

<style lang="scss" scoped>
.booking-page__intro {
  margin-bottom: 30px;

  &:deep(.booking-page__slider) {
    @media (max-width: 500px) {
      height: 340px !important;
    }

    .slider__arrow.next {
      right: 10px;
    }

    .slider__arrow.prev {
      left: 10px;
    }

    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  & .booking-page__slider {
    height: 370px;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  & .booking-page__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    margin-bottom: 10px;
  }

  & .booking-page__tag {
    padding: 2px 10px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &.active {
      color: #fff;
      background: $green;
    }
  }

  & .booking-page__card {
    position: relative;

    & > .flex {
      margin-bottom: 15px;
    }

    & > .location {
      margin-bottom: 5px;
    }

    & > .work-time {
      margin-bottom: 15px;
    }

    &-actions {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 10px;
      padding: 15px;
      box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
      border-radius: 100px;

      @media (max-width: 1200px) {
        grid-template-columns: auto auto 1fr;
      }
    }

    &-action {
      &--phone,
      &--chat,
      &--calc {
        align-items: center;
        flex-shrink: 0;
        gap: 15px;
        height: 50px;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        width: auto;
        font-size: 18px;
      }

      &--phone {
        //width: 250px;
        @media (max-width: 1200px) {
          width: 50px;
          height: 50px;
          padding: 0;

          span {
            display: none;
          }
        }
      }

      &--chat {
        width: 50px;
        height: 50px;
        aspect-ratio: 1;
        justify-content: center;
        align-items: center;
        padding: 0 !important;
        position: relative;

        .unread {
          width: 22px;
          height: 22px;
          background: #eb5757;
          border: 1px solid #ffffff;
          border-radius: 50%;
          position: absolute;
          top: 0;
          transform: translate(100%, -25%);
        }
      }

      &--calc {
        //width: 200px;
        background: #8e58ff !important;
        border-color: $purple;
      }
    }
  }
}
</style>

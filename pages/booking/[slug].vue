<template>
  <section class="booking">
    <div class="booking-page flex">
      <div class="booking-page__header">
        <nuxt-link
          class="booking-page__action booking-page__action--back"
          to="/booking"
        >
          <IconArrow />
        </nuxt-link>
        <div class="booking-page__preview">
          <div class="booking-page__preview-image">
            <img
              class="booking-page__owner"
              src="~/assets/img/promotions/1.jpg"
              alt=""
            />
            <img src="~/assets/img/promotions/1.jpg" alt="" />
          </div>
          <div class="booking-page__preview-info">
            <h3 class="booking-page__preview-place">
              Сауна цветы
              <br />
              Горячий сруб
            </h3>
            <h3 class="booking-page__preview-price">от 2 000 ₽/час</h3>
            <span class="booking-page__last-online">был(а) 15 мин. назад</span>
          </div>
        </div>
        <div class="booking-page__actions">
          <button class="booking-page__action">
            <img src="~/assets/img/icon/share-green.svg" alt="" />
          </button>
          <button class="booking-page__action">
            <img src="~/assets/img/icon/heart-green.svg" alt="" />
          </button>
          <button class="booking-page__action">
            <img src="~/assets/img/icon/more-green.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="booking-page__content">
        <div class="booking-page__intro p-x">
          <Slider class="booking-page__slider" navigation counter>
            <swiper-slide v-for="i of 10" :key="i">
              <img src="~/assets/img/promotions/1.jpg" alt="" />
            </swiper-slide>
          </Slider>
          <div class="booking-page__room">
            <h3 class="booking-page__room-name">
              Зал: <span>Горячий сруб</span>
            </h3>
            <div class="booking-page__room-items">
              <div
                class="booking-page__room-item"
                v-for="i of 9"
                :key="i"
                :class="{ active: i === room, unavailable: i === 3 }"
                @click="i === 3 ? null : (room = i)"
              >
                <div class="booking-page__room-image">
                  <img src="~/assets/img/product-background.jpg" alt="" />
                </div>
                <div class="booking-page__room-price">
                  {{ i === 3 ? "Недоступно" : "от 2 000 ₽/ч." }}
                </div>
              </div>

              <div
                class="booking-page__room-item booking-page__room-item--expand"
              >
                <div class="booking-page__room-image">
                  <img src="~/assets/img/icon/arrow-down.svg" alt="" />
                </div>
                <div class="booking-page__room-price">Все</div>
              </div>
            </div>
          </div>
          <div class="booking-page__card">
            <div class="booking-page__paid-hint">
              <span>Платное</span>
              <img src="~/assets/img/icon/info-green.svg" alt="" />
            </div>
            <h2 class="booking-page__price">
              от 2 000 ₽/час
              <div class="booking-page__price-action">
                <img src="~/assets/img/icon/arrow-green.svg" alt="" />
              </div>
            </h2>
            <ul class="booking-page__tags">
              <li class="booking-page__tag active">Баня на дровах</li>
              <li class="booking-page__tag active">Сауна</li>
              <li class="booking-page__tag">Хаммам</li>
            </ul>
            <div class="flex">
              <h3 class="booking-page__place">
                <span>Сауна цветы</span>
                <img src="~/assets/img/icon/info.svg" alt="" />
              </h3>
              <Rate rate="4.2" />
              <Reviews text="122 отзыва" />
            </div>
            <Location place="Пражская" time="13 мин" />
            <p class="booking-page__street">
              г. Москва, ул. Большая Очаковская, 35
            </p>
            <Time time="9:00" closed />
            <div class="booking-page__card-actions flex">
              <UIButton class="booking-page__card-action--phone flex">
                <img src="~/assets/img/icon/phone.svg" alt="" />
                <span>+7 999 333 14 ...</span>
              </UIButton>
              <UIButton class="booking-page__card-action--chat flex">
                <img src="~/assets/img/icon/chat.svg" alt="" />
                <div class="unread">3</div>
              </UIButton>
              <UIButton class="booking-page__card-action--calc flex">
                <img src="~/assets/img/icon/calc.svg" alt="" />
                <span>Калькулятор</span>
              </UIButton>
            </div>
          </div>
        </div>
        <!-- DESCRIPTION -->
        <div class="p-x booking-page__description">
          <h1 class="booking-page__title booking-page__description-title">
            Описание
          </h1>
          <div class="booking-page__description-items">
            <div
              class="booking-page__description-item"
              v-for="item of descriptionItems"
              :key="item.label"
            >
              <div class="booking-page__description-label">
                <img :src="getLocalUrl(`img/icon/${item.icon}.svg`)" alt="" />
                <span>{{ item.label }}</span>
              </div>
              <div class="booking-page__description-text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <!-- PRICES -->
        <div class="p-x booking-page__prices">
          <h1 class="booking-page__title booking-page__prices-title">Цены</h1>
          <div class="booking-page__prices-items">
            <div class="booking-page__prices-item" v-for="i of 6" :key="i">
              <div class="booking-page__prices-amount">9 000 ₽</div>
              <div class="booking-page__prices-dots"></div>
              <div class="booking-page__prices-text">
                1ч./мин.3ч. пн-вс 24ч.
              </div>
            </div>
          </div>
          <button class="booking-page__more-btn">
            <span>Смотреть все</span>
            <img src="~/assets/img/icon/arrow-green.svg" alt="" />
          </button>
        </div>
        <!-- DISCOUNTS -->
        <div class="p-x booking-page__discounts">
          <h1 class="booking-page__title booking-page__discounts-title">
            Скидки
          </h1>
          <div class="booking-page__discounts-items">
            <div
              class="booking-page__discounts-item"
              v-for="item of discountItems"
              :key="item.text"
            >
              <div class="booking-page__discounts-amount">{{ item.label }}</div>
              <div class="booking-page__discounts-dots"></div>
              <div class="booking-page__discounts-text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <!-- CALCULATOR -->
        <Calculator class="p-x" />
        <!-- ROOMS -->
        <div class="p-x booking-page__rooms">
          <h1 class="booking-page__title booking-page__rooms-title">Залы</h1>
          <div class="booking-page__rooms-items">
            <BookingCardItem v-for="i of 6" :key="i" />
          </div>
          <button class="booking-page__more-btn">
            <span>Смотреть все</span>
            <img src="~/assets/img/icon/arrow-green.svg" alt="" />
          </button>
        </div>
        <!-- SERVICES -->
        <div class="p-x booking-page__services">
          <h1 class="booking-page__title booking-page__services-title">
            Услуги
          </h1>
          <div class="booking-page__services-items">
            <BookingCardItem v-for="i of 6" :key="i" />
          </div>
          <button class="booking-page__more-btn">
            <span>Смотреть все</span>
            <img src="~/assets/img/icon/arrow-green.svg" alt="" />
          </button>
        </div>
        <!-- ACCESSORIES -->
        <div class="p-x booking-page__accessories">
          <h1 class="booking-page__title booking-page__accessories-title">
            Банные пренадлежности
          </h1>
          <div class="booking-page__accessories-items">
            <BookingCardItem v-for="i of 6" :key="i" />
          </div>
          <button class="booking-page__more-btn">
            <span>Смотреть все</span>
            <img src="~/assets/img/icon/arrow-green.svg" alt="" />
          </button>
        </div>
        <!-- SIMILAR -->
        <div class="p-x booking-page__similar">
          <h1 class="booking-page__title booking-page__similar-title">
            Похожие объявления
          </h1>
          <Slider
            class="booking-page__similar-slider"
            slidesPerView="3"
            :spaceBetween="10"
            navigation
          >
            <swiper-slide v-for="i of 12" :key="i">
              <BookingCardItem favorite />
            </swiper-slide>
          </Slider>
        </div>
        <!-- RECENTS -->
        <div class="p-x booking-page__recents">
          <h1 class="booking-page__title booking-page__recents-title">
            Похожие объявления
          </h1>
          <Slider
            class="booking-page__recents-slider"
            slidesPerView="3"
            :spaceBetween="10"
            navigation
          >
            <swiper-slide v-for="i of 12" :key="i">
              <BookingCardItem favorite />
            </swiper-slide>
          </Slider>
        </div>
        <!-- REVIEWS -->
        <BookingReviews class="p-x" />
        <!-- ANNOUNCE -->
        <div class="p-x booking-page__announce">
          <button class="booking-page__announce-btn">Объявление</button>
          <div class="booking-page__announce-controls">
            <button class="booking-page__announce-control">
              <img src="~/assets/img/icon/arrow-green.svg" alt="" />
              Предыдущее
            </button>
            <button class="booking-page__announce-control">
              Следующее
              <img src="~/assets/img/icon/arrow-green.svg" alt="" />
            </button>
          </div>
        </div>
        <!-- INFO -->
        <div class="p-x booking-page__info">
          <h1 class="booking-page__title booking-page__info-title">
            Объявление
          </h1>
          <div class="booking-page__items">
            <div
              class="booking-page__info-item"
              v-for="{ label, text } of infoItems"
              :key="label"
            >
              <div class="booking-page__info-label">{{ label }}</div>
              <div class="booking-page__info-text">{{ text }}</div>
            </div>
          </div>
        </div>
        <OrderFooter />
      </div>
    </div>
  </section>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
useHead({ title: "Баня.ру – портал о банях и саунах России" });
definePageMeta({
  layout: "map-page",
});

const descriptionItems = [
  {
    icon: "steam",
    label: "Вид парной",
    text: "Русская баня на дровах / Банный Чан",
  },
  {
    icon: "aqua-zone",
    label: "Аквазона",
    text: "Бассейн / Купель ледяная / Обливное устройство",
  },
  {
    icon: "sizes",
    label: "Размер бассейна",
    text: "до 15%",
  },
  {
    icon: "users",
    label: "Вместимость",
    text: "9",
  },
  {
    icon: "room",
    label: "Комнаты отдыха",
    text: "Русская баня, Сауна / Финская",
  },
  {
    icon: "shop",
    label: "Магазин",
    text: "Банные пренадлежности",
  },
  {
    icon: "services",
    label: "Услуги",
    text: "SPA-терапия / Ароматерапия / Банщик / Веники / Массаж / Парения / Банные принадлежности / Обливное ведро / Чайная церемония / Ароматы для парной / Ледяная купель",
  },
  {
    icon: "cutlery",
    label: "Кухня",
    text: "Бар / Ресторан",
  },
  {
    icon: "sport",
    label: "Спорт",
    text: "Бильярд русский / Бильярд американский / Аэро-хоккей / Шахматы / Шашки",
  },
  {
    icon: "comfort",
    label: "Удобства",
    text: "Беседка летняя / Беседка теплая / Отель / Гостевые номера / Парковка / Выход к водоему / Можно с детьми",
  },
  {
    icon: "service",
    label: "Сервис",
    text: "9",
  },
  {
    icon: "exclusive",
    label: "Эксклюзив",
    text: "Русская баня, Сауна / Финская",
  },
];

const discountItems = [
  {
    label: "15 %",
    text: "На всю банную продукцию",
  },
  {
    label: "10 %",
    text: "На все услуги бани при предъявлении промокода",
  },
  {
    label: "15 %",
    text: "На Большой зал от 9 000 ₽",
  },
];

const infoItems = [
  {
    label: "№ объявления",
    text: "123654657",
  },
  {
    label: "Дата размещения",
    text: "12.10.21",
  },
  {
    label: "Дата обновления",
    text: "10.10.21",
  },
  {
    label: "Количество показов",
    text: "1434",
  },
];

const room = ref(1);
</script>

<style lang="scss">
.booking-page {
  flex-direction: column;
  height: 100%;
  margin-top: 110px;

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 25px;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 20;
    background: #fff;
    width: 600px;
    border-radius: 25px 25px 0 0;
    padding: 15px 20px;
    border: 1px solid #dadeec;
    border-bottom: none;

    margin-bottom: 15px;
  }

  &__content {
    & > .p-x {
      padding-bottom: 20px;
      border-bottom: 1px solid #dadeec;
      border-radius: 0 0 25px 25px;
      margin-bottom: 40px;
    }
  }

  &__more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    padding: 0;
    background: transparent;

    margin: 0 auto;

    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: $green-color;
    cursor: pointer;

    img {
      transform: rotate(90deg);
    }
  }

  //   INTRO

  &__intro {
    margin-bottom: 30px;
  }

  &__owner {
    width: 35px;
    height: 35px;

    border-radius: 50%;
    border: 3px solid #ffffff;
    position: absolute;
    top: 0;
    left: 0;

    object-fit: cover;
    object-position: center;

    transform: translate(-5px, -5px);
  }

  &__preview {
    display: flex;
    gap: 11px;

    &-image {
      width: 96px;
      // overflow: hidden;
      position: relative;
      border-radius: 10px;

      img:not(.booking-page__owner) {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-place {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }

    &-price {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__last-online {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: $secondary-color;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 30px;

    margin-left: auto;
  }

  &__action {
    display: flex;
    background: transparent;
    padding: 0;
    cursor: pointer;

    svg.icon-arrow {
      fill: $green-color;
    }
  }

  &__slider {
    height: 370px;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .slider-arrow.next {
      right: 10px;
    }

    .slider-arrow.prev {
      left: 10px;
    }
  }

  &__room {
    margin-bottom: 30px;

    &-name {
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      margin-bottom: 15px;

      span {
        font-weight: bold;
      }
    }

    &-items {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px 35px;
    }

    &-item {
      cursor: pointer;

      &:not(.unavailable):hover,
      &.active {
        .booking-page__room-image {
          border-color: $green-color;

          img {
            transform: scale(0.9);
          }
        }
      }

      &--expand {
        .booking-page__room-image {
          background: $light-gray-color;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 30px;
            height: 15px;
            object-fit: contain;
          }
        }
      }

      &.unavailable {
        cursor: default;
        .booking-page__room-price {
          color: #fd404d;
        }
      }
    }

    &-image {
      border-radius: 50%;
      margin-bottom: 10px;
      overflow: hidden;
      aspect-ratio: 1;
      border: 2px solid transparent;
      transition: all 0.2s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        transition: all 0.2s;
      }
    }

    &-price {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }

  &__card {
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
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 15px;
      box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
      border-radius: 100px;
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
      }

      &--phone {
        padding: 15px 30px !important;
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
        padding: 15px 20px !important;
        background: #8e58ff !important;
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 500;
    font-size: 24px;
    line-height: 130%;

    margin-bottom: 10px;

    &-action {
      width: 24px;
      height: 24px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: rgba($color: #000000, $alpha: 0.05);
      }

      img {
        // width: 14px;
        // height: 8px;
        object-fit: contain;
        object-position: center;
        transform: rotate(90deg);
      }
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    margin-bottom: 10px;
  }

  &__tag {
    padding: 0 10px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &.active {
      color: #fff;
      background: $green-color;
    }
  }

  &__place {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: flex-end;
    gap: 5px;

    img {
      cursor: pointer;
    }
  }

  &__place,
  .rate {
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #e1e5f2;
  }

  &__paid-hint {
    position: absolute;
    right: 0;
    top: 0;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: $green-color;

    display: flex;
    align-items: center;
    gap: 5px;

    img {
      cursor: pointer;
    }
  }

  &__street {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  // DESCRIPTION

  &__description {
    margin-bottom: 25px;
    &.p-x {
      padding: 0 20px 30px !important;
    }

    &-title {
      margin-bottom: 40px;
    }

    &-item {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 2fr 4fr;

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }

    &-label {
      display: flex;
      align-items: center;
      gap: 20px;

      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      color: $secondary-color;
    }

    &-text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }

  //   PRICES & DISCOUNTS

  &__prices,
  &__discounts {
    &.p-x {
      padding: 0 20px 30px !important;
    }

    &-title {
      margin-bottom: 40px;
    }

    &-items {
      margin-bottom: 50px;
    }

    &-item {
      display: grid;
      grid-template-columns: auto 3fr auto;
      align-items: flex-end;
      gap: 10px;

      font-weight: 700;
      font-size: 16px;
      line-height: 20px;

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }

    &-dots {
      border-bottom: 1px dashed $secondary-color;
    }

    &-text {
      color: $secondary-color;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
    }
  }

  &__prices {
    margin-bottom: 20px;
  }

  &__discounts {
    &-item {
      grid-template-columns: auto 3fr 2fr;
    }

    &-items {
      margin-bottom: 20px;
    }
  }

  // ROOMS

  &__rooms,
  &__services,
  &__accessories {
    &.p-x {
      padding: 0 20px 20px !important;
    }
    &-title {
      margin-bottom: 15px;
    }

    &-items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px 10px;

      margin-bottom: 30px;
    }
  }

  // SIMILAR & RECENTS

  &__similar,
  &__recents {
    &.p-x {
      padding: 0 20px 40px !important;
    }
    &-title {
      margin-bottom: 15px;
    }

    &-slider {
      .slider-arrow {
        transform: translateY(-140%);
      }

      .slider-arrow.next {
        right: 10px;
      }

      .slider-arrow.prev {
        left: 10px;
      }
    }
  }
  // ANNOUNCE
  &__announce {
    &.p-x {
      padding: 0 20px 45px !important;
    }

    &-btn {
      padding: 3px 30px;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      color: $secondary-color;
      cursor: pointer;

      background: #ffffff;
      border: 2px solid $light-gray-color;
      border-radius: 20px;

      display: flex;
      margin: 0 auto 5px;
    }

    &-controls {
      display: flex;
      justify-content: center;
      gap: 50px;
    }

    &-control {
      gap: 10px;
      color: $green-color;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      background: transparent;

      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      &:first-of-type {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
  // INFO
  &__info {
    &.p-x {
      padding: 0 20px 30px !important;
    }

    &-title {
      margin-bottom: 15px;
    }

    &-item {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &-label {
      color: $secondary-color;
    }
  }
}
</style>

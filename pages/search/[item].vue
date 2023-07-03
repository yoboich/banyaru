<template>
  <div class="search">
    <Map class="search__map"/>
    <aside class="search__sidebar">
      <ScrollArea ref="scrollArea">
        <div class="search__sidebar-content">
          <section class="booking">
            <div class="booking-page flex">
              <BookingHeader/>
              <div class="booking-page__content">
                <Teleport to="body">
                  <Call ref="callElement"/>
                </Teleport>
                <div class="booking-page__block-actions flex">
                  <UIButton class="green booking-page__block-action action-phone flex" @click="callUser">
                    <IconBase icon="phone" color="white"/>
                    <span>+7 999 333 14</span>
                  </UIButton>
                  <UIButton class="green booking-page__block-action action-chat" to="/chat">
                    <IconBase icon="message" color="white"/>
                    <div class="unread">3</div>
                  </UIButton>
                  <UIButton class="booking-page__block-action purple action-calc flex" @click="moveToCalc"
                            v-if="calcStep === 0">
                    <IconBase icon="calc" color="white"/>
                    <span>Калькулятор</span>
                  </UIButton>
                  <UIButton class="booking-page__block-action disabled action-calc flex" @click="moveToCalc"
                            v-else-if="!isFormFilled">
                    Заполните поля
                  </UIButton>
                  <UIButton class="booking-page__block-action purple action-calc flex" @click="submitForm" v-else>
                    Заказать
                  </UIButton>
                </div>
                <div class="booking-page__intro p-x">
                  <Teleport to="body">
                    <Gallery ref="gallery"/>
                  </Teleport>
                  <SwiperSlider class="booking-page__slider" :slides-per-view="width > 1000 ? 1 : 1.4" :navigation="width > 1000" :space-between="10" counter>
                    <swiper-slide
                        class="booking-page__slide"
                        style="cursor: pointer"
                        v-for="(item, i) of getSlices(images)"
                        :key="i"
                        @click="gallery?.gallery.showModal()"
                    >
                      <img v-if="item.length === 1" src="~/assets/images/preview/room.jpg" alt=""/>
                      <div v-else class="booking-page__slide-content">
                        <img src="~/assets/images/preview/room.jpg" alt=""/>
                        <img src="~/assets/images/preview/room.jpg" alt=""/>
                      </div>
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
                      <BookingSearchItemRate @click="scrollToReviews" rate="4.2"/>
                      <Reviews @click="scrollToReviews" text="122 отзыва"/>
                    </div>
                    <BookingSearchItemLocation place="Пражская" time="13 мин"/>
                    <p class="booking-page__street">г. Москва, ул. Большая Очаковская, 35</p>
                    <WorkTime time="9:00" closed/>
                  </div>
                </div>
                <div class="p-x booking-page__location">
                  <Map class="booking-page__map" />
                  <div class="booking-page__location-controls">
                    <UIButton>
                      <IconBase icon="route" color="green" />
                      <span>Маршрут</span>
                    </UIButton>
                    <UIButton>
                      <IconBase icon="car" color="green" />
                      <span>Такси</span>
                    </UIButton>
                  </div>
                </div>
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
                        <IconBase :icon="item.icon" color="gray" subpath="/booking"/>
                        <span>{{ item.label }}</span>
                      </div>
                      <div class="booking-page__description-text">
                        {{ item.text }}
                      </div>
                    </div>
                  </div>
                </div>
                <BookingPrices/>
                <BookingDiscounts/>
                <form @submit.prevent="submitForm" class="p-x calculator" ref="calculatorElement">
                  <CalculatorDialog ref="dialog"/>
                  <h1 class="booking-page__title calculator-title">
                    <span>Калькулятор заказа </span>
                    <button type="button" @click="dialog?.dialog.showModal()">
                      <span>i</span>
                    </button>
                  </h1>
                  <div class="calculator__params">
                    <div class="calculator__params-item counter">
                      <div class="calculator__param-label">
                        <h2 class="calculator__param-title">Количество гостей</h2>
                        <span class="calculator__param-suptitle">Макс. чел: 7</span>
                      </div>
                      <div class="counter__controls">
                        <button type="button" class="counter__controls-btn" @click="decrement">
                          <IconBase icon="decrement" color="green"/>
                        </button>
                        <span class="counter__controls-count">
        {{ guests }}
      </span>
                        <button type="button" class="counter__controls-btn" @click="increment">
                          <IconBase icon="increment" color="green"/>
                        </button>
                      </div>
                    </div>

                    <div class="calculator__params-item receiver">
                      <div class="calculator__param-label">
                        <h2 class="calculator__param-title">На кого заказ</h2>
                        <span class="calculator__param-suptitle"></span>
                      </div>
                      <input
                          class="receiver-input"
                          :class="{error: isValidate && errors.receiver}"
                          placeholder="Имя"
                          v-model="receiver"
                      />
                    </div>
                    <div class="calculator__params-item" v-if="activeCalendar === 'time'">
                      <div class="calculator__param-label">
                        <h2 class="calculator__param-title">Выбрать дату и время</h2>
                        <span class="calculator__param-suptitle">Мин. время брони, ч: 2</span>
                      </div>
                    </div>
                  </div>
                  <div class="calendar">
                    <SwitchBlock :tabs="['Часы', 'Сутки']" @tabChanged="onTabChange"/>

                    <div class="calendar__details" v-if="activeCalendar === 'days'">
                      <h4 class="calendar__details-title">Выбрать дату</h4>
                      <p class="calendar__details-item">Мин. время брони, ночей: 1</p>
                      <p class="calendar__details-item">Время заезда 14:00</p>
                      <p class="calendar__details-item">Время выезда 12:00</p>
                    </div>

                    <div class="calendar__content">
                      <div class="calendar__months flex">
                        <button
                            type="button"
                            class="calendar__months-item calendar__months-item--prev"
                            @click="changeMonth(prevMonth)"
                        >
                          {{ months[prevMonth] }}
                        </button>
                        <button
                            type="button"
                            class="calendar__months-item calendar__months-item--current"
                        >
                          {{ months[currentMonth] }}
                        </button>
                        <button
                            type="button"
                            class="calendar__months-item calendar__months-item--next"
                            @click="changeMonth(nextMonth)"
                        >
                          {{ months[nextMonth] }}
                        </button>
                      </div>

                      <CalendarDate
                          :month="currentMonth"
                          @month-change="changeMonth"
                          v-if="activeCalendar === 'days'"
                          @date-selected="onDateSelected"
                      />
                      <CalendarTime
                          :month="currentMonth"
                          @date-selected="onDateSelected"
                          v-else
                      />

                      <div class="calendar__status flex">
                        <div
                            class="calendar__status-hint"
                            v-for="{ status, name } of statuses"
                            :key="name"
                            :class="[status]"
                        >
                          <div class="calendar__status-round"></div>
                          <span class="calendar__status-name">{{ name }}</span>
                        </div>
                      </div>
                      <div class="calendar__order">
                        <h3 class="calendar__order-title">Ваш заказ</h3>
                        <ul class="calendar__order-list">
                          <li
                              class="calendar__order-item"
                              v-for="item of orderData"
                              :key="item.label"
                          >
                            <IconBase
                                v-if="item.value"
                                class="calendar__order-check"
                                icon="booking-check"
                                color="green"
                            />

                            <div class="calendar__order-round" v-else></div>
                            <div class="calendar__order-text">
                              {{ item.label }}:
                              <span :class="[item.value && 'colored']">{{
                                  item.value || "Выбрать"
                                }}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="calendar__actions">
                        <UIButton class="calendar__actions-btn btn-clear gray" v-if="width > 1000">
                          Очистить
                        </UIButton>
                        <UIButton class="calendar__actions-btn btn-chat green" v-else>
                          <IconBase icon="message" color="white"/>
                        </UIButton>
                        <UIButton class="calendar__actions-btn btn-book purple" v-if="isFormFilled">
                          Заказать <span>•</span> 12 000 ₽
                        </UIButton>
                        <UIButton class="calendar__actions-btn btn-book disabled" v-else>
                          Заполните поля
                        </UIButton>
                      </div>
                      <UIButton class="calendar__favorite-btn custom">
                        <IconBase icon="favorite-filled" color="green"/>
                        Добавить баню в избранное
                      </UIButton>
                    </div>
                  </div>
                </form>
                <!-- ROOMS -->
                <BookingRooms/>
                <!-- SERVICES -->
                <BookingServices/>
                <!-- ACCESSORIES -->
                <BookingAccessories/>
                <!-- RECENTS -->
                <div class="p-x booking-page__recents">
                  <h1 class="booking-page__title booking-page__recents-title">
                    Вы смотрели
                  </h1>
                  <SwiperSlider
                      class="booking-page__recents-slider"
                      :slidesPerView="width > 1000 ? 3 : 2"
                      :spaceBetween="10"
                      navigation
                  >
                    <swiper-slide v-for="i of 12" :key="i">
                      <BookingCardItem favorite/>
                    </swiper-slide>
                  </SwiperSlider>
                </div>
                <!-- SIMILAR -->
                <BookingSimilar/>
                <!-- REVIEWS -->
                <BookingReviews ref="reviewsElement" class="p-x"/>
                <!-- ANNOUNCE -->
                <div class="p-x booking-page__announce">
                  <button class="booking-page__announce-btn">Объявление</button>
                  <div class="booking-page__announce-controls">
                    <button class="booking-page__announce-control">
                      <IconBase icon="arrow-left" color="green"/>
                      Предыдущее
                    </button>
                    <button class="booking-page__announce-control">
                      Следующее
                      <IconBase icon="arrow-left" color="green"/>
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
                <!-- <Footer /> -->
                <Footer class="mobile"/>
              </div>
            </div>
          </section>
        </div>
      </ScrollArea>
    </aside>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";
import {useWindowSize} from "@vueuse/core";
import moment from "moment";
import "moment/dist/locale/ru";

moment.locale("ru");

definePageMeta({
  layout: "empty",
});

const {width} = useWindowSize()

const dialog = ref()
const gallery = ref();
const callElement = ref()
const scrollArea = ref()
const calculatorElement = ref()
const reviewsElement = ref()

const activeCalendar = ref("time");
const calcStep = ref(0)

const date = ref(new Date());
const currentMonth = computed(() => date.value.getMonth());
const prevMonth = computed(() => date.value.getMonth() - 1);
const nextMonth = computed(() => date.value.getMonth() + 1);

const isFormFilled = computed(() => isOrderFilled())

const isOrderFilled = () => {
  const {dateStart, dateEnd} = orderData.value
  return guests.value && receiver.value && dateStart.value && dateEnd.value
}

const emits = defineEmits(["changeCalendarType"]);

const images = ref([1,2,3,4,5,6,7,8,9,10])


function getSlices(arr) {
  const result = [];
  let group = []
  let groupLen = 1
  let i = 0

  while (i < arr.length) {
    group.push(arr[i])

    if (group.length === groupLen) {
      result.push(group)
      group = []
      groupLen = groupLen === 1 ? 2 : 1
    }

    i += 1
  }


  return result;
}


const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];
const statuses = [
  {
    status: "empty",
    name: "Свободно",
  },
  {
    status: "pending",
    name: "Проверяется",
  },
  {
    status: "ongoing",
    name: "Ваш заказ",
  },
  {
    status: "reserved",
    name: "Занято",
  },
  {
    status: "disabled",
    name: "Недоступно",
  },
];
const infoItems = ref([
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
]);
const descriptionItems = ref([
  {
    icon: "steam",
    label: "Вид парной",
    text: "Русская баня на дровах / Банный Чан",
  },
  {
    icon: "aquazone",
    label: "Аквазона",
    text: "Бассейн / Купель ледяная / Обливное устройство",
  },
  {
    icon: "size",
    label: "Размер бассейна",
    text: "до 15%",
  },
  {
    icon: "capacity",
    label: "Вместимость",
    text: "9",
  },
  {
    icon: "beds",
    label: "Комнаты отдыха",
    text: "Русская баня, Сауна / Финская",
  },
  {
    icon: "cart",
    label: "Магазин",
    text: "Банные пренадлежности",
  },
  {
    icon: "services",
    label: "Услуги",
    text: "SPA-терапия / Ароматерапия / Банщик / Веники / Массаж / Парения / Банные принадлежности / Обливное ведро / Чайная церемония / Ароматы для парной / Ледяная купель",
  },
  {
    icon: "restaurants",
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
    icon: "star",
    label: "Сервис",
    text: "9",
  },
  {
    icon: "exclusive",
    label: "Эксклюзив",
    text: "Русская баня, Сауна / Финская",
  },
]);

const guests = ref(1)
const receiver = ref('')
const orderData = ref({
  guests: {
    label: "Гостей",
    value: 1,
  },
  dateStart: {
    label: "Дата заезда",
    value: "",
  },
  dateEnd: {
    label: "Дата выезда",
    value: "",
  },
  duration: {
    label: "Размещение",
    value: "",
  },
});

const isValidate = ref(false)
const errors = ref({
  reciever: false
})

const increment = () => {
  guests.value++
};

const decrement = () => {
  if (guests.value === 1) return;
  guests.value -= 1;
};

const onTabChange = (tabIdx) => {
  changeCalendarType(tabIdx === 0 ? 'time' : 'days')
  activeCalendar.value = tabIdx === 0 ? 'time' : 'days'
}

const changeCalendarType = (calendarType) => {
  activeCalendar.value = calendarType;
  emits("changeCalendarType", calendarType);
};

const changeMonth = (month) => {
  date.value = new Date(date.value.getFullYear(), month, 1);
};

const onDateSelected = (data) => {
  orderData.value.dateStart.value = data.dateStart;
  orderData.value.dateEnd.value = data.dateEnd;

  if (data.duration) {
    orderData.value.duration.value = data.duration;
  } else {
    orderData.value.duration.value = null;
  }
};

// const onMonthUpdate = (direction) => {
//   if (direction === 'next') {
//     changeMonth(nextMonth.value)
//   } else {
//     changeMonth(prevMonth.value)
//   }
// }

const callUser = () => callElement.value?.dialog.showModal()

const moveToCalc = () => {
  if (calcStep.value !== 0) {
    submitForm()
  }

  const coords = calculatorElement.value.getBoundingClientRect()
  scrollArea.value.el.scrollBy(0, coords.y - (width.value > 1000 ? 150 : 220))
  calcStep.value++
}

const scrollToReviews = () => {
  const coords = reviewsElement.value.wrapper.getBoundingClientRect()
  scrollArea.value.el.scrollBy(0, coords.y - (width.value > 1000 ? 150 : 220))
}

const submitForm = () => {
  isValidate.value = false
  errors.value = {}

  if (!isFormFilled.value) {
    isValidate.value = true

    if (!receiver.value) errors.value.receiver = true
  }
}

watch(guests, () => {
  if (guests.value) orderData.value.guests.value = guests.value;
});
</script>

<style lang="scss">
.booking-page {
  flex-direction: column;
  height: 100%;

  .error {
    border-color: #FF858C !important;
  }

  &__location {
    &-controls {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 20px;

      .btn {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        &:hover {
          .icon-base {
            --icon-color: #fff;
          }
        }
      }
    }
  }

  &__map {
    height: 200px !important;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 15px;

    @media (max-width: 1000px) {
      height: 150px !important;
    }
  }

  &__slider {
    height: 370px;
    margin: 0 -15px 15px;

    .slider__arrow.next {
      right: 10px;
    }

    .slider__arrow.prev {
      left: 10px;
    }

    .slider__counter {
      @media (max-width: 1000px) {
        display: none;
      }
    }

    @media (max-width: 1000px) {
      height: 250px !important;
    }
  }

  &__slide {
    &-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;

      & > img {
        height: calc(50% - 5px) !important;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 25px;

      @media (max-width: 1000px) {
        border-radius: 15px;
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
  }

  &__intro {
    margin-bottom: 30px;
  }

  &__block-actions {
    display: grid;
    grid-template-columns: 1.5fr auto 1fr;
    gap: 10px;
    padding: 15px;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

    border-radius: 100px;

    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    z-index: 200;
    background: #fff;

    @media (max-width: 1200px) {
      grid-template-columns: auto auto 1fr;
    }

    @media (max-width: 1000px) {
      bottom: 40px;
    }
  }

  &__block-action {
    align-items: center;
    //flex-shrink: 0;
    gap: 15px;
    font-size: 18px;
    width: 100%;

    &.action-phone {
      width: 100%;
      @media (max-width: 1200px) {
        width: 50px;
        height: 50px;
        padding: 0;

        span {
          display: none;
        }
      }
    }

    &.action-chat {
      width: 50px;
      height: 50px;
      aspect-ratio: 1;
      padding: 0;
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

    &.action-calc {
      width: 100%;
    }
  }

  .calendar {

    & .switch {
      margin-bottom: 45px;

      .switch__btn {
        font-size: 20px;
        line-height: 100%;
        font-weight: 500;
      }

      &::after {
        box-shadow: none;
      }
    }

    &__months {
      justify-content: space-between;
      margin-bottom: 20px;

      &-item {
        padding: 2px 15px;
        border-radius: 100px;
        transition: all 0.2s;

        font-weight: 500;
        font-size: 14px;
        line-height: 18px;

        color: $gray;
        text-transform: uppercase;
        background: transparent;
        cursor: pointer;

        &--current {
          color: #3e3e51;
          cursor: default;
        }

        &:not(&--current):hover {
          background: #f1f3f9;
        }
      }
    }

    &__details {
      margin-bottom: 30px;

      &-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
      }

      &-item {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: $gray;

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }
    }

    &__status {
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 40px;

      &-round {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      &-hint {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
        }

        &.empty {
          .calendar__status-round {
            border: 1px solid #3e3e51;
            box-shadow: 0px 4px 12px rgba(166, 175, 203, 0.45);
          }
        }

        &.pending {
          .calendar__status-round {
            background: rgba($color: #faba17, $alpha: 0.5);
          }
        }

        &.ongoing {
          .calendar__status-round {
            background: $green;
          }
        }

        &.reserved {
          .calendar__status-round {
            background: rgba($color: #fd404d, $alpha: 0.5);
          }
        }

        &.disabled {
          .calendar__status-round {
            background: rgba($color: $gray, $alpha: 0.5);
          }
        }
      }
    }

    &__order {
      margin-bottom: 30px;

      &-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        margin-bottom: 10px;
      }

      &-check,
      &-round {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translate(-50%, -50%);
      }

      &-round {
        width: 5px;
        height: 5px;
        background: $gray;
        border-radius: 50%;
        flex-shrink: 0;
        position: absolute;
      }

      &-item {
        //   display: flex;
        //   align-items: center;
        position: relative;
        padding-left: 20px;

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }

      &-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: $gray;

        span.colored {
          color: #3e3e51;
        }
      }
    }

    &__actions {
      display: grid;
      grid-template-columns:2fr 3fr;
      gap: 10px;

      margin-bottom: 40px;
      padding: 15px;
      background: #ffffff;
      box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
      border-radius: 100px;

      @media (max-width: 1000px) {
        grid-template-columns: auto 1fr;
        align-items: center;
      }

      &-btn {
        width: 100%;

        &.btn-chat {
          width: 50px;
          border-radius: 50%;
          padding: 0;
        }


        &.btn-book {
          gap: 10px;

          span {
            font-size: 12px;
          }
        }
      }
    }

    &__favorite-btn {
      width: 100%;
      gap: 10px;

      &:hover {
        border-color: $green;
        background: #fff;
      }
    }
  }


  .calculator {
    &.p-x {
      padding: 0 15px 30px;
    }

    &__params {
      margin-bottom: 40px;


      .receiver {
        h2 {
          margin-bottom: 0;
        }

        &-input {
          border: 2px solid #dadeec;
          border-radius: 100px;
          filter: drop-shadow(0px 4px 24px rgba(166, 175, 203, 0.32));
          background: transparent;

          max-width: 200px;
          padding: 8px 20px;

          font-weight: 600;
          font-size: 14px;
          line-height: 20px;

          @media (max-width: 1000px) {
            max-width: 100%;
            width: 40%;
          }

          &::placeholder {
            color: #8f99ba;
          }

          &:focus {
            outline: none;
          }
        }
      }

      .counter {
        &__controls {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 10px 15px;

          background: #fff;
          border: 2px solid #dadeec;
          border-radius: 100px;

          max-width: 120px;

          @media (max-width: 1000px) {
            max-width: 100%;
            width: 40%;
          }

          &-count {
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
          }

          &-btn {
            background: transparent;
            display: flex;
            padding: 0;
            cursor: pointer;
          }
        }
      }

      &-item {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 15px;

        margin-bottom: 20px;

        @media (max-width: 1000px) {
          display: flex;
          justify-content: space-between;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        .calculator__param {
          &-title {
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 5px;
          }

          &-suptitle {
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #8f99ba;
          }
        }
      }
    }

    &-title {
      color: #8e58ff;
      margin-bottom: 30px;
      display: flex;
      align-items: flex-end;
      gap: 10px;

      button {
        @include flex-center-all;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: $green;
        border: 1px solid #DADEEC;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }

  .footer {
    @media (max-width: 1000px) {
      .breadcrumbs {
        display: none;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
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
    gap: 20px;

    padding: 0;
    background: transparent;

    margin: 0 auto;

    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: $green;
    cursor: pointer;

    transition: all 0.2s;

    @media (max-width: 1000px) {
      margin: 0 0 0 auto;
    }

    svg {
      transform: rotate(-90deg);
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

      svg {
        transform: rotate(-90deg);
      }
    }
  }

  &__place {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
    gap: 5px;

    .icon-base {
      cursor: pointer;
      width: 14px;
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
    color: $green;

    display: flex;
    align-items: center;
    gap: 5px;

    .icon-base {
      cursor: pointer;
      height: 14px;
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
      padding: 0 15px 30px !important;
    }

    &-title {
      margin-bottom: 40px;
    }

    &-item {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 2fr 4fr;

      @media (max-width: 600px) {
        grid-template-columns: 2fr 2fr;
      }

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

      color: $gray;
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
      padding: 0 15px 30px !important;
    }

    &-title {
      margin-bottom: 40px;
    }

    &-items {
      margin-bottom: 50px;
      overflow: hidden;
      transition: all 0.3s;

      &.open {
        & + .booking-page__more-btn {
          svg {
            transform: rotate(90deg);
          }
        }
      }
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
      border-bottom: 2px dotted $gray;
    }

    &-text {
      color: $gray;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: right;

      @media (max-width: 1000px) {
        font-size: 12px;
      }
    }
  }

  &__prices {
    margin-bottom: 20px;
  }

  &__discounts {
    &-item {
      grid-template-columns: auto 1fr auto;
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
      padding: 0 15px 20px !important;
    }

    &-title {
      margin-bottom: 15px;
    }

    &-items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px 10px;

      margin-bottom: 30px;
      overflow: hidden;
      transition: all 0.3s;

      @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
      }

      &.open + .booking-page__more-btn {
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }

  // SIMILAR & RECENTS

  &__similar,
  &__recents {
    &.p-x {
      padding: 0 15px 40px !important;
    }

    &-title {
      margin-bottom: 15px;
    }

    &-slider {
      .slider__arrow {
        transform: translateY(-140%);
        width: 40px;
        height: 40px;
        background: rgba($color: #fff, $alpha: 0.6);

        @media (max-width: 1000px) {
          display: none;
        }
      }

      .slider__arrow.next {
        right: 10px;
        transform: translateY(-140%) rotate(180deg);
      }

      .slider__arrow.prev {
        left: 10px;
      }
    }
  }

  // ANNOUNCE
  &__announce {
    &.p-x {
      padding: 0 15px 45px !important;
    }

    &-btn {
      padding: 3px 30px;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      color: $gray;
      cursor: pointer;

      background: #ffffff;
      border: 2px solid $light-gray;
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
      color: $green;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      background: transparent;

      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      &:last-of-type svg {
        transform: rotate(-180deg);
      }
    }
  }

  // INFO
  &__info {
    &.p-x {
      margin-bottom: 0;
      padding: 0 15px 30px !important;
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
      color: $gray;
    }
  }
}
</style>

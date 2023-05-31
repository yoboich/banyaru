<template>
  <div class="calendar">
    <div class="calendar__switch">
      <div
          class="calendar__switch-active"
          :class="{
          times: activeCalendar === 'time',
          dates: activeCalendar === 'days',
        }"
      ></div>
      <button
          type="button"
          class="calendar__switch-btn"
          @click="changeCalendarType('days')"
      >
        Сутки
      </button>
      <button
          type="button"
          class="calendar__switch-btn"
          @click="changeCalendarType('time')"
      >
        Часы
      </button>
    </div>

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
        <UIButton class="calendar__actions-btn btn-book purple"
        >Заказать <span>•</span> 12 000 ₽
        </UIButton
        >
      </div>
      <UIButton class="calendar__favorite-btn custom">
        <IconBase icon="favorite-filled" color="green"/>
        Добавить баню в избранное
      </UIButton>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import "moment/dist/locale/ru";
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

moment.locale("ru");

const activeCalendar = ref("days");
const date = ref(new Date());

const emits = defineEmits(["changeCalendarType"]);

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

const currentMonth = computed(() => date.value.getMonth());
const prevMonth = computed(() => date.value.getMonth() - 1);
const nextMonth = computed(() => date.value.getMonth() + 1);

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

const calculatorData = useState("calculatorData");

watch(calculatorData.value, () => {
  const data = calculatorData.value;
  if (data.guests) orderData.value.guests.value = data.guests;
});
</script>

<style lang="scss" scoped>
.calendar {
  &__switch {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;

    padding: 5px;
    background: #f1f3f9;
    border-radius: 100px;
    position: relative;

    &-active {
      position: absolute;
      left: 5px;
      top: 5px;
      width: calc(50% - 5px);
      height: calc(100% - 10px);
      background: #fff;
      border-radius: 100px;
      transition: all 0.2s;

      &.dates {
        left: 5px;
      }

      &.times {
        left: 50%;
      }
    }

    &-btn {
      background: transparent;
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
      &.btn-chat {
        width: 50px;
        border-radius: 50%;
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
</style>

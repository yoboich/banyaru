<template>
  <div class="calendar">
    <div class="calendar__days" ref="activeDaysContainer">
      <button
        v-for="(dayDate, i) of days"
        :key="i"
        class="calendar__days-btn"
        :class="{ active: isDayActive(dayDate) }"
        type="button"
        @click="changeDay(getDayDate(dayDate))"
        :ref="isDayActive(dayDate) ? 'activeDay' : null"
      >
        <span
          class="calendar__days-name"
          :class="{ red: ['СБ', 'ВС'].includes(getShortDayName(dayDate)) }"
          >{{ getShortDayName(dayDate) }}</span
        >
        <span class="calendar__days-date">{{ getDayDate(dayDate) }}</span>
      </button>
    </div>
    <div class="calendar__dates">
      <div
        class="calendar__dates-item"
        v-for="date of dates"
        :key="date.format('HH:mm')"
        :class="{
          [getRangeColor(date)]: true,
          first: isFirstDate(date),
          last: isLastDate(date),
          disabled: isDisabled(date),
          center: isCenter(date),
        }"
        @click="selectTime(date)"
      >
        <div class="duration" v-if="isTimer(date)">
          <IconBase icon="clock" color="black" />
          {{ getSelectedDuration(date) }}
        </div>
        <div class="time">{{ date.format("HH:mm") }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

definePageMeta({
  layout: "empty",
});

const emits = defineEmits(["dateSelected"]);

const generateTimeDates = (year, month, day) => {
  let date = moment(new Date(year, month, day)).startOf("day");
  const times = [date.clone()];

  for (let i = 0; i < 47; i++) {
    date = date.add("30", "minutes");
    times.push(date.clone());
  }

  return times;
};

const generateDaysArray = (year, month) => {
  const daysInMonth = moment([year, month]).daysInMonth();
  const currentDate = moment(new Date(year, month, 1));
  const resultArr = [];

  for (let i = 1; i <= daysInMonth; i++) {
    resultArr.push(currentDate.clone());
    currentDate.add(1, "day");
  }

  return resultArr;
};

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
});

const day = ref(moment().format("DD"));
const year = 2023;
const dates = ref(generateTimeDates(year, props.month, day.value));
const days = ref(generateDaysArray(year, props.month));
const activeDay = ref();
const activeDaysContainer = ref();

onMounted(() => {
  const btn = activeDaysContainer.value.querySelector(".active");
  const { width } = btn.getBoundingClientRect();

  activeDaysContainer.value.scroll({ left: btn.offsetLeft - width });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      selectedDates.value = selectedDates.value.map((el) => {
        if (el[1] === "ongoing") {
          return [null, "ongoing"];
        } else return el;
      });

      clearDateBoundary();
    }
  });
});

watch(props, () => {
  dates.value = generateTimeDates(year, props.month, day.value);
  days.value = generateDaysArray(year, props.month);
  // triggerRender.value = !triggerRender.value;
});

watch(day, () => {
  dates.value = generateTimeDates(year, props.month, day.value);
});

watch(days, () => {
  activeDaysContainer.value.scroll({ left: 0 });
});

const isDayActive = (dayDate) => {
  return day.value === getDayDate(dayDate);
};

const selectedDates = ref([
  [null, "ongoing"],
  ["2023-05-16T03:00:00/2023-05-16T09:00:00", "reserved"],
  ["2023-05-23T10:00:00/2023-05-25T12:00:00", "pending"],
  ["2023-05-16T14:00:00/2023-05-16T14:00:00", "disabled"],
]);

const changeDay = (dayDate) => {
  day.value = dayDate;
};

const closestLeft = ref(null);
const closestRight = ref(null);

const isTimer = (date) => {
  const selectedDate = getSelectedDateTime(date);
  const prevDate = date.clone().subtract(30, "minutes");

  const isValid =
    isFirstDate(prevDate) &&
    !isFirstDate(date) &&
    !isLastDate(date) &&
    !["disabled", "not-filled"].includes(getRangeColor(date));

  if (selectedDate && isValid) {
    const { dateStart, dateEnd } = getMomentDatesFromString(selectedDate[0]);
    const durationInMinutes = dateEnd.diff(dateStart, "minutes");

    return durationInMinutes >= 120;
  } else return false;
};

const findClosestDates = (datesArray, dateString) => {
  const targetDate = moment(dateString);
  const sortedDates = datesArray
    .map((dateStr) => moment(dateStr.split("/")[0]))
    .sort((a, b) => a.diff(b));

  const index = sortedDates.findIndex((date) => date.diff(targetDate) >= 0);
  const previousDate = sortedDates[index - 1] || null;
  const nextDate = sortedDates[index] || null;

  return { closestLeft: previousDate, closestRight: nextDate };
};

function getShortDayName(date) {
  return date.format("ddd").toUpperCase();
}

function getDayDate(date) {
  return date.format("DD");
}

function getFormattedDate(date) {
  return date.format("YYYY-MM-DDTHH:mm:00");
}

function setDateBoundary(dateStr) {
  const { closestLeft: lDate, closestRight: rDate } = getClosestDates(dateStr);

  closestLeft.value = lDate;
  closestRight.value = rDate;
}

function clearDateBoundary() {
  closestLeft.value = null;
  closestRight.value = null;
}

const isDisabled = (date) => {
  const [lDate, rDate] = [closestLeft.value, closestRight.value];

  const sDate = getSelectedDateTime(date);
  if (sDate && sDate[1] === "disabled") return true;

  if (["reserved", "pending"].includes(getRangeColor(date))) return false;

  if (lDate === null && rDate === null) return false;
  if (lDate === null) return date > rDate;
  if (rDate === null) return date < lDate;

  return date < lDate || date > rDate;
};

function getClosestDates(dateStr) {
  const notUserSelectionDates = selectedDates.value
    .filter((d) => d[1] !== "ongoing")
    .map((d) => d[0]);

  return findClosestDates(notUserSelectionDates, dateStr);
}

function getSelectedDateTime(date) {
  const selectedDate = selectedDates.value
    .filter((d) => d[0] !== null)
    .find((selected) => {
      const [dateStart, dateEnd] = selected[0].split("/").map((d) => moment(d));

      return date.isBetween(dateStart, dateEnd, "minutes", "[]");
    });

  return selectedDate;
}

function getUserSelection() {
  return selectedDates.value.find((selected) => selected[1] === "ongoing");
}

function getRangeColor(date) {
  const selectedDate = getSelectedDateTime(date);

  return selectedDate ? selectedDate[1] : "not-filled";
}

const isFirstDate = (date) => {
  const selectedDate = getSelectedDateTime(date);
  return selectedDate
    ? moment(selectedDate[0].split("/")[0]).isSame(date, "minutes")
    : null;
};

const isLastDate = (date) => {
  const selectedDate = getSelectedDateTime(date);
  return selectedDate
    ? moment(selectedDate[0].split("/")[1]).isSame(date, "minutes")
    : null;
};

const isCenter = (date) =>
  isTimer(date) &&
  !["0:30", "1:00", "1:30"].includes(getSelectedDuration(date));

function addZero(number) {
  return number < 10 ? `0${number}` : number;
}

function getSelectedDuration(date) {
  const selectedDate = getSelectedDateTime(date);
  const { dateStart, dateEnd } = getMomentDatesFromString(selectedDate[0]);
  const durationInMinutes = dateEnd.diff(dateStart, "minutes");
  const durationInHours = dateEnd.diff(dateStart, "hours");

  return `${addZero(durationInHours)}:${addZero(durationInMinutes % 60)}`;
}

function getMomentDatesFromString(str) {
  const [dateStart, dateEnd] = str.split("/").map((d) => moment(d));

  return { dateStart, dateEnd };
}

const selectTime = (date) => {
  const sameDate = getSelectedDateTime(date);
  if (sameDate && sameDate[1] !== "ongoing") return;

  const dateStr = getFormattedDate(date);
  const userSelection = getUserSelection();

  if (!userSelection[0]) {
    selectedDates.value[0][0] = `${dateStr}/${dateStr}`;

    emits("dateSelected", {
      dateStart: date.format("D MMM (ddd.) kk:mm"),
      dateEnd: null,
      duration: null,
    });

    setDateBoundary(dateStr);
  } else {
    const [dateStart, dateEnd] = userSelection[0]
      .split("/")
      .map((d) => moment(d));

    if (dateStart.isSame(dateEnd)) {
      if (Math.abs(date.diff(dateStart, "hours")) < 2) return;
      clearDateBoundary();

      const dateStartStr = getFormattedDate(dateStart);
      const dateData = [dateStr, dateStartStr].sort();

      selectedDates.value[0][0] = dateData.join("/");

      const mDateStart = moment(dateData[0]);
      const mDateEnd = moment(dateData[1]);
      const format = (d) => d.format("D MMM (ddd.) kk:mm");

      const fullMinutes = Math.abs(mDateEnd.diff(mDateStart, "minutes"));

      emits("dateSelected", {
        dateStart: format(mDateStart),
        dateEnd: format(mDateEnd),
        duration: `${addZero(Math.floor(fullMinutes / 60))} ч. ${addZero(
          fullMinutes % 60
        )} мин.`,
      });
    } else {
      emits("dateSelected", {
        dateStart: date.format("D MMM (ddd.) kk:mm"),
        dateEnd: null,
        duration: null,
      });

      selectedDates.value[0][0] = `${dateStr}/${dateStr}`;

      setDateBoundary(dateStr);
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  margin-bottom: 35px;

  &__days {
    width: 100%;
    display: flex;
    gap: 50px;
    margin-bottom: 30px;
    overflow: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background: $light-gray;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      width: 100px;
      background: $gray;
      border-radius: 2px;
    }

    &-name.red {
      color: #fd404d;
    }

    &-btn {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      border-radius: 25px;

      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;

      background: transparent;
      transition: all 0.2s;
      cursor: pointer;

      &:hover,
      &.active {
        background: $green;
        color: #fff;

        .calendar__days-name {
          color: #fff;
        }
      }
    }
  }

  &__dates {
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    display: flex;
    flex-wrap: wrap;
    max-width: 565px;

    &-item {
      // width: 130px;
      width: calc((100% - 45px) / 4);

      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      display: flex;
      justify-content: center;

      margin-bottom: 15px;

      &:nth-last-of-type(-n + 4) {
        margin-bottom: 0;
      }

      position: relative;
      cursor: pointer;

      .time {
        position: relative;
        z-index: 1;
        padding: 15px 30px;
        // width: 130px;
        width: 100%;

        border: 1px solid #dadeec;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;
      }

      &:not(&:nth-of-type(4n + 1)),
      &:not(&:nth-of-type(4n + 4)) {
        .duration {
          width: calc(100% - 15px);
        }
      }

      .duration {
        display: flex;
        align-items: center;
        justify-content: center;
        // background: #000;
        gap: 5px;

        position: absolute;
        left: 0;
        top: 0;
        // width: 130px;
        width: 100%;

        height: 100%;

        z-index: 10;

        & + span {
          display: none;
        }
      }

      &:hover {
        &::after {
          background: rgba(0, 0, 0, 0.03);
        }
      }

      &:not(:nth-child(4n + 4)) {
        margin-right: 15px;
      }

      &:nth-child(4n + 1) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &:nth-of-type(4n + 4) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &.center {
        .duration {
          left: 150%;
        }

        &:nth-of-type(4n + 3) {
          .duration {
            left: 50%;
          }
        }

        &:nth-of-type(4n + 4) {
          .duration {
            left: 0;
          }
        }
      }
      &.part {
        &:nth-of-type(4n + 3) {
          .duration {
            left: 50%;
          }
        }

        &:nth-of-type(4n + 1) {
          .duration {
            transform: translateX(-50%);
            left: 100%;
          }
        }

        &:nth-of-type(4n + 2) {
          .duration {
            left: 50%;
          }
        }
      }

      &.first {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        &:not(&.last) {
          .time {
            width: calc(100% - 15px);
          }
        }

        &:nth-of-type(4n + 4) {
          .time {
            width: 100% !important;
          }
        }

        &:not(.last):not(:nth-of-type(4n + 4)) {
          margin-right: 0;
          // width: 145px;
          width: calc((100% - 45px) / 4 + 15px);
        }

        &:nth-of-type(4n + 1) + .center {
          .duration {
            left: 50%;
          }
        }
      }

      &.last {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &.first,
      &.last {
        &.ongoing {
          .time {
            background: $green;
            color: #fff;
          }
        }
      }

      &.pending,
      &.ongoing,
      &.reserved {
        &:not(.first):not(.last) {
          margin-right: 0;

          &:not(:nth-of-type(4n + 4)) {
            // width: 145px;
            width: calc((100% - 45px) / 4 + 15px);
          }

          .time {
            user-select: none;
            color: transparent;
          }
        }

        .time {
          border-color: transparent;
        }
      }

      &.ongoing {
        background: #99df8d;
      }

      &.reserved {
        background: #ff858c;
      }

      &.pending {
        background: #ffdf8e;
      }

      &.disabled {
        color: #dadeec;
        pointer-events: none;

        &::after {
          border: none;
        }
      }
    }
  }
}
</style>

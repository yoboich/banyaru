<template>
  <div ref="calendarElement">
    <div id="calendar"></div>
  </div>
</template>

<script setup>
import VanillaCalendar from "@uvarov.frontend/vanilla-calendar";
import moment from "moment";

// Basic styles
import "@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css";

import "@uvarov.frontend/vanilla-calendar/build/themes/light.min.css";
import "@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css";

const triggerPageRender = ref(false);
const calendar = ref();

const props = defineProps({
  month: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["monthChange", "dateSelected"]);

watch(props, () => {
  calendar.value.selectedMonth = props.month;
  calendar.value.update();

  triggerPageRender.value = !triggerPageRender.value;
});

const selected = ref([
  ["2023-05-07:2023-05-15", "reserved"],
  ["2023-05-23:2023-05-25", "pending"],
  ["2023-05-18", "disabled"],
]);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    calendar.value.update();
    setTimeout(() => {
      triggerPageRender.value = !triggerPageRender.value;
    });
  }
});

watch(triggerPageRender, (value) => {
  fillSelected();
  tryUpdateMonth();
});

const tryUpdateMonth = () => {
  if (calendar.value.selectedMonth !== props.month) {
    emits("monthChange", calendar.value.selectedMonth);
  }
};

const options = {
  DOMTemplates: {
    default: `
      <div class="vanilla-calendar-wrapper">
        <#WeekNumbers />
        <div class="vanilla-calendar-content">
          <#Week />
          <#Days />
        </div>
      </div>
      <#ControlTime />
    `,
  },
  actions: {
    clickDay(event, dates) {
      triggerPageRender.value = !triggerPageRender.value;

      const { selectedDates } = calendar.value;
      selectedDates.sort();

      let dateStart, dateEnd, duration;

      dateStart = moment(selectedDates[0]);

      if (selectedDates.length > 1) {
        dateEnd = moment(selectedDates[selectedDates.length - 1]);

        const nightsCount = Math.abs(dateEnd.diff(dateStart, "days"));
        duration = `${nightsCount} ночь, ${nightsCount + 1} дня`;
        dateEnd = dateEnd.format("D MMM (ddd.)") + " 12:00";
      }

      emits("dateSelected", {
        dateStart: dateStart.format("D MMM (ddd.)") + " 14:00",
        dateEnd,
        duration,
      });

      tryUpdateMonth();
    },
    clickArrow(event, dates) {
      triggerPageRender.value = !triggerPageRender.value;
    },
  },
  settings: {
    lang: "ru",
    range: {
      // disablePast: true,
      disableGaps: true,
      disabled: selected.value.map((el) => el[0]),
    },
    selection: {
      day: "multiple-ranged",
      controlTime: "all",
    },
    visibility: {
      theme: "light",
      daysOutside: true,
      weekend: false,
      today: false,
    },
  },
};

const calendarElement = ref();

const getDurationTemplate = (amount, left, free, row) => {
  return `
    <div class="duration ${amount > 2 ? "large" : ""} ${
    amount === 1 ? "colored" : ""
  }" style="left: ${left || "auto"}" data-free="${free}" data-row=${row}>
        <img src="${getLocalUrl("/icons/moon-black.svg")}" alt="" />
        <span class="text">Ночей</span>
        <span>${amount}</span>  
    </div>
  `;
};

const fillSelected = () => {
  const dayElements = calendarElement.value.querySelectorAll(
    ".vanilla-calendar-day"
  );

  const range = [...selected.value];
  let nightsCount = 0;

  if (calendar.value?.selectedDates?.length > 1) {
    const { selectedDates } = calendar.value;

    range.push([
      `${selectedDates[0]}:${selectedDates[selectedDates.length - 1]}`,
      "ongoing",
    ]);
  }

  for (const selectedDate of range) {
    const [dateStart, dateEnd] = selectedDate[0].split(":");
    const mDateStart = moment(dateStart);
    const mDateEnd = moment(dateEnd);

    nightsCount = Math.abs(mDateEnd.diff(mDateStart, "days"));

    const elements = [];
    let firstElIndex = null;

    for (let i = 0; i < dayElements.length; i++) {
      const date = dayElements[i].querySelector("button").dataset.calendarDay;
      const mDate = moment(date);

      if (mDate >= mDateStart && mDate <= mDateEnd) {
        if (firstElIndex === null) {
          firstElIndex = i;
        }
        elements.push(dayElements[i]);
      }
    }

    for (let i = 0; i < elements.length; i++) {
      if (selectedDate[1] !== "ongoing") {
        elements[i].classList.add(selectedDate[1]);

        if (i === 0) elements[i].classList.add("first");
        if (i === elements.length - 1) elements[i].classList.add("last");
      }

      if (i == 1 && selectedDate[1] !== "disabled") {
        const lastElIndex = firstElIndex + elements.length - 1;
        let freeElements;
        let row = 0; // 0 - same | 1 - empty left | 2 - empty right | 3 - empty
        let distance;
        let maxIndexInRow = firstElIndex + (7 - ((firstElIndex + 1) % 7));

        if ((firstElIndex + 1) % 7 === 0) {
          if (maxIndexInRow < lastElIndex) {
            row = 3;
          } else {
            row = 1;
          }
        } else {
          if (maxIndexInRow + 1 <= lastElIndex) {
            row = 2;
          } else {
            row = 0;
          }
        }

        if (maxIndexInRow > lastElIndex - 1) {
          maxIndexInRow = lastElIndex - 1;
        }

        freeElements = maxIndexInRow - firstElIndex;

        if (row === 3) {
          distance = "300%";
        } else {
          const distances = [
            ["-50", "0", "50", "100", "150", "200", "200"],
            ["-50", "0", "75", "150", "200", "250", "300"],
            ["-50", "0", "25", "50", "100", "150", "200"],
          ];

          distance = distances[row][freeElements] + "%";
        }

        elements[i].insertAdjacentHTML(
          "beforeend",
          getDurationTemplate(
            nightsCount,
            distance || "200%",
            freeElements,
            row
          )
        );
      }
    }
  }
};

onMounted(() => {
  calendar.value = new VanillaCalendar("#calendar", options);
  calendar.value.init();

  fillSelected();
});
</script>

<style lang="scss">
#calendar {
  width: 100%;
  padding: 0;
  margin-bottom: 35px;

  & .vanilla-calendar-days {
    // gap: 15px 0;
    display: flex;
    flex-wrap: wrap;
    max-width: 578px;
  }

  & .vanilla-calendar-week {
    display: flex;
    flex-wrap: wrap;
    max-width: 578px;

    &__day {
      // width: 74px;
      width: calc((100% - 60px) / 7);
      height: 50px;
      margin-bottom: 10px;

      &:not(:nth-of-type(7n + 7)) {
        margin-right: 10px;
      }
    }
  }

  & .vanilla-calendar-week__day,
  & .vanilla-calendar-day__btn {
    border-radius: 25px;
    padding: 15px 30px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }

  & .vanilla-calendar-day {
    // width: 74px;
    width: calc((100% - 60px) / 7);
    height: 50px;
    margin-bottom: 10px;
    justify-content: flex-start;

    &:nth-last-of-type(-n + 7) {
      margin-bottom: 0;
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
      // width: 74px;
      width: 100%;
      height: 100%;

      font-size: 14px;
      line-height: 18px;

      z-index: 5;

      .text {
        display: none;
      }

      &.colored {
        background: #32bd1b;
      }

      &.large {
        // width: 100px;
        span {
          display: flex;
        }
      }
    }

    button {
      // width: 74px;
      width: 100%;
      height: 50px;
    }

    &:not(:nth-of-type(7n + 7)) {
      margin-right: 10px;
    }

    &:nth-of-type(7n + 7) {
      // width: 74px !important;
      width: calc((100% - 60px) / 7) !important;

      .duration {
        // left: 0 !important;
        .text {
          display: none;
        }
      }
    }

    &.reserved,
    &.pending {
      &.first {
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;

        button {
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          // width: calc(100% - 10px);
        }

        &:nth-of-type(7n + 7) {
          border-radius: 25px;
          overflow: hidden;

          button {
            width: 100%;
          }
        }
      }

      &.last {
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        overflow: hidden;

        &:nth-of-type(7n + 1) {
          border-radius: 25px;

          button {
            width: 100%;
          }
        }
      }

      &.first,
      &.last {
        button {
          color: #3e3e51;

          width: calc(100% - 10px);

          // z-index: 10;
        }
      }

      &:not(.last) {
        margin-right: 0;
        // width: 84px;
        width: calc(((100% - 60px) / 7) + 10px);
      }

      &:not(.first):not(.last) {
        &:nth-of-type(7n + 1) {
          border-radius: 25px 0 0 25px;
          // overflow: hidden;

          button {
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;
          }
        }

        &:nth-of-type(7n + 7) {
          border-radius: 0 25px 25px 0;
          overflow: hidden;
        }
      }
    }

    &.reserved {
      background: #ff858c !important;

      button {
        background: #ff858c !important;
        border-radius: 0;
        color: transparent;
      }
    }

    &.pending {
      background: #ffdf8e !important;
      button {
        background: #ffdf8e !important;
        border-radius: 0;
        color: transparent;
      }
    }

    // &.disabled {
    //   button {
    //     border-radius: 0;
    //     color: transparent;
    //   }
    // }

    &_selected {
      &-first {
        border-radius: 25px 0 0 25px;
        // width: 84px;
        width: calc(((100% - 60px) / 7) + 10px);
        background: #99df8d;
        margin-right: 0 !important;

        &:nth-of-type(7n + 7) {
          border-radius: 25px;
          overflow: hidden;
          // width: 74px !important;
          width: calc((100% - 60px) / 7) !important;

          button {
            width: 100%;
          }
        }

        button {
          width: calc(100% - 10px);
          color: #fff !important;
        }
      }

      &-last {
        border-radius: 0 25px 25px 0;

        &:nth-of-type(7n + 1) {
          border-radius: 25px;
          overflow: hidden;

          .duration {
            display: none;
          }

          button {
            width: 100%;
          }
        }

        &:not(:nth-of-type(7n + 1)) {
          .duration {
            width: calc(100% - 10px) !important;
          }
        }

        button {
          color: #fff !important;
        }
      }

      &-first,
      &-last {
        background: #99df8d;

        button {
          background: #32bd1b !important;
          // z-index: 10;
        }
      }

      &-intermediate {
        &:not(&-first):not(&-last) {
          &:nth-of-type(7n + 1) {
            border-radius: 25px 0 0 25px;

            button {
              border-top-left-radius: 25px;
              border-bottom-left-radius: 25px;
            }
          }

          &:nth-of-type(7n + 7) {
            // width: 74px !important;
            width: calc((100% - 60px) / 7) !important;
            border-radius: 0 25px 25px 0;
            overflow: hidden;
          }
        }

        &:not(&-last) {
          // width: 84px !important;
          width: calc(((100% - 60px) / 7) + 10px);
          margin-right: 0;
          background: #99df8d;
        }

        button {
          background: #99df8d;
          color: transparent;
          user-select: none;
          border-radius: 0;
        }
      }

      button {
        background: #32bd1b;
      }
    }
  }
}

.vanilla-calendar-day__btn_selected.vanilla-calendar-day__btn_intermediate {
  background: #99df8d !important;
}

// .vanilla-calendar-days_selecting .vanilla-calendar-day__btn,
// .vanilla-calendar-week__day {

//   &:not(.vanilla-calendar-day__btn_disabled) {
//     color: #3e3e51 !important;
//   }
// }

// .vanilla-calendar-day_selected-last,
// .vanilla-calendar-day_selected-first {
//   button {
//     border-radius: 25px !important;
//   }
// }

// .vanilla-calendar-day_selected {
//   button {
//     border-radius: 25px !important;
//   }
// }
</style>

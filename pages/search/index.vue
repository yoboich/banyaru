<template>

  <div class="search" ref="searchContent">
    <Map class="search__map"/>
    <div class="search__nav" :class="{left: isInitialSearch}">
      <HeaderNav/>
      <UIButton v-if="route.name.includes('search')" class="search__nav-btn gray" @click="step = 4">
        <IconBase icon="list"/>
        Список
      </UIButton>
    </div>
    <Transition mode="out-in">
      <div class="search__controls" v-show="isInitialSearch">
        <UIButton class="gray search__controls-item" @click="zoomIn">
          <IconBase icon="search-zoomin"/>
        </UIButton>
        <UIButton class="gray search__controls-item" @click="zoomOut">
          <IconBase icon="search-zoomout"/>
        </UIButton>
        <UIButton class="gray search__controls-item" @click="mapGeolocate">
          <IconBase icon="search-location"/>
        </UIButton>
      </div>
    </Transition>
    <div>
      <UISearchInput class="search__input" placeholder="Поиск Баня.ру" v-show="isInitialSearch" v-model="searchTerm"
                     hint @click="step = 1"/>
      <MapSidebar v-show="!isInitialSearch" :class="{'no-drag-icon': isBookingList}" @close="hideSearchPanel">
        <SearchFilterForm v-if="isCategorySearch"/>
        <SearchForm v-else-if="isFilterSearch"/>
        <section v-else="isBookingList" class="booking">
          <div class="booking-search p-x">
            <div class="booking-search__header" :class="{'show-filter': showFilter}">
              <div class="booking-search__searchbox">
                <UISearchInput v-model="searchTerm" placeholder="Поиск Баня.ру" hint/>
                <UIButtonClose @click="resetSearch"/>
              </div>
              <div class="booking-search__filter" v-show="showFilter">
                <div class="booking-search__filter-info">
                  <div class="booking-search__filter-found">
                    <span>1 936 объявлений</span>
                    <button class="booking-search__sort-btn">
                      <IconBase icon="sort" color="gray"/>
                    </button>
                  </div>
                  <nuxt-link class="booking-search__filter-more" to="/search">
                    <div
                        class="count"
                        v-show="selectedFilters.length && selectedFilters.length < 10"
                    >
                      {{ selectedFilters.length }}
                    </div>
                    <IconBase icon="filter" color="black"/>
                  </nuxt-link>
                </div>
                <div
                    class="booking-search__filter-tags custom-scrollbar custom-scrollbar--horizontal"
                    data-filter="first"
                >
                  <button class="booking-search__filter-btn slide-left">
                    <IconBase icon="arrow-left" color="gray"/>
                  </button>
                  <button
                      class="booking-search__filter-btn clear"
                      @click="resetFilters"
                  >
                    <IconBase icon="close" color="gray"/>
                  </button>
                  <BookingSearchFormTag
                      v-for="(tagName, i) of BookingSearchTagsFirst"
                      :key="i"
                      :name="tagName"
                      :class="{ active: selectedFilters.includes(tagName) }"
                      @click="toggleTag(tagName)"
                  />
                </div>
                <div
                    class="booking-search__filter-tags custoism-scrollbar custom-scrollbar--horizontal"
                    data-filter="second"
                >
                  <BookingSearchFormTag
                      v-for="(tagName, i) of BookingSearchTagsSecond"
                      :key="i"
                      :name="tagName"
                      :class="{ active: selectedFilters.includes(tagName) }"
                      @click="toggleTag(tagName)"
                  />
                </div>
              </div>
            </div>
            <div class="booking-search__results" v-if="width > 1000">
              <BookingSearchItem v-for="i of 7" :wide="i < 3" :key="i"/>
            </div>
            <div class="booking-search__results" v-else>
              <BookingMobileSearchItem v-for="i of 7" :type="i === 1 ? 'first'  : (i < 3 ? 'second' : 'third') "
                                       :key="i"/>
            </div>
            <Transition mode="out-in">
              <button class="booking-search__btn" v-show="showMapBtn" @click="step = 0">
                <IconBase icon="map"/>
                <span>Карта</span>
              </button>
            </Transition>
          </div>
        </section>
      </MapSidebar>
      <HeaderButton v-if="width > 1000"/>
      <UIButton v-show="isInitialSearch" v-else class="search__btn--create green" to="/create-post">
        <IconBase icon="nav-plus" color="white"/>
      </UIButton>
    </div>
  </div>

</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

const route = useRoute()
const showMapBtn = useState('showMapBtn', () => false)

definePageMeta({
  layout: "empty",
  keepalive: true
});

const searchTerm = useState('searchTerm', () => '')
const step = useState('step', () => 0)

const isInitialSearch = computed(() => step.value === 0)
const isCategorySearch = computed(() => step.value === 1)
const isFilterSearch = computed(() => step.value === 2)
const isBookingList = computed(() => step.value === 4)

const triggerOpen = useState('triggerOpen')
const triggerClose = useState('triggerClose')

watch(step, (newVal, oldVal) => {
  if (width.value <= 1000) {
    if (oldVal === 0) {
      triggerOpen.value = !triggerOpen.value
    } else if (newVal === 0) {
      triggerClose.value = !triggerClose.value
    }
  }
})


// Booking
const selectedFilters = ref([]);
const scrollArea = ref()

const BookingSearchTagsFirst = ref([
  "Баня",
  "Сауна",
  "Хаммам",
  "Тег",
  "Баня по-черному",
]);

const BookingSearchTagsSecond = ref([
  "2500 руб.",
  "10 чел.",
  "Массаж",
  "Аквазона",
  "Тег",
]);

const resetSearch = () => {
  step.value = 0
};

const resetFilters = () => {
  selectedFilters.value = [];
};

const toggleTag = (tagName) => {
  if (selectedFilters.value.includes(tagName)) {
    selectedFilters.value = selectedFilters.value.filter(
        (tag) => tag !== tagName
    );
  } else {
    selectedFilters.value.push(tagName);
  }
};

const showFilter = ref(true)

const zoomIn = useState('mapZoomIn')
const zoomOut = useState('mapZoomOut')
const mapGeolocate = ref(null)

onMounted(async () => {
  mapGeolocate.value = () => ymaps.geolocation.get({
    provider: 'browser',
    mapStateAutoApply: true
  }).then(function (result) {
    result.geoObjects.options.set('preset', 'islands#greenCircleIcon');
    window.map.geoObjects.add(result.geoObjects);
  });

  if (route.query.tab) {
    const tab = route.query.tab

    switch (tab) {
      case 'categories':
        step.value = 1
        break;
      case 'list':
        step.value = 4
        break;
    }
  }
})

watch(searchTerm, (newVal, oldVal) => {
  if (newVal.trim() && oldVal.trim() && newVal !== oldVal) {
    step.value = 2
  }
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.search {
  height: 100%;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &__controls {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    &-item {
      box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
      padding: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;

      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  }

  &__map {
    width: 100vw;
    height: 100vh;
  }

  & > div > :deep(.search-input) {
    position: absolute;
    left: 20px;
    top: 20px;
    width: calc(100% - 40px);
    max-width: 490px;

    @media (max-width: 1000px) {
      max-width: calc(100% - 40px);
    }

    input {
      border: none;
      width: 100%;
      height: 80px;

      @media (max-width: 1000px) {
        height: 70px;
      }
    }
  }

  &__nav {
    position: fixed;
    align-items: flex-end;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 15px 40px;
    flex-direction: column-reverse;

    &-btn {
      font-size: 16px;
      box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
      border: none;

      .icon-base {
        width: 24px;
      }

      @media (max-width: 1000px) {
        font-size: 23px;
      }
    }

    @media (max-width: 1000px) {
      width: calc(100vw - 40px);
      max-width: 490px;
      flex-direction: column-reverse !important;
      align-items: flex-start;
    }

    .header__nav {
      width: 490px;

      @media (max-width: 1000px) {
        width: 100%;
      }
    }

    &.left {
      left: 20px;
      right: auto;
      flex-direction: row;

      @media (max-width: 1000px) {
        //left: 50%;
        //transform: translateX(-50%);

        //width: calc(100% - 40px);
      }
    }

    @media (max-width: 1000px) {
      &:not(.left) {
        display: none;
      }
    }
  }

  .header-btn {
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  //&-input {
  //  position: absolute;
  //  left: 20px;
  //  top: 20px;
  //  max-width: 490px;
  //  width: 100%;
  //
  //  @media (max-width: 1000px) {
  //    max-width: calc(100% - 40px);
  //    width: 100%;
  //  }
  //
  //  & :deep(input) {
  //    border: none;
  //  }
  //}
}


.booking {
  height: 100%;
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.booking-search {
  border-radius: 20px;
  box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
  display: flex;
  flex-direction: column;
  background: #fff;

  &__btn {
    position: sticky;
    padding: 15px 12px;
    border-radius: 100px;
    font-size: 23px;
    display: flex;
    align-items: center;
    gap: 10px;
    bottom: 25px;
    left: 15px;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #DADEEC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    width: fit-content;
    z-index: 10;
  }

  &.p-x {
    padding: 0 15px;
  }

  &__header {
    background: #fff;
    position: sticky;
    top: -1px;
    left: 0;
    padding: 20px 0;
    width: 100%;
    z-index: 20;
  }

  &__searchbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__sort-btn {
    cursor: pointer;

    &:hover {
      svg {
        --icon-color: #{$green};
      }
    }
  }

  &__filter {
    //transition: all .4s ease-out;
    margin-top: 20px;

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 20px;
    }

    &-found {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: #3e3e51;
      }
    }

    &-more {
      position: relative;
      display: flex;

      cursor: pointer;

      .count {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);

        width: 22px;
        height: 22px;
        background: $green;
        border: 1px solid #ffffff;
        border-radius: 50%;

        color: #fff;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &-tags {
      display: flex;
      align-items: center;
      gap: 10px;

      overflow-x: scroll;

      padding-bottom: 15px;
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }

      & > * {
        flex-shrink: 0;
      }
    }

    &-btn {
      width: 35px;
      height: 35px;
      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      border: 2px solid #dadeec;
      background-color: #fff;
      //transition: background-color 0.2s border-color 0.2s;

      cursor: pointer;

      // &--slide-left {
      // }

      &.slide-left {
        &:hover {
          svg {
            --icon-color: white;
          }
        }

        svg {
          transform: translateX(-10%);
        }
      }

      &.clear {
        &:hover {
          svg {
            --icon-color: white;
          }
        }
      }

      &:hover {
        background-color: $green;
        border-color: $green;
      }
    }
  }

  &__results {
    padding-bottom: 20px;

    &::-webkit-scrollbar {
      display: none;
    }

    & > div {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>

<template>
  <div class="modal city-select__modal">
    <div class="modal__overflow" @click="emits('closeModal')"></div>
    <div class="modal__content">
      <!-- <IconClose class="modal-close" @click="emits('closeModal')" /> -->
      <Icon
        type="button"
        icon="close"
        class="modal-close"
        @click="emits('closeModal')"
      />
      <h1 class="modal-title">Выбор города</h1>
      <p class="modal-text">10 578 объявлений в 1 154 городах</p>
      <div class="modal__search">
        <UISearchInput v-model="searchTerm" placeholder="Поиск города" />
        <UIButtonClose type="button" @click="resetSearch" />
      </div>
      <div>
        <transition-group name="list" tag="div" class="modal__items">
          <div
            class="modal__items-city"
            v-for="city of filteredCities"
            :key="city"
            :class="{ active: isStringsEqual(city, selectedCity) }"
          >
            <span @click="emits('changeCity', city)"> {{ city }}</span>
          </div>
          <p v-if="!filteredCities.length">Город не найден</p>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchTerm = ref("");

const resetSearch = () => {
  searchTerm.value = "";
};

const isStringsEqual = (str1, str2) => {
  return str1.toLowerCase().includes(str2.toLowerCase());
};

const props = defineProps({
  cities: {
    type: Array,
    required: true,
  },
  selectedCity: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["closeModal", "changeCity"]);

const filteredCities = computed(() =>
  props.cities.filter((city) => isStringsEqual(city, searchTerm.value))
);
</script>

<style lang="scss" scoped>
.list-enter-active {
  animation: fade-in 0.3s ease-in-out;
}

.list-leave-active {
  animation: fade-in 0.3s ease-in-out reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}
.city-select__modal {
  &.modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    .modal__overflow {
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }

    .modal__content {
      background: #fff;
      box-shadow: 0px 0px 30px rgba(139, 138, 214, 0.3);
      border-radius: 6px;
      padding: 35px;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      max-width: 600px;
      width: 100%;

      height: 80%;
      overflow: scroll;

      @media (max-width: 768px) {
        height: 90%;
        width: 90%;
        padding: 20px;
      }
    }

    button.modal-close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .modal-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    .modal-text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: $gray;
      margin-bottom: 30px;

      @media (max-width: 768px) {
        margin-bottom: 15px;
      }
    }

    .modal__search {
      display: flex;
      align-items: center;
      gap: 20px;

      margin-bottom: 45px;

      @media (max-width: 768px) {
        margin-bottom: 30px;
        gap: 10px;
      }

      :deep(.search-input) {
        input {
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;

          @media (max-width: 768px) {
            padding: 10px 15px;
          }
        }
      }

      .btn-close {
        width: 40px;
        height: 40px;
      }
    }

    .modal__items {
      max-height: 500px;
      height: 100%;

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 18px;

      @media (max-width: 768px) {
        gap: 15px;
        max-height: 100%;
      }

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
      }

      &-city {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        transition: all 0.2s ease;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        &.active {
          span {
            color: $green;
          }
        }

        span {
          cursor: pointer;

          &:hover {
            color: $green;
          }
        }
      }
    }
  }
}
</style>

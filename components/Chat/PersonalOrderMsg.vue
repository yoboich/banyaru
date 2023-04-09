<script setup>
let activeTab = ref(1);
let secActiveTab = ref(1);
let activeProductTab = ref(1);

const tabs = [
  {
    text: 'Все',
  },
  {
    text: 'Чаты',
    notif: 1,
  },
  {
    text: 'Звонки',
  },
];
const users = [
  {
    image: "box.png",
    name: "Заказы",
    icon: "numbers.png",
    to: "/personal-order"
  },
  {
    image: "korzina.png",
    name: "Корзина",
    icon: "one.png",
    to: "/personal-order",
    class: "green"
  },
  {
    image: "your.png",
    name: "Мои объявления",
    icon: "fifti.png",
    to: "/personal-area"
  },
  {
    image: "hearts.png",
    name: "Избранное",
    to: "/personal-order"
  },
  {
    image: "support.png",
    name: "Поддержка",
    to: "/personal-order"
  },
  {
    image: "application.png",
    name: "Приложение",
    icon: "texts.png",
    to: "/personal-order"
  },
  {
    image: "notification.png",
    name: "Уведомления",
    to: "/personal-order"
  },
  {
    image: "key.png",
    name: "Конфеденциальность",
    to: "/personal-order"
  },
  {
    image: "send.png",
    name: "Поделиться приложением",
    to: "/personal-order"
  },
  {
    image: "about.png",
    name: "О нас",
    to: "/personal-order"
  },
  {
    image: "box.png",
    name: "Выйти",
    to: "/personal-order"
  },
]
</script>

<template>
  <div class="chat-msg">
    <div class="chat__tabs">
        <div class="nav__inner">
          <div class="chat-headers">
            <img src="../../assets/img/chat/useres.png" alt="user-logo" class="chat-headers__images">
            <div class="chat-headers__text">
              <div class="chat-headers__text__box">
                <h4>Светлана</h4>
                <span>+7 985 123 33 34</span>
              </div>
              <img src="../../assets/img/chat/left.png" alt="left-icon" class="chat-headers__text__images">
            </div>
          </div>
          <div class="chat-headers-last">
            <h4>15 300 ₽</h4>
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13.5" cy="14.0938" r="12.5" transform="rotate(90 13.5 14.0938)" fill="white" stroke="#DCE1F0" stroke-width="2"/>
              <path d="M5.72168 14.0938L21.278 14.0937M13.4999 21.8719L13.4999 6.31558" stroke="#32BD1B" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
    </div>
    <div class="chat-plus">
      <img src="../../assets/img/chat/plus.png" alt="plus">
      <h2>Привилегии и полный доступ</h2>
      <h4>Истекает: 21.06.23 </h4>
    </div>
    <div class="border-box">
      <img src="../../assets/img/chat/border.png" alt="border" class="borders">
    </div>
    <div class="chat-msg__sec-tab">
      <div
          class="chat-msg__sec-tab-item h3"
          :class="{ active: secActiveTab === 1 }"
          @click="secActiveTab = 1"
      >
        Все
      </div>
      <div
          class="chat-msg__sec-tab-item h3"
          :class="{ active: secActiveTab === 2 }"
          @click="secActiveTab = 2"
      >
        Пропущенные
      </div>
    </div>
    <div class="chat-msg__row"  v-for="(item, idx) in users">
      <nuxt-link :to="item.to">
        <div
            @click="activeProductTab = idx + 1"
            :class="[activeProductTab == idx + 1 ? 'chat-msg__item__active' : '']"
            :key="item"
            class="chat-msg__item chat-content__left1 paddings9"
        >
          <div class="chat-content__img1">
            <img
                :src="'/_nuxt/assets/img/chat/' + item.image"
                alt="users"
                class="chat-content__img-bg1"
            />
            <div class="chat-content__info">
              <h4 class="chat-content__name1 h3" :class="item.class">{{ item.name }}</h4>
            </div>
          </div>
          <div class="chat-content__checked imagess">
            <img :src="'/_nuxt/assets/img/chat/' + item.icon" v-if="item.icon">
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-msg {
  &__sec-tab {
    background: #ffffff;
    box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
    border-radius: 100px;
    padding: 0.3rem;
    margin-top: 1.5rem;
    overflow: hidden;

    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  &__sec-tab-item {
    flex: 1;
    padding: 1.6rem 4rem;
    text-align: center;
    cursor: pointer;
    color: $mainFontColor;

    &.active {
      background: #ffffff;
      box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
      border-radius: 100px;
    }
  }
}
.border-box {
  padding: 0 25px;
  display: flex;
  justify-content: flex-end;
  margin-top: 11px;
  & .borders {
    height: 1px;
  }
}

.chat-content__info span {
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #3E3E51;
}

.h4-mini {
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 9px;
  color: #8F99BA;
}

.nav {
  display: flex;
  align-items: flex-start;

  &__inner {
    display: flex;
    margin: 0 11px;
    justify-content: space-between;
  }

  &__item {
    cursor: pointer;
    padding: 1.5rem 3rem 1.5rem;
    border-top: 1px solid rgba(143, 153, 186, 0.15);
    border-right: 1px solid rgba(143, 153, 186, 0.15);
    border-radius: 6px 6px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;

    & span {
      font-size: 10px;
      display: flex;
      background: #32BD1B;
      color: white;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      padding: 3px;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(1) {
      border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
    }

    &_active {
      color: #32BD1B;
      border: none;
      background: #ffffff;
      box-shadow: 0px -3px 9px rgba(136, 152, 206, 0.19);
      border-radius: 6px 6px 0px 0px;
    }
  }
}

.paddings9 {
  padding: 10px!important;
}
.green {
  color: #32BD1B;
}

.chat-msg {
  &__help {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    gap: 1.4rem;
    background: #FFFFFF;
    border: 2px solid #32BD1B33;
    border-radius: 12px;
    padding: 15px;
  }

  &__help-name {
    color: $mainFontColor;
    margin-bottom: 0.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 14px;
  }

  &__help-text {
    color: $secondary-color;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 11px;
  }

  &__row {
    @media screen and (max-width: 768px) {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__item {
    margin: 10px 0;
    border-bottom: 1px solid rgba(143, 153, 186, 0.1333333333);
    transition: all 0.2s linear;
    cursor: pointer;
    padding: 15px;
    border-radius: 12px;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
      box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
      border: none;
      border-radius: 12px;
      padding: 1rem 2rem;
    }

    &__active {
      background: #FFFFFF;
      box-shadow: 5px 5px 21px rgba(136, 152, 206, 0.19);
    }

    &:last-child {
      border: none;
    }
  }
}

.text-span {
  font-size: 10px;
  display: flex;
  background: #32BD1B;
  color: white;
  border-radius: 50%;
  width: 10px;
  height: 11px;
  padding: 3px;
  align-items: center;
  justify-content: center;
  transform: translateY(30px) translateX(10px);
}

.help-logo {
  width: 50px;
}

.chat-headers {
  display: flex;
  align-items: center;

  &__images {
    width: 60px;
  }
  &__text {
    display: flex;
    align-items: center;
    &__box {
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      & h4 {
        font-size: 20px;
        color: #3E3E51;
      }
      & span {
        font-size: 14px;
        color: #8F99BA;
        margin-top: 5px;
      }
    }
    &__images {
      margin: 0 10px;
    }
  }
}
.chat-headers-last {
   display: flex;
  align-items: center;
  margin-left: 10px;
  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3E3E51;
    margin: 0 10px 0;
  }
  & img {
    width: 27px;
    margin-left: 20px;
  }
}
.chat-plus {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  margin: 19px 0 0;
  padding: 0 8px 0;
  & img {
    width: 62px;
  }
  & h2 {
    font-size: 11px;
    color: #8F99BA;
    margin-right: 5px;
    @media(max-width: 1400px) {
      margin: 0 17px;
    }
  }
  & h4 {
    font-size: 11px;
    color: #3E3E51;
  }
}
</style>

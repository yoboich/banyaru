<template>
  <section class="chat">
    <div class="container">
      <div class="chat__sidebar">
        <h1 class="chat__sidebar-title">Чаты</h1>
        <div class="chat__sidebar-tabs" ref="tabs">
          <div
            class="chat__sidebar-tab"
            :class="{ active: activeTab === i }"
            v-for="(tab, i) of tabLabels"
            @click="changeTab(i)"
            :key="i"
          >
            {{ tab }}
          </div>
          <div
            class="line"
            :style="{ left: lineLeft + 'px', width: lineWidth + 'px' }"
          ></div>
        </div>
        <div class="chat__sidebar-items">
          <div class="chat__help">
            <img
              src="~/assets/icons/logo-icon-green.svg"
              alt=""
              class="chat__help-image"
            />
            <div class="chat__help-info">
              <h3 class="chat__help-title">Поддержка баня.ру</h3>
              <p class="chat__help-text">
                Задавайте вопросы, мы неприменно на них ответим
              </p>
            </div>
          </div>
          <ChatItem unread="3" />
          <ChatItem v-for="i of 10" :key="i" />
        </div>
      </div>
      <div class="chat__content">
        <div class="chat__content-header">
          <div class="chat__content-info">
            <ChatImageThumb />
            <div class="chat__content-details">
              <h3 class="chat__content-username">Светлана</h3>
              <span class="chat__content-service">Массаж в 4 руки...</span>
              <span class="chat__content-price">от 2000 ₽</span>
              <span class="chat__content-status">в сети</span>
            </div>
          </div>
          <Icon icon="phone" color="green" :hover="false" />
        </div>
        <div class="chat__main">
          <span class="chat__main-date">21.01.23</span>
          <div class="chat__main-messages">
            <ChatMessage class="from" message="Привет" />
            <ChatMessage
              last
              class="from"
              message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте" />
            <ChatMessage
              class="to"
              last
              message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <!-- FAKE -->

            <ChatMessage class="from" message="Привет" />
            <ChatMessage
              last
              class="from"
              message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте" />
            <ChatMessage
              class="to"
              last
              message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <ChatMessage class="from" message="Привет" />
            <ChatMessage
              last
              class="from"
              message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте" />
            <ChatMessage
              class="to"
              last
              message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <ChatMessage class="from" message="Привет" />
            <ChatMessage
              last
              class="from"
              message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте" />
            <ChatMessage
              class="to"
              last
              message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
          </div>
          <div class="chat__inputbox">
            <div class="chat__inputbox-header">
              <div class="chat__inputbox-left">
                <span>Спросить у продавца</span>
                <div class="chat__inputbox-suggestions">
                  <button class="chat__inputbox-suggestion">Баня</button>
                  <button class="chat__inputbox-suggestion">Баня</button>
                </div>
              </div>
              <button class="chat__inputbox-btn">
                <img src="~/assets/icons/chat-arrow-down-gray.svg" alt="" />
                <div class="chat__inputbox-unread">12</div>
              </button>
            </div>
            <div class="chat__inputbox-content">
              <label for="file-input" class="chat__inputbox-file">
                <input id="file-input" type="file" />
                <img src="~/assets/icons/clip-gray.svg" alt="" />
              </label>
              <label for="" class="chat__inputbox-input">
                <input type="text" placeholder="Написать сообщение" />
                <Icon icon="camera" color="green" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "header-only",
});

const tabElements = ref();

const tabs = ref();
const activeTab = ref(0);
const tabLabels = ["Все", "Чаты", "Звонки"];
const lineWidth = ref(0);
const lineLeft = ref(0);

onMounted(() => {
  tabElements.value = tabs.value.querySelectorAll(".chat__sidebar-tab");
  changeTab(0);
});

const changeTab = (i) => {
  activeTab.value = i;

  const tab = tabElements.value[i];

  lineWidth.value = tab.offsetWidth;
  lineLeft.value = tab.offsetLeft;
};
</script>

<style lang="scss" scoped>
.chat {
  .container {
    display: grid;
    grid-template-columns: 4fr 9fr;
    background: #ffffff;
    box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.4);
    border-radius: 25px;
    padding: 0;
    overflow: hidden;
    height: 80vh;
  }

  &__help {
    padding: 25px;
    background: #ffffff;
    border: 2px solid rgba($color: $green, $alpha: 0.3);
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 15px;

    &-title {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 5px;
    }

    &-text {
      color: $gray;
    }
  }

  &__sidebar {
    padding: 30px 5px 30px 15px;
    border-right: 1px solid rgba($color: $gray, $alpha: 0.2);

    display: flex;
    flex-direction: column;
    overflow: hidden;

    &-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 40px;
      margin-left: 20px;
    }

    &-tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      position: relative;
      margin-bottom: 30px;

      .line {
        position: absolute;
        bottom: 0;
        height: 3px;
        border-radius: 3px;
        background: $green;
        transition: all 0.3s;
      }
    }

    &-tab {
      font-size: 16px;
      padding: 0 15px 10px;
      transition: all 0.2s;
      cursor: pointer;

      &.active,
      &:hover {
        color: $green;
      }
    }

    &-items {
      flex: 1 1 auto;
      padding-right: 10px;
      overflow-y: scroll;
      position: relative;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 5px;
        box-shadow: inset 0px 0px 6px rgba(136, 152, 206, 0.46);
      }

      &::-webkit-scrollbar-thumb {
        background: $gray;
        border-radius: 5px;
        border: 3px solid transparent;
        background-clip: padding-box;
      }

      & > div:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &-header {
      padding: 10px 40px 15px 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);
    }

    &-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-details {
      display: flex;
      flex-direction: column;
    }

    &-username {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }

    &-status {
      color: $green;
    }
  }

  &__main {
    padding: 5px 5px 170px 10px;
    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: hidden;

    &-messages {
      padding-top: 40px;
      padding-bottom: 100px;
      flex: 1 1 auto;
      overflow: auto;

      & .last:nth-last-of-type(3) {
        & :deep(.message__answer-time) {
          display: block;
        }
      }

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 5px;
        box-shadow: inset 0px 0px 6px rgba(136, 152, 206, 0.46);
      }

      &::-webkit-scrollbar-thumb {
        background: $gray;
        border-radius: 5px;
        border: 3px solid transparent;
        background-clip: padding-box;
      }

      // .to {
      //   height: 1000px;
      // }
    }

    &-date {
      padding: 2px 7px;
      font-size: 11px;
      line-height: 13px;
      color: #fff;
      background: #d3d9ea;
      border-radius: 100px;
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__inputbox {
    width: calc(100% - 20px);
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 11px 29px rgba(123, 129, 148, 0.19);
    border-radius: 25px;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    &-suggestions {
      margin-top: 15px;
      display: flex;
      gap: 20px;
    }

    &-left {
      span {
        font-size: 16px;
      }
    }

    &-btn {
      width: 45px;
      height: 45px;
      background: #ffffff;
      box-shadow: 0px 2px 16px rgba(123, 129, 148, 0.12);
      border-radius: 50%;
      position: relative;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: rgba($color: $light-gray, $alpha: 0.7);
      }

      img {
        transform: translateY(15%);
      }
    }

    &-unread {
      position: absolute;
      border-radius: 100px;
      padding: 0 5px;
      font-size: 11px;
      line-height: 13px;
      color: #fff;
      top: 0;
      left: 50%;
      transform: translate(-50%, -25%);
      background: $green;
    }

    &-suggestion {
      padding: 5px 10px;
      border: 2px solid #dadeec;
      border-radius: 100px;
      transition: all 0.2s;
      cursor: pointer;

      font-size: 16px;

      &:hover {
        border-color: $green;
        background: $green;
        color: #fff;
      }
    }

    &-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-file {
      position: relative;
      cursor: pointer;

      input {
        display: none;
      }
    }

    &-input {
      flex: 1;
      position: relative;

      input {
        width: 100%;
        background: #ffffff;
        border: 2px solid #dadeec;
        border-radius: 100px;
        padding: 10px 60px 10px 10px;
      }

      button {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
      }
    }
  }
}
</style>

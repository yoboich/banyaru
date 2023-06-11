<template>
  <section class="chat">
    <Teleport to="body">
      <Call ref="callElement"/>
    </Teleport>
    <div class="container" v-if="width > 1000">
      <div class="chat__sidebar">
        <h1 class="chat__sidebar-title">Чаты</h1>
        <ProfileTabs class="chat__sidebar-tabs" :tabs="tabLabels"/>
        <div class="chat__sidebar-items">
          <div class="chat__help">
            <IconBase icon="logo" color="green"/>
            <div class="chat__help-info">
              <h3 class="chat__help-title">Поддержка баня.ру</h3>
              <p class="chat__help-text">
                Задавайте вопросы, мы неприменно на них ответим
              </p>
            </div>
          </div>
          <ChatItem unread="3"/>
          <ChatItem v-for="i of 10" :key="i"/>
        </div>
      </div>
      <div class="chat__content">
        <div class="chat__content-header">
          <div class="chat__content-info">
            <ChatImageThumb/>
            <div class="chat__content-details">
              <h3 class="chat__content-username">Светлана</h3>
              <span class="chat__content-service">Массаж в 4 руки...</span>
              <span class="chat__content-price">от 2000 ₽</span>
              <span class="chat__content-status">в сети</span>
            </div>
          </div>
          <button class="btn-call" @click="callUser">
            <IconBase icon="phone-outline" color="green"/>
          </button>
        </div>
        <div class="chat__main">
          <span class="chat__main-date">21.01.23</span>
          <div class="chat__main-messages">
            <ChatMessage class="from" message="Привет"/>
            <ChatMessage
                last
                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <!-- FAKE -->

            <ChatMessage class="from" message="Привет"/>
            <ChatMessage
                last
                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <ChatMessage class="from" message="Привет"/>
            <ChatMessage
                last
                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <ChatMessage class="from" message="Привет"/>
            <ChatMessage
                last
                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
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
                <IconBase icon="chat-arrow-down" color="gray"/>
                <div class="chat__inputbox-unread">12</div>
              </button>
            </div>
            <div class="chat__inputbox-content">
              <label for="file-input" class="chat__inputbox-file">
                <input id="file-input" type="file"/>
                <IconBase icon="clip" color="gray"/>
              </label>
              <label for="" class="chat__inputbox-input">
                <input type="text" placeholder="Написать сообщение"/>
                <button class="btn-camera">
                  <IconBase icon="camera" color="gray"/>
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="chat__content">

        <div class="chat__content-header">
          <button class="chat-mobile__btn">
            <nuxt-link to="/chat">
              <IconBase icon="arrow-left" color="green"/>
            </nuxt-link>
          </button>
          <div class="chat__content-info">
            <ChatImageThumb/>
            <div class="chat__content-details">
              <h3 class="chat__content-username">Светлана</h3>
              <span class="chat__content-service">Массаж в 4 руки...</span>
              <span class="chat__content-price">от 2000 ₽</span>
              <span class="chat__content-status">в сети</span>
            </div>
          </div>

          <button class="btn-call" @click="callUser">
            <IconBase icon="phone-outline" color="green"/>
          </button>
        </div>
        <div class="chat__main">
          <span class="chat__main-date">21.01.23</span>
          <div class="chat__main-messages">
            <ChatMessage class="from" message="Привет" last/>
            <ChatMessage

                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <!-- FAKE -->

            <ChatMessage class="from" message="Привет" last/>
            <ChatMessage

                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <ChatMessage class="from" message="Привет" last/>
            <ChatMessage
                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
            <ChatMessage last class="from" message="Привет"/>
            <ChatMessage
                class="from"
                message="Запрос отправлен администратору.
Ожидайте сообщения с подтверждением или отказом"
            />
            <ChatMessage class="to" message="Здравствуйте"/>
            <ChatMessage
                read
                class="to"
                last
                message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae rerum excepturi dolore quam, in asperiores. Cum doloremque eaque a!"
            />
          </div>
          <div class="chat__inputbox">
            <div class="chat__inputbox-header">
              <div class="chat__inputbox-suggestions">
                <button class="chat__inputbox-suggestion">Тестовый вариант</button>
                <button class="chat__inputbox-suggestion">Баня</button>
                <button class="chat__inputbox-suggestion">Сауна</button>
              </div>
              <button class="chat__inputbox-btn">
                <IconBase icon="chat-arrow-down" color="gray"/>
                <div class="chat__inputbox-unread">12</div>
              </button>
            </div>
            <div class="chat__inputbox-content">
              <label for="file-input" class="chat__inputbox-file">
                <input id="file-input" type="file"/>
                <IconBase icon="clip" color="gray"/>
              </label>
              <label for="" class="chat__inputbox-input">
                <input type="text" placeholder="Написать сообщение"/>
              </label>
              <button class="chat__inputbox-send">
                <IconBase icon="send"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()
const callElement = ref()

definePageMeta({
  layout: "purchases",
});

const tabLabels = ["Все", "Чаты", "Звонки"];


const callUser = () => callElement.value?.dialog.showModal()
</script>

<style lang="scss" scoped>
.mobile {
  .chat {
    &__main {
      padding: 0 0 120px;

      &-messages {
        &::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1000px) {
          padding-bottom: 0;
        }
      }
    }

    &__content {
      &-header {
        width: 100%;
        padding: 10px;
        justify-content: flex-start;
        gap: 40px;

        .btn-call {
          margin-left: auto;
        }
      }
    }

    .container {
      padding: 0;
    }

    &__inputbox {
      box-shadow: none;
      background: #fff;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 10px 10px 15px;
      border-radius: 25px 25px 0 0;

      &-content {
        align-items: center;
      }

      &-btn {
        position: absolute;
        right: 0;
        top: -100%;

        &:hover {
          background: #fff;
        }
      }

      &-send {
        @include flex-center-all;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: $green;

        @media (max-width: 1000px) {
          width: 55px;
          height: 55px;
        }
      }

      &-input {

        input {
          height: 30px;
          padding: 10px;

          @media (max-width: 1000px) {
            height: 55px;
          }
        }
      }

      &-file {
        @media (max-width: 1000px) {
          width: 55px;
          height: 55px;
          background: $green;
          border-radius: 50%;

          .icon-base {
            --icon-color: white;
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
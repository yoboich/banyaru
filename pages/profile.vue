<script setup>
import { useWindowSize } from '@vueuse/core';
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted, nextTick, defineExpose } from 'vue';

const APP_ID = '452f99a0814b44d29d9a446ec20356fc';
const CHANNEL = 'wdj';
let client = AgoraRTM.createInstance(APP_ID);
let uid = uuidv4();
let text = ref('');
let messagesRef = ref(null);
let messages = ref([]);
let channel;
const route = useRoute();
const isLarge = ref(true);
const navIsShown = ref(true);
const input = ref('')
const { width } = useWindowSize();
let activeTab = ref(1);
const products = [
  {
    image: "no-photos.png",
  },
  {
    image: "girlla.png",
  },
  {
    image: "girlla.png",
  },
  {
    image: "girlla.png",
  },
]

defineExpose({ messagesRef });
const appendMessage = async (message) => {
  messages.value.push(message);
  await nextTick();
  messagesRef.value.scrollTop =
      messagesRef.value.scrollHeight;
};

watchEffect(() => {
  if (route.name.includes('chat-') && width.value <= 768) {
    navIsShown.value = false;
  } else {
    navIsShown.value = true;
  }
  if (width.value <= 768) {
    isLarge.value = false;
  } else {
    isLarge.value = true;
  }
});
onMounted(async () => {
  await client.login({ uid, token: null });
  channel = await client.createChannel(CHANNEL);
  await channel.join();
  channel.on('ChannelMessage', (message, peerId) => {
    appendMessage({
      text: message.text,
      uid: peerId,
    });
  });
  if (route.name.includes('chat-') && width.value <= 768) {
    navIsShown.value = false;
  } else {
    navIsShown.value = true;
  }
  if (width.value <= 768) {
    console.log('hello');
    isLarge.value = false;
  } else {
    isLarge.value = true;
  }
});

function sendMessage() {
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (text.value === '') return;
      channel.sendMessage({ text: text.value, type: 'text' });
      appendMessage({
        text: text.value,
        uid,
      });
      text.value = '';
    }
  })
}

definePageMeta({
  layout: 'cabinet',
});
</script>

<template>
  <div class="chat">
    <div class="container width">
      <div class="chat__inner">
        <div class="card chat-card">
          <div class="chat-card__content">
            <div class="chat-header">
              <div class="header-title">
                <h4 class="chat-aside__title h1">Профиль</h4>
              </div>
            </div>
            <div class="chats">
              <div class="websoket-chat">
                <div class="websoket-chat__content">
                  <div class="flex-wrapper">
                    <div class="profiles">
                      <div class="profile">
                        <img src="../assets/img/chat/profile-users.png" alt="profile-users">
                        <div class="profile-text">
                          <div class="profile-text-box">
                            <h4>Анатолий</h4>
                            <span>в сети</span>
                          </div>
                          <p>На Баня.ру с декабря 2015</p>
                          <img src="../assets/img/chat/profile-like.png" alt="profile-like">
                        </div>
                      </div>
                      <div class="nav">
                        <div class="nav__inner">
                          <div
                              @click="activeTab = 1"
                              :class="[activeTab == 1 ? 'nav__item_active' : '']"
                              class="nav__item"
                          >
                            Активнх <span>22</span>
                          </div>
                          <div
                              @click="activeTab = 2"
                              :class="[activeTab == 2 ? 'nav__item_active' : '']"
                              class="nav__item"
                          >
                            Завершенных <span>41</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="phone-btn-wrapper">
                      <button class="phone-btn-wrapper__btn">+77 777 77 7..</button>
                      <button class="phone-btn-wrapper__message">
                        <img src="../assets/img/chat/btn-message.png" alt="message">
                        Чат
                      </button>
                      <img src="../assets/img/chat/importas.png" alt="importas">
                    </div>
                  </div>
                  <div class="chat-wrap">
                    <div class="chat-child-flex">
                      <div class="chat-wrap-product" v-for="item in products">
                        <div class="product-imagesss">
                          <img :src="'/_nuxt/assets/img/chat/' + item.image" alt="free">
                        </div>
                        <div class="chat-wrap-product-text">
                          <div class="flex">
                            <h4>Сауны</h4>
                            <svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.29688" cy="2.95312" r="2" fill="#32BD1B"/>
                              <circle cx="10.2969" cy="2.95312" r="2" fill="#32BD1B"/>
                              <circle cx="18.2969" cy="2.95312" r="2" fill="#32BD1B"/>
                            </svg>
                          </div>
                          <h4>Сауна Дионис-СПА</h4>
                          <h2>22 300 ₽ </h2>
                          <span>ул. Тимирязьева, м. Могилевская</span>
                          <img src="../assets/img/chat/product-like.png" alt="product-like" class="product-like">
                        </div>
                      </div>
                    </div>
                    <div class="chat-child-flex">
                    <div class="chat-wrap-product" v-for="item in products">
                      <div class="products-images">
                        <img src="../assets/img/chat/freees.png" alt="free">
                      </div>
                      <div class="chat-wrap-product-text">
                        <div class="flex">
                          <h4>Сауны</h4>
                          <svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.29688" cy="2.95312" r="2" fill="#32BD1B"/>
                            <circle cx="10.2969" cy="2.95312" r="2" fill="#32BD1B"/>
                            <circle cx="18.2969" cy="2.95312" r="2" fill="#32BD1B"/>
                          </svg>
                        </div>
                        <h4>Сауна Дионис-СПА</h4>
                        <h2>22 300 ₽ </h2>
                        <span>ул. Тимирязьева, м. Могилевская</span>
                        <img src="../assets/img/chat/product-like.png" alt="product-like" class="product-like">
                      </div>
                    </div>
                  </div>
                    <div class="chat-child-flex">
                      <div class="chat-wrap-product" v-for="item in products">
                        <div class="products-images">
                          <img src="../assets/img/chat/freees.png" alt="free">
                        </div>
                        <div class="chat-wrap-product-text">
                          <div class="flex">
                            <h4>Сауны</h4>
                            <svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.29688" cy="2.95312" r="2" fill="#32BD1B"/>
                              <circle cx="10.2969" cy="2.95312" r="2" fill="#32BD1B"/>
                              <circle cx="18.2969" cy="2.95312" r="2" fill="#32BD1B"/>
                            </svg>
                          </div>
                          <h4>Сауна Дионис-СПА</h4>
                          <h2>22 300 ₽ </h2>
                          <span>ул. Тимирязьева, м. Могилевская</span>
                          <img src="../assets/img/chat/product-like.png" alt="product-like" class="product-like">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-wrap-product-text-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .boxs {
    display: flex;
    align-items: center;
    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 11px;
      color: #3E3E51;
      margin: 0 10px 0;
    }
  }
  & img {
    width: 24px;
    height: 6px;
  }
}
.green {
  background-color: #32BD1B;
}
.red {
  background-color: #EA4E3D;
}
.purple {
  background-color: #A169F7;
}
.range {
  background-color: #FABA17;
}
.silver {
  background-color: #8F99BA;
}
.wrap-background {
  width: 10px;
  height: 10px;
  border-radius: 50px;
}
.chat {
  margin-top: 2.5rem;
  flex: 1 1 auto;

  @media screen and (max-width: 768px) {
    margin: 0;
    overflow: hidden;
  }
}
.chat-wrap {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 30px;
}
.chat-card {
  padding: 0;
  height: 77rem;
  overflow: hidden;
  margin: 10px 0 0;
  @media(max-width: 1400px) {
    height: 89rem;
  }
}
.chat-aside {
  width: 40%;
  padding: 5px 10px 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 60vh;
  @media(max-width: 1400px) {
    height: 64vh;
  }

  @media(max-height: 800px) {
    height: 64vh!important;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
    padding: 1.8rem;
  }
  &__title {
    color: $mainFontColor;
    padding: 33px 30px 5px;
    width: fit-content;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
.chat-main {
  width: 100%;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #FFFFFF;
  box-shadow: inset 0px 0px 6px rgba(136, 152, 206, 0.46);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background: #8F99BA;
  border-radius: 6px;
  max-height: 20px;
  height: 20px;
}
.chat-header {
  display: flex;
  align-items: center;
  &__item {
    width: 100%;
    padding: 5px 30px 10px 10px;
    border-left: 1px solid #8F99BA22;
    &__image {
      display: flex;
      align-items: center;
      & img {
        width: 96px;
      }
      &__text {
        margin: 0 20px 0;
        & h4 {
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #3E3E51;
        }
        & span {

          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 12px;
          color: #3E3E51;
        }
        & p {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #32BD1B;
        }
      }
    }
  }
}

.left-images {
  width: 60px;
  transform: translateY(10px) !important;
}
.left-transform {
  transform: translateY(63px) !important;
}
.right-chats img {
  width: 60px;
  transform: translateY(10px);
}
.right-messages, .left-messages {
  margin: 10px 0 0;
}
.right-chats {
  background: #D8FFD1;
  margin: 0 10px 0;
  padding: 10px 13px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3E3E51;
  }
}
.right {
  background: #D8FFD1!important;
}
.widthsss {
  width: 382px;
  margin: 10px 52px 0!important;
  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3E3E51;
  }
}
.websoket-chat {
  width: 100%;
  margin: 0 6px 0;
  position: relative;
  .websoket-chat__content {
    padding: 15px 10px 0;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #8F99BA22;
    position: relative;
    &__date {
      width: 58px;
      height: 17px;
      background: #D3D9EA;
      border-radius: 100px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      & span {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 11px;
        color: #FFFFFF;
      }
    }
    &__left {
      display: flex;
      align-items: center;
      margin: 10px 0 0;
      &__image {
        width: 41px;
        height: 41px;
        background: #FFFFFF;
        border: 3px solid #FFFFFF;
        box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    .left-chats {
      background: #F1F3F8;
      margin: 0 10px 10px;
      padding: 10px 13px;
      border-radius: 23px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #3E3E51;
      }
    }
  }
  &__form {
    background: #FFFFFF;
    box-shadow: 0px 11px 29px rgba(123, 129, 148, 0.19);
    border-radius: 23px;
    width: 98%;
    height: 140px;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    right: 0;
    left: 0;
    transform: translateY(-20px);

    @media(max-width: 1500px) {
      bottom: auto;
      transform: translateY(-13px);
    }
  }
}
.websoket-chat__form{
  & h4 {
    padding: 10px 20px 0;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3E3E51;
  }
}
.chat-block{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .chat-form {
    display: flex;
    align-items: center;
    padding: 0 20px;
    & button {
      width: 157px;
      height: 30px;
      background: #FFFFFF;
      box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.22);
      border-radius: 100px;
      border: none;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #3E3E51;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }
  }
  & img {
    width: 60px;
    height: 60px;
    transform: translateX(-20px);
  }
}
.chat-inputs {
  display: flex;
  align-items: center;
  padding: 0 19px 0;
  & img {
    width: 27px;
    height: 27px;
  }
  .inputs {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    margin: 0 0 0 20px;
    & img {
      position: absolute;
      right: 0;
      transform: translateX(-20px);
    }
    & input {
      width: 100%;
      height: 34px;
      background: #FFFFFF;
      border: 2px solid #DCE1F0;
      border-radius: 1000px;
      padding: 0 10px 0;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #8F99BA;
      outline: none;

      &::placeholder {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #8F99BA;
      }
    }
  }
}
.left-messages {
  margin: 10px 40px 0;
}
.header-title {
  width: 44.8%;
  @media(max-width: 1400px) {
    width: 36.2%;
  }
}
.chats{
  display: flex;
}
.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  max-width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.message {
  display: flex;
  margin: 20px 52px 0;
  width: 382px;
}
.user-self {
  color: green;
}
.user-them {
  color: red;
  position: absolute;
  right: 0;
}
form {
  position: relative;
  display: flex;
}
input {
  width: 100%;
  border: none;
  height: 20px;
  padding: 8px;
  border-top: 1px solid #999;
  border-radius: 0px;
  outline: none;
}
button {
  border: none;
  outline: none;
  background: none;
  position: absolute;
  right: 3px;
  top: 4px;
  font-size: 24px;
}
.content-right {
  position: absolute;
  right: 0;
  transform: translateY(72px);
}
.nav {
  margin: 0 35px 0;
  &__inner {
    display: flex;
    align-items: center;
  }
  &__item {
    width: fit-content;
    cursor: pointer;
    padding: 2rem 3.4rem 1rem;
    border-top: 1px solid rgb(56%, 60%, 73%, 0.15);
    border-right: 1px solid rgb(56%, 60%, 73%, 0.15);
    border-radius: 6px 6px 0px 0px;
    &:nth-child(1) {
      border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
    }
    &_active {
      color: $green-color;
      padding: 2rem 3.4rem 1rem;
      border: none;
      background: #ffffff;
      box-shadow: 0px -12px 15px rgba(136, 152, 206, 0.19);
      border-radius: 6px 6px 0px 0px;
    }
  }
}
.products-images {
  width: 110px;
  height: 100px;
  background-image: url("assets/img/chat/girl-sauna.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
}
.chat-wrap-product {
  display: flex;
  align-items: center;
  margin: 11px 0;
}
.product-imagesss img{
  width: 110px;
  height: 100px;
}
.chat-wrap-product-text {
  margin: 0 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  & img {
    transform: translateX(-8px);
    width: 100px;
  }
  & h4 {
    font-size: 14px;
    color: #3E3E51;
  }
  & h2 {
    font-weight: 700;
    font-size: 16px;
    color: #3E3E51;
  }

  & span{
    font-weight: 500;
    font-size: 11px;
    color: #8F99BA;
  }
  & .product-like {
    width: 210px!important;
    display: block;
    margin: 6px 0 0;
    transform: translateX(1px);
  }
}
.chat-btns {
  display: flex;
  align-items: center;
  margin-top: 55px;
  bottom: 0;
  @media(max-width: 1400px) {
    margin-top: 100px;
  }
  & button {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
    border-radius: 100px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32BD1B;
    position: relative !important;
    justify-content: center;
    margin: 0 20px 0;
  }
}
.chat-footer-texts {
  position: absolute;
  bottom: 0;
  margin: 0 43px;
  transform: translateY(-30px);
  width: 24%;
  cursor: pointer;
  @media(max-width: 1400px) {
    margin: 0 20px;
  }
  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
  }
}
.chat-footer-texts-flex {
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
  & h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3E3E51;
  }
}
.products-images img {
  width: 60px;
}
.profiles {
  display: flex;
  align-items: flex-end;
  padding: 3px 20px 35px;
  @media(max-width: 1500px) {
    padding: 3px 20px 0;
  }
  .profile {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .profile-text {
      font-family: 'Lato', sans-serif;
      margin: 0 10px 0;
      & p {
        font-weight: 500;
        font-size: 14px;
        color: #8F99BA;
      }
      & img {
        width: 210px;
        height: 20px;
      }
      .profile-text-box {
        font-family: 'Lato', sans-serif;
        display: flex;
        align-items: flex-end;
        h4 {
          font-weight: 500;
          font-size: 20px;
          color: #3E3E51;
        }
        span {
          font-weight: 500;
          font-size: 11px;
          color: #32BD1B;
          margin: 0 20px 0;
        }
      }
    }
  }
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h4 {
    color: #8F99BA;
  }
}
.flex-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.phone-btn-wrapper {
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
  &__btn {
    width: 161px;
    height: 50px;
    background: #32BD1B;
    border-radius: 100px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
    position: relative;
  }
  &__message {
    width: 162px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 100px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3E3E51;
    position: relative;
    margin: 0 20px 0;
    & img {
      width: 25.19px!important;
      height: 23.23px!important;
      margin-right: 10px;
      transform: translateX(0) !important;
    }
  }
  & img {
    width: 81px;
    height: 81px;
    transform: translateX(-20px);
  }
}
</style>

<script setup>
import { useWindowSize } from "@vueuse/core";
import AgoraRTM from "agora-rtm-sdk";
import { v4 as uuidv4 } from "uuid";
import { ref, onMounted, nextTick, defineExpose } from "vue";

const APP_ID = "452f99a0814b44d29d9a446ec20356fc";
const CHANNEL = "wdj";
let client = AgoraRTM.createInstance(APP_ID);
let uid = uuidv4();
let text = ref("");
let messagesRef = ref(null);
let messages = ref([]);
let channel;
const route = useRoute();
const isLarge = ref(true);
const navIsShown = ref(true);
const input = ref("");
const { width } = useWindowSize();
let activeTab = ref(1);
const modal = ref(false);
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
];

defineExpose({ messagesRef });
const appendMessage = async (message) => {
  messages.value.push(message);
  await nextTick();
  messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
};

watchEffect(() => {
  if (route.name.includes("chat-") && width.value <= 768) {
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
  channel.on("ChannelMessage", (message, peerId) => {
    appendMessage({
      text: message.text,
      uid: peerId,
    });
  });
  if (route.name.includes("chat-") && width.value <= 768) {
    navIsShown.value = false;
  } else {
    navIsShown.value = true;
  }
  if (width.value <= 768) {
    console.log("hello");
    isLarge.value = false;
  } else {
    isLarge.value = true;
  }
});

function sendMessage() {
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (text.value === "") return;
      channel.sendMessage({ text: text.value, type: "text" });
      appendMessage({
        text: text.value,
        uid,
      });
      text.value = "";
    }
  });
}
const open = () => {
  modal.value = true;
};
const close = () => {
  modal.value = false;
};
definePageMeta({
  layout: "cabinet",
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
                        <img
                          src="../assets/img/chat/profile-users.png"
                          alt="profile-users"
                        />
                        <div class="profile-text">
                          <div class="profile-text-box">
                            <h4>Анатолий</h4>
                            <span>в сети</span>
                          </div>
                          <p>На Баня.ру с декабря 2015</p>
                          <img
                            src="../assets/img/chat/profile-like.png"
                            alt="profile-like"
                          />
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
                      <button class="phone-btn-wrapper__btn" @click="open">
                        +77 777 77 7..
                      </button>
                      <button class="phone-btn-wrapper__message">
                        <img
                          src="../assets/img/chat/btn-message.png"
                          alt="message"
                        />
                        Чат
                      </button>
                      <img
                        src="../assets/img/chat/importas.png"
                        alt="importas"
                      />
                    </div>
                  </div>
                  <div class="chat-wrap">
                    <div class="chat-child-flex">
                      <div class="chat-wrap-product" v-for="item in products">
                        <div class="product-imagesss">
                          <img
                            :src="'/_nuxt/assets/img/chat/' + item.image"
                            alt="free"
                          />
                        </div>
                        <div class="chat-wrap-product-text">
                          <div class="flex">
                            <h4>Сауны</h4>
                            <svg
                              width="21"
                              height="5"
                              viewBox="0 0 21 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.29688"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                              <circle
                                cx="10.2969"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                              <circle
                                cx="18.2969"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                            </svg>
                          </div>
                          <h4>Сауна Дионис-СПА</h4>
                          <h2>22 300 ₽</h2>
                          <span>ул. Тимирязьева, м. Могилевская</span>
                          <img
                            src="../assets/img/chat/product-like.png"
                            alt="product-like"
                            class="product-like"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="chat-child-flex">
                      <div class="chat-wrap-product" v-for="item in products">
                        <div class="products-images">
                          <img src="../assets/img/chat/freees.png" alt="free" />
                        </div>
                        <div class="chat-wrap-product-text">
                          <div class="flex">
                            <h4>Сауны</h4>
                            <svg
                              width="21"
                              height="5"
                              viewBox="0 0 21 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.29688"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                              <circle
                                cx="10.2969"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                              <circle
                                cx="18.2969"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                            </svg>
                          </div>
                          <h4>Сауна Дионис-СПА</h4>
                          <h2>22 300 ₽</h2>
                          <span>ул. Тимирязьева, м. Могилевская</span>
                          <img
                            src="../assets/img/chat/product-like.png"
                            alt="product-like"
                            class="product-like"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="chat-child-flex">
                      <div class="chat-wrap-product" v-for="item in products">
                        <div class="products-images">
                          <img src="../assets/img/chat/freees.png" alt="free" />
                        </div>
                        <div class="chat-wrap-product-text">
                          <div class="flex">
                            <h4>Сауны</h4>
                            <svg
                              width="21"
                              height="5"
                              viewBox="0 0 21 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.29688"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                              <circle
                                cx="10.2969"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                              <circle
                                cx="18.2969"
                                cy="2.95312"
                                r="2"
                                fill="#32BD1B"
                              />
                            </svg>
                          </div>
                          <h4>Сауна Дионис-СПА</h4>
                          <h2>22 300 ₽</h2>
                          <span>ул. Тимирязьева, м. Могилевская</span>
                          <img
                            src="../assets/img/chat/product-like.png"
                            alt="product-like"
                            class="product-like"
                          />
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
  <div class="popup" v-if="modal">
    <div class="popup-container">
      <div class="popup-content">
        <div class="popup-header">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="26" height="24" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_2655_20363"
                  transform="matrix(0.0138979 0 0 0.015056 0 -0.0119048)"
                />
              </pattern>
              <image
                id="image0_2655_20363"
                width="238"
                height="68"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <h4>Звонок через Баня.ру</h4>
        </div>
        <div class="popup-main">
          <img src="../assets/img/chat/profile-chat.png" alt="profile-users" />
          <h2>Анатолий</h2>
          <h4>Соединяем...</h4>
        </div>
        <div class="popup-footer">
          <div class="popup-footer-image">
            <img
              src="../assets/img/chat/profile-girls.png"
              alt="profile-girls"
            />
            <div class="popup-text">
              <h4>Сауны</h4>
              <h4>Сауна Дионис-СПА</h4>
              <h2>22 300 ₽</h2>
            </div>
          </div>
          <div class="popup-footer-btn">
            <button class="bg-red" @click="close">
              <svg
                width="34"
                height="15"
                viewBox="0 0 34 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.1052 5.15891C1.44041 6.8237 0.794644 8.42404 0.899428 10.5436C0.899562 10.692 0.909256 10.8466 0.918782 10.989C0.991536 12.1724 1.36839 13.1043 1.97556 13.7115C2.68529 14.4212 3.71506 14.6782 5.15326 14.4215L9.93825 13.5639C11.4458 13.2892 12.52 12.3206 12.5229 10.7268L12.5199 9.31114C12.5178 8.81468 12.7338 8.57284 13.2019 8.49396C14.0576 8.32187 15.8862 8.20258 17.2211 8.20209C18.578 8.19559 20.038 8.29448 20.9953 8.49311C21.4585 8.59361 21.6688 8.82295 21.671 9.3194L21.6783 10.7273C21.6746 12.3306 22.7567 13.3106 24.257 13.5768L29.1237 14.4448C30.5163 14.6921 31.572 14.4121 32.2899 13.7097C32.9089 13.1064 33.2764 12.2015 33.352 11.02C33.3613 10.8654 33.3724 10.7248 33.3801 10.5978C33.4732 8.43301 32.8434 6.84342 31.1262 5.12621C28.3251 2.32513 23.3991 0.641864 17.1065 0.653312C10.85 0.666388 5.95325 2.31086 3.1052 5.15891ZM4.69564 6.74093C7.07172 4.28361 11.8283 2.99819 17.0417 2.97811C22.2879 2.95963 27.2043 4.30176 29.5848 6.76339C30.5921 7.80182 31.1197 9.06233 31.026 10.4037C31.0166 10.5374 31.0133 10.6494 30.9927 10.7718C30.9535 11.2709 30.7898 11.68 30.5267 11.9431C30.2534 12.2165 29.8955 12.3551 29.4269 12.2537L24.9606 11.3648C24.4157 11.2591 24.0385 10.8994 24.043 10.2613L24.0485 8.73416C24.0592 7.31999 23.1864 6.56249 22.0807 6.37791C20.8461 6.16985 18.8038 6.0395 17.2097 6.05268C15.5232 6.0502 13.3086 6.17505 12.1049 6.36885C10.9962 6.55148 10.1247 7.30742 10.1413 8.72157L10.1478 10.2471C10.1553 10.8869 9.78305 11.2347 9.23834 11.3584L4.85572 12.2393C4.37433 12.3372 4.02914 12.2006 3.74919 11.9206C3.48561 11.6571 3.31951 11.2493 3.27937 10.7467C3.26637 10.6166 3.25502 10.5123 3.2455 10.3786C3.14927 9.03708 3.68243 7.78527 4.69564 6.74093Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                width="23"
                height="30"
                viewBox="0 0 23 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4541 13.5088C1.4541 18.6724 4.89588 22.218 9.84237 22.6852V25.2673H5.23163C4.58224 25.2673 4.04009 25.7936 4.04009 26.4452C4.04009 27.0901 4.58224 27.6107 5.23163 27.6107H16.7468C17.3984 27.6107 17.9406 27.0901 17.9406 26.4452C17.9406 25.7936 17.3984 25.2673 16.7468 25.2673H12.1383V22.6852C13.6452 22.5452 15.006 22.1153 16.1787 21.439L14.4815 19.7497C13.483 20.2414 12.3101 20.5165 10.9955 20.5165C6.70692 20.5165 3.82009 17.7036 3.82009 13.4244V11.0209C3.82009 10.3716 3.29276 9.86685 2.62856 9.86685C1.97466 9.86685 1.4541 10.3716 1.4541 11.0209V13.5088ZM17.7866 15.7766L19.658 17.6524C20.2229 16.4428 20.5266 15.0471 20.5266 13.5088V11.0209C20.5266 10.3716 20.0037 9.86685 19.3498 9.86685C18.6982 9.86685 18.1605 10.3716 18.1605 11.0209V13.4244C18.1605 14.2759 18.0325 15.0634 17.7866 15.7766ZM10.9955 18.0916C11.5563 18.0916 12.0747 17.9937 12.5421 17.8126L10.3702 15.6304C10.2856 15.6694 10.1907 15.6775 10.0957 15.6752C9.41596 15.5233 8.90895 14.9692 8.73995 14.2576L8.72514 13.9956L6.1924 11.463V12.9573C6.1924 15.974 8.16818 18.0916 10.9955 18.0916ZM15.7883 5.13205C15.7883 2.11188 13.8102 0 10.9955 0C8.55689 0 6.78326 1.60137 6.38048 3.98597V4.39781L8.56743 6.57221V5.09364C8.56743 3.41842 9.5149 2.27987 10.9955 2.27987C12.4761 2.27987 13.411 3.4139 13.411 5.09364V11.1347C13.411 11.2285 13.411 11.3221 13.4007 11.4055L15.7242 13.729C15.7677 13.4787 15.7883 13.218 15.7883 12.9573V5.13205Z"
                  fill="white"
                />
                <path
                  d="M20.6404 23.6787C21.0307 24.0666 21.6663 24.0689 22.0542 23.6787C22.4297 23.2804 22.4444 22.6551 22.0542 22.2648L1.99306 2.21852C1.60508 1.83858 0.956954 1.82828 0.56672 2.21852C0.191302 2.60649 0.191302 3.25688 0.56672 3.6323L20.6404 23.6787Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.08166 21.5772H12.8807C12.994 21.5772 13.0891 21.6149 13.1756 21.6905L19.0615 26.9566C19.7683 27.5782 20.2939 27.8678 20.997 27.8678C21.623 27.8678 22.1408 27.5617 22.4609 27.0364L20.2854 24.8718L14.3662 19.5284C14.0911 19.2801 13.9087 19.2193 13.5436 19.2193H9.30799C8.8521 19.2193 8.63888 19.0036 8.63888 18.5611V13.2144L6.69908 11.277C6.32596 11.7466 6.11328 12.4312 6.11328 13.3323V18.4811C6.11328 20.558 7.118 21.5772 9.08166 21.5772ZM22.7153 19.1577L22.7177 5.69301C22.7177 4.70435 21.9857 3.91016 20.9751 3.91016C20.2816 3.91016 19.8123 4.21685 19.0543 4.88971L13.4451 9.8716L15.1409 11.5736L19.7928 7.34594C19.8574 7.28138 19.9353 7.24603 20.0132 7.24603C20.1118 7.24603 20.1921 7.3154 20.1921 7.43835V16.6297L22.7153 19.1577Z"
                  fill="white"
                />
                <path
                  d="M27.1662 29.1646C27.5824 29.5784 28.2737 29.5808 28.6742 29.1646C29.088 28.7397 29.0904 28.0727 28.6742 27.6589L5.26112 4.24578C4.84487 3.82953 4.15353 3.82953 3.73728 4.24578C3.32585 4.64864 3.32585 5.35096 3.73728 5.75382L27.1662 29.1646Z"
                  fill="white"
                />
              </svg>
            </button>
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
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-size: 11px;
      color: #3e3e51;
      margin: 0 10px 0;
    }
  }
  & img {
    width: 24px;
    height: 6px;
  }
}
.green {
  background-color: #32bd1b;
}
.red {
  background-color: #ea4e3d;
}
.purple {
  background-color: #a169f7;
}
.range {
  background-color: #faba17;
}
.silver {
  background-color: #8f99ba;
}
.wrap-background {
  width: 10px;
  height: 10px;
  border-radius: 50px;
}
.chat {
  margin-top: 2.5rem;
  flex: 1 1 auto;
  z-index: 1;

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
  @media (max-width: 1400px) {
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
  @media (max-width: 1400px) {
    height: 64vh;
  }

  @media (max-height: 800px) {
    height: 64vh !important;
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
  background: #ffffff;
  box-shadow: inset 0px 0px 6px rgba(136, 152, 206, 0.46);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background: #8f99ba;
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
    border-left: 1px solid #8f99ba22;
    &__image {
      display: flex;
      align-items: center;
      & img {
        width: 96px;
      }
      &__text {
        margin: 0 20px 0;
        & h4 {
          font-family: "Lato", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #3e3e51;
        }
        & span {
          font-family: "Lato", sans-serif;
          font-weight: 500;
          font-size: 12px;
          color: #3e3e51;
        }
        & p {
          font-family: "Lato", sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #32bd1b;
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
.right-messages,
.left-messages {
  margin: 10px 0 0;
}
.right-chats {
  background: #d8ffd1;
  margin: 0 10px 0;
  padding: 10px 13px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3e3e51;
  }
}
.right {
  background: #d8ffd1 !important;
}
.widthsss {
  width: 382px;
  margin: 10px 52px 0 !important;
  & h4 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3e3e51;
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
    border-left: 1px solid #8f99ba22;
    position: relative;
    &__date {
      width: 58px;
      height: 17px;
      background: #d3d9ea;
      border-radius: 100px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      & span {
        font-family: "Lato", sans-serif;
        font-weight: 500;
        font-size: 11px;
        color: #ffffff;
      }
    }
    &__left {
      display: flex;
      align-items: center;
      margin: 10px 0 0;
      &__image {
        width: 41px;
        height: 41px;
        background: #ffffff;
        border: 3px solid #ffffff;
        box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    .left-chats {
      background: #f1f3f8;
      margin: 0 10px 10px;
      padding: 10px 13px;
      border-radius: 23px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        font-family: "Lato", sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #3e3e51;
      }
    }
  }
  &__form {
    background: #ffffff;
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

    @media (max-width: 1500px) {
      bottom: auto;
      transform: translateY(-13px);
    }
  }
}
.websoket-chat__form {
  & h4 {
    padding: 10px 20px 0;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3e3e51;
  }
}
.chat-block {
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
      background: #ffffff;
      box-shadow: 1px 7px 21px rgba(166, 175, 205, 0.22);
      border-radius: 100px;
      border: none;
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #3e3e51;
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
      background: #ffffff;
      border: 2px solid #dce1f0;
      border-radius: 1000px;
      padding: 0 10px 0;
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #8f99ba;
      outline: none;

      &::placeholder {
        font-family: "Lato", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #8f99ba;
      }
    }
  }
}
.left-messages {
  margin: 10px 40px 0;
}
.header-title {
  width: 44.8%;
  @media (max-width: 1400px) {
    width: 36.2%;
  }
}
.chats {
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
.product-imagesss img {
  width: 110px;
  height: 100px;
}
.chat-wrap-product-text {
  margin: 0 20px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  & img {
    transform: translateX(-8px);
    width: 100px;
  }
  & h4 {
    font-size: 14px;
    color: #3e3e51;
  }
  & h2 {
    font-weight: 700;
    font-size: 16px;
    color: #3e3e51;
  }

  & span {
    font-weight: 500;
    font-size: 11px;
    color: #8f99ba;
  }
  & .product-like {
    width: 210px !important;
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
  @media (max-width: 1400px) {
    margin-top: 100px;
  }
  & button {
    width: 100%;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
    border-radius: 100px;
    border: none;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #32bd1b;
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
  @media (max-width: 1400px) {
    margin: 0 20px;
  }
  & h4 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3e3e51;
  }
}
.chat-footer-texts-flex {
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
  & h4 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3e3e51;
  }
}
.products-images img {
  width: 60px;
}
.profiles {
  display: flex;
  align-items: flex-end;
  padding: 3px 20px 35px;
  @media (max-width: 1500px) {
    padding: 3px 20px 0;
  }
  .profile {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .profile-text {
      font-family: "Lato", sans-serif;
      margin: 0 10px 0;
      & p {
        font-weight: 500;
        font-size: 14px;
        color: #8f99ba;
      }
      & img {
        width: 210px;
        height: 20px;
      }
      .profile-text-box {
        font-family: "Lato", sans-serif;
        display: flex;
        align-items: flex-end;
        h4 {
          font-weight: 500;
          font-size: 20px;
          color: #3e3e51;
        }
        span {
          font-weight: 500;
          font-size: 11px;
          color: #32bd1b;
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
    color: #8f99ba;
  }
}
.flex-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popup {
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.phone-btn-wrapper {
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  &__btn {
    cursor: pointer;
    width: 161px;
    height: 50px;
    background: #32bd1b;
    border-radius: 100px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #ffffff;
    position: relative;
  }
  &__message {
    width: 162px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 100px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3e3e51;
    position: relative;
    margin: 0 20px 0;
    & img {
      width: 25.19px !important;
      height: 23.23px !important;
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
.popup-header {
  display: flex;
  align-items: center;
  justify-content: center;
  & h4 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #8f99ba;
    margin-left: 10px;
  }
}
.popup-container {
  width: 580px;
  height: 620px;
  background: #3e3e51;
  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  display: flex;
  justify-content: center;
  padding-top: 60px;
}
.popup-main {
  margin: 72px 0 52px;
  text-align: center;
  & img {
    width: 86px;
    height: 86px;
  }
  & h2 {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
    margin-top: 5px;
  }
  & h4 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #8f99ba;
  }
}
.popup-footer {
  .popup-footer-image {
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      width: 160px;
      height: 160px;
    }
    .popup-text {
      font-family: "Lato", sans-serif;
      color: #f1f3f9;
      margin: 0 20px 0;
      & h4 {
        font-weight: 500;
        font-size: 14px;
      }
      & h2 {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
  .popup-footer-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 0;
    & button {
      width: 66px;
      height: 66px;
      background: #8f99ba;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      border-radius: 50px;
      margin: 0 20px 0;
      cursor: pointer;
    }
  }
}
.bg-red {
  background: #ea4e3d !important;
}
</style>

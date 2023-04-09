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
                <h4 class="chat-aside__title h1">Чаты</h4>
              </div>
              <div class="chat-header__item">
                <div class="chat-header__item__image">
                  <img src="../assets/img/chat/users.png" alt="user">
                  <div class="chat-header__item__image__text">
                    <h4>Светлана</h4>
                    <span>Массаж в 4 руки...<br>от 2 000 ₽</span>
                    <p>в сети</p>
                  </div>
                </div>
                <div class="phone">
                  <img src="../assets/img/chat/phones.png" alt="phone">
                </div>
              </div>
            </div>
            <div class="chats">
              <div class="chat-aside" v-if="navIsShown">
                <ChatAside v-if="false" />
                <ChatAsideMsg />
              </div>
              <div class="websoket-chat">
                <div class="websoket-chat__content">
                  <div class="websoket-chat__content__date">
                    <span>21.01.23</span>
                  </div>
                  <div class="content-left">
                    <div class="websoket-chat__content__left">
                      <div class="websoket-chat__content__left__image">
                        <img src="../assets/img/chat/logoo.png" alt="user-logo">
                      </div>
                      <div class="left-chats">
                        <h4>Добрый день!</h4>
                      </div>
                    </div>
                    <div class="left-chats widthsss">
                      <h4>Запрос отправлен администратору.<br>
                        Ожидайте сообщения с подтверждением<br> или отказом</h4>
                    </div>
                    <div class="left-messages">
                      <div class="messagess" v-for="(message, index) in messages" :key="index">
                        <div class="left left-chats" v-if="message.uid !== uid">
                          <div class="text">{{ message.text }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div class="right-chats">
                      <h4>Здравствуйте</h4>
                      <img src="../assets/img/chat/time.png" alt="time">
                    </div>
                    <div class="websoket-chat__content__left">
                      <div class="right-chats">
                        <h4>Хочу заказать:<br>
                          sdsdsds<br>
                          sdsdsds<br>
                          sdsdsds<br>
                          sdsdsdsd<br>
                          sdsdsdsd</h4>
                        <img src="../assets/img/chat/time.png" alt="time" class="left-transform">
                      </div>
                      <div>
                        <img src="../assets/img/chat/userss.png" alt="user-logo">
                      </div>
                    </div>
                    <div class="right-messages">
                      <div class="messagess" v-for="(message, index) in messages" :key="index">
                        <div class="right left-chats" v-if="message.uid === uid">
                          <div class="text">{{ message.text }}</div>
                          <img src="../assets/img/chat/time.png" alt="time" class="Ёleft-images">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="websoket-chat__form">
                  <h4>Спросить у продавца</h4>
                  <div class="chat-block">
                    <div class="chat-form">
                      <button>Какая вместиость</button>
                      <button>Размер бассейна</button>
                    </div>
                    <img src="../assets/img/chat/input.png" alt="input">
                  </div>
                  <div class="chat-inputs">
                    <img src="../assets/img/chat/save.png" alt="save">
                      <div class="inputs">
                        <input type="text" v-model="text" placeholder="Написать сообщение" @click.prevent="sendMessage">
                        <img src="../assets/img/chat/camera.png" alt="camera">
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
	.chat {
		margin-top: 2.5rem;
		flex: 1 1 auto;

		@media screen and (max-width: 768px) {
			margin: 0;
			overflow: hidden;
		}
	}
	.chat-card {
		padding: 0;
		height: 77rem;
    overflow: hidden;
    margin: 10px 0 0;
	}
	.chat-aside {
    width: 39%;
    padding: 15px 10px 0;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 69vh;

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
      padding: 25px 35px 0;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 5px 30px 10px 10px;
      border-bottom: 1px solid #8F99BA22;
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
      background-image: url("../assets/img/chat/backgroundss.png");
      background-repeat: no-repeat;
      background-position: center center;
      padding: 15px 10px 0;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 47vh;
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
        img {
          width: 60px;
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
    width: 44%;
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
</style>

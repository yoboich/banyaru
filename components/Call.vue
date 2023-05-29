<template>
  <dialog class="call" ref="callDialog">
    <div class="call__header">
      <button class="call__header-btn" @click="closeCall">
        <IconBase icon="arrow-left" color="green"/>
      </button>
      <div class="call__header-text">
        <IconBase icon="logo" color="green"/>
        Звонок через Баня.ру
      </div>
    </div>
    <div class="call__content">
      <div class="flex">
        <div class="call__user">
          <img class="call__user-image" src="~/assets/images/preview/user.png" alt="">
          <h2 class="call__user-name">Анатолий</h2>
          <span class="call__status">
          Соединяем...
        </span>
        </div>
        <div class="call__time">
          {{ timer }}
        </div>
      </div>

      <div class="call__post">
        <img src="~/assets/images/preview/slider-girl.jpg" alt="" class="call__post-image">
        <div class="call__post-info">
          <span class="call__post-type">Сауны</span>
          <h3 class="call__post-name">Сауна Дионис-СПА</h3>
          <h2 class="call__post-price">22 300 ₽</h2>
        </div>
      </div>
      <div class="call__actions call__actions--active" v-if="active">
        <button class="call__actions-btn btn-call" @click="endCall">
          <IconBase icon="phone-outline" color="white"/>
        </button>
        <button class="call__actions-btn">
          <IconBase icon="mute-micro" color="white"/>
        </button>
        <button class="call__actions-btn">
          <IconBase icon="volume-mute" color="white"/>
        </button>
      </div>
      <div class="call__actions call__actions--inactive" v-else>
        <button class="call__actions-btn" @click="closeCall">
          <div>
            <IconBase icon="close" color="white"/>
          </div>
          <span>Закрыть</span>
        </button>
        <button class="call__actions-btn">
          <div class="btn-call">
            <IconBase icon="phone-outline" color="white"/>
          </div>
          <span>Перезвонить</span>
        </button>
        <button class="call__btn">Написать в чате</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>

const active = ref(true)
const callDialog = ref()

const endCall = () => {
  stopTimer()
  active.value = false
}

const closeCall = () => {
  callDialog.value.close()
}


const seconds = ref(0);
const minutes = ref(0);

const interval = ref()
const timer = ref()

const stopTimer = () => clearInterval(interval.value)

function startTimer() {
  interval.value = setInterval(function () {
    let sec = '00';
    let min = '00';
    seconds.value++;
    if (seconds.value < 10) {
      sec = "0" + seconds.value;
    }

    if (seconds === 60) {
      sec = "00";
      minutes.value++;

      if (minutes.value < 10) {
        min = "0" + minutes.value;
      }
    }
    timer.value = min + ":" + sec
  }, 1000);
}

onMounted(() => {
  startTimer()
})

defineExpose({
  dialog: callDialog
})
</script>

<style lang="scss" scoped>
.call {
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0 0 40px;
  font-family: Lato;
  border: none;

  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background: $black;

  @media (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }

  &__header {
    padding: 20px 15px;
    display: flex;
    position: relative;
    margin-bottom: 90px;

    &-btn {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      cursor: pointer;
    }

    &-text {
      display: flex;
      align-items: center;
      gap: 5px;
      color: $gray;
      margin: 0 auto;

      .icon-base {
        width: 26px;
      }

    }
  }

  &__user {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-image {
      width: 86px;
      height: 86px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      margin-bottom: 15px;
    }

    &-name {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      color: #fff;
    }
  }

  &__content {
    .flex {
      padding: 0 40px;
      gap: 50px;
      align-items: center;
      justify-content: center;
      margin-bottom: 45px;
    }
  }

  &__time {
    font-weight: 700;
    font-size: 45px;
    line-height: 100%;
    color: #fff;
  }

  &__status {
    color: $gray;
  }

  &__post {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 45px;

    &-image {
      width: 160px;
      height: 160px;
      object-fit: cover;
      object-position: center;
      border-radius: 15px;
    }

    &-type, &-name {
      color: #F1F3F9;
      margin-bottom: 5px;
    }

    &-price {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #F1F3F9;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &--active {
      .call__actions-btn {
        @include flex-center-all;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background: $gray;
        cursor: pointer;

        &.btn-call {
          background: $red;
          transform: rotate(135deg);
        }
      }
    }

    &--inactive {
      padding: 0 50px;
      gap: 40px 140px;
      flex-wrap: wrap;
      width: 100%;

      .call__actions-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        div {
          @include flex-center-all;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: $gray;
          cursor: pointer;
          margin: 0;

          &.btn-call {
            background: $green;
          }
        }

        span {
          font-size: 16px;
          line-height: 18px;
          color: $gray;
        }

      }
    }
  }

  &__btn {
    width: 100%;
    background: $green;
    border-radius: 100px;
    padding: 15px;
    color: white;
    cursor: pointer;
    max-width: 300px;

  }
}
</style>
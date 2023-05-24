<template>
  <div class="message" :class="{ last: props.last }">
    <div class="message-user">
      <img src="~/assets/images/preview/user.png" alt="" />
    </div>
    <div class="message__content" :class="{ wide: props.read }">
      <p class="message__content-text">{{ props.message }}</p>
      <div class="message__status">
        <span class="message__status-time">13:00</span>
        <Icon
          v-if="props.read"
          tag="i"
          icon="read"
          color="green"
          :hover="false"
        />
      </div>
      <span class="message__answer-time" v-if="props.last"
        >Время ответа до 2-ух минут</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  read: Boolean,
  last: Boolean,
});
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 10px;

  &.last {
    .message-user {
      opacity: 1;
    }
  }

  &.to {
    flex-direction: row-reverse;

    .message__content {
      background: #d8ffd1;

      &::after {
        content: url(~/assets/images/icons/message-corner-green.svg);
        bottom: -8px;
        transform: rotate(126deg);
        right: -16px;
        left: auto;
      }
    }
  }

  &__answer-time {
    position: absolute;
    bottom: 0;
    left: 10px;
    transform: translateY(30px);
    color: $gray;
    font-size: 16px;
    display: none;
  }

  &-user {
    background: #ffffff;
    border: 3px solid #ffffff;
    box-shadow: 0px 4px 24px rgba(166, 175, 203, 0.32);
    border-radius: 50%;
    opacity: 0;

    width: 40px;
    height: 40px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__content {
    max-width: 40%;
    position: relative;
    background: #f1f3f8;
    padding: 10px 50px 10px 15px;
    border-radius: 20px;

    &.wide {
      padding-right: 70px;
    }

    &::after {
      content: url(~/assets/images/icons/message-corner-gray.svg);
      width: 30px;
      height: 30px;
      position: absolute;
      left: -27px;
      bottom: -1px;
      transform: translate(50%, 0);
    }

    &-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
  }

  &__status {
    position: absolute;
    right: 10px;
    bottom: 12px;

    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    line-height: 13px;
    color: $gray;
  }
}
</style>

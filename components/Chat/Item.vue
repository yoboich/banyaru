<template>
    <div class="chat__item">
      <nuxt-link to="/chat/user">
      <ChatImageThumb :online="!!props.unread"/>
      <div class="chat__item-inner">
        <div class="chat__item-details">
          <div class="chat__item-info">
            <h3 class="chat__item-username">Светлана</h3>
            <span class="chat__item-service">Массаж в 4 руки... | 2000 ₽</span>
          </div>
          <span class="chat__item-time">13:00</span>
        </div>
        <p class="chat__item-message">
          Здравствуйте
          <br/>
          вторая строка сообщения
        </p>
        <div class="chat__item-unread" v-if="props.unread">
          {{ props.unread }}
        </div>
      </div>
      </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
  unread: [Number, String],
});
</script>

<style lang="scss" scoped>
.chat__item {
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: #dadeec;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 10px 25px 25px;
  }

  &:hover {
    border-radius: 25px;
    border-color: #dadeec;
  }

  &-inner {
    flex: 1;
  }

  &-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  &-username {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  &-time {
    font-size: 11px;
    line-height: 13px;
    color: $gray;
  }

  &-message {
    color: rgba($color: $gray, $alpha: 0.8);
  }

  &-unread {
    @include flex-center-all;

    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: #fff;
    background: $green;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
}
</style>

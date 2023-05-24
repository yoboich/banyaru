<template>
  <div class="comment__item" :class="{ replies: !!props.replies }">
    <div class="comment__item-main">
      <img
        src="~/assets/images/preview/user.png"
        alt=""
        class="comment__item-image"
      />
      <div class="comment__item-content">
        <div class="comment__item-header">
          <span class="comment__item-name">User</span>
          <span class="comment__item-date">25.10.2022</span>
        </div>
        <p class="comment__item-message">
          Неизменное место, всегда собираемся тут попариться с друзьями.  Если
          думаете идти или нет, то однозначно идите, не пожалеете. Все классно и
          на высшем уровне!!!
        </p>
        <button class="comment__item-btn">Ответить</button>
        <div class="comment__item-like">
          <IconBase icon="like" color="gray" />
          <span>21</span>
        </div>
      </div>
    </div>
    <div class="comment__item-replies" v-if="props.replies">
      <NewsCommentsItem />
      <NewsCommentsItem />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  replies: Boolean,
});
</script>

<style lang="scss" scoped>
.comment__item {
  &.replies {
    & > .comment__item-main {
      border-bottom: none;
      & > .comment__item-content {
        border-bottom: 1px solid rgba($color: $gray, $alpha: 0.3);
      }
    }
  }

  &-main {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba($color: $gray, $alpha: 0.3);
  }

  &-replies {
    width: 100%;
    padding-left: 50px;

    & .comment__item:last-of-type {
      .comment__item-main {
        border-bottom: none;
      }
    }
  }

  &-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &-content {
    padding-bottom: 15px;
  }

  &-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  &-date {
    color: $gray;
    font-size: 11px;
    line-height: 13px;
  }

  &-message {
    margin-bottom: 20px;
  }

  &-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: $green;
    margin-right: 25px;
    cursor: pointer;
  }

  &-like {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    color: $gray;
  }
}
</style>

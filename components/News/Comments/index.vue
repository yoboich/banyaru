<template>
  <div class="news__comments">
    <h1 class="news__comments-title">Комментарии</h1>
    <div class="news__comments-items">
      <NewsCommentsItem />
      <NewsCommentsItem replies />
    </div>
    <textarea
      placeholder="Оставить комментарий"
      class="news__comments-textarea"
      name="message"
    ></textarea>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.news__comments {
  &-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    margin-bottom: 30px;
  }

  &-items {
    // .comment__item:last-of-type {
    //   margin-bottom: 0;
    //   padding-bottom: 0;
    // }

    .comment__item-replies {
    }
  }

  &-textarea {
    width: 100%;
    min-height: 60px;
    resize: none;
    background: #ffffff;
    border: 2px solid #dadeec;
    border-radius: 12px;
    padding: 10px 20px;

    &::placeholder {
      color: $gray;
    }
  }
}
</style>

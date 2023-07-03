<template>
  <nuxt-link :to="props.to" class="profile__tab-item">
    <i class="profile__tab-icon">
      <IconBase v-if="props.icon" :icon="props.icon" color="gray" />
    </i>
    <div class="profile__tab-details">
      <span>{{ props.title }}</span>
      <slot />
    </div>
  </nuxt-link>
</template>

<script setup>
const route = useRoute();

const props = defineProps({
  icon: "String",
  title: "String",
});
</script>

<style lang="scss" scoped>
.profile__tab {
  &-item {
    display: flex;
    align-items: center;
    gap: 15px;

    padding-left: 20px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover,
    &.router-link-active {
      background: #ffffff;
      box-shadow: -17px 4px 24px rgba(166, 175, 203, 0.32);

      svg {
        --icon-color: #{$black};
      }
    }

    & :deep(.btn-download) {
      font-size: 16px;
      line-height: 18px;
      color: $green;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    & :deep(.tab-btn) {
      svg {
        height: 14px !important;
        transform: rotate(180deg);
      }
    }

    & :deep(.count) {
      @include flex-center-all;
      font-size: 11px;
      line-height: 13px;
      width: 18px;
      height: 18px;
      border-radius: 50%;

      &.unread {
        color: #fff;
        background: $red;
      }
    }
  }

  &-icon {
    width: 30px;
  }

  &-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    padding: 15px 0;
    border-top: 1px solid rgba($color: $gray, $alpha: 0.2);
    border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);
    margin-right: 25px;

    span {
      font-size: 16px;
      line-height: 18px;
    }
  }
}
</style>

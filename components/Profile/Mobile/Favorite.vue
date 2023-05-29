<template>
  <div class="profile-favorite">
    <div class="profile-favorite__items">
      <ProfileFavoriteItem status="deleted" v-for="i of 12" :key="i" />
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize()


const items = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 21, , 33, 2, 32]);

</script>

<style lang="scss" scoped>
.profile-favorite {
  &__items {
    display: grid;
    grid-template-columns: 1fr;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;

    & .favorite-item:not(:last-of-type) {
      border-bottom: 1px solid rgba($color: $gray, $alpha: .2);
      padding-bottom: 30px;
    }

  }
}
</style>

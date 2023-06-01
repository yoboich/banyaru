<template>
  <dialog class="map-dialog" ref="dialog">
    <Map />
    <div class="map-dialog__header">
      <button class="map-dialog__header-btn" @click="dialog?.close()">
        <IconBase icon="arrow-left" color="green" />
      </button>
      <label for="dialog-search" class="map-dialog__input" @click="show = true">
        <IconBase icon="search" color="gray" />
        <input id="dialog-search" type="text">
        <IconBase icon="close" color="gray" @click="show = false" />
      </label>
    </div>
   <div class="map-dialog__search" v-if="show">
     <div class="profile-mobile__header">
       <button class="profile-mobile__header-btn" @click="show=false">
         <IconBase icon="arrow-left" color="green"/>
       </button>
       <h1 class="profile-mobile__title">Адрес</h1>
       <button class="profile-mobile__header-btn">
         <IconBase icon="more" color="green"/>
       </button>
     </div>
     <label for="dialog-main-search" class="map-dialog__input">
       <IconBase icon="search" color="gray" />
       <input id="dialog-main-search" type="text">
       <IconBase icon="close" color="gray"  @click="show=false" />
     </label>
     <button class="map-dialog__geolocation">
       <IconBase icon="geolocation" color="green" />
       <span>Мое местоположение</span>
     </button>
     <div class="map-dialog__inner">
       <span class="map-dialog__history-text">Недавние поисковые запросы</span>
       <ul class="map-dialog__items">
         <li class="map-dialog__item" v-for="i of 10" @click="selectItem">
           <IconBase icon="marker" color="gray" />
           <div class="map-dialog__content">
             <h4 class="title">Маркса 3</h4>
             <span class="text">Россия, Москва</span>
           </div>
         </li>
       </ul>
     </div>
   </div>
    <UIButton class="map-dialog__btn green">Готово</UIButton>
  </dialog>
</template>

<script setup>
const dialog = ref()
const show = ref(false)

const selectedAddress = ref()

const selectItem = () => {
  selectedAddress.value = 'переулок Маяковского 3, Россия, москва'
  dialog.value.close()
}

defineExpose({
  dialog,
  selectedAddress
})
</script>

<style lang="scss" scoped>
.map-dialog {
  padding: 0;
  margin: 0;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  z-index: 20;
  left: 0;
  top: 0;
  border: none;
  overflow: hidden;
  position: fixed;

  &__content {
    padding: 10px 0;

    .text {
      font-size: 11px;
      line-height: 13px;
      color: $gray;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      background: rgba(0,0,0,.05);
    }

    .icon-base {
      width: 14px;
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid rgba($color: $gray, $alpha: .2);
    }
  }

  &__inner {
    margin-top: 10px;
    padding: 0 10px;
    width: 100%;
    max-height: 60vh;
    overflow: scroll;
  }

  &__history-text {
    font-size: 11px;
    line-height: 13px;
    color: $gray;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba($color: $gray, $alpha: .2);
    width: 100%;
    display: inline-block;
  }

  &__geolocation {
    width: 100%;
    border: 2px solid #DADEEC;
    border-radius: 100px;
    background: #fff;
    height: 35px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      flex-grow: 1;
      font-size: 20px;
      line-height: 100%;
      color: $green;
    }
  }

  &__search {
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    padding: 0 20px 20px;
    border-radius: 0 0 25px 25px;

    .profile-mobile__header {
      margin-bottom: 40px;
      padding: 20px 0 0;
    }

    .map-dialog__input {
      margin-bottom: 20px;
    }
  }

  &__header {
    position: absolute;
    top: 40px;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
    align-items: center;

    &-btn {
      display: flex;

      .icon-base {
        height: 20px;
      }
    }
  }

  &__input {
    display: flex;
    position: relative;
    flex-grow: 1;

    input {
      width: 100%;
      height: 35px;
      background: #FFFFFF;
      border: 2px solid #DADEEC;
      border-radius: 100px;
      padding-right: 30px;
      padding-left: 40px;
    }

    .icon-base {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &:first-of-type {
        width: 20px;
        left: 10px;
      }

      &:last-of-type {
        right: 10px;
        width: 12px;
      }
    }
  }

  &__btn {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    width: 90%;
  }

  .map {
    filter: grayscale(70);
  }
}
</style>
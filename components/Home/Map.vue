<script setup></script>

<template>
  <section class="map">
    <div class="map__content">
      <div class="search-hint">
        <h2 class="search-hint__title">Поиск на карте</h2>
        <p class="search-hint__suptitle">Бани и сауны рядом с вами</p>
        <nuxt-link to="/search"
          ><button class="btn search-hint__btn">
            Показать на карте
          </button></nuxt-link
        >
      </div>

      <iframe
        src="https://api-maps.yandex.ru/frame/v1/-/CCU6uPTyoA?controls=TrafficControl"
        width="100%"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss">
.map {
  &__content {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    .city-select {
      position: absolute;
      right: 15px;
      top: 25px;
      background: #fff;
    }

    .search-hint {
      position: absolute;
      padding: 25px 30px;
      background: #fff;
      box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
      border-radius: 20px;
      text-align: center;

      &__title {
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
        margin-bottom: 10px;
      }

      &__suptitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 20px;
      }

      &__btn {
        padding: 20px 10px;
        width: 240px;
        font-size: 20px;
        border: 2px solid #dadeec;
        background: #fff;
        transition: all 0.3s;
        color: $black;

        &:hover {
          background: $green;
          color: #fff;
          border-color: #fff;
        }
      }
    }
  }
}
// .map {
//   margin-top: 11.8rem;

//   &__title {
//     font-family: "Gilroy";
//     font-size: 2.6rem;
//     margin-bottom: 5.4rem;
//   }
//   & iframe {
//     border-radius: 23px;
//   }
//   &__content {
//     border: 26px solid #ffffff;
//     filter: drop-shadow(0px 20px 56px rgba(123, 129, 148, 0.16));
//     border-radius: 23px;
//     height: 64rem;
//   }
// }
</style>

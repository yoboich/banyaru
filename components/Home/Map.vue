<script setup></script>

<template>
  <section class="map">
    <div class="map__content">
      <!-- <iframe
        width="100%"
        height="100%"
        class="absolute inset-0"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.50283511227!2d37.46580264053963!3d55.73366918983649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1675549894887!5m2!1sru!2sru"
        loading="lazy"
        style="filter: opacity(0.7); border-radius: 30px"
      ></iframe> -->
      <!-- <CitySelect /> -->
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
        padding: 20px 45px;
        font-size: 20px;
        border: 2px solid #dadeec;
        background: #fff;
        transition: all 0.3s;

        &:hover {
          background: #32bd1b;
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

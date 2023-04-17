<script setup>
	import { useWindowSize } from '@vueuse/core';
	const isLarge = ref(true);
  const main = ref(false);
  const mores = ref(false);
  const mores1 = ref(false);
  const mores2 = ref(false);
  const more1 = () => {
    mores1.value = true
  }
  const more2 = () => {
    mores2.value = true
  }
  const product = [
    {
      image: "product-image.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "product-image.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "product-image.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "sauna-girl12.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "sauna-girl12.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "product-image.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "cookie.png",
      text: "от 2 000 ₽/ч.",
      class: "active-width"
    },
    {
      image: "product-image.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "sauna-girl12.png",
      text: "от 2 000 ₽/ч."
    },
    {
      image: "downn.png",
      class: "width",
      text: "Все",
      text_class: "text-active",
    },
  ]

	const { width } = useWindowSize();
	watchEffect(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		} else {
			isLarge.value = true;
		}
	});
	onMounted(() => {
		if (width.value <= 768) {
			isLarge.value = false;
		}
	});
  definePageMeta({
    layout: 'order',
  });
  onMounted(() => {
    let item = document.querySelectorAll('.product-content-wrap img')
    item.forEach((e) => {
      e.addEventListener('click', () => {
        item.forEach((i) => {
          i.classList.remove('actives')
        })
        e.classList.add('actives')
      })
    })
    let actives = document.querySelector('.width')
    let mains = document.querySelector('.mains')
    mains.style.display = 'none'
    actives.addEventListener('click', () => {
      mains.style.display = 'block'
    })
  })
	useHead({ title: 'Баня.ру – портал о банях и саунах России' });
</script>
<template>
  <section class="map">
    <div class="map__content">
      <iframe
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
      ></iframe>
    </div>
  </section>
  <div class="body">
    <div class="container">
      <TheOrderHeader />
      <div class="card__right">
        <ProductCardSwiper-Slider :premium="true" />
        <button class="order-btn">Этот баннер привлекает внимание!</button>
      </div>
      <div class="products">
        <h4>Зал: <span>Горячий сруб</span></h4>
        <div class="product-content">
          <div class="product-content-wrap" v-for="item in product" :key="item">
            <img :src="'/_nuxt/assets/img/chat/' + item.image" alt="product-image" :class="item.class">
            <h4 :class="item.text_class">{{ item.text }}</h4>
          </div>
        </div>
      </div>
      <div class="mains">
        <div class="info">
          <OrderInfo />
        </div>
        <div class="description">
          <OrderDescription />
        </div>
        <div class="price">
          <OrderPrice />
        </div>
        <div class="calendar">
          <OrderCalendar />
        </div>
        <div class="middle-btn">
          <OrderMiddle-Button />
        </div>
        <div class="selected">
          <OrderSelect />
        </div>
        <div class="product">
          <OrderProduct />
        </div>
        <div class="product-wrapper__footer" @click="more1">
          <button>
            Смотреть все
            <img src="../assets/img/order/down.png" alt="down">
          </button>
        </div>
        <div class="more1" v-if="mores1">
          <div class="cards">
            <OrderCard />
          </div>
          <div class="product-wrapper__footer" @click="more2">
            <button>
              Смотреть все
              <img src="../assets/img/order/down.png" alt="down">
            </button>
          </div>
        </div>
        <div class="more2" v-if="mores2">
          <div class="catalog">
            <OrderCatalog />
          </div>
        </div>
        <div class="announcement">
          <OrderAnnouncement />
        </div>
        <div class="watched">
          <OrderWatched />
        </div>
        <div class="reviews">
          <OrderReviews />
        </div>
        <footer>
          <OrderFooter />
        </footer>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map {
  height: 100vh;
  overflow: hidden;
  &__title {
    font-family: "Gilroy";
    font-size: 2.6rem;
    margin-bottom: 5.4rem;
  }
  &__content {
    height: 100vh;
  }
}
.calendar {
  margin-top: 60px;
}
.product-wrapper__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  cursor: pointer;
  & button {
    border: none;
    background: none;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #32BD1B;
    cursor: pointer;
    & img {
      margin-left: 10px;
    }
  }
}
.active-width {
  width: 101px !important;
  height: 92px !important;
}
.body {
  background: #FFFFFF!important;
  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  width: 38%;
  height: 98vh;
  margin: 12px 12px 0;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  padding: 10px 35px;
  @media(max-width: 1500px) {
    width: 46%;
  }
  @media(max-width: 600px) {
    width: 96%;
  }
  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar
  {
    width: 7px;
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb
  {
    background: #8F99BA;
    box-shadow: 1px 4px 12px rgba(166, 175, 205, 0.36);
    border-radius: 6px;
  }

}
	.add-advert {
		font-weight: 700;
		font-size: 1.6rem;
		line-height: 2rem;
		margin-top: 5rem;
		padding: 0 2rem;
		color: $green-color;
	}
	.mobile-container {
		padding: 0 2rem;
	}
  .order-btn {
    width: 100%;
    height: 50px;
    background: #FABA17;
    border-radius: 100px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #3E3E51;
    margin: 20px auto;
  }
  .product-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media(max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .product-content-wrap {
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    & img {
      padding: 2px;
      width: 86px;
      height: 86px;
      border-radius: 12px;
    }
    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #3E3E51;
      padding: 10px;
    }
  }
  .width {
    width: 67px !important;
    height: 64px !important;
    margin-bottom: 20px;
  }
  .text-active {
    margin: 0 16px 0;
  }
  .products {
    & h4 {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #3E3E51;
      margin-bottom: 30px;
      & span {
        font-weight: 700!important;
        margin-left: 5px;
      }
    }
  }
  .description {
    margin: 40px 0;
  }
  .actives {
    border: 3px solid #32BD1B;
    border-radius: 44px !important;
  }
</style>

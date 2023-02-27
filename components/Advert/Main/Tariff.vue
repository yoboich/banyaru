<template>
  <div class="tariff">
    <div class="tariff__title">Выбор тарифа</div>
    <div class="tariff__inner">
      <div class="tariff__item">
        <div class="tariff__top">
          <div class="radio">
            <input type="radio" />
            <label class="tariff__name">Бесплатное</label>
          </div>
          <div class="tariff__price-top">0 ₽</div>
        </div>
        <div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
      </div>

      <div class="tariff__item">
        <div class="tariff__top">
          <div class="radio">
            <input type="radio" />
            <label class="tariff__name">Платное</label>
          </div>
          <div class="tariff__price-top">30 000 ₽ на 3 месяца</div>
        </div>
        <div class="tariff__price price">
          <span class="price__text">Оплата</span>
          <div class="price__inner">
            <div class="price__item">
              <div class="price__tab">
                <span class="price__tab-item active">3 мес.</span>
                <span class="price__tab-item">6 мес.</span>
                <span class="price__tab-item">12 мес.</span>
              </div>
              <div class="price__tab-bottom">
                <p class="price__tab-subitem">10 000 ₽/мес.</p>
                <p class="price__tab-subitem">
                  8 000 ₽/мес. <span>Скидка 20%</span>
                </p>
                <p class="price__tab-subitem">
                  6 000 ₽/мес. <span>Скидка 40%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
      </div>

      <div class="tariff__item">
        <div class="tariff__top">
          <div class="radio">
            <input type="radio" />
            <label class="tariff__name">VIP</label>
          </div>
          <div class="tariff__price-top">120 000 ₽ на 3 месяца</div>
        </div>
        <div class="tariff__price price">
          <span class="price__text">Оплата</span>
          <div class="price__inner">
            <div class="price__item">
              <div class="price__tab">
                <span class="price__tab-item active">3 мес.</span>
                <span class="price__tab-item">6 мес.</span>
                <span class="price__tab-item">12 мес.</span>
              </div>
              <div class="price__tab-bottom">
                <p class="price__tab-subitem">40 000 ₽/мес.</p>
                <p class="price__tab-subitem">
                  32 000 ₽/мес. <span>Скидка 20%</span>
                </p>
                <p class="price__tab-subitem">
                  24 000 ₽/мес. <span>Скидка 40%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
      </div>

      <div class="tariff__item">
        <div class="tariff__top">
          <div class="radio">
            <input type="radio" />
            <label class="tariff__name">Бронирование</label>
          </div>
          <div class="tariff__price-top">30 000 ₽ разовое подключение</div>
        </div>
        <div class="tariff__price price">
          <span class="price__text">Оплата</span>
          <div class="price__inner">
            <div class="price__item">
              <div class="price__tab">
                <span class="price__tab-item active">15%</span>
                <span class="price__tab-item">20%</span>
              </div>
              <div class="price__tab-bottom">
                <p class="price__tab-subitem">ООО/ИП</p>
                <p class="price__tab-subitem price__tab-subitem_w">
                  Физическое лицо
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tariff__subname">Срок размещения: до 24 февраля 2023</div>
      </div>
    </div>
    <div class="check">
      <div class="check__item">
        <div class="check__top">
          <input type="checkbox" />
          <p>Автоматически продлевать срок размещения</p>
        </div>
        <span
          >Объявление будет автоматически продлеваться в размещении “Премиум”
          каждые 7 дней</span
        >
      </div>

      <div class="check__item check__item_green">
        <div class="check__top">
          <input type="checkbox" />
          <p>Помощь в размещении</p>
        </div>
        <span
          >Наш специалист сам разместит ваше объявление для максимального
          результата. При необходимости, он свяжется с Вами для уточнения
          информации.</span
        >
        <div class="check__price">10 000 ₽</div>
      </div>
    </div>
    <div class="info">
      <img src="@/assets/img/icon/i.svg" alt="">
      <p>
        Недостаточно денег. <span>Пополнить счет</span> или изменить условия
        размещения
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  gap: 1.6rem;
  margin-top: 4.4rem;
  padding-left: 2rem;
  & span {
    color: $green-color;
  }
}
.check {
  margin-top: 3.7rem;
  &__item {
    padding: 2rem;
    &_green {
      position: relative;
      background: #d8ffd1;
      border-radius: 23px;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  & p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
  & span {
    color: $secondary-color;
    padding-left: 4rem;
    margin-top: 1.4rem;
    display: block;
    max-width: 60rem;
  }
  &__price {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    position: absolute;
    right: 2rem;
    bottom: 38%;
  }
}
.price {
  display: flex;
  gap: 2.5rem;
  &__text {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    align-self: flex-start;
    padding-top: 1.5rem;
    display: block;
  }
  &__inner {
    display: flex;
    gap: 2.5rem;
  }
  &__tab {
    display: flex;
    justify-content: flex-start;
    background: #ffffff;
    box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
    border-radius: 100px;
    padding: 0.4rem;
    align-self: self-start;
    margin-bottom: 2rem;
  }
  &__tab-item {
    padding: 1.1rem 5.5rem;
    &.active {
      background: $default-color;
      box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
      border-radius: 100px;
      font-weight: 700;
    }
  }
  &__tab-bottom {
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
  }
  &__tab-subitem {
    position: relative;
    max-width: 9rem;
    margin-bottom: 2.2rem;
    & span {
      color: #ff515b;
    }
    &::before {
      content: "";
      position: absolute;
      width: 0.4rem;
      height: 0.4rem;
      background-color: $secondary-color;
      top: -1rem;
      left: 50%;
      border-radius: 100rem;
    }
    &_w {
      max-width: 12rem;
    }
  }
}
.tariff {
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    margin-bottom: 3.5rem;
    margin-top: 6rem;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  &__item {
    background: #ffffff;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 23px;
    padding: 2.4rem 2rem 3.5rem 6.7rem;
  }
  &__name {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
  }
  &__price-top {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
  }
  &__top {
    margin-bottom: 1.5rem;
    margin-left: -4.7rem;
    display: flex;
    align-items: flex-start;
    & .radio {
      flex: 1;
    }
    & input {
      margin-right: 2.1rem;
    }
  }
}
</style>

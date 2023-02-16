<template>
  <div class="type">
    <div class="type__inner">
      <div class="type__wrapper">
        <div class="type__title">Вид парной</div>
        <div class="type__item">
          <label class="type__name">Баня</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Сауна </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Баня на дровах</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Хаммам </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Японская </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Банный чан </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Кедровая бочка </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Инфракрасная </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Римские / Термы </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Баня по-чёрному</label>
          <input type="checkbox" />
        </div>
      </div>

      <div class="type__wrapper">
        <div class="type__title">Сервис</div>
        <div class="type__item">
          <label class="type__name">Банкетный зал</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Бесплатный wi-fi </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Гоcтиная </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Камин </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Караоке</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Кондиционер </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Музыка </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Кабельное TV</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Кальян </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Мероприятия </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Шоу-программы</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Сейф </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Ассортимент табака-сигары</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Танцпол </label>
          <input type="checkbox" />
        </div>
      </div>
      <div class="type__wrapper">
        <div class="type__title">Спорт</div>
        <div class="type__item">
          <label class="type__name">Бильярд русский</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Бильярд американский </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Аэро-хоккей </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Настольный теннис </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Дартс </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Шахматы / Шашки</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Нарды </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Тренажеры</label>
          <input type="checkbox" />
        </div>
      </div>
      <div class="type__wrapper">
        <div class="type__title">Аквазона</div>
        <div class="type__item">
          <label class="type__name">Бассейн </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Купель ледяная </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Обливное устройство </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Джакузи </label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Душ Шарко</label>
          <input type="checkbox" />
        </div>
        <div class="type__item">
          <label class="type__name">Водная горка</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type {
  margin-top: 7.2rem;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 4.1rem;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 19.6rem;
    row-gap: 1.3rem;
    flex-wrap: wrap;
  }
  &__item {
    display: flex;
    justify-content: space-between;
  }
  &__name {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
  &__wrapper{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 5.7rem;
  }
}
</style>

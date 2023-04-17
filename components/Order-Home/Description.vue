<template>
  <div class="text-wrapper">
    <h4>Описание</h4>
    <div class="menu-wrapper">
      <ul class="menu">
        <li>
          <img src="../../assets/img/order/img1.png" alt="image">
          Вид парной
        </li>
        <li>
          <img src="../../assets/img/order/img2.png" alt="image">
          Аквазона
        </li>
        <li>
          <img src="../../assets/img/order/img3.png" alt="image">
          Размер бассейна
        </li>
        <li>
          <img src="../../assets/img/order/img4.png" alt="image">
          Вместимость
        </li>
        <li>
          <img src="../../assets/img/order/img5.png" alt="image">
          Комнаты отдыха
        </li>
        <li>
          <img src="../../assets/img/order/img6.png" alt="image">
          Магазин
        </li>
        <li>
          <img src="../../assets/img/order/img7.png" alt="image">
          Услуги
        </li>
      </ul>
      <ul class="menu-description">
        <li>Русская баня на дровах / Банный Чан</li>
        <li>Бассейн / Купель ледяная / Обливное устройство</li>
        <li>до 15%</li>
        <li>9</li>
        <li>Русская баня, Сауна / Финская</li>
        <li>SPA-терапия / Ароматерапия / Банщик / Веники / Массаж / Парения / Банные принадлежности / Обливное ведро /
          Чайная церемония / Ароматы для парной / Ледяная купель
        </li>
      </ul>
    </div>
    <div class="menu-wrapper">
      <ul class="menu">
        <li>
          <img src="../../assets/img/order/img8.png" alt="image">
          Кухня
        </li>
        <li>
          <img src="../../assets/img/order/img9.png" alt="image">
          Спорт
        </li>
        <li>
          <img src="../../assets/img/order/img10.png" alt="image">
          Удобства
        </li>
        <li>
          <img src="../../assets/img/order/img11.png" alt="image">
          Сервис
        </li>
        <li>
          <img src="../../assets/img/order/img12.png" alt="image">
          Эксклюзив
        </li>
      </ul>
      <ul class="menu-description padding-bottom">
        <li>Бар / Ресторан</li>
        <li>Бильярд русский / Бильярд американский / Аэро-хоккей / Шахматы / Шашки</li>
        <li>Беседка летняя / Беседка теплая / Отель / Гостевые номера / Парковка / Выход к водоему / Можно с детьми</li>
        <li>9</li>
        <li>Русская баня, Сауна / Финская</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  mounted() {
    let item = document.querySelectorAll('.menu li')
    item.forEach((e) => {
      e.addEventListener('click', () => {
        item.forEach((i) => {
          i.classList.remove('actives')
        })
        e.classList.add('actives')
      })
    })
  }
}
</script>

<style scoped lang="scss">
.text-wrapper h4 {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #3E3E51;
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  margin: 30px auto;

  .menu {
    list-style: none;

    & li {
      width: 162px;
      display: flex;
      align-items: center;
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #8F99BA;
      padding-bottom: 20px;
      cursor: pointer;

      & img {
        margin-right: 20px;
      }
    }
  }
  .menu-description {
    list-style: none;
    margin-left: 30px;
    & li {
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #3E3E51;
      padding-bottom: 34px;
      width: 380px;
    }
  }
}
.padding-bottom li {
  padding-bottom: 15px!important;
}
.actives {
  color: #17A300 !important;
}
</style>
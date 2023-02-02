<script lang="ts" setup>
const links: { title: string; name: string[] }[] = [
  {
    title: "Бани",
    name: [
      "Баня",
      "Сауна",
      "Хаммам",
      "Баня на дровах",
      "Баня по-черному",
      "Японская / афуро",
      "Банный чан",
      "Кедровая бочка",
      "Инфракрасная",
      "Римские / Термы",
      "Общественные бани",
      "Автобаня",
      "Баня на воде",
    ],
  },
  {
    title: "Номера",
    name: ["На час", "На ночь", "Посуточно"],
  },
];
</script>

<template>
  <div class="dropdown-menu">
    <div class="container">
      <div class="menu">

          <div class="menu__item">
            <ul class="nav">
              <h4 class="nav__title">Бани</h4>
              <li class="nav__item">Баня</li>
              <li class="nav__item">Сауна</li>
              <li class="nav__item">Хаммам</li>
              <li class="nav__item">Баня на дровах</li>
              <li class="nav__item">Баня по-черному</li>
              <li class="nav__item">Японская / афуро</li>
              <li class="nav__item">Кедровая бочка</li>
              <li class="nav__item">Инфракрасная</li>
              <li class="nav__item">Римские / Термы</li>
              <li class="nav__item">Общественные бани</li>
              <li class="nav__item">Автобаня</li>
              <li class="nav__item">Баня на воде</li>
            </ul>
          </div>
          <div class="menu__item">
            <ul class="nav"> 
              <h4 class="nav__title">Номера</h4>
              <li class="nav__item">На час</li>
              <li class="nav__item">На ночь</li>
              <li class="nav__item">Посуточно</li>
            </ul>
          </div>
          <div class="menu__item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-menu {
  position: absolute;
  width: 98vw;
  display: flex;
  justify-content: center;
  margin-left: calc(-49vw + 50%);
  left: 0;
  top: 9rem;
  z-index: 1001;
  background: $default-color;
  box-shadow: 0px 7px 27px rgba(136, 152, 206, 0.35);
  border-radius: 1.2rem;
}
.menu{
  display: flex;
  gap: 8rem;
  padding: 3rem 0;
}
.nav{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  &__title{
    font-family: "Lato-Bold";
    font-size: 1.6rem;
  }
  &__item{
    font-size: 1.1rem;
  }
}
</style>

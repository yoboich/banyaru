<script setup>

</script>

<template>
  <div class="selected-content">
    <h2>Описание</h2>
    <div class="selected-content__box">
      <h4>Доступно по подписке Баня плюс</h4>
      <img src="../../assets/img/order/down.png" alt="down">
    </div>
  </div>
</template>

<style scoped lang="scss">
 .selected-content {
   font-family: 'Lato', sans-serif;
   & h2 {
     font-weight: 700;
     font-size: 28px;
     color: #3E3E51;
   }
   &__box {
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin-top: 5px;
     & h4 {
       font-weight: 500;
       font-size: 14px;
       color: #8F99BA;
     }
   }
 }
</style>
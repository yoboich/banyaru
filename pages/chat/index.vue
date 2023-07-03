<template>
  <section class="chat">
    <div class="container" v-if="width > 1000">
      <div class="chat__sidebar">
        <h1 class="chat__sidebar-title">Чаты</h1>
        <ProfileTabs class="chat__sidebar-tabs" :tabs="tabLabels" />
        <div class="chat__sidebar-items">
          <div class="chat__help">
            <IconBase icon="logo" color="green"/>
            <div class="chat__help-info">
              <h3 class="chat__help-title">Поддержка баня.ру</h3>
              <p class="chat__help-text">
                Задавайте вопросы, мы неприменно на них ответим
              </p>
            </div>
          </div>
          <ChatItem unread="3"/>
          <ChatItem v-for="i of 10" :key="i"/>
        </div>
      </div>
      <div class="chat__content">
        <p>Выберите чат</p>
      </div>
    </div>
    <div class="container" v-else>
      <div class="profile-tabs__wrapper">
        <h1 class="chat__title">Чаты</h1>
        <ProfileTabs :tabs="tabLabels" />
      </div>
      <div class="profile-mobile__items">
        <div class="chat__help">
          <IconBase icon="logo" color="green"/>
          <div class="chat__help-info">
            <h3 class="chat__help-title">Поддержка баня.ру</h3>
            <p class="chat__help-text">
              Задавайте вопросы, мы неприменно на них ответим
            </p>
          </div>
        </div>
        <ChatItem v-for="i of 10" :key="i"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize()

definePageMeta({
  layout: "purchases",
});
const tabLabels = ["Все", "Чаты", "Звонки"];
</script>

<style lang="scss">

</style>

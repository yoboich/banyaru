<template>
  <div class="new-post" v-if="width > 1000">
    <div class="container">
      <div class="new-post__intro">
        <h2 class="new-post__intro-title">Новое объявление</h2>
        <p class="new-post__intro-text">
          Объявление будет доступно на
          <nuxt-link to="/">Баня.ру</nuxt-link>
          <br/>
          и в нашем <span>мобильном приложении</span>
        </p>
      </div>
      <div class="new-post__inner">
        <div class="new-post__block new-post__type">
          <h3 class="new-post__title">Тип объявления</h3>
          <div class="new-post__type-info">
            <h4 class="new-post__title new-post__type-title">
              Аренда бани / сауны, почасовая
            </h4>
            <button class="new-post__type-btn">Изменить</button>
          </div>
        </div>
        <div class="new-post__block new-post__location">
          <div class="new-post__location-info">
            <h3 class="new-post__title dot required">Расположение</h3>
            <p class="new-post__location-text">
              Введите адрес или поставьте точку на карте
            </p>
            <input
                type="text"
                class="new-post__location-input"
                placeholder="Адрес"
            />
            <span class="spacer">или</span>
            <input
                type="text"
                class="new-post__location-input"
                placeholder="Координаты"
            />
          </div>
          <Map/>
        </div>
        <div class="new-post__block new-post__bath">
          <h2 class="new-post__title new-post__bath-title dot">
            Тип заведения
          </h2>
          <ul class="new-post__bath-list">
            <PostCheckItem
                v-for="(item, i) of bathItems"
                :key="i"
                :input-id="`checkbox-bath-${i}`"
            >{{ item }}
            </PostCheckItem
            >
          </ul>
        </div>
        <div class="new-post__block new-post__name">
          <h2 class="new-post__title new-post__name-title dot">
            Название объекта
          </h2>
          <p class="new-post__text">Символов 120</p>
          <div class="new-post__name-inner">
            <div>
              <p class="new-post__name-text">
                Название не должно содержать привязки к географическому
                положению или типу здания. Например: Баня на дровах, Сауна на
                Ленина
              </p>
              <PostInput placeholder="Название бани"/>
            </div>
            <div>
              <PostTextarea
                  v-model="postDescription"
                  :counter="420"
                  :placeholder="`Описание бани\n\nОпишите лучшие черты и индивидуальные возможности вашего комплекса в целом. Не перечисляйте многочисленные услуги - для них выделены поля ниже.`"
              />
            </div>
          </div>
        </div>
        <div class="new-post__block new-post__work">
          <h2 class="new-post__title new-post__work-title dot">Режим работы</h2>
          <div class="new-post__work-inner">
            <div>
              <div
                  class="new-post__work-item"
                  @click="activeWorkTime = 'fulltime'"
                  :class="{ active: activeWorkTime === 'fulltime' }"
              >
                <div class="new-post__work-period">
                  <label for="fulltime">Круглосуточно </label>
                  <UIRadioButton
                      v-model="activeWorkTime"
                      name="work-time"
                      input-id="fulltime"
                  />
                </div>
              </div>
              <div
                  class="new-post__work-item"
                  @click="activeWorkTime = 'everyday'"
                  :class="{ active: activeWorkTime === 'everyday' }"
              >
                <div class="new-post__work-period">
                  <label for="everyday">Ежедневно</label>
                  <UIRadioButton
                      v-model="activeWorkTime"
                      name="work-time"
                      input-id="everyday"
                  />
                </div>
                <PostPeriod/>
              </div>
            </div>
            <div
                class="new-post__work-item custom"
                @click="activeWorkTime = 'customday'"
                :class="{ active: activeWorkTime === 'customday' }"
            >
              <div class="new-post__work-period">
                <label for="customday">Свой график</label>
                <UIRadioButton
                    v-model="activeWorkTime"
                    name="work-time"
                    input-id="customday"
                />
              </div>
              <div class="new-post__work-custom">
                <div v-for="day of days" :key="day">
                  <div class="new-post__work-day">{{ day }}</div>
                  <PostPeriod/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="new-post__block new-post__comfort">
          <h3 class="new-post__title new-post__comfort-title dot">Удобства</h3>
          <div class="new-post__comfort-inner">
            <ul class="new-post__comfort-list">
              <PostCheckItem
                  v-for="(item, i) of comfortItems"
                  :key="i"
                  :input-id="`checkbox-comfort-${i}`"
              >{{ item }}
              </PostCheckItem
              >
            </ul>
            <ul class="new-post__parking-list">
              <h5 class="new-post__parking-title">Парковка</h5>
              <PostCheckItem
                  v-for="(item, i) of parkingItems"
                  :key="i"
                  :input-id="`checkbox-parking-${i}`"
              >{{ item }}
              </PostCheckItem
              >
            </ul>
          </div>
        </div>
        <div class="new-post__block new-post__info">
          <div class="new-post__info-item">
            <h3 class="new-post__title new-post__info-title dot">
              Главная фотография
            </h3>
            <p class="new-post__info-text">
              Не допускать к размещению фотографии с водяным знаками, чужих
              объектах и рекламные баннеры, JPG, PNG или GIF
            </p>
            <label for="main-photo" class="new-post__info-file">
              <input id="main-photo" type="file"/>
              <IconBase icon="camera" color="green"/>
              <h6 class="title">Добавить главное фото</h6>
              <span class="conditions">Jpeg | Png | 160 x 160</span>
            </label>
          </div>
          <div class="new-post__info-item">
            <h3 class="new-post__title new-post__info-title dot">Логотип</h3>
            <p class="new-post__info-text">
              Не допускать к размещению фотографии с водяным знаками, чужих
              объектах и рекламные баннеры, JPG, PNG или GIF
            </p>
            <label for="logo-photo" class="new-post__info-file">
              <input id="main-photo" type="file"/>
              <IconBase icon="camera" color="green"/>
              <h6 class="title">Добавить лого</h6>
              <span class="conditions">Jpeg | Png | 160 x 160</span>
            </label>
          </div>
          <div class="new-post__info-item">
            <h3 class="new-post__title new-post__info-title dot">Видео</h3>
            <p class="new-post__info-text">
              Добавить ссылку на видео ролик об объекте (YouTube)
            </p>
            <PostInput placeholder="Ссылка на YouTube"/>
          </div>
          <div class="new-post__info-item">
            <h3 class="new-post__title new-post__info-title dot">Заголовок</h3>
            <p class="new-post__info-text">
              Яркий заголовок объявления для Платных, Бронирования и VIP.
            </p>
            <PostInput placeholder="Заголовок"/>
          </div>
        </div>
        <div class="new-post__block new-post__web">
          <h3 class="new-post__title new-post__web-title dot">
            Объект в интернете
          </h3>
          <p class="new-post__text">Если есть</p>
          <div class="new-post__web-inner">
            <PostInputItem input-id="web-site" placeholder="Сайт"
            >Официальный сайт
            </PostInputItem
            >
            <PostInputItem input-id="web-vk" placeholder="Ссылка"
            >VK
            </PostInputItem
            >
          </div>
        </div>
        <div class="new-post__block new-post__contact">
          <h3 class="new-post__title new-post__contact-title dot required">
            Контакты
          </h3>
          <p class="new-post__text">Информация скрыта</p>
          <div class="new-post__contact-inner">
            <PostInputItem input-id="bath-phone" placeholder="+7"
            >Номер телефона объекта
            </PostInputItem
            >
            <PostInputItem input-id="owner-phone" placeholder="+7"
            >Номер владельца | управляющего
            </PostInputItem
            >
            <PostInputItem input-id="whatsapp-phone" placeholder="+7"
            >Номер для оповещений WhatsApp
            </PostInputItem
            >
            <PostInputItem input-id="admin-email" placeholder="Ссылка"
            >Эл. почта владельца | управляющего
            </PostInputItem
            >
            <PostInputItem input-id="admin-phone" placeholder="+7"
            >Номер администратора
            </PostInputItem
            >
            <PostInputItem input-id="company-name" placeholder="Название"
            >Юридическое название организации
            </PostInputItem
            >
            <PostInputItem input-id="bath-email" placeholder="Ссылка"
            >Электронная почта объекта
            </PostInputItem
            >
            <PostInputItem input-id="owner-inn" placeholder="инн">ИНН</PostInputItem>
          </div>
        </div>
        <form @submit.prevent="" class="post-form post-room" v-if="isRoomSelecting">
          <h2 class="post-form__title">Зал</h2>
          <div class="post-form__activity">
            <h3 class="post-form__activity-title">Активность</h3>
            <div class="post-form__activity-info">i</div>
            <UISwitch/>
          </div>
          <div class="post-form__photos">
            <h2 class="new-post__title post-form__photos-title dot">
              Фотографии
            </h2>
            <PostFileInput/>
          </div>
          <div class="new-post__block post-room__video">
            <h2 class="new-post__title post-room__video-title">Видео</h2>
            <p class="new-post__text">
              Добавить ссылку на видео ролик об объекте (YouTube)
            </p>
            <PostInput placeholder="Ссылка на YouTube"/>
          </div>
          <div class="new-post__block post-form__info">
            <div class="post-form__info-inner">
              <div>
                <h3 class="new-post__title post-form__info-name dot">
                  Название зала
                </h3>
                <p class="post-form__info-text">
                  Примеры: Жаркий сруб | Королевский номер | Зал №3 | Общее
                  отделение | Хаммам
                </p>
                <PostInput placeholder="Название зала"/>
              </div>
              <div>
                <h3 class="new-post__title post-form__info-descr">Описание</h3>
                <PostTextarea
                    :counter="120"
                    :placeholder="`Добавить текст\n\nОбщее описание данного помещения зала не должно дублировать услуги ниже`"
                    v-model="roomDescription"
                />
              </div>
            </div>
          </div>
          <div class="new-post__block post-room__prices">
            <h3 class="new-post__title post-room__prices-title dot">Цена</h3>
            <div class="post-room__prices-inner">
              <div class="post-room__prices-items">
                <div
                    class="post-room__prices-item room-price"
                    @click="activeRoomPrice = 'room-price-simple'"
                    :class="{ active: activeRoomPrice === 'room-price-simple' }"
                >
                  <div class="room-price__info">
                    <UIRadioButton
                        input-id="room-price-simple"
                        name="room-price"
                        v-model="activeRoomPrice"
                    />
                    <div class="room-price__info-details">
                      <h4 class="room-price__info-title">
                        Простая - Постоянная
                      </h4>
                      <p class="room-price__info-text">
                        цена за 1 час <br/><br/>
                        не меняется в зависимости от дня недели, времени суток и
                        праздников
                      </p>
                    </div>
                  </div>
                  <ul class="room-price__list">
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 000 ₽"/>
                      <span>1ч.</span>
                    </li>
                  </ul>
                </div>
                <div
                    class="post-room__prices-item room-price"
                    @click="activeRoomPrice = 'room-price-medium'"
                    :class="{ active: activeRoomPrice === 'room-price-medium' }"
                >
                  <div class="room-price__info">
                    <UIRadioButton
                        input-id="room-price-medium"
                        name="room-price"
                        v-model="activeRoomPrice"
                    />
                    <div class="room-price__info-details">
                      <h4 class="room-price__info-title">Средняя</h4>
                      <p class="room-price__info-text">
                        цена за 1 час изменяется в зависимости от будней,
                        выходных и праздников
                      </p>
                    </div>
                  </div>
                  <ul class="room-price__list">
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 000 ₽"/>
                      <span>24ч. будни</span>
                    </li>
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 000 ₽"/>
                      <span>24ч. выходные</span>
                    </li>
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 500 ₽"/>
                      <span>24ч. праздники</span>
                    </li>
                  </ul>
                </div>
                <div
                    class="post-room__prices-item room-price"
                    @click="activeRoomPrice = 'room-price-hard'"
                    :class="{ active: activeRoomPrice === 'room-price-hard' }"
                >
                  <div class="room-price__info">
                    <UIRadioButton
                        name="room-price"
                        v-model="activeRoomPrice"
                        input-id="room-price-hard"
                    />
                    <div class="room-price__info-details">
                      <h4 class="room-price__info-title">Сложная</h4>
                      <p class="room-price__info-text">
                        цена за 1 час <br/><br/>
                        изменяется в зависимости от дней недели, времени суток и
                        праздников
                      </p>
                    </div>
                  </div>
                  <ul class="room-price__list">
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 000 ₽"/>
                      <span>1ч. будни утро</span>
                    </li>
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 000 ₽"/>
                      <span>1ч. будни вечер</span>
                    </li>
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 500 ₽"/>
                      <span>1ч. выходные утро</span>
                    </li>
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 500 ₽"/>
                      <span>1ч. выходные вечер</span>
                    </li>
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 500 ₽"/>
                      <span>1ч. праздники</span>
                    </li>
                  </ul>
                </div>
                <div
                    class="post-room__prices-item room-price"
                    @click="activeRoomPrice = 'room-price-extrasimple'"
                    :class="{
                    active: activeRoomPrice === 'room-price-extrasimple',
                  }"
                >
                  <div class="room-price__info">
                    <UIRadioButton
                        input-id="room-price-extrasimple"
                        name="room-price"
                        v-model="activeRoomPrice"
                    />
                    <div class="room-price__info-details">
                      <h4 class="room-price__info-title">
                        Простая - Количественная
                      </h4>
                      <p class="room-price__info-text">
                        цена за 1 час <br/><br/>
                        не меняется в зависимости от дня недели, времени суток и
                        праздников, но меняется от количества гостей
                      </p>
                    </div>
                  </div>
                  <ul class="room-price__list">
                    <li class="room-price__list-item">
                      <PostInput placeholder="1 000 ₽"/>
                      <span>1ч.</span>
                      <PostInput placeholder="2"/>
                      <span>чел.</span>
                      <button class="btn-remove">
                        <IconBase icon="decrement" color="green"/>
                      </button>
                    </li>
                    <button class="room-price__btn-add">
                      <IconBase icon="increment" color="green"/>
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="new-post__block post-room__dates">
            <h3 class="new-post__title post-room__dates-title dot">
              День и время
            </h3>
            <div class="post-room__dates-inner">
              <ul class="post-room__dates-list">
                <h4 class="post-room__dates-suptitle">Выбор будних дней</h4>
                <li class="post-room__dates-item">
                  <UIRadioButton name="room-dates" input-id="room-dates-1"/>
                  <label for="room-dates-1">пн-ср</label>
                </li>
                <li class="post-room__dates-item">
                  <UIRadioButton name="room-dates" input-id="room-dates-1"/>
                  <label for="room-dates-2">пн-чт</label>
                </li>
                <li class="post-room__dates-item">
                  <UIRadioButton name="room-dates" input-id="room-dates-1"/>
                  <label for="room-dates-3">пн-пт</label>
                </li>
              </ul>
              <div class="post-room__dates-time">
                <h4 class="post-room__dates-suptitle">Выбор будних дней</h4>
                <div>
                  <label for="time-day-start">Утро будни</label>
                  <PostPeriod/>
                </div>
                <div>
                  <label for="time-day-start">Утро выходные</label>
                  <PostPeriod/>
                </div>
              </div>
            </div>
          </div>
          <div class="new-post__block post-room__details">
            <div class="col">
              <div class="post-room__details-item">
                <h3 class="new-post__title dot">Вид парной</h3>
                <PostCheckItem
                    v-for="(item, i) of bathTypeItems"
                    :input-id="`checkbox-bath-type-${i}`"
                    :key="i"
                >{{ item }}
                </PostCheckItem
                >
              </div>
              <div class="post-room__details-item">
                <h3 class="new-post__title">Спорт</h3>
                <PostCheckItem
                    v-for="(item, i) of sportTypeItems"
                    :input-id="`checkbox-sport-type-${i}`"
                    :key="i"
                >{{ item }}
                </PostCheckItem
                >
              </div>
              <div class="post-room__details-item">
                <h3 class="new-post__title">Аквазона</h3>
                <div class="post-room__details-input">
                  <label for="aquazone-input-1">кол-во / чел.</label>
                  <PostInput
                      :input-id="'aquazone-input-1'"
                      placeholder="14 ч"
                  />
                </div>
                <PostCheckItem
                    v-for="(item, i) of aquazoneTypeItems.slice(0, 5)"
                    :input-id="`checkbox-aquazone-type-${i}`"
                    :key="i"
                >{{ item }}
                </PostCheckItem
                >
                <br/><br/>
                <PostCheckItem
                    v-for="(item, i) of aquazoneTypeItems.slice(5)"
                    :input-id="`checkbox-aquazone-part-type-${i}`"
                    :key="i"
                >{{ item }}
                </PostCheckItem
                >
              </div>
            </div>
            <div class="col">
              <div class="post-room__details-item">
                <h3 class="new-post__title dot">Сервис</h3>
                <PostCheckItem
                    v-for="(item, i) of serviceTypeItems"
                    :input-id="`checkbox-service-type-${i}`"
                    :key="i"
                >{{ item }}
                </PostCheckItem
                >
              </div>
              <div class="post-room__details-item">
                <h3 class="new-post__title">Аквазона</h3>
                <PostCheckItem :input-id="`checkbox-aquazone-second-type-1`">{{
                    aquazoneTypeItemsSecond[0]
                  }}
                </PostCheckItem>
                <div class="post-room__details-input">
                  <label for="aquazone-input-1">размер/м</label>
                  <PostInput
                      :input-id="'aquazone-input-2'"
                      placeholder="24 м"
                  />
                </div>
                <PostCheckItem
                    v-for="(item, i) of aquazoneTypeItemsSecond.slice(1)"
                    :input-id="`checkbox-aquazone-second-type-${i + 2}`"
                    :key="i"
                >{{ item }}
                </PostCheckItem
                >
              </div>
            </div>
          </div>
          <div class="new-post__block post-room__holidays">
            <h3 class="new-post__title post-room__holidays-title dot">
              Праздничные дни
            </h3>
            <p class="new-post__text">
              Укажите праздничные дни для правильного расчета цены
            </p>
            <div class="post-room__holidays-items">
              <div class="post-room__holidays-item">
                <h4 class="title">Дата праздничных дней</h4>
                <PostInput input-id="holiday-input-1" type="date"/>

                <button class="post-form__icon-btn">
                  <label for="holiday-input-1">
                    <IconBase icon="calendar" color="green"/>
                  </label>
                </button>
                <button class="post-form__icon-btn">
                  <IconBase icon="decrement" color="green"/>
                </button>
              </div>
              <button class="post-form__icon-btn">
                <IconBase icon="increment" color="green"/>
              </button>
            </div>
          </div>
          <div class="new-post__block two-columns">
            <div class="post-room__bargains">
              <h3 class="new-post__title two-columns__title dot">Скидки</h3>
              <div class="post-room__bargains-items">
                <div class="post-room__bargains-item">
                  <PostInput placeholder="10"/>
                  <span>%</span>
                  <PostInput placeholder="Д/Р (5 дней До и После+документ)"/>
                </div>
                <div class="post-room__bargains-item">
                  <PostInput placeholder="50"/>
                  <span>%</span>
                  <PostInput placeholder="7- 14 лет"/>
                </div>
                <div class="post-room__bargains-item">
                  <PostInput placeholder="30"/>
                  <span>%</span>
                  <PostInput placeholder="9-17 пн-чт"/>
                </div>
              </div>
            </div>
            <div class="post-room__capacity">
              <h3 class="new-post__title two-columns__title dot">
                Вместимость
              </h3>
              <div class="post-room__capacity-items">
                <div class="post-room__capacity-item">
                  <label for="guests-amount"
                  >Количество гостей, входящих в цену.</label
                  >
                  <PostInput input-id="guests-amount" placeholder="4"/>
                </div>
                <div class="post-room__capacity-item">
                  <label for="max-guests"
                  >Максимальное допустимое количество гостей для зала.</label
                  >
                  <PostInput input-id="max-guests" placeholder="4"/>
                </div>
                <div class="post-room__capacity-item">
                  <label for="bedrooms"
                  >Количество комнат отдыха с кроватью.</label
                  >
                  <PostInput input-id="bedrooms" placeholder="4"/>
                </div>
              </div>
            </div>
          </div>
          <div class="new-post__block post-room__service">
            <h3 class="new-post__title post-room__service-title dot">Сервис</h3>
            <div class="post-room__service-inner">
              <PostCheckItem v-for="(item, i) of serviceItems" :key="i" :input-id="`checkbox-service-${i}`">{{ item }}
              </PostCheckItem>
            </div>
          </div>
          <div class="new-post__block post-room__booking">
            <div>
              <h3 class="new-post__title dot">Минимальное время бронирования</h3>
              <div class="flex">
                <div class="post-room__booking-radios">
                  <div class="post-room__booking-radio" v-for="(item, i) of bookRadios" :key="i">
                    <label :for="`book-radio-${i}`">{{ item }}</label>
                    <UIRadioButton name="book-radio" :input-id="`book-radio-${i}`"/>
                  </div>
                </div>
                <div class="post-room__booking-controls">
                  <button class="post-form__icon-btn">
                    <IconBase icon="decrement" color="green"/>
                  </button>
                  <button class="post-form__icon-btn">
                    <IconBase icon="increment" color="green"/>
                  </button>
                </div>
              </div>
              <h3 class="new-post__title">Минимальное время отмены бронирования</h3>
              <div class="flex">
                <div class="post-room__booking-radios">
                  <div class="post-room__booking-radio" v-for="(item, i) of bookCancelRadios" :key="i">
                    <label :for="`book-cancel-radio-${i}`">{{ item }}</label>
                    <UIRadioButton name="book-cancel-radio" :input-id="`book-cancel-radio-${i}`"/>
                  </div>
                </div>
                <div class="post-room__booking-controls">
                  <button class="post-form__icon-btn">
                    <IconBase icon="decrement" color="green"/>
                  </button>
                  <button class="post-form__icon-btn">
                    <IconBase icon="increment" color="green"/>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 class="new-post__title dot">Обязательный перерыв</h3>
              <p class="new-post__text">Время на обязательную уборку или отдых персонала после каждого бронирования.</p>
              <div class="post-room__booking-radios">
                <div class="post-room__booking-radio" v-for="(item, i) of restRadios" :key="i">
                  <label :for="`book-rest-radio-${i}`">{{ item }}</label>
                  <UIRadioButton name="book-rest-radio" :input-id="`book-rest-radio-${i}`"/>
                </div>
              </div>
              <h3 class="new-post__title">Опоздание</h3>
              <PostCheckItem input-id="book-check">
                <p class="post-room__booking-text">Просьба не задерживаться на сеанс. Время вашей задержки входит в
                  стоимость бронирования!</p>
              </PostCheckItem>
            </div>
          </div>
          <div class="post-room__controls">
            <button class="post-room__controls-btn">Посмотреть</button>
            <button class="post-room__controls-btn">Назад</button>
            <button class="post-room__controls-btn green" @click="isRoomSelecting = false">Добавить</button>
          </div>
        </form>
        <form @submit.prevent="" class="post-form post-service" v-if="isServiceSelecting">
          <h2 class="post-form__title">Добавление услуги</h2>
          <div class="post-form__activity">
            <h3 class="post-form__activity-title">Активность</h3>
            <div class="post-form__activity-info">i</div>
            <UISwitch/>
          </div>
          <div class="new-post__block post-form__photos">
            <h2 class="new-post__title post-form__photos-title dot">
              Фотографии
            </h2>
            <PostFileInput/>
          </div>
          <div class="new-post__block post-form__info">
            <div class="post-form__info-inner">
              <div>
                <h3 class="new-post__title post-form__info-name dot">
                  Название услуги
                </h3>
                <PostInput placeholder="Название"/>
              </div>
              <div>
                <h3 class="new-post__title post-form__info-descr">Описание</h3>
                <PostTextarea
                    :counter="120"
                    placeholder="Добавить текст"
                    v-model="serviceDescription"
                />
              </div>
            </div>
          </div>
          <div class="new-post__block post-service__price">
            <h3 class="new-post__title dot post-service__price-title">Цена</h3>
            <div class="post-service__price-inner">
              <div class="post-service__price-items">
                <div class="post-service__price-item">
                  <PostInput class="price" placeholder="1 000 ₽"/>
                  <PostInput class="time" placeholder="50" />
                  <span>мин.</span>
                  <PostInput class="descr" placeholder="Парение в 4 руки" />
                  <button class="post-form__icon-btn">
                    <IconBase icon="decrement" color="green"/>
                  </button>
                </div>
                <div class="post-service__price-item">
                  <PostInput class="price" placeholder="1 000 ₽"/>
                  <PostInput class="time" placeholder="50" />
                  <span>мин.</span>
                  <PostInput class="descr" placeholder="Парение в 4 руки" />
                  <button class="post-form__icon-btn">
                    <IconBase icon="decrement" color="green"/>
                  </button>
                </div>
              </div>
              <button class="post-form__icon-btn">
                <IconBase icon="increment" color="green"/>
              </button>
            </div>
          </div>
          <div class="post-room__controls">
            <button class="post-room__controls-btn">Посмотреть</button>
            <button class="post-room__controls-btn">Назад</button>
            <button class="post-room__controls-btn green" @click="isServiceSelecting = false">Добавить</button>
          </div>
        </form>
        <div class="new-post__block new-post__items" v-if="!isRoomSelecting && !isServiceSelecting">
          <h3 class="new-post__title new-post__items-title">Залы</h3>
          <ul class="new-post__items-list">
            <li class="new-post__items-block">
              <h3 class="title">Горячий сруб</h3>
              <div class="new-post__items-controls">
                <span class="edit">Редактировать</span>
                <UISwitch/>
                <div class="new-post__items-swipe">
                  <button class="swipe-up">
                    <IconBase icon="arrow-left" color="gray"/>
                  </button>
                  <button class="swipe-down">
                    <IconBase icon="arrow-left" color="gray"/>
                  </button>
                </div>
              </div>
            </li>
            <button class="new-post__items-btn" @click="isRoomSelecting = true">
              <IconBase icon="plus" color="green"/>
              Добавить зал
            </button>
          </ul>
          <h3 class="new-post__title new-post__items-title">Услуги</h3>
          <ul class="new-post__items-list">
            <li class="new-post__items-block">
              <h3 class="title">Услуга</h3>
              <div class="new-post__items-controls">
                <span class="edit">Редактировать</span>
                <UISwitch/>
                <div class="new-post__items-swipe">
                  <button class="swipe-up">
                    <IconBase icon="arrow-left" color="gray"/>
                  </button>
                  <button class="swipe-down">
                    <IconBase icon="arrow-left" color="gray"/>
                  </button>
                </div>
              </div>
            </li>
            <button class="new-post__items-btn" @click="isServiceSelecting = true">
              <IconBase icon="plus" color="green"/>
              Добавить услугу
            </button>
          </ul>
        </div>
      </div>
      <aside class="new-post__sidebar">
        <div class="new-post__sidebar-block">
          <h2 class="new-post__title new-post__sidebar-title">Баня</h2>
          <ul class="new-post__sidebar-list">
            <li
                class="new-post__sidebar-item"
                :class="{ active: i === 4 }"
                v-for="(item, i) of sidebarItems"
                :key="i"
            >
              <IconBase icon="new-post-check" color="gray"/>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
  <div class="new-post mobile" v-else>
    <div class="profile-mobile__header">
      <button class="profile-mobile__header-btn">
        <nuxt-link to="/profile">
          <IconBase icon="arrow-left" color="green"/>
        </nuxt-link>
      </button>
      <h1 class="profile-mobile__title">Сдать баню</h1>
      <button class="profile-mobile__header-btn">
        <IconBase icon="more" color="green"/>
      </button>
    </div>
    <div class="new-post__tabs">
      <span v-for="(item, i) of sidebarItems" :key="item" :class="{active: i === 0}">{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
import {useWindowSize} from "@vueuse/core";

const {width} = useWindowSize()

definePageMeta({
  layout: "empty",
});

const days = ref(["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]);

const sidebarItems = ref([
  "Тип объявления",
  "Расположение",
  "Тип здания",
  "Расположение",
  "Название",
  "Режим работы",
  "Удобства",
  "Парковка",
  "Фото бани/лого",
  "Объект в интернете",
  "Контакты",
  "Залы",
  "Услуги",
  "Оплата",
]);

const bathItems = ref([
  "Элитные",
  "Бани",
  "Сауна",
  "Общественная баня",
  "Баня на воде",
  "Семейная баня",
  "Банный комплекс",
  "Гостиничный комплекс",
  "Дом с баней",
  "Баня на колёсах",
  "Бассейн",
]);

const comfortItems = ref([
  "Беседка летняя ",
  "Беседка теплая",
  "Летняя веранда",
  "Отель / Гостевые номера",
  "Парковка",
  "Автомойка",
  "Выход к водоему",
  "Пробковый сбор",
  "Можно с детьми",
  "Можно с животными",
  "Свой двор",
]);

const parkingItems = ref([
  "Бесплатная",
  "Платная",
  "С видео-наблюдением",
  "Охранаяемая",
  "Свободная (стихийная)",
  "Крытая",
]);

const activeWorkTime = ref("fulltime");

const isRoomSelecting = ref(false);
const isServiceSelecting = ref(false);

const roomDescription = ref("");
const serviceDescription = ref("");
const postDescription = ref("");

const activeRoomPrice = ref("room-price-simple");

const bathTypeItems = ref([
  "Баня",
  "Сауна",
  "Баня на дровах",
  "Хаммам",
  "Японская",
  "Банный чан",
  "Кедровая бочка",
  "Инфракрасная",
  "Римские / Термы",
  "Баня по-чёрному",
]);

const sportTypeItems = ref([
  "Бильярд русский",
  "Бильярд американский",
  "Аэро-хоккей",
  "Настольный теннис",
  "Дартс",
  "Шахматы / Шашки",
  "Нарды",
  "Тренажеры",
]);

const serviceTypeItems = ref([
  "Банкетный зал",
  "Бесплатный wi-fi",
  "Гостиная",
  "Камин",
  "Караоке",
  "Кондиционер",
  "Музыка",
  "Кабельное TV",
  "Кальян",
  "Мероприятия",
  "Шоу-программы",
  "Сейф",
  "Ассортимент табака-сигары",
  "Танцпол",
]);

const aquazoneTypeItems = ref([
  "подсветка",
  "гидромассаж",
  "телевизор",
  "Купель ледяная",
  "Купель горячая",
  "Обливное устройство",
  "Фито-бочка",
  "Душ Тропический дождь",
  "Душ Шарко",
  "Водная горка",
]);

const aquazoneTypeItemsSecond = ref([
  "Бассейн",
  "противоток",
  "Фонтан",
  "гейзер",
  "подогрев",
  "подсветка",
  "телевизор",
  "Фильтрация",
  "очистка",
  "морская вода",
]);

const serviceItems = ref([
  'Мероприятия',
  'Шоу-программы',
  'Сейф',
  'Ассортимент табака-сигары',
  'Танцпол',
  'Кондиционер',
  'Музыка',
  'Банкетный зал',
  'Бесплатный wi-fi',
  'Гоcтиная',
  'Камин',
  'Караоке',
  'Кабельное TV',
  'Кальян'
])

const bookRadios = ref(['30 мин', '1ч.', '1.5ч.', '2ч', '2.5ч', '3ч'])
const restRadios = ref(['30 мин', '1ч.', '1.5ч.', '2ч', '3ч'])
const bookCancelRadios = ref(['нет', '6ч.', '12ч.', '24ч', '48ч'])
</script>

<style lang="scss" scoped>
.new-post {
  background: #f1f3f9;
  min-height: 100vh;
  padding: 80px 0 100px;

  &.mobile {
    padding: 0;
    background: #fff;

    .new-post__tabs {
      padding: 20px 20px;
      border-radius: 25px;
      border-bottom: 1px solid #DADEEC;
      display: flex;
      gap: 30px;
      overflow: auto;
      margin-bottom: 40px;

      &::-webkit-scrollbar {
        display: none;
      }

      span {
        display: block;
        flex-shrink: 0;
        color: $gray;

        &.active {
          color: $black;
        }
      }
    }
    .new-post__location {

    }
  }

  &__intro {
    margin-bottom: 50px;
    padding-left: 40px;
    grid-column: 1 / -1;

    &-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 24px;
    }

    &-text {
      font-size: 16px;
      line-height: 18px;

      a,
      span {
        color: $green;
        cursor: pointer;
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: 9fr 3fr;
    gap: 40px;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
    }
  }

  &__inner {
    background: #fff;
    padding: 40px;
    border-radius: 25px;
  }

  &__sidebar {
    background: #fff;
    padding: 40px 30px;
    box-shadow: 0px 11px 48px rgba(178, 188, 221, 0.15);
    border-radius: 25px;

    @media (max-width: 1300px) {
      display: none;
    }

    &-title {
      margin-bottom: 20px;
    }

    &-item {
      font-size: 16px;
      line-height: 18px;
      color: $gray;

      svg {
        margin-right: 16px;
      }

      &:not(:last-of-type) {
        margin-bottom: 10px;
      }

      &.active {
        color: $green;

        svg {
          --icon-color: #{$green};
        }
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;

    &.dot {
      padding-left: 20px;

      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $green;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &.required {
      &::after {
        content: "*";
        color: $red;
        position: absolute;
        right: 0;
        top: 0;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        transform: translate(100%, 0);
      }
    }
  }

  &__text {
    color: $gray;
    margin-left: 20px;
  }

  &__type {
    padding-top: 0 !important;

    &-info {
      background: #d8ffd1;
      border-radius: 25px;
      padding: 25px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-title {
      margin-bottom: 0;
    }

    &-btn {
      padding: 15px 50px;
      border: 2px solid #dadeec;
      border-radius: 100px;
      background: #fff;
      cursor: pointer;
      color: $green;
      font-size: 20px;
      line-height: 100%;
      transition: all 0.2s;

      &:hover {
        background: $green;
        color: #fff;
      }
    }
  }

  &__block {
    padding: 60px 0;
    border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);

    &.error {
      .new-post__title {
        &::before {
          background: $red;
        }
      }
    }
  }

  &__location {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 50px;

    .map {
      border-radius: 25px;
      overflow: hidden;
      min-height: 345px;
      filter: grayscale(100%);
    }

    &-text {
      margin-bottom: 60px;
    }

    &-input {
      display: block;
      border: 2px solid #dadeec;
      border-radius: 25px;
      background: #fff;
      padding: 10px 12px;
      width: 100%;

      &::placeholder {
        color: $gray;
      }
    }

    .spacer {
      display: block;
      margin: 10px 0 10px 15px;
    }
  }

  &__bath {
    &-title {
      margin-bottom: 30px;
    }

    &-list {
      columns: 2;
      gap: 200px;
    }

    // &-item {
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    //   margin-bottom: 10px;
    //   .name {
    //     cursor: pointer;
    //   }
    // }
  }

  &__name {
    &-title {
      margin-bottom: 5px;
    }

    & .new-post__text {
      margin-bottom: 20px;
    }

    &-inner {
      display: grid;
      gap: 50px;
      grid-template-columns: 2fr 3fr;
    }

    &-text {
      margin-bottom: 50px;
    }
  }

  &__work {
    &-title {
      margin-bottom: 30px;
    }

    &-period {
      display: flex;
      justify-content: space-between;
      align-items: center;

      label {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }
    }

    &-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 150px;
    }

    &-item {
      padding-bottom: 30px;
      border-bottom: 1px solid rgba($color: $gray, $alpha: 0.2);
      margin-bottom: 20px;

      .new-post__work-period {
        label {
          transition: all 0.2s;
          color: $gray;
        }
      }

      & :deep(.post-period) {
        input {
          color: $gray;
        }
      }

      &.active,
      &:hover {
        .new-post__work-period {
          label {
            color: $black !important;
          }
        }
      }

      &.active {
        .new-post__work-day {
          color: $black;
        }

        & :deep(.post-period) {
          input {
            color: $black;
          }
        }
      }

      &.custom {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      .post-period {
        margin-top: 25px;
      }
    }

    &-custom {
      margin-top: 30px;

      & > div {
        display: flex;
        align-items: center;
        gap: 70px;

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }

        .post-period {
          margin-top: 0;
        }
      }
    }

    &-day {
      font-size: 16px;
      line-height: 18px;
      color: $gray;
    }
  }

  &__comfort {
    &-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &-list {
      padding-right: 130px;
      border-right: 1px solid rgba($color: $gray, $alpha: 0.2);
    }

    .new-post__parking {
      &-list {
        padding-left: 130px;
      }

      &-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 25px;
      }
    }
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 180px;

    &-title {
      margin-bottom: 15px;
    }

    &-text {
      color: $gray;
      margin-bottom: 20px;
    }

    &-item {
      display: flex;
      flex-direction: column;

      &:first-of-type {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          right: -90px;
          bottom: 0;
          height: 85%;
          width: 1px;
          background: rgba($color: $gray, $alpha: 0.2);
        }
      }

      .post-input {
        margin-top: auto;
      }
    }

    &-file {
      @include flex-center-all;

      border: 1px solid $gray;
      border-radius: 25px;
      flex-direction: column;
      padding: 60px 20px;
      margin-top: 10px;
      cursor: pointer;

      .icon-base {
        margin-bottom: 10px;
      }

      .title {
        font-size: 16px;
        line-height: 18px;
        color: $green;
        margin-bottom: 10px;
      }

      .conditions {
        font-size: 11px;
        line-height: 13px;
        color: $gray;
      }

      input {
        display: none;
      }
    }
  }

  &__web {
    &-title {
      margin-bottom: 5px;
    }

    .new-post__text {
      margin-bottom: 30px;
    }

    &-inner {
      display: flex;
      gap: 60px;
    }
  }

  &__contact {
    &-title {
      margin-bottom: 5px;
    }

    .new-post__text {
      margin-bottom: 40px;
    }

    &-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  &__items {
    &-title {
      margin-bottom: 30px;
    }

    &-list {
      &:first-of-type {
        margin-bottom: 100px;
      }
    }

    &-block {
      padding: 20px 30px;
      margin-bottom: 35px;
      border-radius: 25px;
      border: 1px solid #dadeec;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
      }
    }

    &-controls {
      display: flex;
      align-items: center;

      .edit {
        font-size: 16px;
        line-height: 20px;
        display: inline-block;
        margin-right: 60px;
        transition: all 0.2s;
        cursor: pointer;

        &:hover {
          color: $green;
        }
      }

      .switch {
        margin-right: 35px;
      }
    }

    &-swipe {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      button {
        display: flex;
        cursor: pointer;

        &:hover {
          svg {
            --icon-color: #{$green};
          }
        }
      }

      .swipe-up {
        transform: rotate(90deg);
      }

      .swipe-down {
        transform: rotate(-90deg);
      }
    }

    &-btn {
      @include flex-center-all;
      gap: 5px;
      color: $green;
      font-size: 20px;
      line-height: 100%;
      margin-left: 80px;
      cursor: pointer;
    }
  }

  .post-form {
    margin-top: 100px;

    &__icon-btn {
      @include flex-center-all;

      width: 36px;
      height: 36px;
      background: #ffffff;
      border: 2px solid #dadeec;
      border-radius: 50%;
      cursor: pointer;

      label {
        display: flex;
        cursor: pointer;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 30px;
    }

    &__activity {
      display: flex;

      &-title {
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        margin-right: 15px;
      }

      &-info {
        @include flex-center-all;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #dadeec;
        color: $green;
        margin-right: 35px;
        margin-bottom: 40px;
      }
    }


    &__info {
      &-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;

        & > div {
          &:first-of-type {
            max-width: 340px;
            display: flex;
            flex-direction: column;
          }
        }
      }

      &-text {
        color: $gray;
      }

      .post-input {
        margin-top: auto;
      }
    }
  }

  .post-service {
    .post-form__info {
      & :deep(.post-input) {
        margin-top: 0;
      }
    }

    .post-form__photos {
      padding-top: 0;
    }

    &__price {
      border-bottom: none;

      &-title {
        margin-bottom: 30px;
      }

      &-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
        & :deep(.post-input) {
          input {
            width: 100%;
            text-align: center;
          }
        }

        .price {
          width: 100px;
          margin-right: 40px;
        }

        .time {
          width: 100px;
          margin-right: 10px;
        }

        .descr {
          margin-left: 40px;
          width: 100%;
          margin-right: 30px;
        }

        .post-form__icon-btn {
          flex-shrink: 0;
        }

      }
    }
  }

  .post-room {

    &__controls {
      display: flex;
      justify-content: flex-end;

      &-btn {
        cursor: pointer;
        font-size: 20px;
        line-height: 100%;
        padding: 15px 40px;
        border-radius: 100px;

        &.green {
          background: $green;
          color: white;
        }
      }
    }

    &__video {
      padding-top: 20px;

      & .new-post__text {
        margin-left: 0;
        margin-bottom: 20px;
      }

      .post-input {
        max-width: 340px;
      }
    }

    &__prices {
      &-title {
        margin-bottom: 40px;
      }

      &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        .room-price {
          &.active,
          &:hover {
            .room-price__info-title {
              color: $black;
            }
          }

          &.active {
            .room-price__list-item {
              color: $black;
            }
          }

          &__info {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 15px;
            margin-bottom: 40px;
            cursor: pointer;

            &-title {
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
              margin-bottom: 15px;
              color: $gray;
              transition: all 0.2s;
            }

            &-text {
              color: $gray;
            }

            .radio {
              flex-shrink: 1;
            }
          }

          &:last-of-type {
            max-width: 350px;
            grid-column: 1 / -1;

            .room-price__btn-add {
              @include flex-center-all;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              border: 2px solid #dadeec;
              flex-shrink: 1;
              cursor: pointer;
              margin-top: 15px;
            }
          }

          &__list {
            display: flex;
            flex-direction: column;
            gap: 5px;

            &-item {
              display: flex;
              align-items: center;
              gap: 10px;
              color: $gray;
              transition: all 0.2s;

              & .btn-remove {
                @include flex-center-all;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                border: 2px solid #dadeec;
                flex-shrink: 1;
                cursor: pointer;
              }

              & :deep(.post-input) {
                max-width: 100px;

                input {
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }

    &__dates {
      &-inner {
        display: flex;
        gap: 100px;
      }

      &-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      &-item {
        display: flex;
        align-items: center;
        gap: 10px;

        label {
          font-size: 16px;
        }
      }

      &-time {
        & > div {
          display: grid;
          grid-template-columns: 120px auto;
          align-items: center;
          margin-bottom: 10px;
        }
      }

      &-title {
        margin-bottom: 35px;
      }

      &-suptitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
      }
    }

    &__details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 150px;

      .col {
        position: relative;

        &:first-of-type {
          &::after {
            content: "";
            position: absolute;
            right: -75px;
            top: 40px;
            height: 60%;
            width: 1px;
            background: rgba($color: $gray, $alpha: 0.2);
          }
        }
      }

      &-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        & :deep(.post-input) {
          width: 60px;

          input {
            padding: 8px 12px;
            text-align: center;
          }
        }
      }

      &-item {
        &:not(:last-of-type) {
          margin-bottom: 50px;
        }
      }
    }

    &__holidays {
      & .new-post__text {
        margin-bottom: 40px;
      }

      &-items {
        margin-left: 20px;
      }

      &-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .title {
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          margin-right: 30px;
        }

        & :deep(.post-input) {
          margin-right: 20px;

          input {
            &:focus {
              outline: $green;
            }
          }
        }

        .post-form__icon-btn {
          &:not(:last-of-type) {
            margin-right: 20px;
          }
        }
      }
    }

    &__bargains {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: -40px;
        top: 40px;
        height: 70%;
        width: 1px;
        background: rgba($color: $gray, $alpha: .2);
      }

      &-item {
        display: flex;
        align-items: center;
        color: $gray;
        gap: 20px;
        margin-bottom: 20px;

        & :deep(.post-input) {
          &:first-of-type {
            width: 50px;

            input {
              text-align: center;
            }
          }

          input {
            padding: 8px 12px;
          }

          &:last-of-type {
            width: 270px;
          }
        }
      }
    }

    &__capacity {
      padding-right: 50px;

      &-item {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        align-items: center;
        margin-bottom: 35px;

        label {
          display: flex;
          font-size: 16px;
          line-height: 18px;
        }

        & :deep(.post-input) {
          width: 60px;
          flex-shrink: 0;

          input {
            text-align: center;
            padding: 8px 12px;
          }
        }
      }
    }

    &__service {
      &-title {
        margin-bottom: 30px;
      }

      &-inner {
        column-count: 2;
        gap: 150px;
      }
    }

    &__booking {
      display: grid;
      grid-template-columns: 5fr 4fr;
      gap: 100px;
      border-bottom: none;

      .flex {
        align-items: flex-end;
        gap: 25px;
      }

      &-controls {
        display: flex;
        gap: 10px;
        transform: translateY(15%);
      }

      &-radios {
        display: flex;
        align-items: center;
        gap: 30px;
      }

      &-radio {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }

      .new-post__text {
        margin-left: 0;
        margin-bottom: 35px;
      }

      &-text {
        font-size: 16px;
        line-height: 18px;
        color: $gray;
      }

      & :deep(.post-check) {
        .checkbox {
          flex-shrink: 0;
        }

        gap: 30px;
      }

      & > div {
        &:first-of-type {
          .new-post__title:first-of-type {
            margin-bottom: 85px;
          }

          position: relative;

          &::after {
            content: '';
            position: absolute;
            right: -50px;
            top: 0;
            height: 95%;
            width: 1px;
            background: rgba($color: $gray, $alpha: .2);
          }
        }

        &:last-of-type {
          .post-room__booking-radios {
            margin-bottom: 40px;
          }

          .new-post__title:last-of-type {
            margin-bottom: 25px;
          }
        }

        & .flex {
          &:not(:last-of-type) {
            margin-bottom: 40px;
          }

          &:last-of-type {
            .post-room__booking-radio {
              &:first-of-type {
                margin-right: 100px;
              }
            }
          }
        }
      }

    }
  }
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;

  &__title {
    margin-bottom: 30px;
  }
}
</style>

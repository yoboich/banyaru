<template>
  <div class="advert-main">
    <div class="advert-main__title">Новое объявление</div>
    <AdvertMainType />
    <AdvertMainLocation />
    <AdvertMainBuildingType />
    <AdvertMainName />
    <AdvertMainWorktime />
    <AdvertMainFacilities />
    <AdvertMainPhoto />
    <AdvertMainSocial />
    <AdvertMainContacts />
    <div class="advert-main__title advert-main__title_zal">Зал</div>
    <div class="advert-main__item">
      <span>Активность <img src="" alt="" /></span>
      <input type="radio" />
    </div>
    <AdvertMainZalName/>
    <AdvertMainZalPrice/>
    <AdvertMainZalTime/>
    <AdvertMainZalFacilities/>
    <AdvertMainZalDiscount/>
    <AdvertMainZalService/>
    <LazyAdvertMainZalBooking/>
  </div>
</template>

<style lang="scss" scoped>
.advert-main {
  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
  border-radius: 2.3rem;
  padding: 0 5rem;
  max-width: 106rem;
  width: 100%;
  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
    margin-top: 5.9rem;
    margin-bottom: 5.8rem;
    &_zal {
      margin-bottom: 1.9rem;
    }
  }
  &__item {
    justify-content: center;
    display: flex;
    gap: 6rem;
    padding-bottom: 5.9rem;
    border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  }
}
</style>

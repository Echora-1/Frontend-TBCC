<template>
  <div class='wallet-main-screen container'>
    <div class='wallet-main-screen__content'>
      <h1 class='wallet-main-screen__title base-title'>Crypto wallet made for people.</h1>
      <h2 class='wallet-main-screen__description'>Send, receive, and exchange Bitcoin and 30+ cryptocurrencies.</h2>
      <base-button shaded>
        Create Wallet
      </base-button>
    </div>
    <div class='wallet-main-screen__img-wrap'>
      <picture>
        <source type="image/webp" srcset='~assets/img/wallet-main-screen.webp 1x, ~assets/img/wallet-main-screen@2x.webp 2x,'>
        <img src='~assets/img/wallet-main-screen.png' class='wallet-main-screen__img' srcset='~assets/img/wallet-main-screen@2x.png 2x' width='667' height='657' alt='wallet'>
      </picture>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
  components: { BaseButton }
}
</script>

<style lang='scss' scoped>
.wallet-main-screen {
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    width: 1618px;
    height: 540px;
    background-image: url("../assets/img/bg-wallet-star.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1618px 540px;
    top: 0;
    right: -300px;
    position: absolute;
    pointer-events: none;
    overflow: visible;
  }

  &__content,
  &__img-wrap {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__title {
    font-weight: 700;
    font-size: 60px;
    line-height: 74px;
    max-width: 500px;
    margin: 0 0 45px;
  }

  &__description {
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    color: #CED7E7;
    margin: 0 0 35px;
  }

  &__img {
    @media (min-width: 1200px) {
      width: 667px;
      height: 657px;
    }
  }
}
</style>


<template>
  <div>
    <section class='wrap-wallet-main-screen'>
      <wallet-main-screen />
      <crypto-slider />
    </section>
  </div>
</template>

<script>
import WalletMainScreen from '../components/WalletMainScreen'
import CryptoSlider from '../components/CryptoSlider'
export default {
  components: { CryptoSlider, WalletMainScreen }
}
</script>

<style lang='scss' scoped>
.wrap-wallet-main-screen {
  background: linear-gradient(161.68deg, #1F0C71 27.28%, #041344 67.8%);
  position: relative;
  z-index: 1;
  @media (min-width: 768px) {
    padding-top: 65px;
  }

  @media (min-width: 1024px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  &::before {
    content: "";
    width: 1230px;
    height: 821px;
    background-image: url("assets/img/bg-wallet-main-screen.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1230px 821px;
    top: 0;
    right: 0;
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 276px;
    height: 254px;
    background-image: url("assets/img/bg-wallet-planet.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    left: 0;
    bottom: 80px;
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }
}
</style>

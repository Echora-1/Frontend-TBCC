<template>
  <div>
    <section class='wrap-wallet-main-screen'>
      <wallet-main-screen />
      <crypto-slider />
    </section>
    <section class='wrap-your-portfolio'>
      <your-portfolio />
      <advantage-wallet />
    </section>
    <section class='wrap-supported-assets'>
      <supported-assets />
    </section>
    <section class='wrap-security-foundation'>
      <security-foundation />
    </section>
    <section class='wrap-download-wallet'>
      <download-wallet />
    </section>
  </div>
</template>

<script>
import WalletMainScreen from '../components/WalletMainScreen'
import CryptoSlider from '../components/CryptoSlider'
import YourPortfolio from '../components/YourPortfolio'
import AdvantageWallet from '../components/AdvantageWallet'
import SupportedAssets from '../components/SupportedAssets'
import SecurityFoundation from '../components/SecurityFoundation'
import DownloadWallet from '../components/DownloadWallet'
export default {
  components: { DownloadWallet, SecurityFoundation, SupportedAssets, AdvantageWallet, YourPortfolio, CryptoSlider, WalletMainScreen }
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

.wrap-your-portfolio {
  position: relative;
  z-index: 1;
  padding-bottom: 155px;

  &::before {
    content: "";
    width: 100%;
    min-width: 1798px;
    height: 1129px;
    background-image: url("assets/img/bg-your-portfolio.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: 122px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 539px;
    height: 706px;
    background-image: url("assets/img/bg-your-portfolio.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 639px 772px;
    top: -85px;
    left: 0;
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }
}

.wrap-supported-assets {
  padding-bottom: 195px;
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    width: 669px;
    height: 867px;
    background-image: url("assets/img/bg-supported-assets.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 669px 867px;
    top: -335px;
    right: 0;
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 285px;
    height: 357px;
    background-image: url("assets/img/bg-supported-assets-planet.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 285px 357px;
    top: -230px;
    right: 0;
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }
}

.wrap-security-foundation {
  padding-bottom: 160px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 603px;
    height: 723px;
    background-image: url("assets/img/bg-security-foundation.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 603px 723px;
    top: 240px;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 227px;
    height: 171px;
    background-image: url("assets/img/security-foundation-planet.svg");
    background-repeat: no-repeat;
    background-position: center;
    top: 792px;
    left: 258px;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
}

.wrap-download-wallet {
  padding-bottom: 240px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 214px;
    height: 214px;
    background-image: url("assets/img/download-wallet-planet.svg");
    background-repeat: no-repeat;
    background-position: center;
    top: -144px;
    right: 283px;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 1798px;
    height: 715px;
    background-image: url("assets/img/stones.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    bottom: 0;
    right: 0;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
}
</style>

<template>
  <div>
    <main-screen />
    <div class='our-mission-and-ecosystem'>
      <our-mission />
      <ecosystem-block />
    </div>
    <div class='download-app-wrap'>
      <download-app/>
    </div>
    <div class='price-overview-and-faq'>
      <price-overview class='price-overview-wrap' />
      <faq-block class='faq-wrap' />
    </div>
    <div class='tbcc-news-wrap'>
      <tbcc-news />
    </div>
  </div>
</template>

<script>
import MainScreen from '../components/MainScreen'
import OurMission from '../components/OurMission'
import EcosystemBlock from '../components/EcosystemBlock'
import DownloadApp from '../components/DownloadApp'
import PriceOverview from '../components/PriceOverview'
import FaqBlock from '../components/FaqBlock'
import TbccNews from '../components/TbccNews'
export default {
  components: { TbccNews, FaqBlock, DownloadApp, EcosystemBlock, OurMission, MainScreen, PriceOverview }
}
</script>

<style lang='scss' scoped>
.our-mission-and-ecosystem {
  overflow: visible;
  background: #041344;
  position: relative;
  padding-bottom: 100px;
  z-index: 1;

  @media (min-width: 1700px) {
    background: linear-gradient(162deg, #09114D 1%, #041344 6%, #041344 100%);
  }

  &::before {
    content: "";
    min-width: 1440px;
    min-height: 1200px;
    background-image: url("assets/img/bg-our-mission.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: -70px;
    right: 0;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
}

.download-app-wrap {
  overflow: visible;
  background-color: #051345;
  position: relative;
  z-index: 1;
  padding-bottom: 160px;

  &::before {
    content: "";
    min-width: 1440px;
    min-height: 1200px;
    background-image: url("assets/img/bg-app-and-price.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: -140px;
    right: 0;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
}

.price-overview-and-faq {
  overflow: visible;
  background-color: #051345;
  padding-bottom: 140px;
}

.price-overview-wrap {
  padding-bottom: 140px;
}

.faq-wrap {
  position: relative;
  z-index: 1;
}

.tbcc-news-wrap {
  background: #051345;
  padding-bottom: 160px;
}
</style>

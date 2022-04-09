<template>
  <div>
    <main-screen />
    <div class='our-mission-and-ecosystem'>
      <our-mission />
      <ecosystem-block />
    </div>
    <div class='download-app-wrap'>
      <download-app class='app' />
    </div>
    <div class='price-overview-wrap'>
      <price-overview />
    </div>
  </div>
</template>

<script>
import MainScreen from '../components/MainScreen'
import OurMission from '../components/OurMission'
import EcosystemBlock from '../components/EcosystemBlock'
import DownloadApp from '../components/DownloadApp'
import PriceOverview from '../components/PriceOverview'
export default {
  components: { DownloadApp, EcosystemBlock, OurMission, MainScreen, PriceOverview }
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

.price-overview-wrap {
  overflow: visible;
  background-color: #051345;
  padding-bottom: 140px;

}
</style>

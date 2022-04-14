<template>
  <div>
    <div class='main-screen-wrap'>
      <main-screen />
      <div class='our-mission-and-ecosystem'>
        <our-mission />
        <ecosystem-block />
      </div>
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
    <div class='partners-wrap'>
      <partners-block />
      <priority-block />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MainScreen from '../components/MainScreen'
import OurMission from '../components/OurMission'
import EcosystemBlock from '../components/EcosystemBlock'
import DownloadApp from '../components/DownloadApp'
import PriceOverview from '../components/PriceOverview'
import FaqBlock from '../components/FaqBlock'
import TbccNews from '../components/TbccNews'
import PartnersBlock from '../components/PartnersBlock'
import PriorityBlock from '../components/PriorityBlock'
export default {
  components: { PriorityBlock, PartnersBlock, TbccNews, FaqBlock, DownloadApp, EcosystemBlock, OurMission, MainScreen, PriceOverview },
  mounted() {
    this.fetchSomething();
  },

  methods: {
    ...mapActions({
      setPrice: 'setPrice',
      setPercentChange: 'setPercentChange',
      setVol24h: 'setVol24h',
      setHighPrice: 'setHighPrice',
      setLowPrice: 'setLowPrice'
    }),

    async fetchSomething() {
      const response = await this.$axios.$get('/api/v1/market/trading-pairs?baseAsset=TBCC&quoteAsset=USDT')
      const price = response.data.list[0]
      this.setPrice(Number(price.price).toFixed(4));
      this.setPercentChange(Number(price.change24h).toFixed(2));
      this.setVol24h(Number(price.volume).toFixed(0));
      this.setHighPrice(Number(price.high).toFixed(4));
      this.setLowPrice(Number(price.low).toFixed(4));
    }
  }
}
</script>

<style lang='scss' scoped>
.main-screen-wrap {
  overflow: visible;
  background: #051345;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 1497px;
    height: 915px;
    background-image: url("assets/img/bg-main-screen.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: 0;
    right: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    content: "";
    width: 314px;
    height: 394px;
    background-image: url("assets/img/bg-planet.svg");
    background-repeat: no-repeat;
    background-position: center;
    top: 620px;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: 2;
  }
}

.our-mission-and-ecosystem {
  overflow: visible;
  background: #051345;
  position: relative;
  padding-bottom: 100px;
  z-index: 1;

  &::before {
    content: "";
    width: 1145px;
    height: 822px;
    background-image: url("assets/img/bg-our-mission.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: 340px;
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
    width: 1414px;
    height: 1016px;
    background-image: url("assets/img/bg-app-and-price.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: -230px;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 1798px;
    height: 715px;
    background-image: url("assets/img/stones.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    bottom: -100px;
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

.partners-wrap {
  background-color: #051345;
  position: relative;
  z-index: 1;
  margin-bottom: 10px;

  &::before {
    content: "";
    width: 1471px;
    height: 822px;
    background-image: url("assets/img/bg-partners.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: -125px;
    right: 0;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 1798px;
    height: 715px;
    background-image: url("assets/img/stones.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    bottom: -40px;
    left: 0;
    transform: scale(-1, 1);
    position: absolute;
    pointer-events: none;
    z-index: -1;


  }
}
</style>

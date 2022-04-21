<template>
  <div class='crypto-slider container'>
    <client-only>
      <Flickity id='crypto-carousel' ref="flickity" :options="flickityOptions">
        <crypto-slide v-for='(item, index) in slideContent' :key='index' :content='item' class='crypto-slider__item' />
      </Flickity>
    </client-only>

  </div>
</template>

<script>
import CryptoSlide from './CryptoSlide'
export default {
  components: { CryptoSlide },

  data() {
    return {
      flickityOptions: {
        pageDots: false,
        wrapAround: false,
        groupCells: 4,
        prevNextButtons: true,
        friction: 0.6
      },
      slideContent: [
        {
          img: 'img/crypto-currencies/bitcoin.svg',
          fullName: 'Bitcoin',
          name: 'BTC',
          price: '43,650.89',
          percentChange: '+5.37'
        },
        {
          img: 'img/crypto-currencies/bnb.svg',
          fullName: 'BinanceCoin',
          name: 'BNB',
          price: '418.8',
          percentChange: '+1.98'
        },
        {
          img: 'img/crypto-currencies/eth.svg',
          fullName: 'Ethereum',
          name: 'ETH',
          price: '3,051.20',
          percentChange: '-2.57'
        },
        {
          img: 'img/crypto-currencies/tbcc.svg',
          fullName: 'TBCC',
          name: 'TBCC',
          price: '0.145',
          percentChange: '+7.41'
        },
        {
          img: 'img/crypto-currencies/bitcoin.svg',
          fullName: 'Bitcoin',
          name: 'BTC',
          price: '43,650.89',
          percentChange: '+5.37'
        },
        {
          img: 'img/crypto-currencies/bnb.svg',
          fullName: 'BinanceCoin',
          name: 'BNB',
          price: '418.8',
          percentChange: '+1.98'
        },
        {
          img: 'img/crypto-currencies/eth.svg',
          fullName: 'Ethereum',
          name: 'ETH',
          price: '3,051.20',
          percentChange: '-2.57'
        },
        {
          img: 'img/crypto-currencies/tbcc.svg',
          fullName: 'TBCC',
          name: 'TBCC',
          price: '0.145',
          percentChange: '+7.41'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.crypto-slider {
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 601px;
    height: 459px;
    background-image: url("assets/img/bg-crypto-slider.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    left: 0;
    top: -75px;
    position: absolute;
    pointer-events: none;
    overflow: visible;
    z-index: -1;
  }

  &__item {
    margin-right: 30px;
    width: calc((100% - 120px) / 4);
  }
}
</style>

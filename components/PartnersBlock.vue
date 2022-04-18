<template>
  <div class='partners container'>
    <img src='img/xt-logo.png' width='174' height='50'>
    <logo-jumio />
    <logo-coin-market-cap />
    <logo-binance />
    <logo-coinfirm />
  </div>
</template>

<style lang='scss' scoped>
.partners {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 60px;

  @media (min-width: 768px) {
    padding-top: 0;
    flex-direction: row;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 174px;
    max-height: 50px;
    object-fit: cover;
  }

  svg {
    margin: 30px 0 0 ;

    @media (min-width: 768px) {
      margin: 0 0 0 10px;
    }
  }
}
</style>
<script>
import LogoJumio from './icon/logoJumio'
import LogoCoinMarketCap from './icon/LogoCoinMarketCap'
import LogoBinance from './icon/LogoBinance'
import LogoCoinfirm from './icon/logoCoinfirm'
export default {
  components: { LogoCoinfirm, LogoBinance, LogoCoinMarketCap, LogoJumio }
}
</script>

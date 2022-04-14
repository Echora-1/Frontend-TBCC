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

  img {
    width: 100%;
    height: 100%;
    max-width: 174px;
    max-height: 50%;
    object-fit: cover;
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

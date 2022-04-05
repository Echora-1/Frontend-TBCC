<template>
  <div class='advantage-list'>
    <div class='advantage-list__item'>
      <icon-like />
      <p>Lowest Fees <br> at <span>0.1%</span></p>
    </div>
    <div class='advantage-list__item'>
      <icon-whithout-kyc />
      <p>Without KYC <br> up to <span>2 BTC</span></p>
    </div>
    <div class='advantage-list__item'>
      <icon-rocket />
      <p>Fast  speed up to <span>1.4 mln</span>/ sec</p>
    </div>
  </div>
</template>

<script>
import IconLike from './icon/IconLike'
import IconWhithoutKyc from './icon/IconWhithoutKyc'
import IconRocket from './icon/IconRocket'
export default {
  components: { IconRocket, IconWhithoutKyc, IconLike }
}
</script>

<style lang='scss' scoped>
.advantage-list {
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 22px;
      margin-bottom: 0;
      max-width: 120px;
      text-align: center;
      color: #ADBAD0;
    }

    span {
      color: white;
    }
  }
}
</style>

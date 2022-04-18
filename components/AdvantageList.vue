<template>
  <div class='advantage-list'>
    <div class='advantage-list__item'>
      <icon-like />
      <p>low fees<br> at <span> 0.1% </span></p>
    </div>
    <div class='advantage-list__item'>
      <icon-whithout-kyc />
      <p>without KYC<br> up to <span>2 BTC</span></p>
    </div>
    <div class='advantage-list__item'>
      <icon-rocket />
      <p>fast speed<br> up to <span>1.4 M/sec</span></p>
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
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;

    &:not(:last-child) {
      @media(max-width: 767px) {
        margin-bottom: 55px;
      }
    }

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

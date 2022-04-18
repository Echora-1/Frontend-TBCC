<template>
  <div class='price-overview container'>
    <h2 class='base-title'>Price overview</h2>
    <tbcc-overview />
  </div>
</template>

<script>
import TbccOverview from './TbccOverview'
export default {
  components: { TbccOverview }
}
</script>

<style lang='scss' scoped>
.price-overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    &::before {
      content: "";
      min-width: 1440px;
      min-height: 1200px;
      background-image: url("assets/img/bg-price-overview.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      top: 220px;
      right: -120px;
      position: absolute;
      pointer-events: none;
      z-index: -1;
    }
  }
}

.base-title {
  font-weight: 700;
  font-size: 36px;
  margin: 0 0 40px;

  @media (min-width: 1024px) {
    font-size: 45px;
    margin: 0 0 45px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
}
</style>

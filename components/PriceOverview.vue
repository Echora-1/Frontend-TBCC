<template>
  <div class='price-overview container'>
    <p class='base-title'>Price overview</p>
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
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    min-width: 1440px;
    min-height: 1200px;
    background-image: url("assets/img/bg-price-overview.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: 230px;
    right: -150px;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
}

.base-title {
  font-weight: 700;
  font-size: 48px;
  margin: 0 0 45px;
}
</style>

<template>
  <div class='security-foundation container'>
    <h2 class='security-foundation__title base-title'>Security is our foundation</h2>
    <div class='security-foundation__wrap'>
      <div class='security-foundation__img'>
        <img src='../assets/img/security-foundation.svg' width='588' height='576' alt=''>
      </div>
      <div class='security-foundation__tabs'>
        <security-tabs />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.security-foundation {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    margin: 0 0 38px;
  }

  &__wrap {
    display: flex;
    position: relative;
    padding-top: 112px;
  }

  &__img,
  &__tabs {
    width: 50%;
    max-width: 50%;
  }

  &__img {
    img {
      position: relative;
      left: -20px;
      top: -75px;
    }
  }
}
</style>
<script>
import SecurityTabs from './SecurityTabs'
export default {
  components: { SecurityTabs }
}
</script>

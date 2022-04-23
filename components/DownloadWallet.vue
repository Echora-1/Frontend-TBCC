<template>
  <div class='download-wallet container'>
    <p class='download-wallet__title base-title'>Download the App Today and Get Started!</p>
    <div class='buttons'>
      <base-button aria-label='download ios app'>
        <icon-ios :fill='"#292F37"' />
        iOS
      </base-button>
      <base-button aria-label='download android app'>
        <icon-android :fill='"#292F37"' />
        Android
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
import IconAndroid from './icon/IconAndroid'
import IconIos from './icon/IconIos'
export default {
  components: { IconIos, IconAndroid, BaseButton }
}
</script>

<style lang='scss' scoped>
.download-wallet {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    max-width: 620px;
    text-align: center;
    margin: 0 0 42px;
  }
}

.buttons {
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: block;
  }

  button {
    background: #FFFFFF;
    color: #292F37;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    padding: 15px 26px;
    min-width: 150px;
    justify-content: center;

    @media (min-width: 1024px) {
      padding: 15px 34px;
      min-width: 164px;
    }

    &::before {
      display: none;
    }

    &:first-child {
      margin-right: 20px;
    }
  }

  svg {
    margin-right: 8px;
    margin-bottom: 2px;
  }
}
</style>

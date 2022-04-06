<template>
  <div class='main-screen'>
    <div class='main-screen__container container'>
      <div class='main-screen__content content'>
        <main-screen-text class='content__title' />
        <p class='content__description'>Pay, trade and invest in the smart decentralized ecosystem.</p>
        <div class='content__actions'>
          <base-button shaded>
            Buy TBCC
          </base-button>
          <base-button>
            Create Account
          </base-button>
        </div>
      </div>
      <div class='main-screen__img'>
        <img src='../assets/img/main-screen.png' alt='' width='748' height='637'>
      </div>
    </div>
    <advantage-list class='container' />
  </div>
</template>

<script>
import MainScreenText from './icon/MainScreenText'
import BaseButton from './BaseButton'
import AdvantageList from './AdvantageList'
export default {
  components: { AdvantageList, BaseButton, MainScreenText }
}
</script>

<style lang='scss' scoped>
.main-screen {
  padding-top: 110px;
  min-height: 100vh;
  background: linear-gradient(161.68deg, #1F0C71 27.28%, #041344 67.8%);
  overflow: hidden;

  &__container {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }


  &__content {
    padding-top: 50px;
    z-index: 1;
    margin-left: auto;
  }

  &__text {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__img {
    flex: 0 0 50%;
    max-width: 50%;
    justify-self: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: relative;
      top: -20px;
      right: -40px;

      @media (min-width: 1200px) {
        width: auto;
        right: 0;
      }
    }
  }

  &__advantage-list {
    width: 100%;
  }
}

.content {
  margin-left: auto;
  &__title {
    max-width: 538px;
    max-height: 120px;
    width: 100%;
    height: 100%;
  }

  &__description {
    max-width: 538px;
    font-size: 20px;
    line-height: 28px;
    color: #CED7E7;
    margin-top: 30px;
    margin-bottom: 45px;
    font-weight: 300;
  }

  &__actions {
    button:first-child {
      margin-right: 23px;
    }
  }
}
</style>

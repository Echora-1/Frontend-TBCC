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
    <div class='container'>
      <advantage-list class='main-screen__advantage-list ' />
    </div>
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

  &__container {
    display: flex;
    align-items: center;
  }


  &__content {
    padding-top: 50px;
    z-index: 1;
    margin-left: auto;
  }

  &__img {
    flex: 0 0 52%;
    max-width: 52%;
    justify-self: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;

      @media (min-width: 1440px) {
        width: auto;
      }
    }
  }

  &__advantage-list {
    margin: 25px auto 0;
    max-width: 1100px;
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

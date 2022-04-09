<template>
  <div class='main-screen'>
    <div class='main-screen__container container'>
      <div class='main-screen__content content'>
        <p class='content__title base-title'>Powerful Ecosystem in One Place</p>
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
         <main-screen-img/>
      </div>
    </div>
    <advantage-list class='container' />
  </div>
</template>

<script>
import BaseButton from './BaseButton'
import AdvantageList from './AdvantageList'
import MainScreenImg from './icon/MainScreenImg'
export default {
  components: { MainScreenImg, AdvantageList, BaseButton }
}
</script>

<style lang='scss' scoped>
.main-screen {
  padding-top: 110px;
  background: linear-gradient(161.68deg, #1F0C71 27.28%, #041344 67.8%);
  overflow: hidden;
  padding-bottom: 35px;

  &__container {
    display: flex;
    align-items: center;
    transform: translateX(40px);

    @media (min-width: 1200px) {
      transform: none;
    }
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
    svg {
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
    max-width: 570px;
    font-weight: 700;
    font-size: 60px;
    margin: 0 0 30px;
  }

  &__description {
    max-width: 538px;
    font-size: 20px;
    line-height: 28px;
    color: #CED7E7;
    margin: 0 0 45px;
    font-weight: 300;
  }

  &__actions {
    button:first-child {
      margin-right: 23px;
    }
  }
}
</style>

<template>
  <div class='download-app container'>
    <div class='download-app__img img'>
      <div class='img__wrap'>
        <div class='img__info info'>
          <div>
            <p class='info__price'>0.130324</p>
            <p class='info__percent-change'>$ 0.1356 &nbsp; <span>+2.72%</span></p>
          </div>
          <div class='info__volume'>
            <p>24h Vol: <span>620,012.39</span></p>
            <p>High Price: <span>0.138</span></p>
            <p>Low Price: <span>0.1314</span></p>
          </div>
        </div>
        <img src='img/app.png' width='282' height='573' alt=''>
      </div>
    </div>
    <div class='download-app__content content'>
      <p class='content__title base-title'>Download TBCC App</p>
      <p class='content__text'>Wherever you are, don't miss your chance to make more money with our Exchange. The reliable and easy-to-use TBCC App is at your fingertips at all times.</p>
      <div class='content__buttons'>
        <base-button>
          <icon-ios />
          iOS
        </base-button>
        <base-button>
          <icon-android />
          Android
        </base-button>
      </div>
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

<style scoped lang='scss'>
.download-app {
  display: flex;
  align-items: center;

  &__img,
  &__content {
    width: 50%;
    max-width: 50%;
  }
}

.img {
  &__wrap {
    width: 282px;
    height: 573px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 695px;
      height: 741px;
      background-image: url("../assets/img/bg-app.svg");
      background-repeat: no-repeat;
      background-position: center;
      left: -214px;
      top: -100px;
      z-index: -1;
      pointer-events: none;
    }
  }

  &__info {
    position: absolute;
    top: 66px;
    left: 21px;
  }
}

.content {
  &__title {
    font-weight: 700;
    font-size: 48px;
    margin: 0 0 30px;
  }

  &__text {
    max-width: 482px;
    color: #6983AB;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 40px;
  }

  &__buttons {
    button {
      background: #E2ECFC;
      color: #544E77;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      padding: 15px 34px;
      min-width: 164px;
      justify-content: center;

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
}

.info {
  display: flex;
  justify-content: space-between;
  width: 240px;

  &__price {
    font-weight: 600;
    font-size: 21px;
    letter-spacing: -0.2px;
    margin-bottom: 6px;
    color: #2B303E;
  }

  &__percent-change {
    margin: 0;
    font-size: 10px;
    letter-spacing: -0.2px;
    color: #9B9DAD;

    span {
      color: #7BAEA1;
    }
  }

  &__volume {
    margin-top: 23px;
    width: 110px;
    p {
      font-size: 10px;
      letter-spacing: -0.2px;
      color: #9B9DAD;
      display: flex;
      justify-content: space-between;
      margin: 0 0 6px;
    }

    span {
      color: #2B303E;
      letter-spacing: -0.2px;
    }
  }

}
</style>


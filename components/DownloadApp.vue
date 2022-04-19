<template>
  <div class='download-app container'>
    <div class='download-app__img img'>
      <div class='img__wrap'>
        <div class='img__info info'>
          <div>
            <p class='info__price'>{{ price }}</p>
            <p class='info__percent-change'>$ {{ price }} &nbsp; <span>{{ percentChange }}%</span></p>
          </div>
          <div class='info__volume'>
            <p>Vol: <span>{{ vol24h }}</span></p>
            <p>High Price: <span>{{ highPrice }}</span></p>
            <p>Low Price: <span>{{ lowPrice }}</span></p>
          </div>
        </div>
        <picture>
          <source type="image/webp" media="(min-width: 768px)" srcset="img/app.webp" width='282' height='573'>
          <source type="image/webp" srcset="img/app-mobile.webp" width='375' height='390'>
          <source media="(min-width: 768px)" srcset="img/app.png" width='282' height='573'>
          <img loading='lazy' src="img/app-mobile.png" width='375' height='390' alt='app'>
        </picture>
      </div>
    </div>
    <div class='download-app__content content'>
      <h2 class='content__title base-title'>Download TBCC App</h2>
      <p class='content__text'>Wherever you are, don't miss your chance to make more money with our Exchange. The reliable and easy-to-use TBCC App is always at your fingertips.</p>
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
import { mapGetters } from 'vuex'
import BaseButton from './BaseButton'
import IconAndroid from './icon/IconAndroid'
import IconIos from './icon/IconIos'
export default {
  components: { IconIos, IconAndroid, BaseButton },

  computed: {
    ...mapGetters({
      price: 'getPrice',
      percentChange: 'getPercentChange',
      vol24h: 'getVol24h',
      highPrice: 'getHighPrice',
      lowPrice: 'getLowPrice'
    })
  }
}
</script>

<style scoped lang='scss'>
.download-app {
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &__img,
  &__content {
    width: 100%;
    max-width: 100%;

    @media (min-width: 768px) {
      width: 50%;
      max-width: 50%;
    }
  }
}

.img {
  position: relative;

    @media (min-width: 768px) {
      &::before {
        content: "";
        position: absolute;
        width: 695px;
        height: 741px;
        background-image: url("../assets/img/bg-app.svg");
        background-repeat: no-repeat;
        background-position: center;
        left: 50%;
        transform: translateX(-50%) scale(0.8);
        top: -100px;
        z-index: -1;
        pointer-events: none;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  &__wrap {
    max-width: 375px;
    width: 100%;
    height: 100%;
    min-height: 390px;
    margin: 0 auto 24px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    right: -3px;

    @media (min-width: 768px) {
      width: 282px;
      height: 573px;
      max-width: unset;
      min-height: unset;
      margin: 0 auto;
      right: auto;
    }

    img {
      object-fit: contain;

      @media (max-width: 767px) {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      @media (min-width: 768px) {
        width: 282px;
        height: 573px;
      }
    }
  }

  &__info {
    position: absolute;
    top: 138px;
    left: 49%;
    transform: translateX(-50%);
    z-index: 1;

    @media (min-width: 768px) {
      top: 66px;
      left: 21px;
      transform: unset;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    margin: 0 0 30px;
    max-width: 260px;
    text-align: center;

    @media (min-width: 768px) {
      max-width: unset;
      text-align: left;
    }

    @media (min-width: 1024px) {
      font-size: 45px;
    }

    @media (min-width: 1200px) {
      font-size: 48px;
    }
  }

  &__text {
    color: #6983AB;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 40px;
    max-width: 330px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 26px;
      max-width: 482px;
      text-align: left;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      display: block;
    }

    button {
      background: #E2ECFC;
      color: #544E77;
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
}

.info {
  display: flex;
  justify-content: space-between;
  width: 168px;

  @media (min-width: 768px) {
    width: 240px;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.2px;
    margin-bottom: 6px;
    color: #2B303E;
    margin-top: 23px;


    @media (min-width: 768px) {
      margin-top: 18px;
      font-size: 21px;
    }
  }

  &__percent-change {
    margin: 0;
    font-size: 8px;
    letter-spacing: -0.2px;
    color: #9B9DAD;

    @media (min-width: 768px) {
      font-size: 10px;
    }

    span {
      color: #7BAEA1;
    }
  }

  &__volume {
    margin-top: 25px;
    width: 80px;

    @media (min-width: 768px) {
      margin-top: 23px;
      width: 110px;
    }

    p {
      font-size: 8px;
      letter-spacing: -0.2px;
      color: #9B9DAD;
      display: flex;
      justify-content: space-between;
      margin: 0 0 4px;

      @media (min-width: 768px) {
        font-size: 10px;
        margin: 0 0 6px;
      }
    }

    span {
      color: #2B303E;
      letter-spacing: -0.2px;
    }
  }

}
</style>


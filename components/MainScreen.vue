<template>
  <div class='main-screen'>
    <div class='main-screen__container container'>
      <div class='main-screen__content content'>
        <h1 class='content__title base-title'>Powerful Ecosystem in One Place</h1>
        <h2 class='content__description'>Pay, trade, and invest in the smart decentralized ecosystem.</h2>
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
    <div class='main-screen__advantage-list'>
      <advantage-list  class='container'  />
    </div>
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
  background: linear-gradient(161.68deg, #1F0C71 27.28%, #041344 67.8%);

  @media (min-width: 768px) {
    padding-top: 65px;
  }

  @media (min-width: 1024px) {
    padding-top: 100px;
  }

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(min-width: 768px) {
      flex-direction: row;
      transform: translateX(20px);
    }

    @media (min-width: 1024px) {
      transform: translateX(40px);
    }

    @media (min-width: 1200px) {
      transform: none;
    }
  }

  &__content {
    z-index: 1;

    @media(min-width: 768px) {
      padding-top: 50px;
      margin-left: auto;
    }
  }


  &__img,
  &__text {
    flex: 0 0 100%;
    max-width: 100%;

    @media(min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  &__img {
    justify-self: center;
    order: -1;
    transform: translate(11%, 0);

    @media(min-width: 768px) {
      transform: translate(0, 0);
      order: 0;
    }

    svg {
      height: 100%;
      width: 100%;
      max-width: 600px;
      max-height: 510px;
      object-fit: cover;
      position: relative;

      @media(min-width: 768px) {
        top: -20px;
        right: -40px;
        max-width: 100%;
        max-height: 100%;
        transform: scale(1.2);
      }

      @media (min-width: 1200px) {
        width: unset;
        height: unset;
        max-height: unset;
        max-width: unset;
        right: 0;
        transform: none;
      }
    }
  }

  &__advantage-list {
    width: 100%;
    position: relative;
    z-index: 3;
    padding-top: 57px;
    padding-left: 6px;

    @media (min-width: 768px) {
      padding-top: 70px;
      padding-left: 0;


      &::after {
        content: "";
        width: 210px;
        height: 268px;
        background-image: url("../assets/img/bg-planet.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        top: 60%;
        left: 0;
        transform: translateY(-50%);
        position: absolute;
        pointer-events: none;
        z-index: 0;
        overflow: visible;

        @media (min-width: 1024px) {
          width: 287px;
          height: 366px;
        }

        @media (min-width: 1200px) {
          width: 314px;
          height: 394px;
        }
      }
    }

    @media (min-width: 1024px) {
      padding-top: 40px;
    }

    @media (min-width: 1200px) {
      padding-top: 0;
    }
  }
}

.content {
  &__title {
    font-weight: 700;
    font-size: 42px;
    margin: 0 auto 20px;
    position: relative;
    max-width: 240px;
    text-align: center;

    @media(min-width: 768px) {
      font-size: 35px;
      max-width: 350px;
      text-align: left;
      margin: 0 0 30px;

      &::after {
        content: "";
        min-width: 489px;
        min-height: 584px;
        background-image: url("assets/img/bg-star-main-screen.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        top: -160px;
        left: -230px;
        position: absolute;
        pointer-events: none;
      }
    }

    @media(min-width: 1024px) {
      font-size: 50px;
      max-width: 570px;
    }

    @media(min-width: 1200px) {
      font-size: 60px;
    }
  }

  &__description {
    max-width: 300px;
    line-height: 125%;
    color: #CED7E7;
    margin: 0 auto 30px;
    font-weight: 300;
    font-size: 18px;
    text-align: center;

    @media(min-width: 768px) {
      max-width: 538px;
      text-align: left;
      margin: 0 0 30px;
    }

    @media(min-width: 1024px) {
      margin: 0 0 45px;
    }

    @media(min-width: 1200px) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__actions {
    @media(max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button {
      @media(max-width: 767px) {
        width: 100%;
        max-width: 320px;
        justify-content: center;
      }

      &:first-child {
        margin-bottom: 27px;

        @media(min-width: 768px) {
          margin-right: 23px;
        }
      }
    }
  }
}
</style>

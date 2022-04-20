<template>
  <footer class='base-footer'>
    <div class='container'>
      <div class='base-footer__container'>
        <div class='base-footer__nav'>
          <ul>
            <li><a href='/'>Wallet</a></li>
            <li><a href='/'>Buy & Sell</a></li>
            <li><a href='/'>Exchange</a></li>
            <li><a href='/'>Company</a></li>
            <li><a href='/'>Terms of use</a></li>
            <li><a href='/'>Privacy policy</a></li>
            <li><a href='/'>Risk disclousure</a></li>
          </ul>
        </div>
        <div class='base-footer__actions actions'>
          <div class='actions__community'>
            <p>Community</p>
            <div class='actions__community-list'>
              <a href='https://www.instagram.com/tbcc_token_global/' target="_blank">
                <span class='visually-hidden'>tbcc instagram</span>
                <icon-instagram />
              </a>
              <a href='https://t.me/tbccglobal' target="_blank">
                <span class='visually-hidden'> tbcc telegram</span>
                <icon-telegram />
              </a>
              <a href='https://www.facebook.com/TBCC.lab' target="_blank">
                <span class='visually-hidden'>tbcc facebook</span>
                <icon-facebook />
              </a>
              <a href='https://twitter.com/TBCC_ex' target="_blank">
                <span class='visually-hidden'>tbcc twitter</span>
                <icon-twitter />
              </a>
            </div>
          </div>
          <div class='actions__app'>
            <p>Download App</p>
            <div>
              <base-button aria-label='download ios app'>
                <icon-ios :fill='"#FFFFFF"' />
              </base-button>
              <base-button aria-label='download android app'>
                <icon-android :fill='"#FFFFFF"' />
              </base-button>
            </div>
          </div>
          <div class='base-footer__nav base-footer__nav-mobile'>
            <a href='/'>Terms of use</a>
            <a href='/'>Privacy policy</a>
            <a href='/'>Risk disclousure</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseButton from './BaseButton'
import IconIos from './icon/IconIos'
import IconAndroid from './icon/IconAndroid'
import IconInstagram from './icon/IconInstagram'
import IconTelegram from './icon/IconTelegram'
import IconFacebook from './icon/IconFacebook'
import IconTwitter from './icon/IconTwitter'
export default {
  components: { IconTwitter, IconFacebook, IconTelegram, IconInstagram, IconAndroid, IconIos, BaseButton }
}
</script>

<style lang='scss' scoped>

.base-footer {
  background: #051345;
  padding-bottom: 78px;
  position: relative;

  &__container {
    border-top: 2px solid #0E1B4E;
    border-bottom: 2px solid #0E1B4E;
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 50px 0 35px;
    max-width: 320px;
    margin: 0 auto;

    @media (min-width: 768px) {
      border-top: unset;
      flex-direction: row;
      max-width: unset;
      padding: 50px 0;
    }

    &::after {
      content: "TBCC © 2022";
      position: absolute;
      bottom: -46px;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #6983AB;
    }
  }

  &__nav,
  &__actions {
    width: 100%;
    max-width: 100%;

    @media (min-width: 768px) {
      width: 50%;
      max-width: 50%;
    }
  }

  &__nav {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;

      @media (min-width: 768px) {
        display: block;
        -webkit-columns: 3;
        -moz-columns: 3;
        -moz-column-count: 3;
        column-count: 3;
      }

      @media (max-width: 767px) {
        max-width: 317px;
        margin: 0 auto 20px;
      }
    }

    li {
      @media (max-width: 767px) {
        margin-bottom: 40px;

        &:nth-last-child(-n+3) {
          display: none;
        }
      }
      @media (min-width: 768px) {
        margin-bottom: 30px;
      }
    }

    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 125%;
      color: #6983AB;

      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  }

  &__nav-mobile {
    display: none;
    @media (max-width: 767px) {
      display: flex;
      justify-content: space-around;
      max-width: 345px;
      padding-top: 50px;
    }

    a {
      font-size: 14px;
    }
  }
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #FFFFFF;
    margin: 0 0 25px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  &__app,
  &__community {
    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__app {
    button {
      background: #505E8C;
      padding: 12px 28px;

      @media (max-width: 767px) {
       min-width: 126px;
        justify-content: center;
      }

      &:first-child {
        margin-right: 14px;
      }
    }

    svg {
      width: 15px;
      height: 18px;
    }
  }

  &__community {
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }

    a:not(:last-child) {
      @media (min-width: 768px) {
        margin-right: 37px;
      }
    }
  }

  &__community-list {
    display: flex;
    min-height: 42px;
    align-items: center;

    @media (max-width: 767px) {
      width: 272px;
      justify-content: space-between;
    }
  }
}

</style>

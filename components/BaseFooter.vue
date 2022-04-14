<template>
  <footer class='base-footer'>
    <div class='container'>
      <div class='base-footer__container'>
        <div class='base-footer__nav'>
          <ul>
            <li><a href='/'>Get Started</a></li>
            <li><a href='/'>Wallet</a></li>
            <li><a href='/'>Buy & Sell</a></li>
            <li><a href='/'>News</a></li>
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
              <a href='/'>
                <icon-instagram />
              </a>
              <a href='/'>
                <icon-telegram />
              </a>
              <a href='/'>
                <icon-facebook />
              </a>
              <a href='/'>
                <icon-twitter />
              </a>
            </div>
          </div>
          <div class='actions__app'>
            <p>Download App</p>
            <div>
              <base-button>
                <icon-ios :fill='"#FFFFFF"' />
              </base-button>
              <base-button>
                <icon-android :fill='"#FFFFFF"' />
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>

.base-footer {
  background: #051345;
  padding-bottom: 78px;
  position: relative;

  &__container {
    border-bottom: 2px solid #0E1B4E;
    padding: 50px 0;
    display: flex;
    position: relative;

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
    width: 50%;
    max-width: 50%;
  }

  &__nav {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      -webkit-columns: 3;
      -moz-columns: 3;
      -moz-column-count: 3;
      column-count: 3;
    }

    li {
      &:not(:nth-child(3n)) {
        margin-bottom: 30px;
      }
    }

    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 125%;
      color: #6983AB;
    }
  }
}

.actions {
  display: flex;
  justify-content: space-around;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 125%;
    color: #FFFFFF;
    margin: 0 0 25px;
  }

  &__app {
    button {
      background: #505E8C;
      padding: 12px 28px;

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
    a:not(:last-child) {
      margin-right: 37px;
    }
  }

  &__community-list {
    display: flex;
    min-height: 42px;
    align-items: center;
  }
}
</style>
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

<template>
  <div class='overview'>
    <div class='overview__graph'>
      <tbcc-tabs />
    </div>
    <div class='overview__info info'>
      <p class='info__price'>${{ price }} <span class='info__change'>{{ percentChange }}%</span></p>
      <div class='info__min-max'>
        <p>Low: <span>${{ lowPrice }}</span></p>
        <p>High: <span>${{ highPrice }}</span></p>
      </div>
      <div class='info__address'>
        <p id='content-holder'>0xf29480344d8e21efeab7fde39f8d8299056a7fea</p>
        <p>Binance Smart Chain (BEP20): &nbsp; <span>0xf2...7fea</span>&nbsp;<copy-button id='copy-button'/></p>
      </div>
      <div class='info__actions'>
        <a href='https://www.tbcc.com/trade/TBCC_USDT' target='_blank'>
          <base-button>
            View Markets
          </base-button>
        </a>
        <base-button class='meta-mask-button'>
          Add to MetaMask
        </base-button>
      </div>
      <p class='info__copyright'>
        Data by
        <icon-coin-market-cap />
      </p>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import TbccTabs from "./TbccTabs"
import CopyButton from "./CopyButton"
import BaseButton from './BaseButton'
import IconCoinMarketCap from './icon/IconCoinMarketCap'
export default {
  components: { IconCoinMarketCap, BaseButton, CopyButton, TbccTabs },

  computed: {
    ...mapGetters({
      price: 'getPrice',
      percentChange: 'getPercentChange',
      highPrice: 'getHighPrice',
      lowPrice: 'getLowPrice'
    })
  },

  mounted() {
    const button = document.getElementById("copy-button");
    const contentHolder = document.getElementById("content-holder");

    button.addEventListener("click", function() {
      const range = document.createRange();
      const selection = window.getSelection();
      selection.removeAllRanges();
      range.selectNodeContents(contentHolder);
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();

    });
  }
}
</script>

<style lang='scss' scoped>
.overview {
  width: 100%;
  background: linear-gradient(180deg, #FFFFFF 0%, #D0D8F3 100%);
  border-radius: 16px;
  min-height: 490px;
  padding: 36px 16px;
  display: flex;
  flex-direction: column;
  max-width: 485px;

  @media (min-width: 768px) {
    padding: 36px 30px;
    max-width: 715px;
  }

  @media (min-width: 1024px) {
    border-radius: 36px;
    flex-direction: row;
    padding: 55px 48px;
    max-width: unset;
  }

  &__graph,
  &__info {
    width: 100%;
    max-width: 100%;

    @media (min-width: 1024px) {
      width: 50%;
      max-width: 50%;
    }
  }
}

.info {
  padding-top: 56px;

  @media (min-width: 1024px) {
    padding-top: 35px;
    padding-left: 50px;
  }

  &__price {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #2B2B2B;
    display: inline-flex;
    align-items: center;
    letter-spacing: -0.2px;
    margin: 0 0 30px;

    @media (min-width: 1024px) {
      margin: 0 0 40px;
    }
  }

  &__change {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: white;
    display: inline-block;
    background: url("./assets/img/vectorUp.svg") no-repeat left 10px center, linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
    border-radius: 10px;
    padding: 8px 10px 8px 28px;
    margin-left: 18px;
  }

  &__min-max {
    display: flex;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      margin-bottom: 35px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #6983AB;
      margin: 0;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
      }

      &:first-child {
        margin-right: 27px;
      }
    }

    span {
      margin-left: 6px;
      color: #435C82;
    }
  }

  &__address {
    display: flex;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
      margin-bottom: 50px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #6983AB;
      margin: 0;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
      }
    }

    span {
      color: #435C82;
    }
  }

  &__actions {
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 1024px) {
      margin-bottom: 55px;
    }

    a {
      display: inline-block;
    }

    button {
      background: #E2E7F8;
      color: #2B2B2B;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      min-width: 318px;
      justify-content: center;

      @media (min-width: 768px) {
        min-width: unset;
      }

      &:first-child {
        margin-bottom: 25px;

        @media (min-width: 768px) {
          margin-bottom: 0;
          margin-right: 20px;
        }
      }
    }
  }

  &__copyright {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #43597C;
    opacity: 0.35;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;

    @media (min-width: 768px) {
      width: unset;
      justify-content: flex-start;
    }

    svg {
      margin-left: 10px;
    }
  }
}

#copy-button {
  position: relative;
  top: 8px;
  display: inline-block;
}

#content-holder {
  position: absolute;
  color: transparent;
  z-index: -1;
  font-size: 0;
}

.meta-mask-button {
  padding-left: 40px;
  padding-right: 20px;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 53px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url("../assets/img/meta-mask.svg");
    background-position: center;
    background-repeat: no-repeat;
    left: 75px;
    top: 50%;
    transform: translateY(-50%);

    @media (min-width: 768px) {
      left: 20px;
    }
  }

  &::before {
    background: #A8B8CE;
  }

  &:hover {
    &::before {
      background: #8d9bad;
    }
  }
}
</style>

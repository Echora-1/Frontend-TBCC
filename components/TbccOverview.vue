<template>
  <div class='overview'>
    <div class='overview__graph'>
      <tbcc-tabs />
    </div>
    <div class='overview__info info'>
      <p class='info__price'>$0.2504 <span class='info__change'>5.43%</span></p>
      <div class='info__min-max'>
        <p>Low: <span>$0.2503</span></p>
        <p>High: <span>$0.327</span></p>
      </div>
      <div class='info__address'>
        <p id='content-holder'>0xf29480344d8e21efeab7fde39f8d8299056a7fea</p>
        <p>Binance Smart Chain (BEP20): &nbsp; <span>0xf294...6a7fea</span>&nbsp;<copy-button id='copy-button'/></p>
      </div>
      <div class='info__actions'>
        <base-button>
          View Markets
        </base-button>
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
import TbccTabs from "./TbccTabs"
import CopyButton from "./CopyButton"
import BaseButton from './BaseButton'
import IconCoinMarketCap from './icon/IconCoinMarketCap'
export default {
  components: { IconCoinMarketCap, BaseButton, CopyButton, TbccTabs },

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
  border-radius: 36px;
  min-height: 490px;
  padding: 55px 48px;
  display: flex;

  &__graph,
  &__info {
    width: 50%;
    max-width: 50%;
  }
}

.info {
  padding-top: 35px;
  padding-left: 50px;

  &__price {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #2B2B2B;
    display: inline-flex;
    align-items: center;
    letter-spacing: -0.2px;
    margin: 0 0 40px;
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
    margin-bottom: 35px;

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #6983AB;
      margin: 0;

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
    margin-bottom: 50px;

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #6983AB;
      margin: 0;
    }

    span {
      color: #435C82;
    }
  }

  &__actions {
    position: relative;
    z-index: 1;
    margin-bottom: 55px;

    button {
      background: #E2E7F8;
      color: #2B2B2B;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;

      &:first-child {
        margin-right: 20px;
      }
    }
  }

  &__copyright {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #43597C;
    opacity: 0.35;
    display: inline-flex;
    align-items: center;

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
  padding-left: 53px;
  padding-right: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url("../assets/img/meta-mask.svg");
    background-position: center;
    background-repeat: no-repeat;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    background: #A8B8CE;
  }
}
</style>

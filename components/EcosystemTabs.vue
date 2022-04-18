<template>
  <div
    class='tabs'
  >
    <ul class="tabs__header">
      <li
        key="0"
        :class='{"tab__selected": (0 === selectedIndex)}'
        @click="selectTab(0)"
      >
        <icon-cube-left :active='0 === selectedIndex' />
        Accessible
      </li>
      <li
        key="1"
        :class='{"tab__selected": (1 === selectedIndex)}'
        @click="selectTab(1)"
      >
        <icon-cube-right :active='1 === selectedIndex' />
        Forthcoming
      </li>
    </ul>
      <transition-group name='fade' mode='out-in'>
        <div v-if='0 === selectedIndex' :key='0' class='tab'>
          <div v-for='(item, index) in accessibleContent' :key='index' class='tab__content' >
            <p class='tab__title'>{{ item.title }}</p>
            <p class='tab__text'>{{ item.text}}</p>
          </div>
        </div>
        <div v-else-if='1 === selectedIndex' :key='1' class='tab'>
          <div v-for='(item, index) in forthcomingContent' :key='index' class='tab__content' >
            <p class='tab__title'>{{ item.title }}</p>
            <p class='tab__text'>{{ item.text}}</p>
          </div>
        </div>
      </transition-group>
  </div>
</template>

<script>
import IconCubeLeft from './icon/IconCubeLeft'
import IconCubeRight from './icon/IconCubeRight'
export default {
  components: { IconCubeRight, IconCubeLeft },
  data () {
    return {
      selectedIndex: 0,
      accessibleContent: [
        {
          title: 'Exchange',
          text: 'TBCC is a centralised cryptocurrency exchange powered by Binance Cloud. It has its own token TBCC and offers more than 1000 currency pairs for trading with low fees and fast transactions without passing KYC up to 2BTC.'
        },
        {
          title: 'Wallet',
          text: 'Decentralised wallet for keeping and operating crypto-assets. TBCC Wallet supports leading cryptocurrencies based on BEP2, BEP8, BEB20, and ERC-20 protocols. '
        }
      ],
      forthcomingContent: [
        {
          title: 'TBCC PAY',
          text: 'Secure payment for familiar goods and services with TBCC tokens in seconds by smartphone. Use TBCC PAY for shopping without frontiers.'
        },
        {
          title: 'TBCC Investment',
          text: 'Dollar-Cost Averaging is a popular investment strategy. It helps to invest money in equal portions, at regular intervals, regardless of the ups or downs in the market, and get more profit.'
        }
      ],
    }
  },
  mounted () {
    this.selectTab(1)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
    }
  }
}
</script>

<style lang="scss" scoped>

.tabs {
  @media (min-width: 768px) {
    padding-right: 20px;
  }
}

ul.tabs__header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 0 363px;
  justify-content: center;
  z-index: 1;
  position: relative;

  @media (min-width: 768px) {
    z-index: 0;
    position: static;
    padding: 0 0 40px;
    justify-content: flex-start;
  }
}

ul.tabs__header > li {
  padding: 17px 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  max-width: 200px;

  & > svg {
    margin-right: 8px;
  }
}

.tabs .tab{
  background-color: transparent;
}

.tabs li {
  background-color: transparent;
  color: #6983AB;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  border-bottom: 2px solid #0C1D5A;

}

.tabs li.tab__selected {
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
    z-index: -1;
    height: 2px;
    left: 0;
    width: 100%;
  }
}

.tab {
  max-width: 335px;

  @media (min-width: 768px) {
    max-width: unset;
  }

  &__content {
    &:not(:last-child) {
      padding-bottom: 24px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 125%;
    margin: 12px 0 20px;
    color: white;
    position: relative;
    padding-left: 40px;

    &::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: #149DE5;
      left: 17px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__text {
    margin: 0 0 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #6983AB;
    padding-left: 40px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;

}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  display: none;
}
</style>

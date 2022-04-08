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
          title: 'test',
          text: 'TBCC provides the ability to pay for goods and services with tokens.'
        },
        {
          title: 'test',
          text: 'TBCC provides the ability to pay for goods and services with tokens.'
        }
      ],
      forthcomingContent: [
        {
          title: 'TBCC PAY',
          text: 'TBCC provides the ability to pay for goods and services with tokens.'
        },
        {
          title: 'TBCC Investment',
          text: 'Our investment program Dollar-Cost Averaging is popular among investors. This strategy will help you reduce the amount you pay for your investments and minimize your risk.'
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
  padding-right: 20px;
}

ul.tabs__header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 0 40px;
}

ul.tabs__header > li {
  padding: 17px 40px;
  margin: 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

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

<template>
  <div
    class='tabs'
  >
    <ul class="tabs__header">
      <li
        :class='{"tab__selected": (0 === selectedIndex)}'
        @click="selectTab(0)"
      >
        <icon-cube-left :active='0 === selectedIndex' />
        Accessible
      </li>
      <li
        :class='{"tab__selected": (1 === selectedIndex)}'
        @click="selectTab(1)"
      >
        <icon-cube-right :active='1 === selectedIndex' />
        Forthcoming
      </li>
    </ul>
    <slot></slot>
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
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

ul.tabs__header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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

.tab {
  color: white;
  padding: 20px;
  min-width: 400px;
  min-height: 400px;
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
</style>

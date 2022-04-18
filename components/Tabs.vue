<template lang="html">
  <div class='tabs'>
    <div class='tabs__header-wrap'>
      <p class='tabs__title'>TBCC to USD Chart</p>
      <ul class="tabs__header">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.title"
          :class='{"tab__selected": (index === selectedIndex)}'
          @click="selectTab(index)"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
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

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  &__header-wrap {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #E0E0E0;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: baseline;
      padding-bottom: 18px;
      margin-bottom: 38px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #2B2B2B;
    margin: 0 0 30px;

    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  &__header {
    display: flex;
    list-style: none;
    padding: 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0;

    @media (min-width: 1024px) {
      display: block;
      width: auto;
      margin: 0 0 0 20px;
    }

    li {
      padding: 10px 17px;
      border-radius: 16px;
      margin: 0;
      display: inline-block;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      border: 2px solid transparent;
      color: #6983AB;

      @media (min-width: 1024px) {
        padding: 10px 12px;
      }
    }
  }
}

li.tab__selected {
  color: #2B2B2B;
  border-color: #6983AB99;
}

</style>

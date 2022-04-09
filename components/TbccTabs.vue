<template lang="html">
  <div>
    <tabs>
      <tab class='tab' title="1D"><icon-graph /></tab>
      <tab class='tab' title="7D"><icon-graph /></tab>
      <tab class='tab' title="1W"><icon-graph /></tab>
      <tab class='tab' title="1M"><icon-graph /></tab>
      <tab class='tab' title="1Y"><icon-graph /></tab>
    </tabs>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import IconGraph from './icon/IconGraph'

export default {
  components: {
    IconGraph,
    Tab,
    Tabs
  },
}
</script>


<style lang='scss' scoped>
.tab {
  & > svg {
    max-width: 503px;
    max-height: 272px;
    width: 100%;
    height: 100%;
  }
}
</style>

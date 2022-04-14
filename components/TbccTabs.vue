<template lang="html">
  <div>
    <tabs>
      <tab class='tab' title="7D"><icon-graph /></tab>
      <tab class='tab' title="1W"><icon-graph1m /></tab>
      <tab class='tab' title="1M"><icon-graph3m /></tab>
      <tab class='tab' title="1Y"><icon-graph1y /></tab>
    </tabs>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import IconGraph from './icon/IconGraph'
import IconGraph1m from './icon/IconGraph1m'
import IconGraph3m from './icon/IconGraph3m'
import IconGraph1y from './icon/IconGraph1y'

export default {
  components: {
    IconGraph1y,
    IconGraph3m,
    IconGraph1m,
    IconGraph,
    Tab,
    Tabs
  },
}
</script>


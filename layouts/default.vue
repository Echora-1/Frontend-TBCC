<template>
  <div class='default-layouts'>
    <base-header />
    <main>
      <Nuxt />
    </main>
    <base-footer />
  </div>
</template>
<script>
import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'
export default {
  components: { BaseHeader, BaseFooter }
}
</script>

<style lang='scss' scoped>
.default-layouts {
  overflow: hidden;
}
</style>

<template>
  <div class='priority container'>
    <p class='base-title'>Your financial <br/>
      success is our priority.
    </p>
    <base-button shaded>
      Trade Now
    </base-button>
  </div>
</template>

<style lang='scss' scoped>
.priority {
  padding-top: 155px;
  padding-bottom: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  max-width: 800px;
  margin: 0 0 40px;
}
</style>
<script>
import BaseButton from './BaseButton'
export default {
  components: { BaseButton }
}
</script>

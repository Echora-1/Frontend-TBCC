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

<script>
import BaseButton from './BaseButton'
export default {
  components: { BaseButton }
}
</script>

<style lang='scss' scoped>
.priority {
  padding-top: 110px;
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    padding-top: 155px;
    padding-bottom: 165px;
  }
}

p {
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  max-width: 340px;
  margin: 0 0 30px;

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 0 40px;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
    line-height: 59px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
}
</style>


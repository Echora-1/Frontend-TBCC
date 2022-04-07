<template>
  <div v-show="isActive" class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="css"></style>

<template>
  <button :class="{'active': active}">

  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang='scss' scoped>
button {
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 2px;
    background: white;
    top: 10px;
    right: 0;
    transition: all 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    background: white;
    right: 0;
    bottom: 10px;
    transition: all 0.3s;
  }
}

.active {
  &::before {
    top: calc(50% - 2px);
    transform: rotate(45deg);
  }

  &::after {
    width: 32px;
    bottom: 50%;
    transform: rotate(135deg);
  }
}
</style>

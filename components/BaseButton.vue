<template>
  <button :class='{"shaded": shaded}'>
    <slot> </slot>
  </button>
</template>

<script>
export default {
  props: {
    shaded: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: #1B0D6A;
  padding: 15px 30px;
  border-radius: 30px;
  color: #fff;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  position: relative;
  border: none;

  @media (min-width: 1200px) {
    padding: 20px 40px;
    font-size: 16px;
    line-height: 16px;
  }

  &:hover {
    &::before {
      background: linear-gradient(77.9deg,#06f -3.83%,#2ce0c5 72.3%);
    }
  }
  &:focus {

  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
    border-radius: 30px;
    z-index: -1;
    margin: -2px;
  }
}

.shaded {
  background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);

  &:hover {
    background: linear-gradient(77.9deg,#06f -3.83%,#2ce0c5 72.3%);
  }

  &::before {
    display: none;
    padding: 22px 42px;
  }
}
</style>

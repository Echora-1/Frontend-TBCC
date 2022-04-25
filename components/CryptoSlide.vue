<template>
  <div class='crypto-slide'>
    <div class='crypto-slide__hover-wrap'>
      <base-button shaded>
        Buy Now
      </base-button>
    </div>
    <img class='crypto-slide__img' :src='require(`../assets/img/crypto-currencies/${content.img}.svg`)' :alt='`logo-${content.name}`' width='36p' height='36'>
    <div class='crypto-slide__content'>
      <p class='crypto-slide__name'>{{ content.fullName }} <span>{{ content.name }}</span></p>
      <p class='crypto-slide__price'>${{ content.price }}</p>
      <p :class='[ "crypto-slide__percent-change", {"crypto-slide__percent-change--minus": content.percentChange < 0} ]'>{{ content.percentChange }}%</p>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
  components: { BaseButton },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          img: '',
          fullName: '',
          name: '',
          price: '',
          percentChange: '0'
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.crypto-slide {
  background: #030E34;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover &__hover-wrap {
    opacity: 1;
  }

  &__hover-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 12px;
    background: #030E34B3;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s;

    button {
      padding: 16px 23px;
    }
  }

  &__img {
    margin: 0 27px 0 12px;
  }

  &__name {
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0 0 15px;
    white-space: nowrap;

    span {
      opacity: 0.35;
    }
  }

  &__price {
    font-weight: 300;
    font-size: 22px;
    color: #FFFFFF;
    margin: 0 0 15px;
  }

  &__percent-change {
    font-weight: 300;
    font-size: 16px;
    color: #2CE0C5;
    margin: 0;

    &--minus {
      color: #E02C2C;
    }
  }
}

</style>

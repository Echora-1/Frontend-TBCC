<template>
  <div class='faq container'>
    <div class='faq__img img'>
      <learn-to-trade />
      <div class='img__content'>
        <p class='base-title'>Learn to trade efficiently</p>
        <p class='img__text'>Get up to speed on TBCC with articles, guidesm and step-by-step tutorials</p>
        <nuxt-link to='/' class='arrow-link'>learn more</nuxt-link>
      </div>
    </div>
    <div class='faq__list'>
      <faq-item v-for='(item, index) in faqItems' :key='index' :title='item.title' :icon='item.icon' />
    </div>
  </div>
</template>

<script>
import LearnToTrade from './icon/LearnToTrade'
import FaqItem from './FaqItem'
export default {
  components: { FaqItem, LearnToTrade },
  data() {
    return {
      faqItems: [
        {
          icon: 'img/tbcc.svg',
          title: 'What is TBCC?'
        },
        {
          icon: 'img/trade.svg',
          title: 'How to trade?'
        },
        {
          icon: 'img/stake.svg',
          title: 'How to stake?'
        },
        {
          icon: 'img/swap.svg',
          title: 'How to swap?'
        },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.faq {
  display: flex;

  &__img,
  &__list {
    width: 50%;
    max-width: 50%;
  }

  &__img {
    & > svg {
      max-width: 430px;
      max-height: 273px;
      width: 100%;
      height: 100%;
    }
  }

  &__list {
    padding-left: 20px;
    padding-top: 15px;
  }
}

.base-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 35px;
}

.img {
  &__content {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 373px;
      height: 373px;
      background-image: url("./assets/img/bg-learn-to-trade.svg");
      background-repeat: no-repeat;
      background-position: center;
      left: -85px;
      top: 14px;
      pointer-events: none;
    }
  }

  &__text {
    max-width: 400px;
    font-size: 18px;
    line-height: 28px;
    color: #6983AB;
    margin: 0 0 35px;
  }
}
</style>


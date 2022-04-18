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
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &__img,
  &__list {
    width: 100%;
    max-width: 100%;

    @media (min-width: 768px) {
      width: 50%;
      max-width: 50%;
    }
  }

  &__img {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }


    & > svg {
      max-width: 430px;
      max-height: 273px;
      width: 100%;
      height: 100%;
    }
  }

  &__list {
    @media (min-width: 768px) {
      padding-left: 20px;
      padding-top: 15px;
    }
  }
}

.base-title {
  font-weight: 700;
  margin: 0 0 30px;
  font-size: 28px;
  line-height: 35px;
  text-align: center;


  @media (min-width: 768px) {
    text-align: unset;
    margin: 0 0 35px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 40px;
  }
}

.img {
  &__text {
    max-width: 320px;
    font-size: 16px;
    line-height: 24px;
    color: #6983AB;
    margin: 0 0 30px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: unset;
      margin: 0 0 35px;
      max-width: 400px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  &__content {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

.arrow-link {
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}
</style>


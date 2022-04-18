<template>
  <div class='news-item'>
    <div class='news-item__img-wrap'>
      <img :src='img' alt=''>
    </div>
    <div class='news-item__content'>
      <p>{{ title }}</p>
      <nuxt-link class='arrow-link' :to='link'>read more</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang='scss' scoped>
.news-item {
  background: #0E1B4E;
  border-radius: 24px;
  width: 100%;
  overflow: hidden;

  &__img-wrap {
    min-height: 259px;
  }

  img {
    max-width: 350px;
    width: 100%;
  }

  &__content {
    padding: 20px 40px 40px;
  }

  p {
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    color: #FFFFFF;
    margin: 0 0 30px;
    min-height: 58px;

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
}
</style>

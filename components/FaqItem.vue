<template>
    <nuxt-link to='/' class='faq-item'>
      <div class='faq-item__img'>
        <img loading='lazy' :src="icon" :alt='title'>
      </div>
      <p>{{ title }}</p>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
.faq-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #18265B;
  cursor: pointer;

  @media (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto;
    padding: 15px 0;
  }

  &__img {
    width: 64px;
    height: 64px;
    background: linear-gradient(180deg, #2E3F87 0%, rgba(31, 46, 111, 0) 100%);
    border-radius: 18px;

    @media (max-width: 767px) {
      transform: scale(0.75);
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    padding-left: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    opacity: 0.6;
    display: inline-block;
    padding-right: 30px;
    width: calc( 100% - 64px );
    background-image: url("../assets/img/arrow.svg");
    background-position: center right;
    background-repeat: no-repeat;
    transition: opacity 0.3s;
    margin: 10px 0 10px;

    @media (min-width: 768px) {
      font-size: 22px;
      line-height: 27px;
    }
  }

  &:hover {
    p {
      opacity: 1;
    }
  }
}
</style>

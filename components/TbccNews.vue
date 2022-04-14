<template>
  <div class='tbcc-news container'>
    <p class='base-title'>TBCC news</p>
    <div class='tbcc-news__list'>
      <client-only>
        <Flickity id='news-carousel' ref="flickity" :options="flickityOptions">
          <news-item v-for='(item, index) in newsItems' :key='index' :img='item.img' :title='item.title' :link='item.link' class='tbcc-news__item' />
        </Flickity>
      </client-only>
    </div>
  </div>
</template>

<script>
import NewsItem from './NewsItem';
export default  {
  components: { NewsItem },
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        wrapAround: false,
        groupCells: 3,
        prevNextButtons: false
      },
      newsItems: [
        {
          img: 'img/news-features.png',
          title: 'TBCC Token Features: fast and secure.',
          link: "/"
        },
        {
          img: 'img/news-staking.png',
          title: 'TBCC Staking has launchd',
          link: "/"
        },
        {
          img: 'img/news-trading.png',
          title: 'Start trading TBCC/DOGE on B8DEX',
          link: "/"
        },
        {
          img: 'img/news-features.png',
          title: 'TBCC Token Features: fast and secure.',
          link: "/"
        },
        {
          img: 'img/news-staking.png',
          title: 'TBCC Staking has launchd',
          link: "/"
        },
        {
          img: 'img/news-trading.png',
          title: 'Start trading TBCC/DOGE on B8DEX',
          link: "/"
        }
      ]
    }
  },
}
</script>

<style lang='scss' scoped>
.tbcc-news {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__list {
    width: 100%;
  }

  &__item {
    margin-right: 30px;
    max-width: 350px;
  }
}

.base-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  margin: 0 0 60px;
}

</style>

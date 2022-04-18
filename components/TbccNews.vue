<template>
  <div class='tbcc-news container'>
    <p class='base-title'>TBCC news</p>
    <div class='tbcc-news__list'>
      <client-only>
        <Flickity id='news-carousel' ref="flickity" :key='sliderKey' :options="flickityOptions">
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
      ],
      innerWidth: 0,
      sliderKey: 1,
    }
  },

  computed: {
    flickityOptions() {
      if( this.innerWidth > 767 && this.innerWidth < 1200) {
        return {
          pageDots: true,
          wrapAround: false,
          groupCells: 2,
          prevNextButtons: false
        }
      }
      if(this.innerWidth <= 767) {
        return {
          pageDots: true,
          wrapAround: false,
          groupCells: 1,
          prevNextButtons: false
        }
      }
      return {
        pageDots: true,
        wrapAround: false,
        groupCells: 3,
        prevNextButtons: false
      }
    }
  },

  watch: {
    flickityOptions() {
      this.sliderKey += 1
    }
  },

  mounted() {
      this.setWidth();
      window.addEventListener('resize', this.setWidth);
  },

  methods: {
    setWidth() {
      this.innerWidth = window.innerWidth
    }
  }
}
</script>

<style lang='scss' scoped>
.tbcc-news {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__list {
    width: 100%;
    max-width: 380px;

    @media (min-width: 768px) {
      max-width: 760px
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }

  &__item {
    margin-right: 30px;
    width: calc((100% - 30px));
    max-width: 350px;

    @media (min-width: 768px) {
      width: calc((100% - 60px) / 2);
    }

    @media (min-width: 1200px) {
      width: calc((100% - 90px) / 3);
    }
  }
}

.base-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  margin: 0 0 45px;

  @media (min-width: 1024px) {
    font-size: 45px;
    line-height: 59px;
    margin: 0 0 60px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
}

</style>

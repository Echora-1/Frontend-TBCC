<template>
  <header class='base-header'>
    <div class='base-header__container container'>
      <icon-logo class='logo' />
      <nav>
        <a href=''>Get Started</a>
        <a href=''>Wallet</a>
        <a href=''>Buy & Sell</a>
        <a href=''>News</a>
        <a href=''>Exchange</a>
        <a href=''>Company</a>
      </nav>
      <div class='actions'>
        <base-dropdown
          id="language"
          class="actions__language"
          :list="languages"
          item-key="language"
          :default-value="languages[0]"
          @selected="(value) => selectLanguage(value)" />
        <base-button shaded class='actions__sign-in'>
          Sign In
        </base-button>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogo from './icon/IconLogo'
import BaseButton from './BaseButton'
import BaseDropdown from './BaseDropdown'
export default {
  components: { BaseDropdown, BaseButton, IconLogo },

  data() {
    return {
      languages: [ { language: 'EN', id: 1, value: 'en' }, { language: 'RU', id: 2, value: 'ru' }],
      currentLanguage: 'en',
    }
  },

  mounted() {
    function scrollHeader(){
      const header = document.querySelector('.base-header')
      if (this.pageYOffset >= 575) {
        header.classList.add('base-header--scroll-575');
      }
      if (this.pageYOffset <= 575) {
        header.classList.remove('base-header--scroll-575');
      }
      if(this.pageYOffset >= 100) {
        header.classList.add('base-header--scroll');
      } else {
        header.classList.remove('base-header--scroll');
      }
    }
    window.addEventListener('scroll', scrollHeader)
  },

  methods: {
    selectLanguage (value) {
      this.currentLanguage = value.value
    }
  }
}
</script>

<style lang='scss' scoped>
nav {
  margin: 0 auto;
 a {
   font-weight: 300;
   font-size: 16px;
   line-height: 16px;
   color: #FFFFFF;
 }

  a:not(:last-child) {
    margin-right: 40px;
  }
}

.base-header {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 2;

  &__container {
    display: flex;
    align-items: center;
    padding: 16px 40px;
    max-width: 1440px;
  }

  &--scroll {
    top: 0;
    background: linear-gradient(161.68deg, #1F0C71 27.28%, #041344 67.8%);
  }

  &--scroll-575 {
    background: #051345;
  }
}

.logo {
  @media (min-width: 1200px) {
    margin-right: 70px;
  }
}

.actions {
  display: flex;
  align-items: center;

  &__language {
    margin-right: 25px;
  }

  &__sign-in {
    padding: 12px 30px;
    border-radius: 20px;
  }
}
</style>

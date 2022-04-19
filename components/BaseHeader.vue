<template>
  <header :class="['base-header', {'base-header--menu-open': isShowMenu}]">
    <div class='base-header__wrap'>
      <div class='base-header__container container'>
        <icon-logo class='logo' />
        <div class='base-header__nav'>
          <nav>
            <nuxt-link to='/' @click.native='closeMenu'>Wallet</nuxt-link>
            <nuxt-link to='/' @click.native='closeMenu'>Buy & Sell</nuxt-link>
            <nuxt-link to='/' @click.native='closeMenu'>Exchange</nuxt-link>
            <nuxt-link to='/' @click.native='closeMenu'>Company</nuxt-link>
          </nav>
          <div class='actions'>
            <base-dropdown
              id="language"
              class="actions__language"
              :list="languages"
              item-key="language"
              :default-value="languages[0]"
              @selected="(value) => selectLanguage(value)" />
            <base-button shaded class='actions__sign-in' @click.native='closeMenu'>
              Sign In
            </base-button>
          </div>
        </div>
        <menu-button class='base-header__menu-button' :active='isShowMenu' @click.native='toggleShowMenu'/>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogo from './icon/IconLogo'
import BaseButton from './BaseButton'
import BaseDropdown from './BaseDropdown'
import MenuButton from './MenuButton'
export default {
  components: { MenuButton, BaseDropdown, BaseButton, IconLogo },
  data() {
    return {
      languages: [ { language: 'En', id: 1, value: 'en' }, { language: 'Ch', id: 2, value: 'ch' }, { language: 'Tur', id: 3, value: 'tur' }],
      currentLanguage: 'en',
      isShowMenu: false,
    }
  },

  watch: {
    isShowMenu() {
      if(this.isShowMenu && window.innerWidth < 1024) {
        document.body.style.overflow = 'hidden'
      } else  {
        document.body.style.overflow = 'visible'
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHeader)
  },

  destroy() {
    window.removeEventListener('scroll', this.scrollHeader);
  },

  methods: {
    scrollHeader(){
      const header = document.querySelector('.base-header')
      const headerWrap = document.querySelector('.base-header__wrap')
      if (window.scrollY >= 575) {
        headerWrap.classList.add('base-header__wrap--scroll-575');
      }
      if (window.scrollY <= 575) {
        headerWrap.classList.remove('base-header__wrap--scroll-575');
      }
      if(window.scrollY >= 100) {
        header.classList.add('base-header--scroll');
        headerWrap.classList.add('base-header__wrap--scroll');
      } else {
        header.classList.remove('base-header--scroll');
        headerWrap.classList.remove('base-header__wrap--scroll');
      }
    },

    selectLanguage (value) {
      this.currentLanguage = value.value
    },

    toggleShowMenu() {
      this.isShowMenu = !this.isShowMenu;
    },

    closeMenu() {
      this.isShowMenu = false;
    }
  }
}
</script>

<style lang='scss' scoped>
nav {
  margin: 0 auto;

 a {
   font-weight: 400;
   font-size: 16px;
   line-height: 16px;
   color: #FFFFFF;

   &:not(:last-child) {
     margin-right: 90px;
   }

   @media (max-width: 1023px) {
     font-weight: 600;
     font-size: 26px;
     line-height: 125%;
     padding: 20px 4px;
   }
 }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    overflow-y: auto;
  }
}

.base-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 1024px) {
    top: 40px;
  }

  &__container {
    display: flex;
    align-items: center;
    padding: 16px 26px;
    max-width: 1440px;
    position: relative;

    @media (min-width: 768px) {
      padding: 16px 30px;
    }

    @media (min-width: 1200px) {
      padding: 16px 40px;
    }
  }

  &__nav {
    width: 100%;
    display: flex;

    @media (max-width: 1023px) {
      position: absolute;
      flex-direction: column;
      left: 0;
      right: 0;
      bottom: calc(65px - 100vh);
      background: linear-gradient(90deg,rgba(7,20,40,.9) 0,#041344 100%);
      padding: 15px 26px 20px;
      height: calc(100vh - 65px);
      opacity: 0;
      transform: translateX(200%);
      transition: transform 1s;
    }

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
    }
  }

  &__menu-button {
    margin-left: auto;
    @media (min-width: 1024px) {
      display: none;
    }
  }

  &__wrap {
    &--scroll {
      background: linear-gradient(161.68deg, #1F0C71 27.28%, #041344 67.8%);
    }

    &--scroll-575 {
      background: #051345;
    }
  }

  &--scroll {
    top: 0;
  }

  &--menu-open {
    @media (max-width: 1023px) {
      transition: background-color 1s;
      background: #041344;

      .base-header__nav {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}

.logo {
  width: 80px;
  height: 33px;

  @media (min-width: 1200px) {
    margin-right: 70px;
    width: 95px;
    height: 38px;
  }
}

.actions {
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    order: -1;
    justify-content: space-between;
    margin: 10px 0 20px;
  }

  &__language {
    margin-right: 25px;
  }

  &__sign-in {
    padding: 12px 30px;
    border-radius: 20px;
  }
}
</style>

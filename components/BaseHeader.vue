<template>
  <header class='container base-header'>
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

  methods: {
    selectLanguage (value) {
      this.currentLanguage = value.value
    }
  },
}
</script>

<style lang='scss' scoped>
header {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
}

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

.logo {
  @media (min-width: 1440px) {
    margin-right: 50px;
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

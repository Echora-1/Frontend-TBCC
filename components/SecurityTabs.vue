<template>
  <div
    class='security-tabs'
  >
    <ul class="security-tabs__header">
      <li
        key="0"
        :class='{"tab__selected": (0 === selectedIndex)}'
        @click="selectTab(0)"
      >
        Client-side Encryption
      </li>
      <li
        key="1"
        :class='{"tab__selected": (1 === selectedIndex)}'
        @click="selectTab(1)"
      >
        Powerful security tools
      </li>
    </ul>
    <transition-group name='fade' mode='out-in'>
      <div v-if='0 === selectedIndex' :key='0' class='tab'>
        <div v-for='(item, index) in accessibleContent' :key='index' class='tab__content' >
          <p class='tab__title'>{{ item.title }}</p>
          <p class='tab__text'>{{ item.text}}</p>
        </div>
      </div>
      <div v-else-if='1 === selectedIndex' :key='1' class='tab'>
        <div v-for='(item, index) in forthcomingContent' :key='index' class='tab__content' >
          <p class='tab__title'>{{ item.title }}</p>
          <p class='tab__text'>{{ item.text}}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 0,
      accessibleContent: [
        {
          title: 'One-Touch 2-Factor Authentication',
          text: 'Easily set up 2-Factor Authentication (2FA) with just a touch of a button. 2FA increases security by only allowing logins from previously logged in devices. Even if a malicious actor gets access to your username and password, they won’t be able to log-in to your 2FA enabled account.'
        },
        {
          title: 'Password Recovery',
          text: 'Many of us forget passwords and this can be unforgiving to holders of digital assets. We have created password recovery with this in mind. Users can set up password recovery for their TBCC Wallet with just two recovery questions and an email.'
        }
      ],
      forthcomingContent: [
        {
          title: 'One-Touch 2-Factor Authentication',
          text: 'Easily set up 2-Factor Authentication (2FA) with just a touch of a button. 2FA increases security by only allowing logins from previously logged in devices. Even if a malicious actor gets access to your username and password, they won’t be able to log-in to your 2FA enabled account.'
        },
        {
          title: 'Password Recovery',
          text: 'Many of us forget passwords and this can be unforgiving to holders of digital assets. We have created password recovery with this in mind. Users can set up password recovery for their TBCC Wallet with just two recovery questions and an email.'
        }
      ],
    }
  },
  mounted () {
    this.selectTab(1)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
    }
  }
}
</script>

<style lang="scss" scoped>

.security-tabs {
  @media (min-width: 768px) {
    padding-right: 20px;
  }
}

ul.security-tabs__header {
  display: flex;
  list-style: none;
  margin: 0;
  padding:0;
  justify-content: flex-start;
  z-index: 1;
  position: absolute;
  top: -17px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 540px;
  width: 100%;
}

ul.security-tabs__header > li {
  padding: 17px 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
}

.security-tabs .tab{
  background-color: transparent;
}

.security-tabs li {
  background-color: transparent;
  color: #6983AB;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  border-bottom: 2px solid #0C1D5A;

}

.security-tabs li.tab__selected {
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
    z-index: -1;
    height: 2px;
    left: 0;
    width: 100%;
  }
}

.tab {
  max-width: 335px;

  @media (min-width: 768px) {
    max-width: unset;
  }

  &__content {
    &:not(:last-child) {
      padding-bottom: 24px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 125%;
    margin: 12px 0 20px;
    color: white;
    position: relative;
    padding-left: 40px;

    &::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: #149DE5;
      left: 17px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__text {
    margin: 0 0 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #6983AB;
    padding-left: 40px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;

}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  display: none;
}
</style>

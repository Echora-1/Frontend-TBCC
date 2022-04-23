<template>
  <div class='advantage-wallet container'>
    <div class='advantage-wallet__items'>
      <div class='advantage-wallet__item item'>
        <img class='item__img' src='../assets/img/secure.svg' width='48' height='56' alt='Secure'>
        <p class='item__name'>Secure</p>
        <p class='item__text'>Your private keys are encrypted and never leave your device. You fully control your funds.</p>
      </div>
      <div class='advantage-wallet__item item'>
        <img class='item__img' src='../assets/img/anonymous.svg' width='60' height='51' alt='Secure'>
        <p class='item__name'>Anonymous</p>
        <p class='item__text'>No accounts, no verification, no KYC for basic features in the wallet. No one can block your funds.</p>
      </div>
      <div class='advantage-wallet__item item'>
        <img class='item__img' src='../assets/img/user-friendly.svg' width='48' height='63' alt='Secure'>
        <p class='item__name'>User-friendly</p>
        <p class='item__text'>With its simplicity, this wallet is great for beginners just getting into the crypto space.</p>
      </div>
    </div>
    <base-button shaded>
      Download wallet
    </base-button>
  </div>
</template>

<style lang='scss' scoped>
.advantage-wallet {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 65px;
  }
}

.item {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__img {
    margin-bottom: 29px;
    min-height: 63px;
  }

  &__name {
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    margin: 0 0 29px;
  }

  &__text {
    font-size: 18px;
    line-height: 28px;
    max-width: 300px;
    color: #6983AB;
    text-align: center;
    margin: 0;
  }
}
</style>
<script>
import BaseButton from './BaseButton'
export default {
  components: { BaseButton }
}
</script>

<template>
  <div class='supported-assets container'>
    <div class='supported-assets__img'>
        <img src='../assets/img/supported-assets.svg' alt='supported-assets' width='410' height='429'>
        <nuxt-link :to='localePath("/wallet")' class='arrow-link'>
          See the Full List
        </nuxt-link>
    </div>
    <div class='supported-assets__content content'>
      <span class='content__bold-text'>
        120+
      </span>
      <h2 class='content__title base-title'>Supported assets</h2>
      <p class='content__subtitle'>Manage, Exchange and Buy all your favorite assets in one secure interface. Sort your portfolio by amount and value</p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.supported-assets {
  display: flex;
  align-items: center;

  &__img,
  &__content {
    width: 50%;
    max-width: 50%;
  }

  &__img {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 36px;
    }
  }
}

.content {
  padding-top: 50px;
  padding-left: 20px;

  &__bold-text {
    font-weight: 400;
    font-size: 100px;
    color: #FFFFFF;
    margin: 0 0 30px;
  }

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    margin: 0 0 30px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 28px;
    color: #6983AB;
    max-width: 500px;
  }
}

.arrow-link {
  text-transform: none;
  color: #589BFF;
  background-image: url("../assets/img/arrow-blue.svg");
  padding-right: 45px;
  margin-left: 30px;
}
</style>

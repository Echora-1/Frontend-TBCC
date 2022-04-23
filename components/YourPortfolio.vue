<template>
  <div class='your-portfolio container'>
    <h2 class='your-portfolio__title base-title'>Manage your portfolio</h2>
    <p class='your-portfolio__subtitle'>Manage, Exchange and Buy all your favorite assets in one secure interface. Sort your portfolio by amount and value</p>
    <img src='../assets/img/your-portfolio.png' width='1110' height='638' alt=''>
  </div>
</template>

<style lang='scss' scoped>
.your-portfolio {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 220px;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    margin: 0 0 35px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 28px;
    color: #6983AB;
    max-width: 640px;
    text-align: center;
    margin: 0 0 60px;
  }
}
</style>

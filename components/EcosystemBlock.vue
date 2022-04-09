<template>
  <div class='ecosystem'>
    <div class='ecosystem__container container'>
      <p class='ecosystem__title base-title'>Ecosystem</p>
      <p class='ecosystem__subtitle'> TBCC offers up-to-date financial services that allow you to invest, earn, save and pay the bills using cryptocurrency within the same ecosystem.</p>
      <div class='ecosystem__content content'>
          <div class='content__tabs'>
            <ecosystem-tabs />
          </div>
          <div class='content__cube cube'>
            <div class='cube__wrap'>
              <icon-cube class='cube__item' />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCube from './icon/IconCube'
import EcosystemTabs from './EcosystemTabs'
export default {
  components: { EcosystemTabs, IconCube, }
}
</script>

<style lang='scss' scoped>
.ecosystem {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin: 0 auto 30px;
    max-width: 250px;
    font-weight: 700;
    font-size: 48px;
  }

  &__subtitle {
    margin: 0 auto;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #6983AB;
    text-align: center;
    max-width: 700px;
  }
}

.content {
  display: flex;
  width: 100%;
  overflow: hidden;
  transform: translateX(20px);

  &__tabs,
  &__cube {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__tabs {
    padding-top: 120px;
  }
}

.cube {
  display: flex;
  justify-content: center;
  overflow: visible;

  &__wrap {
    position: relative;
    overflow: visible;
    display: flex;
    align-items: center;
    top: -50px;
  }
}

</style>

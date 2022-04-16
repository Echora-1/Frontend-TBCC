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
    margin: 0 auto 25px;
    max-width: 250px;
    font-weight: 700;
    font-size: 36px;

    @media (min-width: 1024px) {
      margin: 0 auto 30px;
      font-size: 45px;
    }

    @media (min-width: 1200px) {
      font-size: 48px;
    }
  }

  &__subtitle {
    margin: 0 auto;
    font-weight: 500;
    color: #6983AB;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    max-width: 320px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 26px;
      max-width: 600px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      line-height: 28px;
      max-width: 700px;
    }
  }
}

.content {
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    transform: translateX(20px);
  }

  &__tabs,
  &__cube {
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
      align-self: flex-start;
    }
  }

  &__tabs {
    padding-top: 35px;

    @media (min-width: 1024px) {
      padding-top: 120px;
    }
  }
}

.cube {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 140px;
  z-index: 1;

  @media (min-width: 768px) {
    position: static;
    top: auto;
  }

  &__wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    top: -50px;
  }

  &__item {
    width: 100%;
    height: 100%;
    max-width: 320px;
    max-height: 430px;
    position: relative;
    top: -72px;
    overflow: visible;

    @media (min-width: 768px) {
      max-width: 450px;
      max-height: 605px;
      top: -20px;
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1200px) {
      top: 0;
      width: unset;
      height: unset;
    }
  }
}

</style>

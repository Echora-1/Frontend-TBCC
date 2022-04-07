<template>
  <div class='ecosystem'>
    <div class='ecosystem__container container'>
      <EcosystemText class='ecosystem__title'/>
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
import EcosystemText from './icon/EcosystemText'
import IconCube from './icon/IconCube'
import EcosystemTabs from './EcosystemTabs'
export default {
  components: { EcosystemTabs, IconCube, EcosystemText,  }
}
</script>

<style lang='scss' scoped>
.ecosystem {
  min-height: 100vh;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin: 0 auto 30px;
    max-width: 225px;
    max-height: 44px;
    width: 100%;
    height: 100%;
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
  align-items: center;

  &__tabs,
  &__cube {
    flex: 0 0 50%;
    max-width: 50%;
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

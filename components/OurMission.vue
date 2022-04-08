<template>
  <div class='our-mission'>
    <div class='our-mission__container container'>
      <div class='our-mission__img'>
        <img src='img/our-mission.png' alt=''>
      </div>
      <div class='our-mission__content'>
        <our-mission-text/>
        <p>There is hardly any person today who has not heard of cryptocurrency and over 300 million were already active users. The purpose of TBCC is to create an environment for the development of cryptocurrency and simplify using it in everyday life.</p>
      </div>
    </div>
  </div>
</template>

<script>
import OurMissionText from './icon/OurMissionText'
export default {
  components: { OurMissionText }
}
</script>

<style lang='scss' scoped>
.our-mission {
  overflow: hidden;

  &__container {
    display: flex;
    align-items: center;
  }

  &__img,
  &__content {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__img {
    img {
      width: 100%;
      object-fit: cover;
      position: relative;
      top: -20px;
      left: 0;

      @media (min-width: 1200px) {
        width: auto;
        left: -90px;
      }
    }
  }

  &__content {
    max-width: 460px;
    color: #6983AB;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;

    @media (min-width: 1200px) {
      padding-left: 45px;
    }

    svg {
      width: 100%;
      height: 100%;
      max-width: 254px;
      max-height: 36px;
    }
  }
}
</style>

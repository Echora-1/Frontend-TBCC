<template>
  <div class='our-mission'>
    <div class='our-mission__container container'>
      <div class='our-mission__img'>
        <our-mission-img />
      </div>
      <div class='our-mission__content content'>
        <p class='content__title base-title'>Our Mission</p>
        <p class='content__text'>There is hardly any person today who has not heard of cryptocurrency and over 300 million were already active users. The purpose of TBCC is to create an environment for the development of cryptocurrency and simplify using it in everyday life.</p>
      </div>
    </div>
  </div>
</template>

<script>
import OurMissionImg from './icon/OurMissionImg'
export default {
  components: { OurMissionImg }
}
</script>


<style lang='scss' scoped>
.our-mission {
  &__container {
    display: flex;
    align-items: center;
    margin-top: 25px;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__img,
  &__content {
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  &__img {
    svg {
      width: 100%;
      height: 100%;
      max-width: 576px;
      max-height: 606px;
      object-fit: cover;
      position: relative;
      top: -20px;
      left: 0;

      @media (min-width: 768px) {
        transform: scale(1.2);
        left: -20px;
        max-width: unset;
        max-height: unset;
      }

      @media (min-width: 1200px) {
        width: auto;
        height: auto;
        left: -90px;
        transform: none;
      }
    }
  }

  &__content {
    max-width: 480px;

    @media (min-width: 768px) {
      padding-bottom: 20px;
    }

    @media (min-width: 1200px) {
      padding-left: 45px;
    }
  }
}

.content {
  margin-top: -70px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    margin: 0 0 25px;

    @media (min-width: 1024px) {
      font-size: 45px;
      margin: 0 0 35px;
    }

    @media (min-width: 1200px) {
      font-size: 48px;
    }
  }

  &__text {
    color: #6983AB;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    max-width: 317px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 26px;
      max-width: 460px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      line-height: 28px;
      max-width: 480px;
    }
  }
}
</style>

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
  }

  &__img,
  &__content {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__img {
    svg {
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
    padding-bottom: 20px;

    @media (min-width: 1200px) {
      padding-left: 45px;
    }
  }
}

.content {
  &__title {
    font-weight: 700;
    font-size: 48px;
    margin: 0 0 35px;
  }

  &__text {
    color: #6983AB;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
  }
}
</style>

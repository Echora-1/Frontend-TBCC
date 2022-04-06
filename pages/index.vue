<template>
  <div>
    <main-screen />
    <div class='our-mission-and-ecosystem'>
      <our-mission />
    </div>
  </div>
</template>

<script>
import MainScreen from '../components/MainScreen'
import OurMission from '../components/OurMission'
export default {
  components: { OurMission, MainScreen }
}
</script>

<style lang='scss' scoped>
.our-mission-and-ecosystem {
  overflow: visible;
  background-color: #051345;;
  position: relative;

  &::before {
    content: "";
    min-width: 1440px;
    min-height: 1200px;
    background-image: url("../assets/img/bg-our-mission.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    top: -30px;
    right: 0;
    position: absolute;
  }
}
</style>

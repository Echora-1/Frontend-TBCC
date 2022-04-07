<template>
  <div class="mainDiv">
    <div class="square">
      <p>EXCHANGE</p>
      <p>WALLET</p>
    </div>
    <div class="square2">
      <p>TBCC</p>
      <p>TOKEN</p>
    </div>
    <div class="square3">
      <p>TBCC PAY</p>
      <p>TBCC INVEST</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.mainDiv{
  position: relative;
  width: 295px;
  height: 340px;
  margin: 0px auto;
  margin-top:100px;

  & > div {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      background: linear-gradient(87.32deg, #0066FF -0.29%, #2CE0C5 125.48%);
    }
  }
}
.square{
  width:170px;
  height:170px;
  background: linear-gradient(217.03deg, #2D47A3 21.39%, #172A6A 92.28%);
  position: absolute;
  top: 41px;
  left: 0;
  transform: matrix(1, 0.58, 0, 0.89, 0, 0);
}
.square2{
  width:170px;
  height:170px;
  background: linear-gradient(217.03deg, #2D47A3 21.39%, #172A6A 92.28%);
  transform: matrix(1, -0.58, 0, 0.89, 0, 0);
  position: absolute;
  left:170px;
  top: 41px;
  right: 0;
}
.square3{
  width:170 px;
  height:170px;
  background: linear-gradient(217.03deg, #2D47A3 21.39%, #172A6A 92.28%);
  transform: matrix(0.71, -0.41, 1.22, 0.71, 0, 0);
  position: absolute;
  left: 30px;
  top: 0;

  p {
    transform: rotate(180deg);
  }
}
</style>

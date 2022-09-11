<template>
  <div class="my">
    <div class="header"></div>
    <div class="banner">
      <div class="banner1">
        <van-image
  round
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style land="less" scoped>
.my .header{
  position: relative;
  width: 100vw;
  height: 200px;
  background-image: url(@/assets/imgs/bg.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.my .banner{
  width: 320px;
  height: 165px;
  background-color: pink;
  z-index: 99;
}
.my .banner .banner1{
  
}
</style>

<template>
  <div>
    <van-tabbar route>
  <van-tabbar-item icon="wap-home-o" to="/homePage">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/forRoom">找房</van-tabbar-item>
  <van-tabbar-item icon="newspaper-o" to="/consulting">咨询</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
</van-tabbar>
    <div><router-view></router-view></div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>

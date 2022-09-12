<template>
  <div class="my">
    <div class="header" :style="background">
      <div class="banner">
      <div class="banner1">
        <van-image class="avatar"
  round
  :src="isDenglu?'http://liufusong.top:8080'+userInfo.avatar:avatarSrc"/>
        <div class="youke">
          <p>{{isDenglu?userInfo.nickname:'游客' }}</p>
        <van-button type="primary"
            size="small" class="btn" @click="loginOrExit">{{ isDenglu? '退出':'去登录' }}</van-button>

            <router-link
            v-if="isDenglu"
            class="edit"
            to="/edit"
          >
            编辑个人资料 ▶
          </router-link>
        </div>
      </div>
      </div>
    </div>
    <div class="foot"></div>
    <van-grid
      :column-num="3"
      :border="false"
      icon-size="20"
      :clickable="true"
    >
      <van-grid-item icon="star-o"  text="我的收藏" to="/favorate" />
      <van-grid-item icon="wap-home-o"  text="我的出租" to="/rent"/>
      <van-grid-item icon="clock-o"  text="看房记录" />
      <van-grid-item icon="send-gift-o"  text="成为房主" />
      <van-grid-item icon="contact"  text="个人资料" />
      <van-grid-item icon="service-o"  text="联系我们" />
    </van-grid>

    <div class="fotter-img">
      <van-image src="http://liufusong.top:8080/img/profile/join.png"></van-image>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/denglu'
import { Toast, Dialog } from 'vant'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      userInfo: {},
      avatarSrc: 'http://liufusong.top:8080/img/profile/avatar.png',
    }
  },
  computed: {
    // ...mapState(['tokenObj']),
    ...mapGetters(['isDenglu']),
    background() {
      if (!this.isDenglu) return undefined
      return {'background-image':`url(${"http://liufusong.top:8080"+this.userInfo.avatar})`}
    }
  },
  created() {
    if (this.isDenglu) {
      this.getUserInfoAPI()
      }
  },
  methods: {
    async loginOrExit() {
      if (!this.isDenglu) {
        return this.$router.push('/denglu')
      }
      try {
        await Dialog.confirm({title:'提示',message:'是否确定退出'})
        this.$store.commit('SET_TOKEN', {})
      } catch (error) {

      }
    },
    async getUserInfoAPI() {
      try {
        const { data } = await getUserInfo()
        // console.log(data);
        this.userInfo = data.body
      } catch (error) {
        Toast.fail('获取数据失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  background-color: #fff;
  height: 100vh;
  .header{
  position: relative;
  width: 100vw;
  height: 200px;
  background-image: url(@/assets/imgs/bg.png);
  background-repeat: no-repeat;
  background-size: 100%;

  .banner{
    bottom: 0;
  width: 320px;
  height: 165px;
  // background-color: #fff;
  z-index: 99;

  .banner1{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: -50%;
    width: 320px;
    height: 165px;
    background-color: #fff;
    z-index: 99;

    .btn{
      padding: 0 20px;
    border-radius: 5px;
    height: 30px;
    }
    .youke{
    // text-align: center;
    p{
      font-size: 13px;
      margin-bottom: 20px;
      margin-left: 25px;
    }
  }
  }
  .avatar{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f5f5f5;
    box-sizing: border-box;
    overflow: hidden;
    top: -35px;
    padding: 5px;
    box-shadow: 0 2px 2px #bdbdbd;
  }

  .edit{
    display: block;
    font-size: 12px;
    color:#999;
    margin-top: 13px;
  }
}

  }
  .foot{
    width: 100%;
    height: 100px;
  }
  .fotter-img{
    border-radius: 8px;
    overflow: hidden;
    margin:0 auto;
    width: 85%;
  }
}
</style>

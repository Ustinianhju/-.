<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow class="nav-bar" />
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="user.username"
        name="username"
        placeholder="请输入账号"
        :rules="userNameRules"
      />
      <van-field
        v-model="user.password"
        name="password"
        placeholder="请输入密码"
        :rules="passwordRule"
      />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          style="background: #21b97a; color: #fff"
          >登 录</van-button
        >
      </div>
    </van-form>
    <div class="wei"><span>还没有账号,去注册~</span></div>
  </div>
</template>

<script>
import { userNameRules, passwordRule } from "./config.js";
import { onLogin } from "@/api/denglu";
import { Toast } from "vant";
import { mapMutations } from "vuex";
export default {
  name:'Login',
  data() {
    return {
      user: {
        password: '',
        username:'',
      },
      userNameRules,
      passwordRule,
    };
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    async onSubmit(data) {
      try {
        const res = await onLogin(data);
        console.log(res);
        if (res.status === 200) {
          Toast.success({
            message: '账号密码正确',
            duration:2000   //显示时长
          })
          // commit 第一个参数是方法名称，第二个参数是需要携带的参数
          this.$store.commit('SET_TOKEN',res.data.body)
          this.code()
        } else {
          Toast.fail('账号密码错误')
          this.user.username = ''
        }
      } catch (error) {
        throw error
        // Toast.fail('网络异常！')
      }
    },
    code() {
      setTimeout(_ => {
        this.$router.push('/my')
      },2000)
    }
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  background-color: #21b97a;
}

:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 18px;
}

:deep(.van-nav-bar .van-icon) {
  color: #fff;
}

.wei {
  color: #7a7b80;
  font-size: 15px;
  text-align: center;
  margin-top: 50px;
}
</style>

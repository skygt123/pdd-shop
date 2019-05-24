<template>
<!-- import { clearInterval } from 'timers';
import { setInterval } from 'timers'; -->
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/lk_logo_sm.png" alt="" width="250">
        </div>
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current: loginMode}" @click="dealLoginMode(true)">短信登录</a>
          <a href="javascript:;" :class="{current: !loginMode}" @click="dealLoginMode(false)">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--手机验证码登录部分-->
          <div class="loginMode" :class="{current: loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button
                class="get-verification"
                :class="{phone_right: phoneRight}"
                v-if="!countDown"
                @click.prevent="getVerifuCode"
              >
                获取验证码
              </button>
              <button
                v-else
                disabled="disabled"
                class="get-verification"
              >
                已发送({{countDown}}s)
              </button>
            </section>
            <section class="login-verification">
              <input type="tel" v-model="code" maxlength="8" placeholder="验证码">
            </section>
            <section class="login-hint">
              温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div class="loginMode" :class="{current: !loginMode}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" v-model="user_name" placeholder="用户名">
              </section>
              <section class="login-verification">
                <input type="password" v-model="pwd" maxlength="20" placeholder="密码" v-if="pwdMode">
                <input type="text" v-model="pwd" maxlength="20" placeholder="密码" v-else>
                <div class="switch-show">
                  <img @click.prevent="dealPwdMode(false)" :class="{on: pwdMode}" src="./images/hide_pwd.png" alt="" width="20">
                  <img @click.prevent="dealPwdMode(true)" :class="{on: !pwdMode}"  src="./images/show_pwd.png" alt="" width="20">
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="4"  v-model="captcha" placeholder="验证码">
                <img
                  class="get-verification"
                  src="http://localhost:3000/api/captcha"
                  alt="captcha"
                  ref="captcha"
                  @click.prevent="getCaptcha()"
                >
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login()">登录</button>
        </form>
        <button class="login-back" @click="back()">返回</button>
      </div>
    </div>
    <!-- 提示 -->
     <cube-popup type="my-popup" :mask="false" ref="myPopup2">
      <div class="popup-wrap">{{msg}}</div>
    </cube-popup>
  </div>
</template>

<script>
import { getPhoneCode, getLoginCode, getLoginPwd } from 'api/index'
import { mapActions } from 'vuex'
// import {getPhoneCode, phoneCodeLogin, pwdLogin} from './../../api/index'
export default {
  data () {
    return {
      loginMode: true, // 登陆方式 默认验证码
      phone: '',
      countDown: 0,
      pwdMode: true, // 密码 true密文 false明文
      user_name: '',
      captcha: '', // 图形验证码
      pwd: '',
      msg: '',
      code: '',
      userInfo: {} // 用户信息
    }
  },
  created () {
  },
  computed: {
    phoneRight () { // 验证手机号是否合理
      return /^1[34578]\d{9}$/.test(this.phone)
    }
  },
  methods: {
    // ...mapActions(['syncUserInfo']),
    // 1. 处理登录的方式
    dealLoginMode (flag) {
      this.loginMode = flag
    },
    dealPwdMode (flag) {
      this.pwdMode = flag
    },
    async getVerifuCode () {
      // 开始倒计时
      if (this.phoneRight) {
        this.countDown = 60
        this.intercalId = setInterval(() => {
          this.countDown--
          if (this.countDown === 0) {
            clearInterval(this.intercalId)
          }
        }, 1000)
        // 获取短信验证码
        let result = await getPhoneCode(this.phone)
        console.log(result)
        if (result.err_code === 0) { // 判断发送失败
          this.msg = result.message
          this.showPopup('myPopup2') // 提示
        }
      }
    },
    getCaptcha () {
      this.$refs.captcha.src = 'http://localhost:3000/api/captcha?time=' + new Date()
    },
    async login () {
      // 判断登陆模式
      if (this.loginMode) { // 验证码登陆
        // 前端校验
        if (!this.phone) {
          alert('请输入手机号码')
          return false
        } else if (!this.phoneRight) {
          alert('请输入正确的手机号码')
          return false
        }

        if (!this.code) {
          alert('请输入验证码')
          return false
        } else if (!(/^\d{6}$/gi.test(this.code))) {
          alert('请输入正确的验证码')
          return false
        }

        // 手机验证码登陆
        const result = await getLoginCode(this.phone, this.code)
        console.log(result)
        // 判断
        if (result.success_code === 200) {
          this.userInfo = result.message
        } else {
          this.getCaptcha() // 重新获取验证码
          this.userInfo = {
            msessage: '登陆失败，手机号或验证码不正确！'
          }
        }
      } else { // 账号登陆
        // 前端校验
        if (!this.user_name) {
          alert('请输入用户名/手机/邮箱！')
          return false
        } else if (!this.pwd) {
          alert('请输入密码')
          return false
        } else if (!this.captcha) {
          alert('请输入验证码')
          return false
        }
        // 账号 密码登陆(加密)
        const result = await getLoginPwd(this.user_name, this.pwd, this.captcha)
        console.log(result)
        // 判断
        if (result.success_code === 200) { // 登陆成功
          this.userInfo = result.message
          window.localStorage.setItem('loginType', 'true')
        } else {
          this.getCaptcha() // 重新获取验证码
          this.userInfo = {
            msessage: '登陆失败，手机号或验证码不正确！'
          }
        }
      }
      if (!this.userInfo.id) {
        console.log('提示:' + this.userInfo.msessage)
      } else { // 登陆成功
        // 同步数据
        this.syncUserInfo(this.userInfo)
        if (this.$route.query.redirect) {
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          this.$router.replace({
            path: '/home'
          })
        }
        // 返回登陆之前页面
        // this.$router.back()
      }
    },
    back () {
      this.$router.go(-1)
    },
    showPopup (refId) {
      const component = this.$refs[refId]
      component.show()
      setTimeout(() => {
        component.hide()
      }, 2000)
    },
    ...mapActions(['syncUserInfo'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
// @import "../../common/stylus/mixins.styl"
.login-container
  width 100%
  height 100%
  background #fff

  .login-inner
    padding-top 60px
    width 80%
    margin 0 auto

    .login-header
      .login-logo
        font-size 40px
        font-weight bold
        color mediumpurple
        text-align center

      .login-header-title
        padding-top 80px
        padding-bottom 20px
        text-align center

        > a
          color #333
          font-size 28px
          padding-bottom 8px

          &:first-child
            margin-right 80px

          &.current
            color mediumpurple
            font-weight 700
            border-bottom 4px solid mediumpurple

    .login-content
      > form
        > div
          display none

          &.current
            display block

          input
            width 100%
            height 100%
            padding-left 16px
            box-sizing border-box
            border 1PX solid #ddd
            border-radius 8px
            outline 0
            font 400 24px Arial

            &:focus
              border 1PX solid mediumpurple

          .login-message
            position relative
            margin-top 32px
            height 96px
            font-size 28px
            background #fff

            .get-verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent

              &.phone_right
                color purple

          .login-verification
            position relative
            margin-top 32px
            height 96px
            font-size 28px
            background #fff

            .switch-show
              position absolute
              right 20px
              top 24px

              img
                display none

              img.on
                display block

          .login-hint
            margin-top 24px
            color #999
            font-size 24px
            line-height 40px

            > a
              color mediumpurple

        .login-submit
          display block
          width 100%
          height 84px
          margin-top 60px
          border-radius 8px
          background mediumpurple
          color #fff
          text-align center
          font-size 32px
          line-height 84px
          border 0

      .login-back
        display block
        width 100%
        height 84px
        margin-top 30px
        border-radius 8px
        background transparent
        border: 1PX solid mediumpurple
        color mediumpurple
        text-align center
        font-size 21px
        line-height 84px
  .popup-wrap
    background rgba(0,0,0,0.7)
    color white
    padding 30px
    border-radius 8px
    font-size 30px
</style>

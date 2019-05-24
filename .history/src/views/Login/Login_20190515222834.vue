<template>
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
          <a href="javascript:;" class="loginMode">短信登录</a>
          <a href="javascript:;" class="loginMode">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--手机验证码登录部分-->
          <div class="loginMode current" >
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <!-- <button
                class="get-verification"
                v-if="!countDown"
              >
                获取验证码
              </button>
              <button
                v-else
                disabled="disabled"
                class="get-verification"
              >
                已发送({{countDown}}s) -->
              <!-- </button> -->
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login-hint">
              温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div class="loginMode">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名">
              </section>
              <section class="login-verification">
                <input type="password" maxlength="20" placeholder="密码">
                <input type="text" maxlength="20" placeholder="密码" >
                <div class="switch-show">
                  <img  class="pwdMode" src="./images/hide_pwd.png" alt="" width="20">
                  <img  class="pwdMode" src="./images/show_pwd.png" alt="" width="20">
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="4" placeholder="验证码">
                <img
                  class="get-verification"
                  src="http://localhost:1688/api/captcha"
                  alt="captcha"
                  ref="captcha"
                >
              </section>
            </section>
          </div>
          <button class="login-submit" >登录</button>
        </form>
        <button class="login-back" @click="back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
// import {getPhoneCode, phoneCodeLogin, pwdLogin} from './../../api/index'
export default {
  data () {
    return {
    }
  },
  computed: {
    // phoneRight() {
    //   return /^1[34578]\d{9}$/.test(this.phone);
    // }
  },
  methods: {
    // ...mapActions(['syncUserInfo']),
    // 1. 处理登录的方式
    // dealLoginMode(flag) {
    //   this.loginMode = flag;
    // },
    back () {
      this.$router.go(-1)
    }
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
              border 1px solid mediumpurple

          .login-message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
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
            margin-top 16px
            height 48px
            font-size 14px
            background #fff

            .switch-show
              position absolute
              right 10px
              top 12px

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
</style>

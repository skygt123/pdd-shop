<template>
  <div class="user-detail">
    <div class="user-detail-top">基本信息</div>
    <div class="user-detail-group">
      <div class="user-icon">
        <span>头像</span>
        <img src="./images/me_icon.png" />
      </div>
      <div class="user-icon">
        <span>手机</span>
        <span>188****8888</span>
      </div>
      <div class="user-icon">
        <span>性别</span>
        <span>未知</span>
      </div>
      <div class="user-icon">
        <span>常住地</span>
        <span>未填写</span>
      </div>
      <div class="user-icon">
        <span>生日</span>
        <span>未填写</span>
      </div>
      <div class="user-icon">
        <span>个性签名</span>
        <span>未填写</span>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.user-detail
  width 100%
  height 100%
  .user-detail-top
    width 100%
    height 60PX
    line-height 60PX
    padding-left 10PX
    font-weight bold
  .user-detail-group
    .user-icon
      height 60px
      padding  0 10PX
      background #ffffff
      border-bottom 1px solid #e0e0e0
      display flex
      justify-content space-between
      align-items center
      img
        width 50PX
        border-raduis 50%
    .user-item
      height 40PX
      padding 0 10PX
      background #ffffff
      border-bottom 1px solid #e0e0e0
      display flex
      justify-content space-between
      align-items center
      input
        border none
        outline none
        text-align right
      button
        width 90%
        height 40PX
        line-height 40PX
        background #e9232c
        text-align center
    .right-title-color
      color #999
      font-size 14PX
</style>

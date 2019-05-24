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
</style>

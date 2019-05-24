<template>
  <div class="bottom-tab">
    <span class="tab-item">
        <img src="../../assets/logo.png">
        <span>首页</span>
    </span>
    <span class="tab-item">
        <img src="../../assets/logo.png">
        <span>推荐</span>
    </span>
    <span class="tab-item">
        <img src="../../assets/logo.png">
        <span>搜索</span>
    </span>
    <span class="tab-item">
        <img src="../../assets/logo.png">
        <span>聊天</span>
    </span>
    <span class="tab-item">
        <img src="../../assets/logo.png">
        <span>个人中心</span>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
  .bottom-tab
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    background red
    display flex
    z-index 999
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 14px
      img
        width 35%
        margin-bottom 2px
</style>

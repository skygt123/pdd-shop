<template>
  <div class="search-nav">
    <div class="search-input">
      <img src="../../static/images/search.png" width="50" />
      <input type="search" />
    </div>
    <button>取消</button>
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
.search-nav
  width 100%
  height 100px
  background #ffffff
  position fixed
  top 0
  left 0
  display flex
  justify-content center
  align-items center
  border-bottom 1PX solid #ccc
  .seach-nav-icon
    width 90%
    height 70%
    background #e8e8e8
    border-radius 16px
    display flex
    justify-content center
    align-items center
    img
      width 50px
    span
      color #aaa
      margin-left 6px
      font-size 36px
      font-weight lighter
</style>

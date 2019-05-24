<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../../static/images/search.png" width="40" />
        <input ref="mySearch" type="search" placeholder="商品名称" />
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    isShowSearchPanel: Function
  },
  mounted () {
    this.$refs.mySearch.focus()
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.search-panel
  width  100%
  height 100%
  background #ffffff
  position fixed
  left 0
  top 0
  z-index 1000
  .search-nav
    width 100%
    height 100px
    display flex
    border-bottom 1PX solid #ccc
    flex-direction row
    justify-content space-between
    align-items center
    .search-input
      display flex
      flex-direction row
      justify-content center
      align-items center
      width 85%
      height 76px
      border-radius 20px
      padding 0 20px
      input
        width 90%
        height 90%
        padding-left 10px
        background transparent
        outline none
    button
      background transparent
      font-size 30px
      color #cccccc
</style>

<template>
  <div class="search-nav">
    <a href="" class="seach-nav-icon" @click.prevent="isShowSearchPanel(true)">
      <img src="../../static/images/search.png" />
      <span>商品名称</span>
    </a>
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

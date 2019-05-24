<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../../static/images/search.png" />
        <input ref="mySearch" type="search" placeholder="商品名称" />
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../../static/images/hot.png" alt="" />
        <span>热门搜索</span>
      </div>
      <ul class="search-list">
        <li>抽脂批发</li>
        <li>预警科创</li>
        <li>小白鞋增高七点</li>
      </ul>
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
    height 50px
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
      height 38px
      border-radius 10px
      padding 0 10px
      img
        width 20px
      input
        width 90%
        height 90%
        padding-left 5px
        background transparent
        outline none
        font-size 16px
    button
      background transparent
      font-size 16px
      color #cccccc
      border none
      width 50px
  .search-content
    padding 30px 15px
    .title
      display flex
      flex-direction row
      align-content center
      align-items center
      color #aaaaaa
      margin-bottom 10px
      img
        width 20px
        height 20px
      span
        font-size 14px
    .search-list
      display flex
      flex-direction row
      flex-wrap wrap
      li
        background #ededed
        color #aaa
        margin 5px 10px
        padding 5px
        border-radius 5px
        font-weight lighter
        font-size 14px
</style>

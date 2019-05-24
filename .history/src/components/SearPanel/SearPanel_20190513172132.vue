<template>
 <div class="search-panel">
   <div class="search-input">
      <img src="../../static/images/search.png" width="50" />
      <input type="search" placeholder="商品名称" />
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
.search-panel
  width  100%
  height 100%
  background #ffffff
  position fixed
  left 0
  top 0
  z-index 1000
</style>

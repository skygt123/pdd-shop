<template>
  <div class="search-nav">
    <div class="search-input">
    <img src="../../static/images/search.png" />
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
.search-panel
  width  100%
  height 100%
  background #ffffff
  position fixed
  left 0
  top 0
  z-index 1000
</style>

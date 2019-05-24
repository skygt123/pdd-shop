<template>
  <div id="app">
    <router-view/>
    <tabBar></tabBar>
  </div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  data () {
    return {

    }
  },
  components: {
    TabBar
  }
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
.shop
  .cube-scroll-nav-bar-item
    font-weight lighter
    color #666
    font-size 30px
    width 160px
    &.cube-scroll-nav-bar-item_active
      color red
  .cube-scroll-nav-panel-title
    display flex
    font-size 30px
    padding 0 10PX
    height 88px
    align-items center
    justify-content space-between
</style>

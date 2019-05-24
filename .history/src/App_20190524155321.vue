<template>
  <div id="app">
    <router-view/>
    <tabBar v-show="$route.meta.showBottomTabBar"></tabBar>
  </div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
  },
  components: {
    TabBar
  }
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
html,body,#app
  height 100%
  width 100%
  .shop
    .cube-sticky-fixed
      .cube-scroll-nav-bar-item
        font-weight lighter
        color #666
        font-size 30px
        // width 160px
        &.cube-scroll-nav-bar-item_active
          color red
      .cube-scroll-nav-panel-title
        display flex
        font-size 30px
        padding 0 10PX
        align-items center
        justify-content space-between
    .cube-scroll-wrapper
      .cube-sticky-content
        .cube-scroll-nav-panel-title
          background red
</style>

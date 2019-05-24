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
</style>

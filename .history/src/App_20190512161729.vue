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
  .cube-scroll-nav-panel-title
    font-size 30px
</style>

<template>
  <div id="app">
    <router-view/>
    <tabBar></tabBar>
  </div>
</template>
<script>
  import TabBar from "componets/TabBar/TabBar";
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
<style lang="stylus">
</style>



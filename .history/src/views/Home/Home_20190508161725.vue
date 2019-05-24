<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import CubePage from 'components/cube-page.vue'
export default {
  data () {
    return {
     
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .home
    background #f5f5f5
    width 100%
    height 100%
    .fix
      position fixed
      left 0
      top 0
      z-index 998
</style>

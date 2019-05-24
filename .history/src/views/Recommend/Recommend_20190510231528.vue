<template>
  <div class="recommend-wrap">
    <ul class="recommend">
      <li class="recommend-item">
        <img src="" />>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('reqRecommendShopLis') // 请求推荐数据
  },
  computed: {
    ...mapState(['recommendshoplist'])
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
.recommend-wrap
  background #f5f5f5
  width 100%
  height 100%
</style>

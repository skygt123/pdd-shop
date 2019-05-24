<template>
  <div class="recommend-wrap">
    <ul class="recommend" v-if="recommendshoplist.length > 0">
      <list
        v-for="(item,index) in recommendshoplist"
        :item="item"
        :key="index"
        tag="li"
      >
        <template slot="button">
          <button class="item-button">找相关</button>
          <!-- // -->
        </template>
      </list>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Bscroll from 'better-scroll'
import List from 'components/List/List'
export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('reqRecommendShopLis') // 请求推荐数据
    // console.log(this.$store.state.recommendshoplist)
    this._inintBScroll()
  },
  mouths: {
    _inintBScroll () {
      // this.listScroll = new Bscroll('.recommend-wrap', {
      //   scrolly: true,
      //   click: true,
      //   probeType: 3
      // })
      console.log(1)
    }
  },
  computed: {
    ...mapState(['recommendshoplist'])
  },
  watch: {
    recommendshoplist () {
      // this.$nextTick(() => {
      //   this._inintBScroll() // 初始化Scroll
      // })
    }
  },
  components: {
    List
  }
}
</script>
<style lang="stylus" scoped>
.recommend-wrap
  background #f5f5f5
  width 100%
  height 100%
  overflow hidden
  .recommend
    display flex
    flex-direction row
    flex-wrap wrap
    margin-bottom 100px
</style>

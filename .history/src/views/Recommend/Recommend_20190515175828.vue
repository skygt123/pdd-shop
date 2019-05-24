<template>
  <div>
    <div class="loading-wrap" v-if="flag">
      <div class="loading">
        <cube-loading :size="40"></cube-loading>
        <p class="loading-title">数据加载中...</p>
      </div>
    </div>
    <div class="recommend-wrap" v-if="recommendshoplist.length > 0">
      <ul class="recommend" >
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
import List from 'components/List/List'
export default {
  data () {
    return {
      page: 1,
      count: 6,
      flag: true
    }
  },
  mounted () {
    // 请求推荐数据
    this.$store.dispatch('reqRecommendShopLis', {
      page: this.page,
      count: this.count
    }).then(() => {
      this.flag = false // 关闭加载提示
    })
    // console.log(this.$store.state.recommendshoplist)
  },
  methods: {
    _inintBScroll () {
      this.listScroll = new Bscroll('.recommend-wrap', {
        scrolly: true,
        click: true,
        probeType: 3
      })
      // 监听列表滚动
      this.listScroll.on('touchEnd', (pos) => {
      // 监听上拉
        if (pos.y >= 50) {
          console.log('上拉加载')
        }
        // console.log(pos.y)
        // console.log(this.listScroll.maxScrollY)
        if (this.listScroll.maxScrollY > pos.y + 20) {
          // console.log('下拉加载')
          console.log('加载页数：' + this.page)
          this.$store.dispatch('reqRecommendShopLis', {
            page: this.page,
            count: this.count
          }).then(() => {
            this.flag = false // 关闭加载提示
          })
        }
        // 监听下拉
      })
      // 监听列表滚动结束
      this.listScroll.on('scrollEnd', () => {
        this.listScroll.refresh()
      })
    }
  },
  computed: {
    ...mapState(['recommendshoplist'])
  },
  watch: {
    recommendshoplist () {
      this.$nextTick(() => {
        // 当前页面加1
        this.page += 1
        this._inintBScroll() // 初始化Scroll
      })
    }
  },
  components: {
    List
  }
}
</script>
<style lang="stylus" scoped>
.loading-wrap
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 2
  display flex
  justify-content center
  align-items center
  .loading
    justify-content center
    align-items center
    padding 30px
    background rgba(0,0,0,0.7)
    .loading-title
      color: white
      font-size 30px
      padding-top 20px
    .cube-loading
      display flex
      justify-content center
      align-items center
      .cube-loading-spinners
        color white
.recommend-wrap
  background #f5f5f5
  width 100%
  height 100%
  overflow hidden
  position absolute
  top 0
  left 0
  .recommend
    display flex
    flex-direction row
    flex-wrap wrap
    padding-bottom 100px
</style>

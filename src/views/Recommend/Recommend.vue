<template>
  <div>
    <div class="recommend-wrap">
      <cube-scroll
        ref="scroll"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        :data="recommendshoplist"
        v-if="recommendshoplist.length"
      >
        <ul class="recommend">
          <list
            v-for="(item,index) in recommendshoplist"
            :item="item"
            :key="index"
            tag="li"
            @click.native="forGoodsDetail(item.goods_id)"
          >
            <!-- :clickCellItem="clickCellItemDetial" -->
            <template slot="button">
              <button class="item-button">找相关</button>
            </template>
          </list>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import List from 'components/List/List'
export default {
  data () {
    return {
      page: 1,
      count: 6,
      flag: false,
      listLength: 0,
      pullUpLoad: true,
      options: {
        pullUpLoad: {
          threshold: 100,
          txt: {
            more: '上拉加载更多',
            noMore: '没有更多数据了...'
          }
        }
      }
      // options: {
      //   pullDownRefresh: {
      //     threshold: 90,
      //     stop: 40,
      //     txt: '刷新成功'
      //   }, // 配置下拉刷新
      //   pullUpLoad: {
      //     threshold: 0,
      //     txt: {
      //       more: '上拉加载更多',
      //       noMore: '没有更多数据'
      //     }
      //   } // 配置上拉加载，若要关闭可直接 pullUpLoad：false
      // }

    }
  },
  mounted () {
    // 请求推荐数据
    this.$store.dispatch('reqRecommendShopLis', {
      page: this.page,
      count: this.count
    }).then(() => {
      // 当前页面加1
      // this.page += 1
      // this.listLength = this.recommendshoplist.length
    })
    // console.log(this.$store.state.recommendshoplist)
  },
  methods: {
    onPullingDown () {
      // 模拟更新数据
      console.log('ssss')
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          // this.items.unshift(_foods[1])
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp () {
      // 模拟更新数据
      console.log('xxx')
      this.page += 1
      this.$store.dispatch('reqRecommendShopLis', {
        page: this.page,
        count: this.count
      }).then(() => {
        // if (this.recommendshoplist.length) {
        //   this.$refs.scroll.forceUpdate()
        // }

      })
      // console.log(this.recommendshoplist.length)
      // console.log(this.listLength)
      if (this.listLength >= this.recommendshoplist.length) {
        console.log(this.recommendshoplist.length <= this.listLength)
        this.$refs.scroll.forceUpdate()
        // this.listLength -= this.count
      } else {
        this.listLength += this.count
      }
    },
    forGoodsDetail (goodsId) {
      // console.log(goodsId)
      this.$router.push({
        path: '/shopdetail',
        query: {
          goodsId: goodsId
        }
      })
    }

  },
  computed: {
    // options () {
    //   return {
    //     pullDownRefresh: this.pullDownRefreshObj,
    //     pullUpLoad: this.pullUpLoadObj,
    //     scrollbar: true
    //   }
    // },
    ...mapState(['recommendshoplist'])
  },
  watch: {
    // recommendshoplist () {
    //   this.$nextTick(() => {
    //     this.$refs.scroll.initScroll()
    //   })
    // }
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
    padding 15px
    background rgba(0, 0, 0, 0.7)
    .loading-title
      color white
      font-size 15px
      padding-top 10px
    .cube-loading
      display flex
      justify-content center
      align-items center
      .cube-loading-spinners
        color white
.recommend-wrap
  background #f5f5f5
  width 100%
  overflow hidden
  position absolute
  top 0
  left 0
  bottom 55px
  .recommend
    display flex
    flex-direction row
    flex-wrap wrap
  >>> .cube-pullup-wrapper
    font-size 14px
    .before-trigger
      // padding 10px 0
      // min-height 0px
</style>

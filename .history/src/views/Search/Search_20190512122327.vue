<template>
  <div class="search">
    <div class="search-nav">
      <a href="" class="seach-nav-icon">
        <img src="../../static/images/search.png" />
        <span>商品名称</span>
      </a>
    </div>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item current">
            <span>女装</span>
          </li>
           <li class="menu-item">
            <span>鞋包</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul>
          <li class="shops-li">
            <div class="shops-title">
              <h4>标题</h4>
              <a> 查看更多></a>
            </div>
            <ul class="shops-items">
              <li class="">
                <img src="../../static/images/hot.png" />
                <span>女装</span>
              </li>
              <li class="">
                <img src="../../static/images/hot.png" />
                <span>女装</span>
              </li>
              <li class="">
                <img src="../../static/images/hot.png" />
                <span>女装</span>
              </li>
              <li class="">
                <img src="../../static/images/hot.png" />
                <span>女装</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
    }
  },
  created () {
    // this.$store.dispatch('getListAction')  //调用vuex 中的 getListAction异步方法
    this.$store.dispatch('reqSearchGoods').then(() => {
      console.log(this.indexRequestData)
    })
    // 请求搜索数据
    this.nextTick(function () {
      console.log(this.searchgoods)
    })
  },
  mounted () {
    // this.goodlist = this.$store.state.searchgoods
    // const dd = this.$store.state.searchgoods
    // console.log('dd:' + dd)
    // console.log('goods:' + this.$store.state.goods)
    // console.log('dd1:' + this.$store.state.searchgoods)
    // console.log('dd2:' + this.searchgoods)
  },
  methods: {
    changeHandler (label) {
      // console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      // console.log('sticky-change', current)
    }
  },
  computed: {
    // ...mapState(['searchgoods'])
    ...mapState({
      searchgoods: state => state.searchgoods
    })
  },
  components: {
    // HelloWorld
  }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width 100%
  height 100%
  background #f5f5f5
  overflow hidden
  .search-nav
    width 100%
    height 100px
    background #ffffff
    position fixed
    top 0
    left 0
    display flex
    justify-content center
    align-items center
    border-bottom 1PX solid #ccc
    .seach-nav-icon
      width 90%
      height 70%
      background #e8e8e8
      border-radius 16px
      display flex
      justify-content center
      align-items center
      img
        width 50px
      span
        color #aaa
        margin-left 6px
        font-size 36px
        font-weight lighter
  .shop
    display flex
    position absolute
    top 100px
    bottom 100px
    width 100%
    background pink
    overflow hidden
    .menu-wrapper
      width 160px
      background #e0e0e0
      .menu-item
        width 100%
        height 120px
        background #fafafa
        display flex
        justify-content center
        align-items center
        font-weight lighter
        color #666
        position relative
        font-size 30px
      .current
        color #e02e24
      .current::before
        content ''
        background #e02e24
        width 8px
        height 120px
        position absolute
        left 0
        top 0
    .shop-wrapper
      background #ffffff
      flex 1
      .shops-title
        display flex
        flex-direction row
        padding 0 10PX
        height 88px
        align-items center
        justify-content space-between
        color #999
        font-size 30px
        a
          text-decoration none
          font-weight lighter
      .shops-items
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          width 33.3%
          height 180px
          justify-content center
          align-items center
          font-size 28px
          color #666
          font-weight lighter
          img
            width 60%
            height 60%
            margin-bottom 10px
</style>

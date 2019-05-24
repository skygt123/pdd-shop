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
          <li class="menu-item" v-for="(goods,index) in searchgoods" :key="index">
            <!-- current -->
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul ref="shopParent">
          <li class="shops-li" v-for="(goods,index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a> 查看更多></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone,index) in goods.category" :key="index">
                <img :src="phone.icon" />
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item,index2) in goods.items" :key="index2">
                <img :src="item.icon" />
                <span>{{item.title}}</span>
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
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  data () {
    return {
      scrolly: 0, // right Y坐标
      rightLiTops: [] // 所有分类头部位置
    }
  },
  created () {
    this.$store.dispatch('reqSearchGoods').then(() => {
      // console.log(this.searchgoods)
    })
  },
  mounted () {

  },
  methods: {
    _initScroll () {
      let leftScroll = new Bscroll('.menu-wrapper', {
        scrolly: true,
        click: true
      })
      let rightScroll = new Bscroll('.shop-wrapper', {
        scrolly: true,
        click: true
      })
      return { leftScroll, rightScroll }
    },
    _initRightLiTop () {
      const tempArr = [] // 临时数组
      let top = 0
      tempArr.push(top)
      let allLis = this.$refs.shopParent.getElementsByClassName('shops-li') // 遍历li标签 取得高度
      Array.prototype.slice.call(allLis).forEach(li => {
        top += li.clientHeight
        // console.log(top)
        tempArr.push(top)
      })
      this.rightLiTops = tempArr
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
  },
  watch: {
    searchgoods () {
      this.$nextTick(() => {
        this._initScroll() // 初始化Scroll
        this._initRightLiTop() // 右边所有头部位置
      })
    }
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
      .phone-type
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        border-bottom 1PX solid #f1efef
        li
          width 33.3%
          display flex
          justify-content center
          align-items center
          margin 5PX 0
          img
            width 80%
</style>

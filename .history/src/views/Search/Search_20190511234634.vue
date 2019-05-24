<template>
  <div class="search">
    <div class="search-nav">
      <a href="" class="seach-nav-icon">
        <img src="../../static/images/search.png" />
        <span>商品名称</span>
      </a>
    </div>
    <div class="shop">
      <cube-scroll-nav
        :side="true"
        :data="data"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <cube-scroll-nav-panel
          v-for="item in data"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
            <li v-for="(food,index) in item.foods" :key="index">
              <div>
                <img :src="food.icon">
                <p>{{food.name}}</p>
                <!-- <div>{{this.$store.state.searchgoods}}</div> -->
                <div>dd:{{$store.state.goods}}</div>
                <div>goods:{{$store.state.goods}}</div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import goodsData from './goods-list.json'
const goods = goodsData.goods
export default {
  name: 'Search',
  data () {
    return {
      data: goods,
      current: goods[0].name,
      goodlist: {}
    }
  },
  created () {
    // this.$store.dispatch('getListAction')  //调用vuex 中的 getListAction异步方法
    // this.$store.dispatch('reqSearchGoods') // 请求搜索数据
  },
  mounted () {
    // this.goodlist = this.$store.state.searchgoods
    const dd = this.$store.state.searchgoods
    console.log('dd:' + dd)
    console.log('goods:' + this.$store.state.goods)
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
    // ...mapState({
    //   searchgoods: state => state.searchgoods
    // })
  },
  components: {
    // HelloWorld
  }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width 100%
  height 60px
  background #f5f5f5
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
    .menu-wrap
      width 80px
      background red
</style>

<template>
  <div class="search">
    <div class="search-nav">
      <a href="" class="seach-nav-icon">
        <img src="../../static/images/search.png" />
        <span>商品名称</span>
      </a>
    </div>
    <div class="shop" >
      <!-- v-if="searchgoods.length > 0" -->
      <cube-scroll-nav
        :side="true"
        :data="goodlist"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <!-- :current="searchgoods[0].name" -->
        <cube-scroll-nav-panel
          v-for="item in goodlist"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul class="shops-items">
            <li v-for="(shoplist,index) in item.items" :key="index" style="border-bottom: 2PX solid red">
              <img :src="shoplist.icon">
              <p>{{shoplist.title}}</p>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      // data: searchgoods
      current: '',
      goodlist: []
    }
  },
  created () {
    // this.$store.dispatch('getListAction')  //调用vuex 中的 getListAction异步方法
    // 请求搜索数据
    this.$store.dispatch('reqSearchGoods').then(() => {
      this.goodlist = this.searchgoods
      this.current = this.searchgoods[0].name
      // console.log(this.searchgoods)
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
    // .cube-sticky-content
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

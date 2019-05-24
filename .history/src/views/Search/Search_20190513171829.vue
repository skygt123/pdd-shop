<template>
  <div class="search">
    <searNav></searNav>

    <searPanel v-if="isShow"></searPanel>

    <div class="shop" >
      <!-- v-if="searchgoods.length > 0" -->
      <cube-scroll-nav
        :side="true"
        :data="goodlist"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <!-- :current="searchgoods[0].name" -->
        <!-- </cube-scroll-nav-bar> -->
          <!-- <ul class="prepend-header" slot="prepend">
            <li>11</li>
            <li>22</li>
            <li>333</li>
          </ul> -->
        <cube-scroll-nav-panel
          v-for="item in goodlist"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul class="shops-items">
            <li v-for="(shoplist,index) in item.items" :key="index">
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
import SearNav from 'components/SearNav/SearNav'
import SearPanel from 'components/SearPanel/SearPanel'
export default {
  name: 'Search',
  data () {
    return {
      // data: searchgoods
      current: '',
      goodlist: [],
      isShow: false
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
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    }
  },
  computed: {
    // ...mapState(['searchgoods'])
    ...mapState({
      searchgoods: state => state.searchgoods
    })
  },
  components: {
    SearNav,
    SearPanel
  }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width 100%
  height 60px
  background #f5f5f5
  .shop
    display flex
    position absolute
    top 100px
    bottom 100px
    width 100%
    background #ffffff
    // .cube-sticky-content
    .cube-scroll-nav-panel-title
      font-size 28px
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

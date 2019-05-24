<template>
  <div class="hot">
    <div class="hot-slide">
      <cube-slide ref="slide"
        @change="changePage"
        :loop="true"
        :auto-play="true"
        v-if="homecasual.length > 0"
      >
        <cube-slide-item v-for="(item, index) in homecasual" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.imgurl">
          </a>
        </cube-slide-item>
          <template slot="dots" slot-scope="props">
          <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span>
        </template>
      </cube-slide>
    </div>
    <HotNav></HotNav>

    <div class="hot-ad">
      <img src="../imgs/hot_ad/home_ad.gif" />
    </div>

    <shopList :lists="homeshoplist"></shopList>
  </div>
</template>

<script>
import HotNav from 'components/Children/Hot/HotNav'
import ShopList from 'components/ShopList/ShopList'
import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  mounted () {
    // this.reqHomeCasual() // 第二种方式mapActions
    this.$store.dispatch('reqHomeCasual') // 请求轮播数据
    this.$store.dispatch('reqHomeShopList') // 请求轮播数据
    console.log(mapState(['homecasual']))
  },
  methods: {
    changePage (current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      // console.log(item, index)
    }
    // ...mapActions(['reqHomeCasual']) // 第二种方式mapActions
  },
  computed: {
    ...mapState(['homecasual', 'homeshoplist'])
  },
  components: {
    HotNav,
    ShopList
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top: 94px
    .hot-slide
      height 275px
      .cube-slide
        background red
        .cube-slide-item
          width 100%
          height 275px
          img
            width 100%
            height 100%
        .cube-slide-dots
          background green
          position absolute
          bottom 10PX
          .my-dot
            width 20px
            height 20px
            border-radius 50%
            margin 5PX 3PX
            &.active
              background red
    .hot-ad
      background #ffffff
      margin 8PX 0
      padding 5PX
      img
        width 100%
</style>

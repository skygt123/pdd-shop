<template>
  <div class="hot" v>
    <cube-slide ref="slide"
      :data="items"
      @change="changePage"
      :loop="true"
      :auto-play="true"
    >
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
        <template slot="dots" slot-scope="props">
        <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span>
      </template>
    </cube-slide>

    <HotNav></HotNav>
    <div class="hot-ad">
      <img src="../imgs/hot_ad/home_ad.gif" />
    </div>
  </div>
</template>

<script>
import HotNav from 'components/Children/Hot/HotNav'
export default {
  data () {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        }, {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        }, {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  methods: {
    changePage (current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      // console.log(item, index)
    }
  },
  components: {
    HotNav
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top: 94px
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
      
</style>

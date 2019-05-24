<template>
  <div class="home">
    <cube-page type="tab-composite-view" title="tab-composite">
      <div slot="content">
        <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
        <div class="tab-slide-container">
          
          <div style="height:1000px">1111111111</div>
          <!-- <router-view></router-view> -->
        </div>
      </div>
    </cube-page>
  </div>
</template>

<script type="text/ecmascript-6">
import CubePage from 'components/cube-page.vue'
export default {
  data () {
    return {
      selectedLabel: '热门',
      disabled: false,
      tabLabels: [{
        label: '热门'
      }, {
        label: '服饰'
      }, {
        label: '鞋包'
      }, {
        label: '母婴'
      }, {
        label: '百货'
      }, {
        label: '百货一'
      }, {
        label: '百货二'
      }, {
        label: '百货三'
      }, {
        label: '百货四'
      }, {
        label: '百货五'
      }, {
        label: '百货六'
      }, {
        label: '百货七'
      }, {
        label: '百货八'
      } ]
    }
  },
  methods: {
    changeHandler (cur) {
      // this.current = cur
      console.log('当前轮播图序号为:' + cur)
    },
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
      console.log(current)
    },
    clickHandler (current) {
      // if you clicked home tab, then print 'Home'
      console.log(current)
    },

  },
  computed: {
   
  },
  components: {
    CubePage
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /* 覆盖样式 */
  .cube-page
    &.tab-composite-view
      > .wrapper
        > .content
          margin: 0
  .tab-composite-view
    .cube-tab-bar
      background-color: white
    .cube-tab
      font-size 30px
      height 74px
      line-height 74px
      padding 0
      &.cube-tab_active
        coler: rgb(233, 35, 44)
    .cube-tab-bar-slider
      background-color: rgb(233, 35, 44)
      height 2PX
    .tab-slide-container
      position: fixed
      top: 74px
      left: 0
      right: 0
      bottom: 0
    .list-wrapper
      overflow: hidden
      // li
      //   padding: 15px 10px
      //   margin-top: 10px
      //   text-align: left
      //   background-color: white
      //   font-size: 14px
      //   color: #999
      //   white-space: normal
      //   .line-height
      //     line-height: 1.5
      //   .is-black
      //     color: black
      //   .is-grey
      //     color: #999
      //   .is-bold
      //     font-weight: bold
      //   .top
      //     display: flex
      //     .avatar
      //       width: 15px
      //       height: 15px
      //       margin-right: 2px
      //       border-radius: 100%
      //     .time
      //       flex: 1
      //   .middle
      //     display: flex
      //     margin: 10px 0
      //     color: black
      //   .hot-title
      //     display: flex
      //     align-items: center
      //     font-size: 12px
      //     .hot-sequence
      //       display: inline-block
      //       margin-right: 2px
      //       padding: 3px 6px
      //       border-radius: 2px
      //       background-color: darkgoldenrod
      //       color: white
      //   .hot-content
      //     margin-top: 15px
</style>

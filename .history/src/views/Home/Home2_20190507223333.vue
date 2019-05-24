<template>
  <div class="home">
    <cube-page type="tab-composite-view" title="tab-composite">
    <div slot="content">
      <!-- <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    @click="clickHandler"
                    :data="tabLabels">
      </cube-tab-bar> -->
      <!-- <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
        <cube-slide-item v-for="(tabLabel, index) in tabLabels" :key="index" @click.native="clickHandlerTop(item, index)" style="background:red;">
          2{{tabLabel.label}}
        </cube-slide-item>
      </cube-slide> -->

      <cube-slide 
        :loop="loop" 
        :auto-play="autoPlay"
        ref="slide" 
        :data="tabLabels" 
        @change="changePageTop"
      >
        <cube-slide-item v-for="(tabLabel, index) in tabLabels" :key="index" @click.native="clickHandlerTop(item, index)" style="background:red;">
          {{tabLabel.label}}
        </cube-slide-item>
      </cube-slide>
      
      <div class="tab-slide-container">
        <!-- <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <cube-slide-item v-for="(tabLabel, index) in tabLabels" :key="index" @click.native="clickHandler(item, index)">
            <cube-scroll  :options="scrollOptions">
              <ul class="list-wrapper">
                <li class="list-item">
                  <div class="top is-black is-bold line-height">
                     222222222222
                    {{tabLabel.label}}
                  </div>
                  <div>111</div>
                </li>
              </ul>
             
            </cube-scroll> 
          </cube-slide-item>
        </cube-slide> -->
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
        }
        , {
          label: '百货'
        }
        , {
          label: '百货一'
        }
        , {
          label: '百货二'
        }
        , {
          label: '百货三'
        }
        ],
        loop: false,
        autoPlay: false,
        showDots: false,
        slideOptions: {
          listenScroll: true,
          probeType: 3,
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        // followersData: FOLLOWERS_DATA,
        // recommendData: RECOMMEND_DATA,
        // hotData: HOT_DATA
      }
    },
    methods: {
      changePageTop(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandlerTop(item, index) {
      console.log(item, index)
    },

      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        console.log(current)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      },
      clickHandler (current) {
        // if you clicked home tab, then print 'Home'
        console.log(current)
      },
      findIndex(ary, fn) {
        if (ary.findIndex) {
          return ary.findIndex(fn)
        }
        /* istanbul ignore next */
        let index = -1
        /* istanbul ignore next */
        ary.some(function (item, i, ary) {
          const ret = fn.call(this, item, i, ary)
          if (ret) {
            index = i
            return ret
          }
      })
      /* istanbul ignore next */
      return index
    }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = this.findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        console.log("index"+index)
        return index
      }
    },
    components: {
      CubePage
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /* 覆盖样式 */
  .side-container
    .cube-scroll-nav-bar-item
      width 100%


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
<template>
  <div class="home">
     <cube-page type="tab-composite-view" title="tab-composite">
    <div slot="content">
      <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 关注 -->
          <cube-slide-item>
            <cube-scroll :data="followersData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in followersData" class="list-item" :key="index">
                  <div class="top">
                    <img :src="item.avatar" class="avatar">
                    <span class="time">{{resolveTitle(item)}}</span>
                  </div>
                  <div class="middle is-bold line-height">{{item.question}}</div>
                  <div>{{resolveQuestionFollowers(item)}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- 推荐 -->
          <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div class="top is-black is-bold line-height">
                    {{item.question}}
                  </div>
                  <div class="middle is-grey line-height">{{item.content}}</div>
                  <div>{{resolveQuestionFollowers(item)}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <cube-slide-item>
            <cube-scroll :data="hotData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in hotData" class="list-item" :key="index">
                  <div class="hot-title">
                    <span class="hot-sequence">{{item.sequence}}</span>
                    <span></span>
                    {{item.label}}
                  </div>
                  <div class="hot-content is-bold is-black">{{item.question}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </cube-page>
      
  </div>
</template>

<script>
  // import CubePage from '../../components/cube-page.vue'
  // import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from '../../data/tab-bar'
  // import { findIndex } from '../../../src/common/helpers/util'
  export default {
    data () {
      return {
        selectedLabel: '推荐',
        disabled: false,
        tabLabels: [{
          label: '关注'
        }, {
          label: '推荐'
        }, {
          label: '热榜'
        }],
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
        followersData: FOLLOWERS_DATA,
        recommendData: RECOMMEND_DATA,
        hotData: HOT_DATA
      }
    },
    methods: {
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
      resolveTitle (item) {
        return `${item.name}关注了问题 · ${item.postTime} 小时前`
      },
      resolveQuestionFollowers (item) {
        return `${item.answers} 赞同 · ${item.followers} 评论`
      }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    },
    components: {
      CubePage
    }
  }
</script>

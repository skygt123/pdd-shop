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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

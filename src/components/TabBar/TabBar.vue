<template>
  <div class="bottom-tab">
    <span
      class="tab-item"
      @click="switchTo('/home')"
    >
      <img
        :src="$route.path.includes('/home') ? tabBarImgArr[0].selected : tabBarImgArr[0].normal"
        alt=""
      >
      <span :class="{on: $route.path.includes('/home')}">首页</span>
    </span>
    <span
      class="tab-item"
      @click="switchTo('/recommend')"
    >
      <img
        :src="$route.path.includes('/recommend') ? tabBarImgArr[1].selected : tabBarImgArr[1].normal"
        alt=""
      >
      <span :class="{on: $route.path.includes('/recommend')}">推荐</span>
    </span>
    <span
      class="tab-item"
      @click="switchTo('/search')"
    >
      <img
        :src="$route.path.includes('/search') ? tabBarImgArr[2].selected : tabBarImgArr[2].normal"
        alt=""
      >
      <span :class="{on:$route.path.includes('/search')}">搜索</span>
    </span>
    <span
      class="tab-item"
      @click="switchTo('/chat')"
    >
      <img
        :src="$route.path.includes('/chat') ? tabBarImgArr[3].selected : tabBarImgArr[3].normal"
        alt=""
      >
      <span :class="{on: $route.path.includes('/chat')}">购物车</span>
    </span>
    <span
      class="tab-item"
      @click="switchTo('/me')"
    >
      <img
        :src="$route.path.includes('/me') ? tabBarImgArr[4].selected : tabBarImgArr[4].normal"
        alt=""
      >
      <span :class="{on: $route.path.includes('/me')}">我的</span>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabBarImgArr: [
        { normal: require('./../../static/img/icon_home.png'), selected: require('./../../static/img/icon_home_selected.png') },
        { normal: require('./../../static/img/icon_intro.png'), selected: require('./../../static/img/icon_intro_selected.png') },
        { normal: require('./../../static/img/icon_search.png'), selected: require('./../../static/img/icon_search_selected.png') },
        { normal: require('./../../static/img/icon_chat.png'), selected: require('./../../static/img/icon_chat_selected.png') },
        { normal: require('./../../static/img/icon_mine.png'), selected: require('./../../static/img/icon_mine_selected.png') }
      ]
    }
  },
  methods: {
    switchTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom-tab
  position fixed
  bottom 0
  left 0
  width 100%
  height 54px
  border-top 1px solid #eee
  background #fff
  display flex
  z-index 999
  .tab-item
    display flex
    flex 1
    flex-direction column
    align-items center
    justify-content center
    font-size 14px
    img
      width 35%
      margin-top 2px
      margin-bottom 5px
</style>

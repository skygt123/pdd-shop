<template>
  <div class="hot-nav">
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon01.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon02.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon03.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon04.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon05.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon06.gif" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon07.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon08.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon09.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon10.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon11.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon12.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon13.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon14.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon15.png" />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../Children/imgs/nav/nav_icon16.png" />
          <span>限时秒杀</span>
        </a>
      </div>
      <!--进度条-->
      <div class="hot-nav-bottom">
        <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 1. 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 2. 滚动内容的宽度
      scrollContentW: document.querySelector('.hot-nav-bottom'),
      //
      // 3. 滚动条背景的长度
      bgBarW: 200,
      // 4. 滚动条的长度
      barXWidth: 0,
      // 5. 起点
      startX: 0,
      // 6. 记录结束点
      endFlag: 0,
      // 7. 移动的距离
      barMoveWidth: 0
    }
  },
  mounted () {
    console.log(document.querySelector('.hot-nav-bottom').style.width)
    this.getBottomBarWidth()
    this.bindEvent()
  },
  methods: {
    // 获取滚动条的长度
    getBottomBarWidth () {
      const { bgBarW, screenW, scrollContentW } = this
      this.barXWidth = bgBarW * (screenW / scrollContentW)
    },
    bindEvent () {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false)
      this.$el.addEventListener('touchmove', this.handleTouchMove, false)
      this.$el.addEventListener('touchend', this.handleTouchEnd, false)
    },
    handleTouchStart (event) {
      console.log('kai')
      // console.log(event.touches);
      // 1. 获取第一个触点
      let touch = event.touches[0]
      // 2.求出起始点
      this.startX = Number(touch.pageX)
      // console.log(this.startX);
    },
    handleTouchMove () {
      // console.log('kai....')
      // 1. 获取第一个触点
      let touch = event.touches[0]
      // 2. 求出移动的距离
      let moveWidth = Number(touch.pageX) - this.startX
      // console.log(moveWidth);
      // 3. 求出滚动条走的距离
      this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag)
      // 4. 边界值处理
      if (this.barMoveWidth <= 0) { // 左边
        this.barMoveWidth = 0
      } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) { // 右边
        this.barMoveWidth = this.bgBarW - this.barXWidth
      }
    },
    handleTouchEnd () {
      // console.log('结束触摸')
      this.endFlag = this.barMoveWidth
    }
  },
  computed: {
    innerBarStyle () {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot-nav
  width 100%
  height 360px
  position relative
  background #fff
  padding-bottom 20px
  .hot-nav-content
    width 100%
    overflow-x scroll
    .nav-content-inner
      width 1440px
      height 360px
      display flex
      flex-wrap wrap
      .inner-item
        width 180px
        height 180px
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size 28px
        color #666666
        img
          width 40%
          margin-bottom 5PX
  .hot-nav-content::-webkit-scrollbar
      display none
  .hot-nav-bottom
    width 200px
    height 4px
    background-color #ccc
    position absolute
    left 50%
    margin-left -100px
    bottom 16px
    .hot-nav-bottom-inner
      position absolute
      left 0
      height 100%
      background-color orangered
      width 0
</style>

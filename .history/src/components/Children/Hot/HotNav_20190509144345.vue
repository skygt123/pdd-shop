<template>
 <div class="hot-nav">
   <div class="hot-nav-content">
     <div class="nav-content-inner">
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
       <a class="inner-item">
         <img src="./../../Children/imgs/nav/nav_icon01.png" />
         <span>限时秒杀</span>
       </a>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

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
    width 100px
    height 2px
    background-color #ccc
    position absolute
    left 50%
    margin-left -50px
    bottom 8px
    .hot-nav-bottom-inner
        position absolute
        left 0
        height 100%
        background-color orangered
        width 0        
</style>

<template>
  <div class="search">
    <div class="search-nav">
      <a href="" class="seach-nav-icon">
        <img src="../../static/images/search.png" />
        <span>商品名称</span>
      </a>
    </div>
    <div class="shop">
      <cube-scroll-nav
        :side="true"
        :data="data"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <ul class="prepend-header" slot="prepend">
          <li>11</li>
          <li>22</li>
          <li>333</li>
        </ul>
        <cube-scroll-nav-panel
          v-for="item in data"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
            <li v-for="(food,index) in item.foods" :key="index">
              <div>
                <img :src="food.icon">
                <p>{{food.name}}</p>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Search',
  data () {
    return {
      'goods': [
        {
          'name': '热销榜',
          'type': -1,
          'foods': [
            {
              'name': '皮蛋瘦肉粥',
              'icon': 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              'image': 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        }
      ],
      current: this.goods[0].name
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width 100%
  height 60px
  background #f5f5f5
  .search-nav
    width 100%
    height 100px
    background #ffffff
    position fixed
    top 0
    left 0
    display flex
    justify-content center
    align-items center
    border-bottom 1PX solid #ccc
    .seach-nav-icon
      width 90%
      height 70%
      background #e8e8e8
      border-radius 16px
      display flex
      justify-content center
      align-items center
      img
        width 50px
      span
        color #aaa
        margin-left 6px
        font-size 36px
        font-weight lighter
  .shop
    display flex
    position absolute
    top 100px
    bottom 100px
    width 100%
    background pink
    .menu-wrap
      width 80px
      background red
</style>

<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    />
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selectedId: 0, // 选中的id
      items: [
        { label: '热门' },
        { label: '服饰' },
        { label: '鞋包' },
        { label: '母婴' },
        { label: '百货' },
        { label: '食品' },
        { label: '内衣' },
        { label: '男装' },
        { label: '电器' },
        { label: '电器' },
        { label: '电器' },
        { label: '电器' }
      ],
      options: {
        activeColor: '#e9232c' // 设置选中的颜色
      },
      // 二级路由路径
      subRouteUrl: ['/home/hot', '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele']
    }
  },
  methods: {
    handleChange (item, index) {
      // console.log(item, index)
      this.$router.replace(this.subRouteUrl[index])
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .home
    background #f5f5f5
    width 100%
    height 100%
    .fix
      position fixed
      left 0
      top 0
      width 100%
      z-index 998
      .ly-tab-list
        padding: 16px 10px
        .ly-tab-item-label
          font-size 16px
</style>

<template>
  <div class="recommend-wrap" v-if="recommendshoplist.length > 0">
    <div>我是原数据{{szie}}</div>
    <div>computed数据{{reverSzie}}</div>
    <div>{{reverSzie1()}}</div>
    <ul class="recommend" >
      <list
        v-for="(item,index) in recommendshoplist"
        :item="item"
        :key="index"
        tag="li"
      >
        <template slot="button">
          <button class="item-button">找相关</button>
          <!-- // -->
        </template>
      </list>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
import List from 'components/List/List'
export default {
  data () {
    return {
      page: 1,
      count: 10,
      szie: 5016600
    }
  },
  mounted () {
    this.$store.dispatch('reqRecommendShopLis', {
      page: this.page,
      count: this.count
    }) // 请求推荐数据
    // console.log(this.$store.state.recommendshoplist)
  },
  methods: {
    _inintBScroll () {
      this.listScroll = new Bscroll('.recommend-wrap', {
        scrolly: true,
        click: true,
        probeType: 3
      })
      this.listScroll.on('touchEnd', (pos) => {
      // 监听上拉
        if (pos.y >= 50) {
          console.log('上拉加载')
        }
        console.log(pos.y)
        console.log(this.listScroll.maxScrollY)
        if (this.listScroll.maxScrollY > pos.y + 20) {
          console.log('下拉加载')
        }
        // 监听下拉
      })
    },
    reverSzie1 () {
      // `this` 指向 vm 实例
      return this.szie / 10000 + '万字'
    }
  },
  computed: {
    ...mapState(['recommendshoplist']),
    reverSzie () {
      // `this` 指向 vm 实例
      return this.szie / 10000 + '万字'
    }
  },
  watch: {
    recommendshoplist () {
      this.$nextTick(() => {
        this._inintBScroll() // 初始化Scroll
      })
    }
  },
  components: {
    List
  }
}
</script>
<style lang="stylus" scoped>
.recommend-wrap
  background #f5f5f5
  width 100%
  height 100%
  overflow hidden
  position absolute
  top 0
  left 0
  .recommend
    display flex
    flex-direction row
    flex-wrap wrap
    padding-bottom 100px
</style>

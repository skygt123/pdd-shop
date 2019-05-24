<template>
  <div class="search">
    <searNav :isShowSearchPanel ="isShowSearchPanel"></searNav>
    <searPanel v-if="isShow" :isShowSearchPanel ="isShowSearchPanel"></searPanel>
    <div class="shop">
      <cube-scroll-nav
        :side="true"
        :data="goodlist"
        v-if="goodlist.length"
        >
        <cube-scroll-nav-panel
          v-for="item in goodlist"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul class="shops-items">
            <li v-for="(food,index) in item.items" :key="index">
              <div>
                <img :src="food.icon">
                <p>{{food.title}}</p>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearNav from 'components/SearNav/SearNav'
import SearPanel from 'components/SearPanel/SearPanel'

export default {
  name: 'Search',
  data () {
    return {
      goodlist: [],
      isShow: false
    }
  },
  created () {
    // 请求搜索数据
    this.$store.dispatch('reqSearchGoods').then(() => {
      this.goodlist = this.searchgoods
      // this.current = this.searchgoods[0].name
      console.log(this.searchgoods)
    })
  },
  mounted () {

  },
  methods: {
    isShowSearchPanel (flag) {
      this.isShow = flag
    }
  },
  computed: {
    ...mapState({
      searchgoods: state => state.searchgoods
    })
  },
  components: {
    SearNav,
    SearPanel
  },
  watch: {

  }
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
.shop
  .cube-scroll-nav_side
    .cube-sticky
      .cube-scroll-wrapper
        // background red
        .cube-scroll-content
          // background orange
          .cube-scroll-list-wrapper
            // background green
            .cube-scroll-nav-main
              .cube-sticky
                .cube-scroll-nav-panels
                  // background red
                  .cube-scroll-nav-panel
                    // background orange
                    .cube-sticky-ele
                      .cube-sticky-content
                        .cube-scroll-nav-panel-title
                          background: #f3f5f7
                          font-size 14px
                          padding 5px 10px
        .cube-sticky-fixed
          .cube-sticky-content
            .cube-scroll-nav-panel-title
              background: #f3f5f7
              font-size 14px
              padding 5px 10px
      .cube-sticky-fixed
        .cube-scroll-nav-bar-items
          // font-size 30px
          // font-size 16px
          .cube-scroll-nav-bar-item
            // padding 15px
            // font-size 16px
            &.cube-scroll-nav-bar-item_active
              color red
        // .cube-scroll-content
        //   display flex
        // .cube-sticky-fixed
        //   background #eeeeee
        //   color red
        //   .cube-sticky-content
        //     .cube-scroll-nav-panel-title
        //       color red
</style>
<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width 100%
  height 30px
  background #f5f5f5
  .shop
    display flex
    position absolute
    top 50px
    bottom 55px
    width 100%
    background #ffffff
    .shops-items
      display flex
      flex-wrap wrap
      li
        display flex
        flex-direction column
        width 33.3%
        height 90px
        justify-content center
        align-items center
        font-size 14px
        color #666
        font-weight lighter
        text-align center
        img
          width 60%
          height 60%
          margin-bottom 10px
        .cube-sticky-fixed
          background red
          .cube-scroll-nav-bar-items
            .cube-scroll-nav-bar-item
              font-weight lighter
              color #666
              // font-size 30px
              // width 160px
              &.cube-scroll-nav-bar-item_active
                color red
          //     .cube-scroll-wrapper
          // .cube-sticky-content
          //   .cube-scroll-nav-panel-title
          //     background red
</style>

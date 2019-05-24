<template>
  <div class="recommend-wrap">
    <ul class="recommend" v-if="recommendshoplist.length > 0">
      <li class="recommend-item" v-for="(item,index) in recommendshoplist" :key="index">
        <img :src="item.thumb_url" alt="" width="100%" />
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
          <span class="item-price">￥{{item.price / 100}}</span>
          <span class="item-sales">{{item.sales_tip}}</span>
          <button class="item-button">找相关</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('reqRecommendShopLis') // 请求推荐数据
  },
  computed: {
    ...mapState(['recommendshoplist'])
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
.recommend-wrap
  background #f5f5f5
  width 100%
  height 100%
  .recommend
    display flex
    flex-direction row
    flex-wrap wrap
    margin-bottom 100px
    .recommend-item:nth-child(2n-1)
      margin-right 1%
    .recommend-item
      width 49.5%
      background #ffffff
      padding-bottom 30px
      margin-bottom 30px
      .item-title
        overflow hidden
        line-height 40px
        font-size 28px
        height 40px
        margin 10px
        font-weight lighter
      .item-bottom
        display flex
        flex-direction row
        align-items center
        padding 0 12px
        .item-price
          flex 2
          color red
          font-weight 600
          font-size 28px
        .item-sales
          flex 3
          font-size 20px
          color #666666
        .item-button
           flex 2
           font-size 24px
           border none
           background #ffffff
           color red
</style>

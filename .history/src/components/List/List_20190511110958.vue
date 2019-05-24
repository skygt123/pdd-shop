<template>
  <li class="recommend-item">
    <img :src="item.thumb_url" alt="" width="100%" />
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <span v-slot:button>
        <!-- <button class="item-button">找相关</button> -->
        找灌灌
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    default: {}
  },
  mounted () {
  },
  computed: {
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
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
        flex 4
        font-size 20px
        color #666666
        padding-left 5px
      .item-button
          flex 2
          font-size 22px
          background #ffffff
          color red
          border red 1PX solid
          height 40px
          line-height 40px
          border-radius 8px
</style>

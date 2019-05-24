<template>
  <li class="recommend-item">
    <img :src="item.thumb_url" alt="" width="100%" />
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <span class="item-user">
        <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" />
        <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" />
      </span>
      <!-- <span slot="button">
        <button class="item-button">找相关</button>
      </span>-->
    </div>
    <slot name="header"></slot>
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
      .item-user
        img
          width 55px
          border-radius 50%
          overflow hidden
        img:nth-child(2)
          margin-left -16px
</style>

<template>
  <li class="recommend-item">
    <!-- @click="clickCellItem(item.goods_id)" -->
    <img
      :src="item.thumb_url"
      alt=""
      width="186"
      height="186"
    />
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <!-- <slot name="user-img">
        <span class="item-user">
          <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" />
          <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" />
        </span>
      </slot> -->
      <slot name="button"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    default: {}
    // clickCellItem: {
    //   type: Function,
    //   default: () => { }
    // }
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
  padding-bottom 15px
  margin-bottom 15px
  .item-title
    overflow hidden
    line-height 20px
    font-size 14px
    height 20px
    margin 5px
    font-weight lighter
  .item-bottom
    display flex
    flex-direction row
    align-items center
    padding 0 6px
    .item-price
      flex 2
      color red
      font-weight 600
      font-size 14px
    .item-sales
      flex 4
      font-size 12px
      color #666666
      padding-left 5px
    .item-button
      flex 2
      font-size 12px
      background #ffffff
      color red
      border red 1PX solid
      height 20px
      line-height 20px
      border-radius 4px
    .item-user
      img
        width 25px
        border-radius 50%
        overflow hidden
      img:nth-child(2)
        margin-left -8px
</style>

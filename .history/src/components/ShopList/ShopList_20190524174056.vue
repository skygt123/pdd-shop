
<template>
  <div class="shop-container" v-if="lists">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(list,index) in lists" :key="index">
        <img width="100%" :src="list.image_url" />
        <h4 class="list-item-title">{{list.goods_name}}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{list.normal_price / 100}}</span>
          <span class="item-counter">{{list.sales_tip}}</span>
          <span class="item-user">
            <img v-for="(item, index) in list.bubble" :src="item.avatar" :key="index" alt="">
          </span>
          <span class="item-buy">
            <button data-v-0148b0eb="">去拼单 &gt;</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    lists: Array
  },
  mounted () {
    console.log(this.lists)
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.shop-container
  background #f5f5f5
  margin-bottom 55px
  .shop-list
    .shop-list-item
      display flex
      background #ffffff
      margin-bottom 10px
      flex-direction column
      .list-item-title
        line-height 22px
        width 94%
        margin-left 3%
        height 44px
        overflow hidden
        font-size 16px
      .list-item-bottom
        margin 10px 0
        display flex
        flex-direction row
        justify-content space-around
        align-items center
        .item-price
          font-size 18px
          text-align center
          font-weight 600
          color red
          flex 1
        .item-counter
          flex 2
          font-size 12px
          color #cccccc
        .item-user
          display flex
          justify-content center
          align-items center
          flex 1
          img
            width 30px
            border-radius 50%
          img:nth-child(2)
            margin-left -6px
        .item-buy
          flex 2
          button
            border 0
            width 80%
            height 34px
            color #fff
            display flex
            justify-content center
            align-items center
            margin-left 10px
            background-color red
            border-radius 8px
</style>

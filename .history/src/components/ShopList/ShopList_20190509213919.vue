
<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-list-item">
        <img width="100%" src="./../Children/imgs/shop_list/shop_item.png" />
        <h4 class="list-item-title">香朵儿运动服套装女2018春秋新款学生韩版宽松时尚休闲大码两件套</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥30.9</span>
          <span class="item-counter">已拼6万件</span>
          <span class="item-user">
            <img src="./../Children/imgs/shop_list/user1.jpg" alt="">
            <img src="./../Children/imgs/shop_list/user2.jpg" alt="">
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
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.shop-container
  background #f5f5f5
  margin-bottom 100px
  .shop-list
    .shop-list-item
      display flex
      background #ffffff
      margin-bottom 10PX
      flex-direction column
      .list-item-title
        line-height 44px
        width 94%
        margin-left 3%
        height 88px
        overflow hidden
        font-size 30px
      .list-item-bottom
        margin 10PX 0
        display flex
        flex-direction row
        justify-content space-around
        align-items center
        .item-price
          font-size 36px
          text-align center
          font-weight 600
          color red
          flex 1
        .item-counter
          flex 2
          font-size 24px
          color #cccccc
        .item-user
          display flex
          justify-content center
          align-items center
          flex 1
          img
            width 60px
            border-radius 50%
          img:nth-child(2)
            margin-left -12px

</style>

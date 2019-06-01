<template>
  <div
    class="shopdetail"
    v-if="goodInfo.goods_id"
  >
    <div class="content">
      <div class="shop-img"><img :src="goodInfo.hd_thumb_url" /></div>
      <div class="shop-top">
        <div class="shop-price">
          <span>￥<em>{{goodInfo.price / 100}}</em><del>￥{{goodInfo.market_price / 100}}</del></span>
          <div class="tip">退货包运费</div>
        </div>
        <span class="shop-count">{{goodInfo.sales_tip}}</span>
      </div>
      <div class="title">{{goodInfo.goods_name}}</div>
      <div class="coupon">
        <span class="full-btn">返现</span>
        <span class="c-txt">店铺内消费满75返5元</span>
      </div>
      <div class="get-coupon">
        <span class="full-btn">领券</span>
        <span class="g-h-coupon">满17元减1元</span>
        <span class="g-h-coupon">满35元减2元</span>
        <span class="g-h-coupon">满88元减3元</span>
      </div>
      <div class="fw">
        <span>极速退款</span>
        <span>全场包邮</span>
        <span>7天退换</span>
        <span>48小时发货</span>
      </div>
      <div class="coupan-number">
        <div class="title">
          6人在拼单，可直接参与
        </div>
        <ul class="coupan-user">
          <li>
            <div class="user-info">
              <img
                width="36"
                height="36"
                src="//t20img.yangkeduo.com/a/240b6013faaaa53ba8237ffc11f89f10a3b33568-1539420146?imageMogr2"
              >
              <span>紫雁</span>
            </div>
            <div class="coupan-info">
              <div class="local-person">
                <p>
                  还差<span class="local-group-num">1人</span>拼成
                </p>
                <div class="time">剩余22:43:55.1</div>
              </div>
              <div class="local-btn">去拼单</div>
            </div>
          </li>
          <li>
            <div class="user-info">
              <img
                width="36"
                height="36"
                src="//t20img.yangkeduo.com/a/240b6013faaaa53ba8237ffc11f89f10a3b33568-1539420146?imageMogr2"
              >
              <span>紫雁</span>
            </div>
            <div class="coupan-info">
              <div class="local-person">
                <p>
                  还差<span class="local-group-num">1人</span>拼成
                </p>
                <div class="time">剩余22:43:55.1</div>
              </div>
              <div class="local-btn">去拼单</div>
            </div>
          </li>
          <li>
            <div class="user-info">
              <img
                width="36"
                height="36"
                src="//t20img.yangkeduo.com/a/240b6013faaaa53ba8237ffc11f89f10a3b33568-1539420146?imageMogr2"
              >
              <span>紫雁</span>
            </div>
            <div class="coupan-info">
              <div class="local-person">
                <p>
                  还差<span class="local-group-num">1人</span>拼成
                </p>
                <div class="time">剩余22:43:55.1</div>
              </div>
              <div class="local-btn">去拼单</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <cube-popup
      type="my-popup"
      :position="position"
      :mask-closable="true"
      ref="myPopup4"
    >
      <div class="shop-buy-wrap">
        <div class="shop-buy-container">
          <div class="shop-buy-head">
            <div class="shop-buy-img">
              <img :src="goodInfo.hd_thumb_url">
            </div>
            <div class="shop-selector-content">
              <div class="shop-selector-price">￥29.79<span class="sku-quantity-tip"></span></div>
              <div class="shop-selector-desc">请选择 口味</div>
            </div>
          </div>
          <div class="shop-selector-type">
            <div class="shop-selector-tip">口味</div>
            <div class="shop-spec-value-list">
              <div class="shop-spec-value">麻辣</div>
              <div class="shop-spec-value">香辣（大众口味）</div>
              <div class="shop-spec-value">特辣（辣到过瘾）</div>
            </div>
          </div>
          <div class="shop-selector-number">
            <span class="tag">数量</span>
            <div class="shop-select-number">
              <div
                class="shop-selector-reduce "
                @click="selectReduce"
                :class="{ 'shop-select-disable' : shopNumber == 1}"
              >-</div>
              <input
                class="shop-selector-input"
                type="number"
                maxlength="5"
                value="1"
                v-model="shopNumber"
                @blur="judgeNumber()"
              >
              <div
                class="shop-selector-increase"
                @click="selectIncrease"
                :class="{ 'shop-select-disable' : shopNumber == maxShopNumber}"
              >+</div>
            </div>
          </div>
        </div>
        <div
          class="sku-selector-bottom"
          @click="addCart()"
        >确定</div>
      </div>
    </cube-popup>
    <div class="shop-tab-bar">
      <div class="operation">
        <span>更多</span>
        <span>搜藏</span>
        <span>客服</span>
      </div>
      <div
        class="alone"
        @click="showPopup"
      >
        <div class="price">￥{{goodInfo.normal_price / 100 }}</div>
        <div>单独购买</div>
      </div>
      <div
        class="spelllist"
        @click="showPopup"
      >
        <div class="price">￥{{goodInfo.price / 100 }}</div>
        <div>发起拼单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShopDetail } from 'api'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      goodInfo: {},
      position: 'bottom',
      shopNumber: 1,
      maxShopNumber: 1000
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      const toast = this.$createToast({
        txt: 'Loading...',
        mask: true
      })
      toast.show()
      const goodsId = this.$route.query.goodsId
      const result = await getShopDetail({ goods_id: goodsId })
      if (result.success_code === 200) {
        this.goodInfo = result.message[0]
        console.log(result.message[0])
        toast.hide()
      }
    },
    showPopup () {
      const component = this.$refs.myPopup4
      component.show()
      // setTimeout(() => {
      //   component.hide()
      // }, 2000)
    },
    selectReduce () {
      if (this.shopNumber <= 1) {
        this.shopNumber = 1
        return
      }
      this.shopNumber--
    },
    selectIncrease () {
      if (this.shopNumber >= this.maxShopNumber) {
        this.shopNumber = this.maxShopNumber
        return
      }
      this.shopNumber++
    },
    judgeNumber () {
      if (this.shopNumber > this.maxShopNumber) {
        this.toast = this.$createToast({
          txt: '本很抱歉，商品数量不超过' + this.maxShopNumber + '份',
          type: 'txt'
        })
        this.toast.show()
        this.shopNumber = this.maxShopNumber
      }
    },
    addCart () {
      // this.addCartShop() // 点击添加购物车
      // this.$store.commit('tocart', '我是数据')
      // this.addCartShop(this.goodInfo)
      console.log(this.goodInfo)
      this.addCartShop({
        shopInfo: this.goodInfo,
        shopNum: this.shopNumber
      })
    },
    ...mapActions({
      addCartShop: 'addCartShop'
    })
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.shopdetail
  width 100%
  height 100%
  background #f4f4f4
  .content
    padding-bottom 55px
    .shop-img
      width 100%
      height 375px
      img
        width 100%
        height 100%
    .shop-top
      padding 8px 10px
      display flex
      justify-content space-between
      background white
      .shop-price
        display flex
        flex 1
        color red
        align-items center
        span
          font-size 16px
          font-weight 700
          em
            font-size 28px
            font-style normal
            font-weight 700
          del
            color #58595b
            margin-left 5px
        .tip
          color white
          background #25b513
          font-size 12px
          margin-left 5px
          padding 3px 4px
          border-radius 3px
      .shop-count
        font-size 14px
        color #58595b
        line-height 28px
    .title
      margin 0 10px
      font-size 15px
      font-weight 600
      line-height 1.3
      background white
    .coupon, .get-coupon
      background white
      display flex
      align-items center
      padding 6px 10px
      .full-btn
        background-color #e02e24
        color #fff
        font-size 12px
        margin-right 10px
        padding 3px 4px
        border-radius 2px
      .c-txt
        color #58595b
        font-size 14px
        line-height 16px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .g-h-coupon
        color #58595b
        font-size 12px
        border 1px solid #e02e24
        color red
        padding 1px 3px
        margin-right 5px
        border-radius 2px
    .coupon
      padding-top 10px
    .get-coupon
      padding-bottom 10px
    .fw
      display flex
      background white
      padding 15px 10px
      font-size 14px
      color #58595b
      position relative
      border-top 1px solid #f2f2f2
      &:before
        content '>'
        position absolute
        top 15px
        right 10px
      span
        display flex
        margin-right 20px
        position relative
        &:before
          content '·'
          position absolute
          top 0
          right -10px
        &:last-child:before
          content ''
    .coupan-number
      color #151516
      margin-top 5px
      background white
      .title
        padding 10px
        position relative
        font-weight 400
        &:before
          content '查看更多 >'
          position absolute
          top 10px
          right 0
          color #9c9c9c
          font-size 14px
        &:after
          content ''
          position absolute
          left 0
          bottom 0
          width 375px
          left -10px
          border-bottom 1px solid #f2f2f2
      .coupan-user
        margin-bottom 5px
        li
          display flex
          align-items center
          justify-content space-between
          font-size 16px
          padding 15px 10px
          border-bottom 1px solid #f2f2f2
          .user-info
            display flex
            align-items center
            img
              width 36px
              height 36px
              border-radius 50%
            span
              margin-left 10px
          .coupan-info
            display flex
            align-items center
            font-size 14px
            .local-person
              text-align right
              p
                margin-bottom 3px
                .local-group-num
                  color red
            .local-btn
              background #e02e24
              color #ffffff
              padding 10px 15px
              border-radius 4px
              margin-left 10px
  .shop-buy-wrap
    display flex
    flex-direction column
    width 100%
    height 450px
    padding-top 30px
    .shop-buy-container
      height 100%
      background white
      .shop-buy-head
        display flex
        padding 0 15px
        border-bottom 1px solid #f2f2f2
        .shop-buy-img
          margin-top -27px
          img
            width 98px
            height 98px
            border-radius 4px
        .shop-selector-content
          font-size 14px
          padding 15px
          .shop-selector-price
            color red
            font-size 18px
            margin-bottom 5px
          .shop-selector-desc
            color #151516
      .shop-selector-type
        font-size 14px
        padding 0 15px
        border-bottom 1px solid #f2f2f2
        .shop-selector-tip
          padding 15px 0
        .shop-spec-value-list
          display flex
          flex-wrap wrap
          font-size 12px
          .shop-spec-value
            background-color #f5f5f5
            border-radius 4px
            padding 10px 10px
            margin-left 14px
            margin-bottom 15px
            &:first-child
              margin-left 0px
      .shop-selector-number
        display flex
        justify-content space-between
        font-size 14px
        padding 20px 15px
        border-bottom 1px solid #f2f2f2
        .tag
          display flex
          justify-content center
          align-items center
        .shop-select-number
          display flex
          justify-content center
          align-items center
          text-align center
          .shop-selector-reduce, .shop-selector-increase
            width 32px
            height 26px
            line-height 26px
            font-size 20px
            background #e0e0e0
            &.shop-select-disable
              background #f2f2f2
          .shop-selector-input
            text-align center
            width 36px
            height 26px
            line-height 26px
            outline none
    .sku-selector-bottom
      display flex
      align-items center
      justify-content center
      font-size 18px
      height 48px
      color #fff
      background-color #e02e24
  .shop-tab-bar
    position fixed
    bottom 0
    left 0
    width 100%
    background #ffffff
    height 55px
    z-index 1
    display flex
    justify-content space-around
    align-items center
    font-size 16px
    border-top 1px solid #eaeaea
    .operation
      display flex
      width 135px
      justify-content space-around
      align-items center
      span
        display flex
        height 55px
        align-items center
    .spelllist
      // flex 0 0 135px
      flex 1
      height 55px
      text-align center
      background #e02e24
    .alone
      flex 1
      height 55px
      text-align center
      background #f3aba7
      align-items center
    .spelllist, .alone
      color white
      .price
        display flex
        justify-content center
        padding 10px 0 3px 0
        align-items center
</style>

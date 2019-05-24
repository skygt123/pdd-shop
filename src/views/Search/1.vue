<template>
  <div class="goods">
    <!-- https://www.cnblogs.com/zhaobao1830/p/9978505.html -->
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        :side=true
        :data="goods"
        :options="scrollOptions"
        v-if="goods.length"
      >
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name"
        >
          <ul>
            <li
              v-for="food in good.foods"
              :key="food.name"
              class="food-item"
            >
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import goodsData from './goods-list.json'
const goods = goodsData.goods
export default {
  name: 'goods',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      goods: goods,
      selectedFood: {},
      scrollOptions: {
        click: false, // 会点击俩次，底层用的是scroll，所以设置click为false
        directionLockThreshold: 0
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goods
    position: relative
    text-align: left
    height: 100%
    .scroll-nav-wrapper
      position: absolute
      width: 100%
      top: 0
      left: 0
      bottom: 48PX
    >>> .cube-scroll-nav-bar
      width: 80PX
      white-space: normal
      overflow: hidden
    >>> .cube-scroll-nav-bar-item
      padding: 0 10PX
      display: flex
      align-items: center
      height: 56PX
      line-height: 14PX
      font-size: $fontsize-small
      background: $color-background-ssss
      .text
        flex: 1
        position: relative
      .num
        position: absolute
        right: -8PX
        top: -10PX
      .support-ico
        display: inline-block
        vertical-align: top
        margin-right: 4PX
    >>> .cube-scroll-nav-bar-item_active
      background: $color-white
      color: $color-dark-grey
    >>> .cube-scroll-nav-panel-title
      padding-left: 14PX
      height: 26PX
      line-height: 26PX
      border-left: 2PX solid $color-col-line
      font-size: $fontsize-small
      color: $color-grey
      background: $color-background-ssss
    .food-item
      display: flex
      margin: 18PX
      padding-bottom: 18PX
      position: relative
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57PX
        margin-right: 10PX
        img
          height: auto
      .content
        flex: 1
        .name
          margin: 2PX 0 8PX 0
          height: 14PX
          line-height: 14PX
          font-size: $fontsize-medium
          color: $color-dark-grey
        .desc, .extra
          line-height: 10PX
          font-size: $fontsize-small-s
          color: $color-light-grey
        .desc
          line-height: 12PX
          margin-bottom: 8PX
        .extra
          .count
            margin-right: 12PX
        .price
          font-weight: 700
          line-height: 24PX
          .now
            margin-right: 8PX
            font-size: $fontsize-medium
            color: $color-red
          .old
            text-decoration: line-through
            font-size: $fontsize-small-s
            color: $color-light-grey
      .cart-control-wrapper
        position: absolute
        right: 0
        bottom: 12PX
    .shop-cart-wrapper
      position: absolute
      left: 0
      bottom: 0
      z-index: 50
      width: 100%
      height: 48PX
</style>

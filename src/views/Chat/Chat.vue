<template>
  <!-- https://www.cnblogs.com/suRimn/p/10341102.html 购物车 +服务端例子 -->
  <div class="cart-wrap">
    <div
      class="cartTag"
      v-if="!cartArr.length"
    >
      <router-link to="/home/hot">购物车还是空的，去逛逛！</router-link>
    </div>
    <div
      class="main-content"
      :class="{'something': cartArr.length}"
    >
      <ul
        class="cartList"
        v-if="cartArr"
      >
        <li
          class="cart-item"
          v-for="(item,index) in cartArr"
          :key="index"
        >
          <!-- <div
          class="choose"
          :class="{checked: check_goods.indexOf(item.goods_id) >= 0}"
          @click="selectSingle(item,index)"
          :checked="check_goods.indexOf(item.goods_id)>=0"
        ></div> -->
          <!-- :class="{checked: item.checked}" -->
          <!-- :class="{checked: check_goods.indexOf(item.goods_id) >= 0}" -->
          <input
            type="checkbox"
            class="choose"
            :checked="check_goods.indexOf(item.goods_id)>=0"
            @change="selectSingle(item,index)"
          />
          <!-- v-model="check_goods" -->
          <!-- @click="select(dateil.detailId,dateil.detailProductprice,dateil.detailProductnum)"
          :value="dateil.detailId" -->
          <div class="cart-shop-img">
            <img
              width="90"
              height="90"
              :src="item.hd_url"
            >
          </div>
          <div class="cart-content">
            <div class="name">
              {{item.short_name}}
            </div>
            <div class="price">售价：{{ item.price/100 }}元</div>
            <div class="number">
              <div><button @click="changeNumber(item.goods_id,-1)">-</button> {{item.goods_number}} <button @click="changeNumber(item.goods_id,1)">+</button>
                <!-- <div><button @click="changeNumber(item.goods_id,-1)">-</button> {{item.goods_number}} <button @click="changeNumber(item.goods_id,1)">+</button> -->
              </div>
            </div>
          </div>
          <div
            class="remove"
            @click="removeCartShop(item.goods_id)"
          >删除</div>
        </li>
      </ul>
      <div class="recommend-title">———为你推荐———</div>
      <ul class="recommend">
        <list
          v-for="(item,index) in recommendshoplist"
          :item="item"
          :key="index"
          tag="li"
          @click.native="forGoodsDetail(item.goods_id)"
        >
          <!-- :clickCellItem="clickCellItemDetial" -->
          <template slot="button">
            <button class="item-button">找相关</button>
          </template>
        </list>
      </ul>
    </div>
    <div
      class="selector-bar"
      v-if="cartArr.length"
    >
      <div class="choose-left">
        <!-- <div
          class="choose"
          @click="checkedAll"
          :class="{'checked':this.cartArr.length === this.check_goods.length && this.cartArr.length}"
          :checked="this.cartArr.length === this.check_goods.length && this.cartArr.length"
        ></div> -->
        <input
          class="choose"
          type="checkbox"
          :checked="this.cartArr.length === this.check_goods.length && this.cartArr.length"
          @change="checkedAll"
        >
        全选
      </div>
      <div class="settlement">
        合计<span>
          ￥{{totalPrice / 100}}</span>
        <div class="settlement-btn">
          结算({{check_goods.length}})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import List from 'components/List/List'
export default {
  data () {
    return {
      page: 1,
      count: 6,
      isAllChecked: false,
      check_goods: [] // 已选择的商品,
    }
  },
  created () {
    // this.$store.dispatch('reqRecommendShopLis')
    this.$store.dispatch('reqRecommendShopLis', {
      page: this.page,
      count: this.count
    })
  },
  methods: {
    checkedAll () { // 全选
      // console.log(this.isAllChecked)
      this.isAllChecked = !this.isAllChecked
      if (event.currentTarget.checked) { // 全选
        this.check_goods = [] // 置空否则数组有重复
        this.cartArr.forEach((item, k) => {
          this.check_goods.push(item.goods_id)
        })
      } else { // 全不选
        this.check_goods = []
      }
      console.log(this.check_goods)
    },
    selectSingle (item, k) { // 单选
      console.log(event.currentTarget.checked)
      if (event.currentTarget.checked) {
        this.check_goods.push(this.cartArr[k].goods_id)
        console.log(this.isAllChecked)
        console.log(this.check_goods.length)
      } else {
        this.check_goods = this.check_goods.filter(item => {
          return item !== this.cartArr[k].goods_id
        })
      }
      console.log(this.check_goods)
    },
    changeNumber (id, val) {
      this.updateGoodsNumber({
        goods_id: id,
        index: val
      })
    },
    removeCartShop (goodsid) {
      this.removeCartGoods(goodsid)
    },
    forGoodsDetail (goodsId) {
      // console.log(goodsId)
      this.$router.push({
        path: '/shopdetail',
        query: {
          goodsId: goodsId
        }
      })
    },
    ...mapActions(['updateGoodsNumber', 'removeCartGoods'])
  },
  computed: {
    totalPrice () { // 计算总价
      let total = 0
      this.cartArr.forEach((v, k) => {
        if (this.check_goods.indexOf(v.goods_id) !== -1) {
          total += v.goods_number * v.price
        }
      })
      return total
    },
    ...mapState(['cartArr', 'recommendshoplist'])
  },
  components: {
    List
  }
}
</script>
<style lang="stylus" scoped>
.cart-wrap
  width 100%
  height 100%
  .cartTag
    text-align center
    padding 40px 0
  .main-content
    padding-bottom 55px
    &.something
      padding-bottom 110px
    .cartList
      .cart-item
        display flex
        background white
        align-items center
        padding 20px 0
        margin-bottom 10px
        .choose
          display flex
          width 20px
          height 20px
          flex 0 0 20px
          justify-content center
          border 1PX solid #ccc6c6
          border-radius 50%
          margin 0 5px
          &.checked
            background url('../../static/images/check_press.png') no-repeat
            background-size 100% 100%
        .cart-shop-img
          display flex
          height 90px
          flex 0 0 90px
          border 1px solid #eee
          border-radius 2px
          img
            width 100%
            height 100%
        .cart-content
          font-size 16px
          padding 0 10px
          width 200px
          .name
            color #666
            line-height 1.2
          .price
            font-size 12px
            color #999
            padding 4px 0
        .remove
          font-size 14px
          padding 0 5px
    .recommend-title
      text-align center
      padding 10px 0
      background white
      border-bottom 1px solid #eeeeee
      font-size 16px
    .recommend
      padding-top 10px
      background white
      width 100%
      display flex
      flex-direction row
      flex-wrap wrap
  .selector-bar
    position fixed
    bottom 55px
    display flex
    justify-content space-between
    // justify-content center
    align-items center
    width 100%
    height 45px
    background white
    border-top 1px solid #eeeeee
    .choose-left
      font-size 16px
      display flex
      align-items center
      justify-content center
      .choose
        width 25px
        height 25px
        border-radius 50%
        overflow hidden
        border 1PX solid #ccc6c6
        margin 0 5px
        &.checked
          background url('../../static/images/check_press.png') no-repeat
          background-size 100% 100%
    .settlement
      display flex
      font-size 14px
      align-items center
      justify-content center
      span
        font-size 16px
        color red
        margin 0 5px
      .settlement-btn
        background red
        color white
        height 30px
        display flex
        align-items center
        padding 0 15px
        border-radius 15px
        margin 0 5px
</style>

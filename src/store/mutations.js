import {
  HOME_CSUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_SHOP_INFO,
  CART_SHOP_UPDATE,
  CART_SHOP_REMOVE
} from './mutation-types'
export default {
  [HOME_CSUAL] (state, { homecasual }) {
    state.homecasual = homecasual
  },
  [HOME_NAV] (state, { homenav }) {
    state.homenav = homenav
  },
  [HOME_SHOP_LIST] (state, { homeshoplist }) {
    state.homeshoplist = homeshoplist
  },
  [RECOMMEND_SHOP_LIST] (state, { recommendshoplist }) {
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist)
  },
  [SEARCH_GOODS] (state, { searchgoods }) {
    state.searchgoods = searchgoods
  },
  [USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  // 设置vuex token
  settoken (state, loginType) {
    state.loginType = loginType
  },
  [CART_SHOP_INFO] (state, { cartInfo }) {
    let shopInfo = cartInfo.shopInfo // 获取传递商品信息
    let num = cartInfo.shopNum // 获取传递商品数量
    // console.log(shopInfo.goods_id)
    let goods = state.cartArr.find(v => v.goods_id === shopInfo.goods_id)
    if (goods) {
      goods.goods_number += num
    } else {
      state.cartArr.push({
        goods_id: shopInfo.goods_id,
        short_name: shopInfo.short_name,
        goods_number: num,
        price: shopInfo.price,
        hd_url: shopInfo.hd_url
      })
    }
    localStorage.setItem('cartArr', JSON.stringify(state.cartArr)) // 商品加入购物车存入本地
  },
  [CART_SHOP_UPDATE] (state, { cartshopnumber }) {
    let type = cartshopnumber.index
    let goods = state.cartArr.find(v => v.goods_id === cartshopnumber.goods_id)
    if (goods.goods_number <= 1 && type === -1) {
      // 商品类型为减且数量为1 不减少商品
      goods.goods_number = 1
      return
    }
    goods.goods_number += type
    localStorage.setItem('cartArr', JSON.stringify(state.cartArr)) // 更新商品数量存入本地
    // console.log(goods.goods_id, goods.goods_number)
  },
  [CART_SHOP_REMOVE] (state, { goodsid }) {
    // let newCatArr = state.cartArr.find(v => v.goods_id === goodsid)
    let newCatArr = state.cartArr.filter(item => item.goods_id !== goodsid)
    state.cartArr = newCatArr
    // console.log(newCatArr)
    localStorage.setItem('cartArr', JSON.stringify(state.cartArr)) // 删除商品之后存入本地
  }
}

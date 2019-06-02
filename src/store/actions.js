import {
  getHomeCasual,
  getHomeShopList,
  getHomeNav,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  getLogout
} from '../api'
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
  // 首页轮播数据homecasual
  async reqHomeCasual ({ commit }) {
    const result = await getHomeCasual()
    commit(HOME_CSUAL, { homecasual: result.message })
  },
  // 首页导航homenav
  async reqHomeNav ({ commit }) {
    const result = await getHomeNav()
    commit(HOME_NAV, { homenav: result.message })
  },
  // 首页商品列表数据homeshoplist
  async reqHomeShopList ({ commit }) {
    const result = await getHomeShopList()
    commit(HOME_SHOP_LIST, { homeshoplist: result.message.goods_list })
  },
  // 推荐商品数据recommendshoplist
  async reqRecommendShopLis ({ commit }, params) {
    console.log(params)
    const result = await getRecommendShopList(params)
    if (result.message.length === '') {
      return
    }
    // console.log(result.message)
    commit(RECOMMEND_SHOP_LIST, { recommendshoplist: result.message })
  },
  // 首页商品列表数据searchgoods
  async reqSearchGoods ({ commit }) {
    const result = await getSearchGoods()
    commit(SEARCH_GOODS, { searchgoods: result.message.data })
  },
  // 同步用户数据
  syncUserInfo ({ commit }, userInfo) {
    commit(USER_INFO, { userInfo: userInfo })
  },
  // 异步用户数据
  async getUserInfo ({ commit }, userInfo) {
    const result = await getUserInfo()
    // console.log(result)
    if (result.success_code === 200) {
      commit(USER_INFO, { userInfo: result.message })
      window.localStorage.setItem('loginType', 'true')
    } else {
      window.localStorage.setItem('loginType', '')
    }
  },
  // 退出登陆
  async logOut ({ commit }, userInfo) {
    const result = await getLogout()
    // console.log(result)
    if (result.success_code === 200) {
      commit(RESET_USER_INFO)
      window.localStorage.setItem('loginType', '')
    }
  },
  // 添加数据到购物车
  addCartShop ({ commit }, cartInfo) {
    // console.log(cartInfo)
    commit(CART_SHOP_INFO, { cartInfo: cartInfo })
  },
  updateGoodsNumber ({ commit }, cartshopnumber) {
    // 更新购物车商品
    commit(CART_SHOP_UPDATE, { cartshopnumber: cartshopnumber })
  },
  removeCartGoods ({ commit }, goodsid) {
    // 删除购物车商品
    commit(CART_SHOP_REMOVE, { goodsid: goodsid })
  }
}

import {
  getHomeCasual,
  getHomeShopList,
  getHomeNav,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo
} from '../api'
import {
  HOME_CSUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO
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
    console.log(result.message)
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
  // 同步用户数据
  async getUserInfo ({ commit }, userInfo) {
    const result = await getUserInfo()
    if (result.success_code === 200) {
      commit(USER_INFO, { userInfo: userInfo })
    }
  }
}

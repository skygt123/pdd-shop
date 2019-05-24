import {
  getHomeCasual,
  getHomeShopList,
  getHomeNav,
  getRecommendShopList,
  getSearchGoods
} from '../api'
import {
  HOME_CSUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS
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
  // 首页商品列表数据recommendshoplist
  async reqRecommendShopLis ({ commit }) {
    const result = await getRecommendShopList()
    commit(RECOMMEND_SHOP_LIST, { recommendshoplist: result.message })
  },
  // 首页商品列表数据searchgoods
  async reqSearchGoods ({ commit }) {
    const result = await getSearchGoods()
    commit(SEARCH_GOODS, { searchgoods: result.message.data() {
      return {
        
      }
    }, })
  }
}

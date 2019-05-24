import { getHomeCasual, getHomeShopList, getHomeNav } from '../api'
import { HOME_CSUAL, HOME_NAV, HOME_SHOP_LIST } from './mutation-types'
export default {
  // 首页轮播数据homecasual
  async reqHomeCasual ({ commit }) {
    const result = await getHomeCasual()
    commit(HOME_CSUAL, { homecasual: result.message.data })
  },
  // 首页导航homenav
  async reqHomeNav ({ commit }) {
    const result = await getHomeNav()
    commit(HOME_NAV, { homenav: result.message.data })
  },
  // 首页商品列表数据homeshoplist
  async reqHomeShopList ({ commit }) {
    const result = await getHomeShopList()
    commit(HOME_SHOP_LIST, { homeshoplist: result.message.goods_list })
  }
}

import { getHomeCasual, getHomeShopList } from '../api'
import { HOME_CSUAL, HOME_SHOP_LIST } from './mutation-types'
export default {
  // 首页轮播数据homecasual
  async reqHomeCasual ({ commit }) {
    const result = await getHomeCasual()
    commit(HOME_CSUAL, { homecasual: result.message.data })
  },
  // 首页商品列表数据homeshoplist
  async reqHomeShopList ({ commit }) {
    const result = await getHomeShopList()
    commit(HOME_SHOP_LIST, { homeshoplist: result.message.data })
  }
}

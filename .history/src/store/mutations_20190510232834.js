import { HOME_CSUAL, HOME_NAV, HOME_SHOP_LIST, RECOMMEND_SHOP_LIST } from './mutation-types'
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
    state.recommendshoplist = recommendshoplist
  }
}

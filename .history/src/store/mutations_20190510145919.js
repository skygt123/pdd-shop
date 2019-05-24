import { HOME_CSUAL, HOME_SHOP_LIST } from './mutation-types'
export default {
  [HOME_CSUAL] (state, { homecasual }) {
    state.homecasual = homecasual
  },
  [HOME_SHOP_LIST] (state, { homeshoplist }) {
    state.homeshoplist = homeshoplist
  }
}

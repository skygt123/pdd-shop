import { getHomeCasual } from '../api'
import HOME_CSUAL from './mutation-types'
export default {
  // 搜也轮播数据
  async reqHomeCasual ({ commit }) {
    const result = await getHomeCasual()
    commit(HOME_CSUAL, { homecasual: result.message.data })
  }
}

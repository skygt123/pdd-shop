import { getHomeCasual } from '../api'
export default {
  // 搜也轮播数据
  async reqHomeCasual ({ commit }) {
    const result = await getHomeCasual()
  }
}

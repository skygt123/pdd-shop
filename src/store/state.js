// 存储所有状态
export default {
  homecasual: [],
  homeshoplist: [],
  homenav: [],
  recommendshoplist: [],
  searchgoods: [],
  loginType: false,
  userInfo: {},
  cartarry: [],
  cartArr: JSON.parse(localStorage.getItem('cartArr')) || [] // 购物车商品
}

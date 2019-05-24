import fetch from './../axios/fetch'
// 基础路径
const BASE_URL = 'http://127.0.0.1:3000'

// 请求方法
// 首页轮播
export const getHomeCasual = () => fetch(BASE_URL + '/api/homecasual')
// 首页商品列表
export const getreqHomeShopList = () => fetch(BASE_URL + '/api/homeshoplist')
// 首页推荐商品列表
export const getreqRecommendShopList = () => fetch(BASE_URL + '/api/recommendshoplist')
// 推荐商品列表拼单用户/api/recommenduser
// 搜索分类列表 /api/searchgoods
//  一次性图形验证码 /api/captcha
// 发送验证码短信 /api/send_code
// 手机验证码登录 /api/login_code
// 用户名和密码登录 '/api/login_pwd'
// 根据session中的用户id获取用户信息 /api/user_info
// 退出登录 /api/logout
// 修改用户信息 /api/change_user_msg
// 添加商品到购物车 '/api/add_shop_cart'
// 查询购物车的商品 /api/cart_goods

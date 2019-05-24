import fetch from './../axios/fetch'
// 基础路径
const BASE_URL = 'http://127.0.0.1:3000'

// 请求方法
// 首页轮播
export const getHomeCasual = () => fetch(BASE_URL + '/api/homecasual')

// 首页轮播
export const getHomeNav = () => fetch(BASE_URL + '/api/homenav')

// 首页商品列表
export const getHomeShopList = () => fetch(BASE_URL + '/api/homeshoplist')

// 首页推荐商品列表
export const getRecommendShopList = () => fetch(BASE_URL + '/api/recommendshoplist')

// 推荐商品列表拼单用户/api/recommenduser
export const getRecommendUser = () => fetch(BASE_URL + '/api/recommenduser')

// 搜索分类列表 /api/searchgoods
export const getSearchGoods = (params) => fetch(BASE_URL + '/api/searchgoods')

//  一次性图形验证码 /api/captcha
export const getCaptcha = () => fetch(BASE_URL + '/api/captcha')

// 发送验证码短信 /api/send_code
export const getSendCode = () => fetch(BASE_URL + '/api/send_code')
// 手机验证码登录 /api/login_code
export const getLoginCode = () => fetch(BASE_URL + '/api/login_code')
// 用户名和密码登录 '/api/login_pwd'
export const getLoginPwd = () => fetch(BASE_URL + '/api/login_pwd')
// 根据session中的用户id获取用户信息 /api/user_info
export const getUserInfo = () => fetch(BASE_URL + '/api/user_info')
// 退出登录 /api/logout
export const getLogout = () => fetch(BASE_URL + '/api/logout')
// 修改用户信息 /api/change_user_msg
export const getChangeUserMsg = () => fetch(BASE_URL + '/api/change_user_msg')
// 添加商品到购物车 '/api/add_shop_cart'
export const getAddShopCart = () => fetch(BASE_URL + '/api/add_shop_cart')
// 查询购物车的商品 /api/cart_goods
export const getCartGoods = () => fetch(BASE_URL + '/api/cart_goods')

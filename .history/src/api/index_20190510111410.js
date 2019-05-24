import fetch from './../axios/fetch'
// 基础路径
const BASE_URL = 'http://127.0.0.1:3000'

// 请求方法
export const getHomeCasual = () => fetch(BASE_URL + '/api/homecasual')

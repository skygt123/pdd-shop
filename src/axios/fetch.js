import axios from 'axios'

export default function fetch (url = '', params = {}, type = 'GET') {
  // 定义promise对象
  let promise
  return new Promise((resolve, reject) => {
    // 判断请求方式
    if (type === 'GET') {
      // 2.1拼接请求字符串
      let paramsStr = ''
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&'
      })
      // 2.2过滤最后的&
      if (paramsStr !== '') {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
      }
      // 2.3拼接完整路径
      url += '?' + paramsStr
      // 2.4发送get请求
      promise = axios.get(url)
    } else if (type === 'POST') {
      promise = axios.post(url, params)
    }
    // 返回请求结果
    promise.then((response) => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

// import axios from 'axios'

export default function ajax (url = '', parms = {}, type = 'GET') {
  // 定义promise对象
  let promise
  return new Prpmise((resolve, reject) => {
    if (type === 'GET') {
      // 拼接请求字符串
      let parmsStr = ''
      Object.keys(parms).forEach(key => {
        parmsStr += key + '=' + parms[key] + '&'
      })
    } else if (type === 'POST') {
      console.log(1)
    }
  })
}

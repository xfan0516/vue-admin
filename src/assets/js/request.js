import axios from 'axios'
import router from '@/router'
import { Message, Loading } from 'element-ui'
// var baseUrl = '/backend_api'
var baseUrl = '/backend_api'
const http = axios.create({
  baseURL: baseUrl,
  timeout: 10000 * 30,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  // config.headers['token'] = localStorage.getItem('token') // Vue.cookie.get('token') // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  // var defaults = {
  //   't': new Date().getTime()
  // }
  return params //  openDefultParams ? merge(defaults, params) : params
}

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data && response.data.code === 600) { // 401, token失效
    router.push({
      name: 'login'
    })
  }
  return response
}, error => {
  return Promise.reject(error)
})
/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */

function getFormData (obj = {}) { // 参数序列化
  const formData = new FormData()
  Object.keys(obj).forEach(key => {
    formData.append(key, obj[key])
  })
  return formData
}

http.adornData = (data = {}, formData) => {
  data = formData ? getFormData(data) : data
  return data
}

function post (url, data, paramsForm = 'data', loading = true, adornData = true) {
  for (let i in data) {
    if (!data[i] && typeof data[i] !== 'number') {
      data[i] = ''
    }
  }
  let loadingFlag = null
  if (loading) {
    loadingFlag = Loading.service({ fullscreen: true })
  }
  const obj = {
    url: url,
    method: 'post'
  }
  obj[paramsForm] = http.adornData(data, adornData)
  return http(obj).then(res => {
    return new Promise((resolve, reject) => {
      if (res && res.data.success) {
        resolve(res.data)
      } else {
        reject(res)
        res.data.msg && Message({ type: 'error', message: res.data.msg })
      }
    })
  }).finally(() => {
    setTimeout(() => {
      loading && loadingFlag.close()
    }, 200)
  })
  // http
}

// 封装get请求
function get (url, data = {}, paramsForm = false) {
  for (let i in data) {
    if (!data[i] && typeof data[i] !== 'number') {
      data[i] = ''
    }
  }
  let loadingFlag = Loading.service({ fullscreen: true })
  return http({
    url: url,
    method: 'get',
    params: http.adornParams(data, paramsForm)
  }).then(res => {
    return new Promise((resolve, reject) => {
      loadingFlag.close()
      if (res && res.data.success) {
        resolve(res.data)
      } else {
        reject(res)
        res.data.msg && Message({ type: 'error', message: res.data.msg })
      }
    })
  }).finally(() => {
    setTimeout(() => {
      loadingFlag && loadingFlag.close()
    }, 200)
  })
}

function exportExcel (url, data, paramsForm = 'data', loading = true) {
  let loadingFlag = null
  if (loading) {
    loadingFlag = Loading.service({ fullscreen: true })
  }
  const obj = {
    url: url,
    method: 'post'
  }
  obj[paramsForm] = http.adornData(data, true)
  obj.responseType = 'blob'
  return http(obj).then(res => {
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  }).finally(() => {
    setTimeout(() => {
      loading && loadingFlag.close()
    }, 200)
  })
}

function getExportExcel (url, data = {}) {
  let loadingFlag = Loading.service({ fullscreen: true })
  return http({
    url: url,
    method: 'get',
    params: http.adornParams(data),
    responseType: 'blob'
  }).then(res => {
    return new Promise((resolve, reject) => {
      loadingFlag.close()
      resolve(res.data)
      // if (res && res.data.success) {
      // } else {
      //   reject(res)
      //   Message({ type: 'error', message: res.data.msg })
      // }
    })
  })
}
export {
  get,
  post,
  exportExcel,
  getExportExcel
}

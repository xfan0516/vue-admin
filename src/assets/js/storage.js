/**
 * v1.00 | 20190418
   License: none (public domain)
 */

export const lStorage = {

  /**
     * 读取缓存localStorage
     * @param {string} key
     * 判断获取的value是否是json字符串如果是就转成json，再返回
     * 否则直接返回value
     */
  get (key) {
    var value = localStorage.getItem(key)
    var val = ''
    if (value) {
      try {
        val = typeof JSON.parse(value) === 'object' ? JSON.parse(value) : value
      } catch (e) {
        val = value
      }
    }
    return val
  },
  /**
     * 设置缓存localStorage
     * @param {string} key
     * @param {string||object} value
     * 如果value是object就转换成字符串
     * 否则直接缓存value
     */
  set (key, value) {
    var val = typeof value === 'object' ? JSON.stringify(value) : value
    localStorage.setItem(key, val)
  },

  /**
     * 删除缓存localStorage
     * @param {string} key
     */
  remove (key) {
    localStorage.removeItem(key)
  },

  /**
     * 删除所有缓存localStorage
     */
  clear () {
    localStorage.clear()
  }
}

export const sStorage = {

  /**
     * 读取缓存sessionStorage
     * @param {string} key
     * 判断获取的value是否是json字符串如果是就转成json，再返回
     * 否则直接返回value
     */
  get (key) {
    var value = sessionStorage.getItem(key)
    var val = ''
    if (value) {
      try {
        val = typeof JSON.parse(value) === 'object' ? JSON.parse(value) : value
      } catch (e) {
        val = value
        console.log('error：' + value + '!!!' + e)
      }
    }
    return val
  },
  /**
     * 设置缓存sessionStorage
     * @param {string} key
     * @param {string||object} value
     * 如果value是object就转换成字符串
     * 否则直接缓存value
     */
  set (key, value) {
    var val = typeof value === 'object' ? JSON.stringify(value) : value
    sessionStorage.setItem(key, val)
  },

  /**
     * 清楚缓存sessionStorage
     * @param {string} key
     */
  clear (key) {
    sessionStorage.removeItem(key)
  }
}

/**
 * 读取cookie
 * @param {string} key
 */
export const getCookie = function getCookie (key) {
  const cookies = document.cookie.split(';')
  cookies.map((items) => {
    const item = items.split('=')
    if (key === item[0]) {
      return item[1]
    }
  })
}

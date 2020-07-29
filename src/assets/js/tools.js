export default {
  getFormData (obj) { // 参数序列化
    const formData = new FormData()
    Object.keys(obj).forEach(key => {
      formData.append(key, obj[key])
    })
    return formData
  }
}

import { get } from '@/assets/js/request.js'

const getMenu = data => get('/menu/list', data, true) // 资源管理列表
const api = {
  getMenu
}

export default api
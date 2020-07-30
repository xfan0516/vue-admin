import { Message } from 'element-ui'
const state = {
  tags: []
}

const getters = {}

const actions = {
  logout () {

  }
}

const mutations = {
  addTags: (state, value) => {
    const { title } = value.meta
    const currRoute = state.tags.filter(item => item.path.indexOf(value.path) !== -1)[0]
    if (title && !currRoute) {
      state.tags.push(value)
    }
  },
  closeTags: (state, payload) => {
    const tags = state.tags.filter(item => item.path !== payload.path)
    if (tags.length === 0 && payload.fromtags) {
      Message({ type: 'error', message: '至少保留一个标签' })
    } else {
      state.tags = tags
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

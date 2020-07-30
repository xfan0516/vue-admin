const state = {
  isCollapse: false
}

//   getters
const getters = {
  changeCollapse: state => state.isCollapse
}

// actions
const actions = {
  changeCollapse ({ commit, state }, isCollapse) {
    // console.log(commit, state, isCollapse)
    commit('changeCollapse')
  }

}

// mutations
const mutations = {
  changeCollapse: (state, value) => {
    state.isCollapse = value
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state';
// import mutations from './mutations';
// import actions from './actions';
import tagsView from './modules/tagsView.js'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    tagsView
  }
})

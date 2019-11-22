import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || null,
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      sessionStorage.setItem('token', data);
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      sessionStorage.removeItem('token');
      state.token = null;
    }
  },
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  modules: {
    //其他模块
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')).token : '',
    logFlag: localStorage.getItem('isLogin') ? true : false,
    roomFlag: localStorage.getItem('isLogin') ? true : false,
    userInfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')).userInfo : {},
    detail: {}
  },
  mutations: {
    setToken(state, info) {
      state.token = info.token
    },
    changeFlag(state) {
      state.logFlag = true
      state.roomFlag = true
      localStorage.setItem('isLogin', JSON.stringify({
        logFlag: state.logFlag,
        roomFlag: state.roomFlag
      }))
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    postGroupInfo(state, group) {
      return state.memberInfo[group]
    },
    saveDetail(state, info) {
      state.detail = info
      localStorage.setItem('detail',JSON.stringify(info))
    }
  },
  actions: {

  },
  getters: {

  }
})
import { login, logout, whoami } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  userType: 'admin', // gov, admin, ent
  userData: {},// 登录用户的所有数据
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, { username, userType }) => {
    state.userType = userType.toLowerCase()
    state.name = username
  },
  //  保存用户的所有信息
  SET_USER_DATA(state, data) {
    state.userData = data
  },
  RESET_USER_DATA(state, data) {
    state.userData = data
    state.userType = ''
    state.name = ''
    state.avatar = ''
  },
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password, userType } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password, userType: userType }).then(response => {
        const { content } = response
        commit('SET_TOKEN', content)
        setToken(content)
        resolve()
      }).catch((error) => { reject(error) })
    })
  },

  whoami({ commit}) {
    return new Promise((resolve, reject) => {
      whoami().then(response => {
        const { username, userType } = response
        commit('SET_USER_DATA', response)
        commit('SET_NAME', { username, userType })
        if (userType === 'ent' || userType === 'ENT') {
          commit("RESET_USER_DATA", {})
          removeToken()
          location.reload()
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('RESET_USER_DATA', [])
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

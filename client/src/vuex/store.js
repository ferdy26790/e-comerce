import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)

const state = {
  user: {
    name: null,
    email: null,
    role: null
  },
  isLogin: false,
  errEmail: '',
  errPassword: '',
  errName: ''
}

const mutations = {
  setLogin (state) {
    state.isLogin = true
  },
  setLogout (state) {
    state.isLogin = false
  },
  setDataUser (state, payload) {
    state.user.name = payload.name
    state.user.email = payload.email
    state.user.role = payload.role
  },
  setErrEmailNull (state) {
    state.errEmail = 'email harus diisi'
  },
  setErrNameNull (state) {
    state.errName = 'nama harus diisi'
  },
  setErrPasswordNull (state) {
    state.errPassword = 'password harus diisi'
  },
  setErrEmailDup (state) {
    state.errEmail = 'email sudah terdaftar'
  },
  setErrNameDup (state) {
    state.errName = 'nama sudah terpakai'
  },
  setErrEmailTaken (state) {
    state.errEmail = 'email tidak terdaftar'
  }
}

const actions = {
  register ({commit}, payload) {
    http.post('/register', {
      email: payload.email,
      password: payload.password,
      name: payload.name
    })
      .then((response) => {
        alert('registrasi sukses silahkan login')
        router.push('/')
      }).catch((err) => {
        if (err.response.data.msg === 'empty password') {
          commit('setErrPasswordNull')
        }
        if (err.response.data.msg === 'Path `name` is required.') {
          commit('setErrNameNull')
        }
        if (err.response.data.msg === 'Path `email` is required.') {
          commit('setErrEmailNull')
        }
        if (err.response.data.msg === ' email_1 dup key') {
          commit('setErrEmailDup')
        }
        if (err.response.data.msg === ' name_1 dup key') {
          commit('setErrNameDup')
        }
      })
  },
  login ({commit}, payload) {
    if (!payload.email) {
      commit('setErrEmailNull')
      return ''
    } else if (!payload.password) {
      commit('setErrPasswordNull')
      return ''
    }
    http.post('/login', {
      email: payload.email,
      password: payload.password
    })
      .then((result) => {
        if (result.status === 204) {
          commit('setErrEmailTaken')
        } else if (result.status === 200) {
          localStorage.setItem('token', result.data.token)
          commit('setLogin')
        }
      })
      .catch((err) => {
        alert(err.response.data.msg)
        console.error(err.response.data)
      })
  },
  logout ({commit}) {
    localStorage.removeItem('token')
    commit('setLogout')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

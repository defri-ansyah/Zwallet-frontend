import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlHistory: '',
    userDetail: {},
    history: [],
    user: {},
    idUser: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    userPhones: [],
    userList: [],
    say: 'halo'
  },
  mutations: {
    SET_USER_DETAIL (state, userDetail) {
      state.userDetail = userDetail
    },
    SET_HISTORY (state, history) {
      state.history = history
    },
    SET_URL_HISTORY (state, urlHistory) {
      state.urlHistory = urlHistory
    },
    SET_USER (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    SET_USER_PHONES (state, userPhones) {
      state.userPhones = userPhones
    },
    SET_USER_LIST (state, userList) {
      state.userList = userList
    }
  },
  actions: {
    loadUserDetail ({ commit }, idUser) {
      axios.get('http://localhost:4000/users/' + this.state.idUser)
        .then((res) => {
          commit('SET_USER_DETAIL', res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadHistory ({ commit }, payload) {
      const url = `http://localhost:4000/transactions/history?id=${this.state.idUser}&page=1`
      axios.get(url)
        .then((res) => {
          console.log(res.data.result)
          commit('SET_HISTORY', res.data)
          commit('SET_URL_HISTORY', url)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadHistoryPagination ({ commit }, url) {
      axios.get(url)
        .then((res) => {
          commit('SET_HISTORY', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios.post('http://localhost:4000/users/login', payload)
          .then((res) => {
            console.log('success')
            const result = res.data.result
            // context.state.user = res.data.result
            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.id)
            context.commit('SET_USER', result)
            context.dispatch('interceptorRequest')
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    signUp (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios.post('http://localhost:4000/users/signup', payload)
          .then((res) => {
            console.log('success')
            const result = res.data.result
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    cekEmail ({ commit }, payload) {
      axios
        .post('http://localhost:4000/users/forgot-password/request', payload).then((res) => {
          if (res.data.statusCode === 200) {
            const result = res.data.result
            localStorage.setItem('id', result[0].id)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    resetPassword (context, payload) {
      axios
        .patch('http://localhost:4000/users/forgot-password/new-password', payload).then((res) => {
          if (res.data.statusCode === 200) {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadUserPhones ({ commit }) {
      axios.get('http://localhost:4000/phone-number/' + this.state.idUser)
        .then((res) => {
          console.log(res.data.result)
          commit('SET_USER_PHONES', res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteUserPhones ({ commit }, phoneId) {
      axios.delete('http://localhost:4000/phone-number/' + phoneId)
        .then((res) => {
          const result = this.state.userPhones.filter((item) => {
            return item.id !== phoneId
          })
          commit('SET_USER_PHONES', result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadUserList ({ commit }, search) {
      const url = 'http://localhost:4000/users?search=' + search
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          commit('SET_USER_LIST', res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

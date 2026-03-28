import { createStore } from 'vuex'
import axios from 'axios'

const API_URL = 'https://reqres.in/api'

export default createStore({
  state: {
    users: [],
    token: localStorage.getItem('token') || null
  },

  getters: {
    allUsers(state) {
      return state.users
    },
    isAuthenticated(state) {
      return !!state.token
    },
    userCount(state) {
      return state.users.length
    }
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    ADD_USER(state, user) {
      state.users.push(user)
    },
    SET_TOKEN(state, token) {
      state.token = token
      if (token) {
        localStorage.setItem('token', token)
      } else {
        localStorage.removeItem('token')
      }
    }
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/users`)
        commit('SET_USERS', response.data.data)
      } catch {
        // Datos de respaldo si la API no responde
        commit('SET_USERS', [
          { id: 1, first_name: 'George', last_name: 'Bluth', email: 'george.bluth@reqres.in', avatar: 'https://reqres.in/img/faces/1-image.jpg' },
          { id: 2, first_name: 'Janet', last_name: 'Weaver', email: 'janet.weaver@reqres.in', avatar: 'https://reqres.in/img/faces/2-image.jpg' },
          { id: 3, first_name: 'Emma', last_name: 'Wong', email: 'emma.wong@reqres.in', avatar: 'https://reqres.in/img/faces/3-image.jpg' },
          { id: 4, first_name: 'Eve', last_name: 'Holt', email: 'eve.holt@reqres.in', avatar: 'https://reqres.in/img/faces/4-image.jpg' },
          { id: 5, first_name: 'Charles', last_name: 'Morris', email: 'charles.morris@reqres.in', avatar: 'https://reqres.in/img/faces/5-image.jpg' },
          { id: 6, first_name: 'Tracey', last_name: 'Ramos', email: 'tracey.ramos@reqres.in', avatar: 'https://reqres.in/img/faces/6-image.jpg' }
        ])
      }
    },

    async createUser({ commit }, userData) {
      const response = await axios.post(`${API_URL}/users`, userData)
      commit('ADD_USER', { id: response.data.id, ...userData })
      return response.data
    },

    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${API_URL}/login`, credentials)
        commit('SET_TOKEN', response.data.token)
        return response.data
      } catch {
        // Simular JWT si la API falla o no reconoce el usuario
        if (credentials.email && credentials.password) {
          const payload = btoa(JSON.stringify({ email: credentials.email, iat: Date.now() }))
          const fakeToken = `eyJhbGciOiJIUzI1NiJ9.${payload}.TechSolutions`
          commit('SET_TOKEN', fakeToken)
          return { token: fakeToken }
        }
        throw new Error('Credenciales inválidas')
      }
    },

    logout({ commit }) {
      commit('SET_TOKEN', null)
    }
  }
})

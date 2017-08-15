import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const initialState = {
  articles: [],
  article: ''
}

export default new Vuex.Store({
  state: {
    ...initialState
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setArticle (state, payload) {
      state.article = payload
    },
    pushArticle (state, payload) {
      state.articles.push(payload)
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      axios.get('http://localhost:3000/articles')
      .then(response => {
        commit('setArticles', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getOneArticle ({ commit }, id) {
      axios.get(`http://localhost:3000/articles/${id}`)
      .then(response => {
        commit('setArticle', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    postNewArticle ({ commit }, payload) {
      axios.post('http://localhost:3000/articles', {
        title: payload.title,
        content: payload.content,
        category: payload.category,
        author: payload.author
      })
      .then(response => {
        commit('pushArticle', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})

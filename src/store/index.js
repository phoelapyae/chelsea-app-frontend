import Vue from "vue";
import Vuex from "vuex";
import NewService from '@/services/NewService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    categories: []
  },
  mutations: {
    SET_TO_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_TO_NEWS(state, news) {
      state.news = news
    }
  },
  actions: {
    FETCH_CATEGORIES({commit}) {
      return NewService.getCategories()
        .then((res) => {
          commit('SET_TO_CATEGORIES', res.data.data)
        })
        .catch(error => {
          console.log(error.response);
        })
    },
    FETCH_NEWS({ commit }, category_id) {
      return NewService.getNews(category_id)
        .then((res) => {
          commit('SET_TO_NEWS', res.data.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  modules: {},
});

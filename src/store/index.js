import Vue from "vue";
import Vuex from "vuex";
import NewService from '@/services/NewService.js';
import MatchService from '@/services/MatchService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    categories: [],
    matchTypes: [],
    matches: []
  },
  mutations: {
    SET_TO_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_TO_NEWS(state, news) {
      state.news = news
    },
    SET_TO_MATCH_TYPES(state, matchTypes) {
      state.matchTypes = matchTypes
    },
    SET_TO_MATCHES(state, matches) {
      state.matches = matches
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
    },
    FETCH_MATCH_TYPES({ commit }) {
      return MatchService.getMatchTypes()
        .then((res) => {
          commit('SET_TO_MATCH_TYPES', res.data.data)
        })
        .catch(err => {
          console.log(err.response);
        })
    },
    FETCH_MATCHES({ commit }, match_type_id) {
      return MatchService.getMatches(match_type_id)
        .then((res) => {
          commit('SET_TO_MATCHES', res.data.data)
        })
        .catch(err => {
          console.log(err.response);
        })
    }
  },
  modules: {},
});

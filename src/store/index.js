import Vue from "vue";
import Vuex from "vuex";
import NewService from '@/services/NewService.js';
import MatchService from '@/services/MatchService.js';
import TeamService from "../services/TeamService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    categories: [],
    matchTypes: [],
    matches: [],
    leagueTables: [],
    workTypes: []
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
    },
    SET_TO_LEAGUE_TABLES(state, league_table) {
      state.leagueTables = league_table
    },
    SET_TO_WORK_TYPES(state, types) {
      state.workTypes = types
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
    },
    FETCH_LEAGUE_TABLES({ commit }) {
      return MatchService.getLeagueTables()
        .then((res) => {
          commit('SET_TO_LEAGUE_TABLES', res.data.data)
        })
        .catch(err => {
        console.log(err.response)
      })
    },
    FETCH_WORK_TYPES({ commit }) {
      return TeamService.getWorkTypes()
        .then((res) => {
        commit('SET_TO_WORK_TYPES', res.data.data)
        })
        .catch(err => {
        console.log(err.response);
      })
    }
  },
  modules: {},
});

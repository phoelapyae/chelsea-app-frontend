import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import NewService from "@/services/NewService.js";
import MatchService from "@/services/MatchService.js";
import TeamService from "../services/TeamService";
import PackageService from "../services/PackageService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    categories: [],
    matchTypes: [],
    matches: [],
    match: null,
    packages: [],
    pack: null,
    payments: [],
    carts: [],
    cart: null,
    orders: [],
    order: null,
    leagueTables: [],
    workTypes: [],
    user: null
  },
  mutations: {
    SET_TO_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_TO_NEWS(state, news) {
      state.news = news;
    },
    SET_TO_MATCH_TYPES(state, matchTypes) {
      state.matchTypes = matchTypes;
    },
    SET_TO_MATCHES(state, matches) {
      state.matches = matches;
    },
    SET_TO_MATCH(state, match) {
      state.match = match;
    },
    SET_TO_PACKAGES(state, packages) {
      state.packages = packages;
    },
    SET_TO_PACKAGE(state, pack) {
      state.pack = pack;
    },
    SET_TO_PAYMENTS(state, payments) {
      state.payments = payments;
    },
    SET_TO_CARTS(state, carts) {
      state.carts = carts;
    },
    SET_TO_CART(state, cart) {
      state.cart = cart;
    },
    SET_TO_ORDERS(state, orders) {
      state.orders = orders;
    },
    SET_TO_ORDER(state, order) {
      state.order = order;
    },
    SET_TO_LEAGUE_TABLES(state, league_table) {
      state.leagueTables = league_table;
    },
    SET_TO_WORK_TYPES(state, types) {
      state.workTypes = types;
    },
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${ userData.token }`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user')
      location.reload()
    },
    UPDATE_USER(state, user) {
      state.user.name = user.name
      state.user.dob = user.dob
      state.user.avatar = user.avatar
      state.user.email = user.email
    }
  },
  actions: {
    FETCH_CATEGORIES({ commit }) {
      return NewService.getCategories()
        .then((res) => {
          commit("SET_TO_CATEGORIES", res.data.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    FETCH_NEWS({ commit }, category_id) {
      return NewService.getNews(category_id)
        .then((res) => {
          commit("SET_TO_NEWS", res.data.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    FETCH_MATCH_TYPES({ commit }) {
      return MatchService.getMatchTypes()
        .then((res) => {
          commit("SET_TO_MATCH_TYPES", res.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    FETCH_MATCHES({ commit }, match_type_id) {
      return MatchService.getMatches(match_type_id)
        .then((res) => {
          commit("SET_TO_MATCHES", res.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    FETCH_PACKAGES({ commit }) {
      return PackageService.getPackages()
        .then((res) => {
          commit("SET_TO_PACKAGES", res.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    FETCH_LEAGUE_TABLES({ commit }) {
      return MatchService.getLeagueTables()
        .then((res) => {
          commit("SET_TO_LEAGUE_TABLES", res.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    FETCH_WORK_TYPES({ commit }) {
      return TeamService.getWorkTypes()
        .then((res) => {
          commit("SET_TO_WORK_TYPES", res.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    login({ commit }, credentials) {
       return axios.post('//localhost:8000/api/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    register({ commit }, credentials) {
       return axios.post('//localhost:8000/api/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    },
    UPDATE_PROFILE({ commit }, userData) {
      commit('UPDATE_USER', userData)
    },

  },
  modules: {},
  getters: {
    loggedIn(state) {
      // const user = localStorage.getItem('user');
      return !!state.user
    }
  }
});

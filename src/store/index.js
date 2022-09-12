import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "HAOKE_ZUFANG",
      reducer(state) {
        const { tokenObj } = state;
        return { tokenObj };
      },
    }),
  ],
  state: {
    tokenObj: {},
  },
  getters: {
    isDenglu(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.tokenObj = token;
    },
  },
});

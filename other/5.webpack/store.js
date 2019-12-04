import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  // 命名空间
  namespaced: true,
  state: {
    count: 0 // state.moduleName.count
  },
  getters: {
    totalCount(state, getters, rootState) {
      // getters['moduleName/totalCount']
      return state.count + rootState.count;
    }
  },
  mutations: {
    // commit['moduleName/increment']
    increment(state, n = 1) {
      state.count += n;
    }
  },
  actions: {
    // dispatch['moduleName/randomCount']
    randomCount({ state, commit, rootState }) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          const random = Math.random();
          if (random > 0.5) {
            commit("increment", random);
            res(random);
          } else {
            commit("decrease", random);
            rej(random);
          }
        }, 1000);
      });
    }
  }
};

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [1, 3, 5, 9, 11, 15, 20]
  },
  mutations: {
    increment(state, n = 1) {
      state.count += n;
    },
    decrease(state, n = 1) {
      state.count -= n;
    }
  },
  actions: {
    randomCount({ commit }) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          const random = Math.random();
          if (random > 0.5) {
            commit("increment", random);
            res(random);
          } else {
            commit("decrease", random);
            rej(random);
          }
        }, 1000);
      });
    }
  },
  getters: {
    smallList: state => {
      return state.list.filter(item => item < 10);
    }
  },
  modules: {
    a: moduleA
  }
});

export default store;

import { createStore } from 'vuex';
import Theme from '../enums/app.enum';

export default createStore({
  state: {
    theme: Theme.Dark,
  },
  mutations: {
    lightTheme(state) {
      state.theme = Theme.Light;
    },
    darkTheme(state) {
      state.theme = Theme.Dark;
    },
  },
  actions: {
    toggleTheme({ state, commit }) {
      switch (state.theme) {
        case Theme.Light:
          commit('darkTheme');
          break;
        case Theme.Dark:
          commit('lightTheme');
          break;
        default:
          commit('lightTheme');
          break;
      }
    },
  },
  modules: {
  },
});

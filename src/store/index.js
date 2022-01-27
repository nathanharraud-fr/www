import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import appModule from './modules/app';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ app: state.app }),
  filter: (mutation) => mutation.type === 'toggleTheme',
});

const store = createStore({
  modules: {
    app: appModule,
  },
  plugins: [vuexLocal.plugin],
});

export default store;

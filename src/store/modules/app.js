import Theme from '../../enums/app.enum';

const themeModule = {
  state: () => ({
    theme: Theme.Dark,
  }),
  mutations: {
    toggleTheme(state) {
      if (state.theme === Theme.Light) {
        state.theme = Theme.Dark;
      } else {
        state.theme = Theme.Light;
      }
    },
  },
};

export default themeModule;

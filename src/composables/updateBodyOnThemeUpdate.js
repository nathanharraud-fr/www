import { computed, watch } from 'vue';
import { useStore } from 'vuex';

/**
 * Watcher handler - Triggers on store.state.theme update
 * Update the body classes according to the theme parameters
 */
function onThemeUpdate(newValue, oldValue = undefined) {
  const $body = document.getElementsByTagName('body')[0];

  console.log(newValue, oldValue);

  $body.classList.add(`theme--${newValue}`);
  $body.classList.remove(`theme--${oldValue}`);
}

export default () => {
  const store = useStore();

  /* Watch theme value and update DOM */
  const theme = computed(() => store.state.app.theme);
  watch(theme, onThemeUpdate);

  onThemeUpdate(theme.value);
};

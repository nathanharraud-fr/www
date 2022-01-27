<script>
import updateBodyOnThemeUpdate from './composables/updateBodyOnThemeUpdate';

export default {
  setup() {
    updateBodyOnThemeUpdate();
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="$store.commit('toggleTheme')">Theme</button>
  </div>
  <router-view/>
</template>

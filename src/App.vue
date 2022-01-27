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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--body-color);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

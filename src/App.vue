<script>
import TheHeader from './components/TheHeader.vue';
import updateBodyOnThemeUpdate from './composables/updateBodyOnThemeUpdate';

export default {
  components: {
    TheHeader,
  },
  setup() {
    updateBodyOnThemeUpdate();
  },
};
</script>

<template>
  <TheHeader/>
  <router-view/>
</template>

<style lang="scss">
#app {
  text-align: center;
}
</style>

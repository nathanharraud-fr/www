<template>
  <header class="the-header">
      <nav class="navbar">
        <div class="navbar-brand">
          <!-- LOGO -->
          <router-link class="navbar-item" to="/">
            <img src="@/assets/logo-red_x250.png" width="64" />
          </router-link>

          <!-- BURGER -->
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/services">Services</router-link>
            <router-link class="navbar-item" to="/about">Contact</router-link>
          </div>

          <div class="navbar-end">
            <div class="buttons">
              <button @click="$store.commit('toggleTheme')">Theme</button>
            </div>
            <div class="navbar-item"></div>
          </div>
        </div>
      </nav>
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  --header-height: var(--header-height);

  background-color: var(--header-background-color);
}

.theme--dark .the-header {
  --header-color: var(--body-color);
  --header-background-color: var(--body-background-color);
  --header-dropdown-color: var(--body-background-color);
  --header-dropdown-background-color: #2c2121;
}

.navbar,
.navbar-end,
.navbar-menu,
.navbar-start {
  display: flex;
  align-items: center;
}

.navbar {
  align-items: stretch;
  display: flex;
  margin:auto;
  max-width: var(--body-max-width);
  min-height: var(--header-height);
  width: 100%;
}

.navbar-brand {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: inherit;
}

.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
}

.navbar-start {
  justify-content: flex-start;
  margin-right: auto;
}

.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
}

.navbar-link,
.navbar-item {
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
}

.navbar-link {
  padding-right: 2.5em;

  &::after {
    border-color: var(--primary);
    margin-top: -0.375em;
    right: 1.125em;
    border: 3px solid var(--primary);
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: "";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
  }
}

.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
  color: var(--body-color);
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}

a.navbar-item {
  font-weight: bold;
}

a.router-link-exact-active {
  color: var(--primary);
}
</style>

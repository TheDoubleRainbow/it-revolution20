<template>
  <header class="box header">
    <div class="header-wrap">
      <div class="header-content">
        <span class="app-name">TimeTracker</span>
        <div>
          <span class="welcome-message">Welcome, {{username}}</span>
          <span class="logoout-button" v-on:click="logout()">Logout</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Home',
  props: {
    username: String,
  },
  methods: {
    logout() {
      this.$emit('logout')
    }
  }
};
</script>

<style lang="scss" scoped>
  .header {
    border-radius: 0;
  }

  .header-wrap {
    max-width: 1170px;
    margin: 0 auto;
  }

  .header-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .app-name, .welcome-message, .logoout-button {
    font-weight: bold;
  }

  .logoout-button {
    color: blue;
    margin-left: 20px;
    cursor: pointer;
  }

  .app-name {
    font-size: 20px;
  }
</style>

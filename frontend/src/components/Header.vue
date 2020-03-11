<template>
  <header class="box header">
    <div class="header-wrap">
      <div class="header-content">
        <span class="app-name">TimeTracker</span>
        <span class="welcome-message">Welcome, {{username}}</span>
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

  .app-name, .welcome-message {
    font-weight: bold;
  }

  .app-name {
    font-size: 20px;
  }
</style>

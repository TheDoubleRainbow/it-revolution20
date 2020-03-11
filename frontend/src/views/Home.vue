<template>
  <div class="home">
    <Header :username = "username"></Header>

    <div class="home-container">
      <div class="activity">
        <div class="new-activity">
          <div class="block-title">Add new activity</div>
          <AddActivity />
        </div>
        <div class="activity-list">
          <div class="block-title">Today activities</div>
          <List />
        </div>
      </div>
      <div class="graph">
        <div class="block-title">Today activity satisfaction rate</div>
        <Graph />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import AddActivity from '../components/AddActivity.vue';
import Graph from '../components/Graph.vue';
import List from '../components/List.vue';

export default {
  name: 'Home',
  components: {
    Header,
    AddActivity,
    Graph,
    List,
  },
  data: () => ({
    username: 'Username',
  }),
};
</script>

<style lang="scss" scoped>
  .home-container {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
  }
</style>

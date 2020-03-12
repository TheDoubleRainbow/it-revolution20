<template>
  <div class="activity-list">
    <div class="activity box" v-for="el in list" v-bind:key="el.date">
      {{el.name}}
      {{el.duration}}
      {{el.date}}
      {{el.satisfation}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  computed: {
    list() {
      return this.$store.state.events;
    }
  },
  created() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<template>
  <div class="activity-list">
    Activity list
  </div>
</template>

<script>
export default {
  name: 'list',
  data: () => ({
    list: ''
  }),
  created() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<template>
  <div class="activity-list">
    <div class="activity box" v-for="el in list" v-bind:key="el.date">
      <div class="activity-wrap">
          <div>
            <div class="activity-name">{{el.name}}</div>
            <div class="activity_date-container">
              <div class="activity-date">{{el.date}}</div>
              <div class="activity-date">
                  {{(el.duration).toFixed(2)}} h
                </div>
            </div>
          </div>
        <div>
          <img :src="`@/assets/${el.satisfation}a.svg`" alt="">
          {{el.satisfation}}
        </div>
      </div>
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

<style lang="scss" scoped>
  .activity-name {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }

  .activity_date-container {
    display: flex;
  }


  .activity-date {
    color: #636363;
    font-size: 12px;
    padding-right: 20px;
  }

  .activity-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
